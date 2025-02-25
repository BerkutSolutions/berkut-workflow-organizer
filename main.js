const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs').promises;
const archiver = require('archiver');
const unzipper = require('unzipper');

let mainWindow;
let settings = {};
const userDataPath = app.getPath('userData');
const foldersFilePath = path.join(userDataPath, 'folders.json');
const notesFilePath = path.join(userDataPath, 'notes.json');
const projectsFilePath = path.join(userDataPath, 'projects.json');
const settingsFilePath = path.join(userDataPath, 'settings.json');

async function initializeFiles() {
    const files = [foldersFilePath, notesFilePath, projectsFilePath, settingsFilePath];
    for (const file of files) {
        try {
            await fs.access(file);
        } catch {
            await fs.writeFile(file, JSON.stringify([]));
        }
    }
}

app.on('before-quit', () => {
    console.log('Приложение завершает работу...');
});

app.on('will-quit', () => {
    console.log('Приложение завершено.');
});

app.on('ready', async () => {
    await initializeFiles();

    const backupDir = path.join(userDataPath, 'backup');
    try {
        await fs.access(backupDir);
    } catch {
        await fs.mkdir(backupDir, { recursive: true });
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

    await mainWindow.loadFile(path.join(__dirname, 'index.html'));
    Menu.setApplicationMenu(null);

    try {
        await fs.access(notesFilePath);
    } catch {
        await fs.writeFile(notesFilePath, JSON.stringify([]));
    }

    const filesToCheck = [notesFilePath, foldersFilePath];
    for (const file of filesToCheck) {
        try {
            await fs.access(file);
        } catch {
            await fs.writeFile(file, JSON.stringify([]));
        }
    }
});

ipcMain.handle('get-notes', async () => {
    try {
        const data = await fs.readFile(notesFilePath, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
});

ipcMain.handle('save-notes', async (event, notes) => {
    try {
        await fs.writeFile(notesFilePath, JSON.stringify(notes, null, 2));
        return notes;
    } catch (error) {
        console.error('Ошибка при сохранении заметок:', error);
        return null;
    }
});

ipcMain.handle('delete-note', async (event, index) => {
    const notes = JSON.parse(await fs.readFile(notesFilePath));
    notes.splice(index, 1);
    await fs.writeFile(notesFilePath, JSON.stringify(notes, null, 2));
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
    const defaultPath = path.join(app.getAppPath(), 'backup');
    try {
        await fs.access(defaultPath);
    } catch {
        await fs.mkdir(defaultPath, { recursive: true });
    }

    const result = await dialog.showOpenDialog({
        properties: ['openDirectory', 'createDirectory'],
        defaultPath: defaultPath
    });

    return result.filePaths[0];
});

ipcMain.handle('select-file', async (event, extensions) => {
    const result = await dialog.showOpenDialog({
        filters: [{ name: 'Backup Files', extensions }]
    });
    return result.filePaths[0];
});

ipcMain.handle('create-backup', async (event, folderPath) => {
    try {
        await fs.access(folderPath, fs.constants.W_OK);

        const backupData = {
            settings: JSON.parse(await fs.readFile(settingsFilePath, 'utf-8')),
            folders: JSON.parse(await fs.readFile(foldersFilePath, 'utf-8')),
            projects: JSON.parse(await fs.readFile(projectsFilePath, 'utf-8')),
            notes: JSON.parse(await fs.readFile(notesFilePath, 'utf-8'))
        };

        const backupFilePath = path.join(folderPath, `backup_${Date.now()}.bwo`);
        const output = require('fs').createWriteStream(backupFilePath);
        const archive = archiver('zip', { zlib: { level: 9 } });

        return new Promise((resolve, reject) => {
            output.on('close', () => resolve(backupFilePath));
            archive.on('error', (err) => reject(err));
            archive.pipe(output);
            archive.append(JSON.stringify(backupData.settings), { name: 'settings.json' });
            archive.append(JSON.stringify(backupData.folders), { name: 'folders.json' });
            archive.append(JSON.stringify(backupData.projects), { name: 'projects.json' });
            archive.append(JSON.stringify(backupData.notes), { name: 'notes.json' });
            archive.finalize();
        });
    } catch (error) {
        console.error('Backup error:', error);
        return null;
    }
});

ipcMain.handle('restore-backup', async (event, filePath) => {
    try {
        const backupDir = path.join(userDataPath, 'temp_restore');
        await fs.mkdir(backupDir, { recursive: true });

        await new Promise((resolve, reject) => {
            require('fs').createReadStream(filePath)
                .pipe(unzipper.Extract({ path: backupDir }))
                .on('close', resolve)
                .on('error', reject);
        });

        const filesToRestore = ['settings.json', 'folders.json', 'projects.json', 'notes.json'];
        for (const file of filesToRestore) {
            const srcPath = path.join(backupDir, file);
            const destPath = path.join(userDataPath, file);
            try {
                await fs.access(srcPath);
                await fs.copyFile(srcPath, destPath);
            } catch {}
        }

        await fs.rm(backupDir, { recursive: true, force: true });
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
    const projects = JSON.parse(await fs.readFile(projectsFilePath, 'utf-8'));
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
    try {
        await fs.access(projectsFilePath);
    } catch {
        await fs.writeFile(projectsFilePath, JSON.stringify([]));
    }
    return JSON.parse(await fs.readFile(projectsFilePath, 'utf-8'));
});

ipcMain.handle('save-projects', async (event, projects) => {
    try {
        await fs.writeFile(projectsFilePath, JSON.stringify(projects, null, 2));
        return projects;
    } catch (error) {
        console.error('Ошибка при сохранении проектов:', error);
        return null;
    }
});

ipcMain.on('save-settings', async (event, settings) => {
    await fs.writeFile(settingsFilePath, JSON.stringify(settings, null, 2));
});

ipcMain.on('restart-app', () => {
    mainWindow.close();
    app.relaunch();
    app.exit(0);
});

(async () => {
    try {
        await fs.access(settingsFilePath);
        settings = JSON.parse(await fs.readFile(settingsFilePath, 'utf-8'));
    } catch {
        settings = {
            theme: 'light',
            notifications: true,
            backupFolder: '',
            backupInterval: 'daily'
        };
        await fs.writeFile(settingsFilePath, JSON.stringify(settings, null, 2));
    }
})();

ipcMain.handle('get-settings', async () => {
    return settings;
});

ipcMain.handle('get-folders', async () => {
    try {
        const data = await fs.readFile(foldersFilePath, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
});

ipcMain.handle('save-folders', async (event, folders) => {
    try {
        await fs.writeFile(foldersFilePath, JSON.stringify(folders, null, 2));
        return folders;
    } catch (error) {
        console.error('Ошибка при сохранении папок:', error);
        return null;
    }
});

ipcMain.handle('get-default-backup-path', () => {
    return path.join(app.getAppPath(), 'backup');
});
