const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const { dialog } = require('electron')
const path = require('path');
const fs = require('fs');

let mainWindow;
let settings = {};
const userDataPath = app.getPath('userData');
const foldersFilePath = path.join(userDataPath, 'folders.json');
const notesFilePath = path.join(userDataPath, 'notes.json');
const projectsFilePath = path.join(userDataPath, 'projects.json');
const settingsFilePath = path.join(userDataPath, 'settings.json');

[foldersFilePath, notesFilePath, projectsFilePath, settingsFilePath].forEach(file => {
    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, JSON.stringify([]));
    }
});

app.on('before-quit', () => {
    console.log('Приложение завершает работу...');
});

app.on('will-quit', () => {
    console.log('Приложение завершено.');
});

app.on('ready', () => {
    const backupDir = path.join(userDataPath, 'backup');
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
    }
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        },
        frame: false, 
        titleBarStyle: 'hidden', 
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    Menu.setApplicationMenu(null);

    if (!fs.existsSync(notesFilePath)) {
        fs.writeFileSync(notesFilePath, JSON.stringify([])); 
    }
    
    [notesFilePath, foldersFilePath].forEach(file => {
        if (!fs.existsSync(file)) {
            fs.writeFileSync(file, JSON.stringify([]));
        }
    });
});

ipcMain.handle('get-notes', async () => {
    if (fs.existsSync(notesFilePath)) {
        const data = fs.readFileSync(notesFilePath, 'utf-8');
        return JSON.parse(data);
    }
    return [];
});

ipcMain.handle('save-notes', async (event, notes) => { 
    try {
        fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2));
        return notes;
    } catch (error) {
        console.error('Ошибка при сохранении заметок:', error);
        return null;
    }
});

ipcMain.handle('delete-note', async (event, index) => {
    const notes = JSON.parse(fs.readFileSync(notesFilePath));
    notes.splice(index, 1); 
    fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2)); 
    return notes; 
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});
ipcMain.on('window-close', () => {
    mainWindow.close();
});

ipcMain.on('window-minimize', () => {
    mainWindow.minimize();
});

ipcMain.on('window-maximize', () => {
    if (mainWindow.isMaximized()) {
        mainWindow.unmaximize();
    } else {
        mainWindow.maximize();
    }
});

ipcMain.handle('select-folder', async () => {
    const defaultPath = path.join(app.getAppPath(), 'backup')
    
    if (!fs.existsSync(defaultPath)) {
        fs.mkdirSync(defaultPath, { recursive: true })
    }

    const result = await dialog.showOpenDialog({
        properties: ['openDirectory', 'createDirectory'],
        defaultPath: defaultPath 
    })
    
    return result.filePaths[0]
})

ipcMain.handle('select-file', async (event, extensions) => {
    const result = await dialog.showOpenDialog({
        filters: [{ name: 'Backup Files', extensions }]
    });
    return result.filePaths[0];
});


ipcMain.handle('create-backup', async (event, folderPath) => {
    try {

        await fs.promises.access(folderPath, fs.constants.W_OK)
        
        const backupData = {
            settings: JSON.parse(fs.readFileSync(settingsFilePath, 'utf-8')),
            folders: JSON.parse(fs.readFileSync(foldersFilePath, 'utf-8')),
            projects: JSON.parse(fs.readFileSync(projectsFilePath, 'utf-8'))
        }

        const backupFilePath = path.join(folderPath, `backup_${Date.now()}.bwo`)
        fs.writeFileSync(backupFilePath, JSON.stringify(backupData))
        return backupFilePath
    } catch (error) {
        console.error('Backup error:', error)
        return null
    }
})

ipcMain.handle('restore-backup', async (event, filePath) => {
    try {
        const backupData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        
        fs.writeFileSync(settingsFilePath, JSON.stringify(backupData.settings, null, 2));
        fs.writeFileSync(foldersFilePath, JSON.stringify(backupData.folders, null, 2));
        fs.writeFileSync(projectsFilePath, JSON.stringify(backupData.projects, null, 2));
        
        return true;
    } catch (error) {
        console.error('Ошибка при восстановлении резервной копии:', error);
        return false;
    }
});

ipcMain.on('window-drag', (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win.setPosition(event.screenX, event.screenY);
});

ipcMain.handle('get-tasks', async () => {
    const projects = JSON.parse(fs.readFileSync(projectsFilePath, 'utf-8'));
    return projects.flatMap(p => p.tasks);
});

ipcMain.handle('save-tasks', async (event, tasks) => {
    const projects = await ipcRenderer.invoke('get-projects');

    projects.forEach(project => {
        project.tasks = tasks.filter(t => t.projectId === project.id);
    });
    await ipcRenderer.invoke('save-projects', projects);
});

ipcMain.handle('get-projects', async () => {
    if (!fs.existsSync(projectsFilePath)) {
        fs.writeFileSync(projectsFilePath, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(projectsFilePath, 'utf-8'));
});

ipcMain.handle('save-projects', async (event, projects) => {
    try {
        fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
        return projects;
    } catch (error) {
        console.error('Ошибка при сохранении проектов:', error);
        return null;
    }
});

ipcMain.on('save-settings', (event, settings) => {
    fs.writeFileSync(settingsFilePath, JSON.stringify(settings, null, 2));
});

ipcMain.on('restart-app', () => {
    mainWindow.close();
    app.relaunch();
    app.exit(0);
});

if (fs.existsSync(settingsFilePath)) {
    settings = JSON.parse(fs.readFileSync(settingsFilePath, 'utf-8'));
} else {
    settings = {
        theme: 'light',
        notifications: true,
        backupFolder: '',
        backupInterval: 'daily'
    };
    fs.writeFileSync(settingsFilePath, JSON.stringify(settings, null, 2));
}

ipcMain.handle('get-settings', async () => {
    return settings;
});

ipcMain.handle('get-folders', async () => {
    if (fs.existsSync(foldersFilePath)) {
        const data = fs.readFileSync(foldersFilePath, 'utf-8');
        return JSON.parse(data);
    }
    return [];
});

ipcMain.handle('save-folders', async (event, folders) => {
    try {
        fs.writeFileSync(foldersFilePath, JSON.stringify(folders, null, 2));
        return folders;
    } catch (error) {
        console.error('Ошибка при сохранении папок:', error);
        return null;
    }
});

ipcMain.handle('get-default-backup-path', () => {
    return path.join(app.getAppPath(), 'backup')
})

