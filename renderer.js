const { ipcRenderer } = require('electron');
const noteList = document.getElementById('note-list');
const noteEditor = document.getElementById('note-editor');
const addNoteButton = document.getElementById('add-note');
const saveNoteButton = document.getElementById('save-note');
const renameNoteButton = document.getElementById('rename-note');
const viewVersionsButton = document.getElementById('view-versions');
const mainButton = document.getElementById('main-button');
const settingsButton = document.getElementById('settings-button');
const closeModalButton = document.getElementById('close-modal');
const closeVersionsModalButton = document.getElementById('close-versions-modal');
const renameModal = document.getElementById('rename-modal');
const renameInput = document.getElementById('rename-input');
const renameConfirmButton = document.getElementById('rename-confirm');
const renameCancelButton = document.getElementById('rename-cancel');
const mainPanel = document.getElementById('main-panel');
const editorPanel = document.getElementById('editor');
const modal = document.getElementById('modal');
const versionsModal = document.getElementById('versions-modal');
const versionsList = document.getElementById('versions-list');
const alertModal = document.getElementById('alert-modal');
const alertMessage = document.getElementById('alert-message');
const closeAlertModalButton = document.getElementById('close-alert-modal');
const notesButton = document.getElementById('notes-button');
const notesPanel = document.getElementById('notes-panel');
const tasksButton = document.getElementById('tasks-button');
const calendarButton = document.getElementById('calendar-button');
const closeButton = document.querySelector('.window-control.close');
const minimizeButton = document.querySelector('.window-control.minimize');
const maximizeButton = document.querySelector('.window-control.maximize');
const backupFolderInput = document.getElementById('backup-folder');
const chooseBackupFolderButton = document.getElementById('choose-backup-folder');
const lastBackupText = document.getElementById('last-backup');
const createBackupButton = document.getElementById('create-backup');
const restoreBackupButton = document.getElementById('restore-backup');
const applyThemeButton = document.getElementById('apply-theme');
const themeSelect = document.getElementById('theme-select');
const saveStatus = document.querySelector('.save-status');
const calendarDays = document.getElementById('calendar-days');
const monthYear = document.getElementById('month-year');
const tasksMap = new Map(); 


let tasks = [];
let folders = []; 
let currentFolderIndex = null; 
let currentNoteIndex = null; 
let history = [];
let historyIndex = -1;
let versions = {};
let projects = [];
let currentProjectIndex = null;
let currentMonth = new Date().getMonth(); 
let currentYear = new Date().getFullYear(); 

document.addEventListener('DOMContentLoaded', () => {
    loadNotes();
    loadFolders();
    loadTasks();
    loadProjects();
    renderNotes(); 
    initCalendarControls();
    renderCalendar(currentMonth, currentYear);
    updateProjectFilter();
});

async function loadNotes() {
    notes = await ipcRenderer.invoke('get-notes'); 
    if (!Array.isArray(notes)) {
        notes = []; 
    }
    renderNotes(); 
    updateTiles(); 
}

async function loadFolders() {
    folders = await ipcRenderer.invoke('get-folders'); 
    if (!Array.isArray(folders)) {
        folders = []; 
    }
    renderFolders(); 
}

function renderFolders() {
    const folderView = document.getElementById('folder-view');
    folderView.innerHTML = '';
    folders.forEach((folder, index) => {
        const folderItem = document.createElement('div');
        folderItem.classList.add('file-item', 'folder-item'); 
        folderItem.innerHTML = `
            <div class="file-icon">
                <svg viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <path d="M51.48,15.46A4.52,4.52,0,0,1,56,20V51a4.52,4.52,0,0,1-4.52,4.52h-47A4.52,4.52,0,0,1,0,51H0V13A4.52,4.52,0,0,1,4.52,8.52H16c3.82,0,4.23,1.14,6.74,4.45,2.07,2.74,7.11,2.49,10.39,2.49Z" fill="#5c51a1"/>
                    <path d="M51.48,18.12H9.24a4.52,4.52,0,0,0-4.52,4.52v2.84L9.19,19H51.54L56,25.49V22.64A4.52,4.52,0,0,0,51.48,18.12Z" fill="#635c99"/>
                    <path d="M4.57,55.48H51.48A4.52,4.52,0,0,0,56,51V23.48A4.52,4.52,0,0,0,51.48,19H9.25a4.52,4.52,0,0,0-4.52,4.52V51a4.65,4.65,0,0,1-.06.72,2.33,2.33,0,0,1-4.6,0A4.5,4.5,0,0,0,4.57,55.48Z" fill="#8880bd"/>
                </svg>
            </div>
            <div class="file-name">${folder.name || `Папка ${index + 1}`}</div>
        `;

        folderItem.addEventListener('click', () => {
            openFolder(index);
        });

        folderItem.addEventListener('dblclick', () => {
            renameFolder(index);
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
            </svg>
        `;
        deleteButton.addEventListener('click', async (event) => {
            event.stopPropagation();
            folders.splice(index, 1);
            await saveFolders();
            renderFolders();

            if (currentFolderIndex === index) {
                currentFolderIndex = null;
                currentNoteIndex = null;
                document.getElementById('notes-in-folder').style.display = 'none';
                document.getElementById('folder-title').textContent = '[Название папки]';
                document.getElementById('editor').style.display = 'none';
                renderNotesInFolder([]);
            } else if (currentFolderIndex > index) {
                currentFolderIndex--;
            }
        });

        folderItem.appendChild(deleteButton);
        folderView.appendChild(folderItem);
    });
}

function openFolder(index) {
    currentFolderIndex = index;

    document.querySelectorAll('.folder-item').forEach(item => {
        item.classList.remove('active');
    });

    const folderItem = document.querySelectorAll('.folder-item')[index];
    if (folderItem) {
        folderItem.classList.add('active');
    }

    const notesInFolder = document.getElementById('notes-in-folder');
    notesInFolder.style.display = 'block';
    document.getElementById('folder-title').textContent = folders[index].name;
    renderNotesInFolder(folders[index].notes);
}

function renderNotesInFolder(notes) {
    const noteView = document.getElementById('note-view');
    noteView.innerHTML = '';
    notes.forEach((note, index) => {
        const noteItem = document.createElement('div');
        noteItem.classList.add('file-item', 'note-item');
        noteItem.innerHTML = `
            <div class="file-icon">
                <svg viewBox="-4 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <g fill-rule="evenodd">
                        <path d="m5.11 0a5.07 5.07 0 0 0 -5.11 5v53.88a5.07 5.07 0 0 0 5.11 5.12h45.78a5.07 5.07 0 0 0 5.11-5.12v-38.6l-18.94-20.28z" fill="#8880bd"/>
                        <path d="m56 20.35v1h-12.82s-6.31-1.26-6.13-6.71c0 0 .21 5.71 6 5.71z" fill="#635c99"/>
                        <path d="m37.07 0v14.56a5.78 5.78 0 0 0 6.11 5.79h12.82z" fill="#5c51a1" opacity=".5"/>
                    </g>
                    <path d="m14.24 53.86h-3a1.08 1.08 0 0 1 -1.08-1.08v-9.85a1.08 1.08 0 0 1 1.08-1.08h3a6 6 0 1 1 0 12zm0-10.67h-2.61v9.34h2.61a4.41 4.41 0 0 0 4.61-4.66 4.38 4.38 0 0 0 -4.61-4.68zm14.42 10.89a5.86 5.86 0 0 1 -6-6.21 6 6 0 1 1 11.92 0 5.87 5.87 0 0 1 -5.92 6.21zm0-11.09c-2.7 0-4.41 2.07-4.41 4.88s1.71 4.88 4.41 4.88 4.41-2.09 4.41-4.88-1.72-4.87-4.41-4.87zm18.45.38a.75.75 0 0 1 .2.52.71.71 0 0 1 -.7.72.64.64 0 0 1 -.51-.24 4.06 4.06 0 0 0 -3-1.38 4.61 4.61 0 0 0 -4.63 4.88 4.63 4.63 0 0 0 4.63 4.88 4 4 0 0 0 3-1.37.7.7 0 0 1 .51-.24.72.72 0 0 1 .7.74.78.78 0 0 1 -.2.51 5.33 5.33 0 0 1 -4 1.69 6.22 6.22 0 0 1 0-12.43 5.26 5.26 0 0 1 4 1.72z" fill="#ffffff"/>
                </svg>
            </div>
            <div class="file-name">${note.title || `Заметка ${index + 1}`}</div>
        `;

        noteItem.addEventListener('click', () => {
            openEditor(index);
        });

        noteItem.addEventListener('dblclick', () => {
            renameNote(index);
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
            </svg>
        `;
        deleteButton.addEventListener('click', async (event) => {
            event.stopPropagation();
            folders[currentFolderIndex].notes.splice(index, 1);
            await saveFolders();
            renderNotesInFolder(folders[currentFolderIndex].notes);
        });

        noteItem.appendChild(deleteButton);
        noteView.appendChild(noteItem);
    });
}

function openFolder(index) {
    currentFolderIndex = index;
    const notesInFolder = document.getElementById('notes-in-folder');
    notesInFolder.style.display = 'block';
    document.getElementById('folder-title').textContent = folders[index].name; 
    renderNotesInFolder(folders[index].notes);
}

function renameFolder(index) {
    const folderItem = document.querySelectorAll('.file-item')[index];
    const folderNameElement = folderItem.querySelector('.file-name');

    if (folderItem.classList.contains('folder-item')) {

        const input = document.createElement('input');
        input.type = 'text';
        input.value = folders[index].name || `Папка ${index + 1}`;
        input.classList.add('rename-input');

        folderNameElement.replaceWith(input);
        input.focus();

        input.addEventListener('keydown', async (event) => {
            if (event.key === 'Enter') {
                const newName = input.value.trim();
                if (newName) {
                    folders[index].name = newName;
                    await saveFolders();
                    renderFolders();
                }
            }
        });

        input.addEventListener('blur', async () => {
            const newName = input.value.trim();
            if (newName) {
                folders[index].name = newName;
                await saveFolders();
                renderFolders();
            }
        });
    }
}

function renameNote(index) {
    closeAllModals();
    if (currentFolderIndex === null) {
        showAlert('Сначала откройте папку.');
        return;
    }

    const noteItem = document.querySelectorAll('.note-item')[index]; 
    const noteNameElement = noteItem.querySelector('.file-name');

    const input = document.createElement('input');
    input.type = 'text';
    input.value = folders[currentFolderIndex].notes[index].title || `Заметка ${index + 1}`;
    input.classList.add('rename-input');

    noteNameElement.replaceWith(input);
    input.focus();
    input.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            const newName = input.value.trim();
            if (newName) {
                folders[currentFolderIndex].notes[index].title = newName;
                await saveFolders();
                renderNotesInFolder(folders[currentFolderIndex].notes);
            }
        }
    });

    input.addEventListener('blur', async () => {
        const newName = input.value.trim();
        if (newName) {
            folders[currentFolderIndex].notes[index].title = newName;
            await saveFolders();
            renderNotesInFolder(folders[currentFolderIndex].notes);
        }
    });
}

document.getElementById('add-folder').addEventListener('click', async () => {
    const newFolder = { name: `Папка ${folders.length + 1}`, notes: [] };
    folders.push(newFolder); 
    await saveFolders();
    renderFolders(); 
});

document.getElementById('add-note').addEventListener('click', async () => {
    if (currentFolderIndex !== null) {
        const newNote = { title: `Заметка ${folders[currentFolderIndex].notes.length + 1}`, content: '' };
        folders[currentFolderIndex].notes.push(newNote); 
        await saveFolders();
        renderNotesInFolder(folders[currentFolderIndex].notes); 
    } else {
        showAlert('Сначала откройте папку для добавления заметки.');
    }
});

async function saveFolders() {
    try {
        await ipcRenderer.invoke('save-folders', folders);
    } catch (error) {
        console.error('Ошибка при сохранении папок и заметок:', error);
    }
}

async function saveTitle(index, newTitle) {
    if (newTitle.trim()) {
        notes[index].title = newTitle.trim();
        await saveNotes(); 
        updateTiles();
    }
}

saveNoteButton.addEventListener('click', async () => {
closeAllModals();

    if (currentFolderIndex !== null && currentNoteIndex !== null) {
        const content = noteEditor.value;
        const timestamp = Date.now();

        if (!versions[currentNoteIndex]) {
            versions[currentNoteIndex] = [];
        }
        versions[currentNoteIndex].push({ timestamp, content });

        if (versions[currentNoteIndex].length > 3) {
            versions[currentNoteIndex].shift();
        }

        folders[currentFolderIndex].notes[currentNoteIndex].content = content;
        await saveFolders(); 
        showAlert('Изменения сохранены!');
        updateTiles();
    } else {
        showAlert('Сначала откройте заметку для редактирования.');
    }
});

renameNoteButton.addEventListener('click', () => {
    closeAllModals(); 
    if (currentNoteIndex !== null) {
        renameInput.value = notes[currentNoteIndex].title || '';
        renameModal.classList.add('active');
    }
});

renameConfirmButton.addEventListener('click', async () => {
    if (currentNoteIndex !== null) {
        const newTitle = renameInput.value.trim();
        if (newTitle) {
            notes[currentNoteIndex].title = newTitle;
            await saveNotes(); 
            updateTiles();
            renameModal.classList.remove('active');
        }
    }
});

renameCancelButton.addEventListener('click', () => {
    renameModal.classList.remove('active');
});

viewVersionsButton.addEventListener('click', () => {
    closeAllModals();

    if (currentNoteIndex !== null && versions[currentNoteIndex]) {
        versionsList.innerHTML = ''; 
        versions[currentNoteIndex].forEach((version, index) => {
            const versionItem = document.createElement('div');
            versionItem.classList.add('version-item');
            versionItem.innerHTML = `
                <p>${version.content}</p>
                <small>Версия от ${new Date(version.timestamp).toLocaleString()}</small>
            `;
            versionsList.appendChild(versionItem);
        });
        versionsModal.classList.add('active');
    } else {
        showAlert('Нет доступных версий для этой заметки.');
    }
});

closeVersionsModalButton.addEventListener('click', () => {
    versionsModal.classList.remove('active');
});

function openEditor(index) {
    if (currentFolderIndex === null) {
        showAlert('Сначала откройте папку.');
        return;
    }

    currentNoteIndex = index;

    document.querySelectorAll('.note-item').forEach(item => {
        item.classList.remove('active');
    });

    const noteItem = document.querySelectorAll('.note-item')[index];
    if (noteItem) {
        noteItem.classList.add('active');
    }

    const note = folders[currentFolderIndex].notes[index];
    noteEditor.value = note.content || '';
    mainPanel.style.display = 'none';
    editorPanel.style.display = 'flex';
    history = [note.content || ''];
    historyIndex = 0;
}

addNoteButton.addEventListener('click', async () => {
    const newNote = { title: `Заметка ${notes.length + 1}`, content: '' };
    notes.push(newNote); 
    await saveNotes(); 
    currentNoteIndex = notes.length - 1;
    noteEditor.value = ''; 
    updateTiles(); 
});

async function saveNotes() {
    await ipcRenderer.invoke('save-notes', notes); 
}

settingsButton.addEventListener('click', () => {
    modal.classList.add('active');
});

closeModalButton.addEventListener('click', () => {
    modal.classList.remove('active');
});

noteEditor.addEventListener('input', () => {
    if (!saveStatus.classList.contains('unsaved')) {
        saveStatus.textContent = "Не сохранено";
        saveStatus.classList.add('unsaved');
        saveStatus.classList.remove('saved');
    }
});

function showAlert(message) {
    alertMessage.textContent = message;
    alertModal.classList.add('active');
}

closeAlertModalButton.addEventListener('click', () => {
    alertModal.classList.remove('active');
});


mainButton.addEventListener('click', () => {
    closeAllModals();
    mainPanel.style.display = 'block';
    notesPanel.style.display = 'none';
    document.getElementById('tasks-panel').style.display = 'none'; 
    document.getElementById('calendar-panel').style.display = 'none';
    editorPanel.style.display = 'none';
});

notesButton.addEventListener('click', () => {
    closeAllModals();
    mainPanel.style.display = 'none';
    notesPanel.style.display = 'block';
    document.getElementById('tasks-panel').style.display = 'none'; 
    document.getElementById('calendar-panel').style.display = 'none';
    editorPanel.style.display = 'none';
});

tasksButton.addEventListener('click', () => {
    closeAllModals();
    mainPanel.style.display = 'none';
    notesPanel.style.display = 'none';
    document.getElementById('tasks-panel').style.display = 'block';
    document.getElementById('calendar-panel').style.display = 'none';
    editorPanel.style.display = 'none';
    renderTasks();
});

calendarButton.addEventListener('click', () => {
    closeAllModals();
    mainPanel.style.display = 'none';
    notesPanel.style.display = 'none';
    document.getElementById('tasks-panel').style.display = 'none';
    editorPanel.style.display = 'none';
    const calendarPanel = document.getElementById('calendar-panel');
    calendarPanel.style.display = 'block';

    initCalendar(); 
    loadCalendarTasks();
    renderCalendar(currentMonth, currentYear);

    calendarPanel.style.opacity = '0';
    setTimeout(() => {
        calendarPanel.style.opacity = '1';
        calendarPanel.style.transform = 'translateY(0)';
    }, 10);
});

closeButton.addEventListener('click', () => {
    ipcRenderer.send('window-close');
});

minimizeButton.addEventListener('click', () => {
    ipcRenderer.send('window-minimize');
});

maximizeButton.addEventListener('click', () => {
    ipcRenderer.send('window-maximize');
});

chooseBackupFolderButton.addEventListener('click', async () => {
    const folderPath = await ipcRenderer.invoke('select-folder')
    if (folderPath) {
        backupFolderInput.value = folderPath
        localStorage.setItem('backupFolder', folderPath)
    }
})

createBackupButton.addEventListener('click', async () => {
    const backupFolder = backupFolderInput.value;
    if (!backupFolder) {
        showAlert('Выберите папку для резервного копирования.');
        return;
    }

    const backupFilePath = await ipcRenderer.invoke('create-backup', backupFolder);
    if (backupFilePath) {
        lastBackupText.textContent = `Последняя копия: ${new Date().toLocaleString()}`;
        showAlert('Резервная копия успешно создана!');
    } else {
        showAlert('Ошибка при создании резервной копии.');
    }
});

restoreBackupButton.addEventListener('click', async () => {
    const backupFilePath = await ipcRenderer.invoke('select-file', ['bwo']);
    if (backupFilePath) {
        const success = await ipcRenderer.invoke('restore-backup', backupFilePath);
        if (success) {
            showAlert('Резервная копия успешно восстановлена!');
            setTimeout(() => location.reload(), 1000);
        } else {
            showAlert('Ошибка при восстановлении резервной копии.');
        }
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const savedBackupFolder = localStorage.getItem('backupFolder');
    if (savedBackupFolder) {
        backupFolderInput.value = savedBackupFolder;
    }
});

async function loadTasks() {
    tasks = await ipcRenderer.invoke('get-tasks');
    if (!Array.isArray(tasks)) {
        tasks = [];
    }
    renderTasks();
}

function renderTasks() {
    const todoTasks = document.getElementById('todo-tasks');
    const inProgressTasks = document.getElementById('in-progress-tasks');
    const doneTasks = document.getElementById('done-tasks');

    if (todoTasks) {
        todoTasks.innerHTML = '';
    } else {
        console.error("Элемент 'todo-tasks' не найден в DOM!");
    }
    inProgressTasks.innerHTML = '';
    doneTasks.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <small>Срок: ${task.dueDate}</small>
            <button class="delete-task">Удалить</button>
        `;

        taskItem.addEventListener('click', () => {
            openTaskEditor(task);
        });

        if (task.priority === 'low') {
            taskElement.classList.add('priority-low');
        } else if (task.priority === 'medium') {
            taskElement.classList.add('priority-medium');
        } else if (task.priority === 'high') {
            taskElement.classList.add('priority-high');
        }

        if (task.status === 'todo') {
            todoTasks.appendChild(taskItem);
        } else if (task.status === 'in-progress') {
            inProgressTasks.appendChild(taskItem);
        } else if (task.status === 'done') {
            doneTasks.appendChild(taskItem);
        }
    });
}

function openTaskEditor(task, isEditMode = false) {
    closeAllModals();
    const modal = document.createElement('div');
    modal.className = 'task-editor-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>${isEditMode ? 'Редактирование' : 'Просмотр'} задачи</h3>
            <div class="form-row">
                <label>Название:</label>
                <textarea id="edit-task-title" class="task-title-input">${task.title}</textarea>
            </div>
            <div class="form-row">
                <label>Описание:</label>
                <textarea id="edit-task-description">${task.description}</textarea>
            </div>
            <div class="form-row columns">
                <div class="col">
                    <label>Дата начала:</label>
                    <input type="date" id="edit-start-date" value="${task.startDate}">
                </div>
                <div class="col">
                    <label>Дата окончания:</label>
                    <input type="date" id="edit-end-date" value="${task.endDate}">
                </div>
            </div>
            <div class="form-row columns">
                <div class="col">
                    <label>Приоритет:</label>
                    <select id="edit-task-priority">
                        <option value="low" ${task.priority === 'low' ? 'selected' : ''}>Низкий</option>
                        <option value="medium" ${task.priority === 'medium' ? 'selected' : ''}>Средний</option>
                        <option value="high" ${task.priority === 'high' ? 'selected' : ''}>Высокий</option>
                    </select>
                </div>
                <div class="col">
                    <label>Этап:</label>
                    <select id="edit-task-status">
                        <option value="todo" ${task.status === 'todo' ? 'selected' : ''}>К выполнению</option>
                        <option value="in-progress" ${task.status === 'in-progress' ? 'selected' : ''}>В процессе</option>
                        <option value="done" ${task.status === 'done' ? 'selected' : ''}>Выполнено</option>
                    </select>
                </div>
            </div>
            <div class="modal-buttons">
                ${isEditMode ? `<button class="save-changes">Сохранить</button>` : ''}
                <button class="close-modal">Закрыть</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    if (isEditMode) {
        modal.querySelector('.save-changes').addEventListener('click', async () => {
            task.title = modal.querySelector('#edit-task-title').value;
            task.description = modal.querySelector('#edit-task-description').value;
            task.startDate = modal.querySelector('#edit-start-date').value;
            task.endDate = modal.querySelector('#edit-end-date').value;
            task.priority = modal.querySelector('#edit-task-priority').value;
            task.status = modal.querySelector('#edit-task-status').value;

            await saveProjects();
            renderTasksInProject(projects[currentProjectIndex].tasks);
            modal.remove();
        });
    }

    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
}

document.getElementById('save-task').addEventListener('click', async () => {
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const startDate = document.getElementById('task-start-date').value;
    const endDate = document.getElementById('task-end-date').value;
    const priority = document.getElementById('task-priority').value;
    const status = document.getElementById('task-status').value;

    if (!title) {
        showAlert('Название задачи обязательно');
        return;
    }

    const newTask = {
        id: Date.now(),
        title,
        description,
        startDate,
        endDate,
        priority,
        status
    };

    if (currentProjectIndex !== null) {
        projects[currentProjectIndex].tasks.push(newTask);
        await saveProjects();
        renderTasksInProject(projects[currentProjectIndex].tasks); 
    } else {
        tasks.push(newTask);
        await saveTasks();
        renderTasks();
    }

    document.getElementById('task-form').reset();
    document.getElementById('task-form-frame').style.display = 'none';
    updateTiles();
});

document.getElementById('cancel-task').addEventListener('click', () => {
    document.getElementById('task-form-frame').style.display = 'none';
    document.getElementById('task-form').reset();
});


async function saveTasks() {
    await ipcRenderer.invoke('save-tasks', tasks);
}

async function loadTasks() {
    tasks = await ipcRenderer.invoke('get-tasks');
    if (!Array.isArray(tasks)) {
        tasks = [];
    }
    renderTasks();
}

document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete-task')) {
        const taskId = event.target.closest('.task-item').dataset.id;
        tasks = tasks.filter(task => task.id !== taskId);
        await saveTasks();
        renderTasks();
        await saveProjects();
        updateTiles();
    }
});
document.getElementById('tasks-button').addEventListener('click', () => {
    document.getElementById('main-panel').style.display = 'none';
    document.getElementById('notes-panel').style.display = 'none';
    document.getElementById('tasks-panel').style.display = 'block';
    renderTasks();
});

async function loadProjects() {
    try {
        projects = await ipcRenderer.invoke('get-projects');
        
        if (!Array.isArray(projects)) {
            console.error('Ошибка: projects не массив, инициализируем пустым массивом');
            projects = [];
        }
        
        renderProjects();
        updateTiles();
        updateProjectFilter(); 
    } catch (error) {
        console.error('Ошибка при загрузке проектов:', error);
        projects = [];
    }
}

function renderProjects() {
    const projectView = document.getElementById('project-view');
    projectView.innerHTML = '';
    projects.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('file-item', 'project-item');
        projectItem.innerHTML = `
            <div class="file-icon">
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <path d="M51.48,15.46A4.52,4.52,0,0,1,56,20V51a4.52,4.52,0,0,1-4.52,4.52h-47A4.52,4.52,0,0,1,0,51H0V13A4.52,4.52,0,0,1,4.52,8.52H16c3.82,0,4.23,1.14,6.74,4.45,2.07,2.74,7.11,2.49,10.39,2.49Z" fill="#5c51a1"/>
                    <path d="M51.48,18.12H9.24a4.52,4.52,0,0,0-4.52,4.52v2.84L9.19,19H51.54L56,25.49V22.64A4.52,4.52,0,0,0,51.48,18.12Z" fill="#635c99"/>
                    <path d="M4.57,55.48H51.48A4.52,4.52,0,0,0,56,51V23.48A4.52,4.52,0,0,0,51.48,19H9.25a4.52,4.52,0,0,0-4.52,4.52V51a4.65,4.65,0,0,1-.06.72,2.33,2.33,0,0,1-4.6,0A4.5,4.5,0,0,0,4.57,55.48Z" fill="#8880bd"/>
                </svg>
            </div>
            <div class="file-name">${project.name || `Проект ${index + 1}`}</div>
        `;

        projectItem.addEventListener('click', () => {
            openProject(index);
        });

        projectItem.addEventListener('dblclick', () => {
            renameProject(index);
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
            </svg>
        `;
        deleteButton.addEventListener('click', async (event) => {
            event.stopPropagation();
            projects.splice(index, 1);
            await saveProjects();
            renderProjects();
            updateProjectFilter();

            if (currentProjectIndex === index) {
                currentProjectIndex = null;
                document.getElementById('tasks-in-project').style.display = 'none';
                document.getElementById('project-title').textContent = '[Название проекта]';
                document.getElementById('task-form-frame').style.display = 'none';
                renderTasksInProject([]);
            } else if (currentProjectIndex > index) {
                currentProjectIndex--;
            }
            updateTiles();
        });

        projectItem.appendChild(deleteButton);
        projectView.appendChild(projectItem);
    });
}

function openProject(index) {
    currentProjectIndex = index;

    document.querySelectorAll('.project-item').forEach(item => {
        item.classList.remove('active');
    });

    const projectItem = document.querySelectorAll('.project-item')[index];
    if (projectItem) {
        projectItem.classList.add('active');
    }

    const tasksInProject = document.getElementById('tasks-in-project');
    tasksInProject.style.display = 'block';
    document.getElementById('project-title').textContent = projects[index].name;

    renderTasksInProject(projects[index].tasks);
}

function renameProject(index) {
    const projectItem = document.querySelectorAll('.project-item')[index];
    const projectNameElement = projectItem.querySelector('.file-name');

    const input = document.createElement('input');
    input.type = 'text';
    input.value = projects[index].name || `Проект ${index + 1}`;
    input.classList.add('rename-input');

    projectNameElement.replaceWith(input);
    input.focus();

    input.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            const newName = input.value.trim();
            if (newName) {
                projects[index].name = newName;
                await saveProjects();
                renderProjects();
                if (currentProjectIndex === index) {
                    document.getElementById('project-title').textContent = newName;
                }
            }
        }
    });

    input.addEventListener('blur', async () => {
        const newName = input.value.trim();
        if (newName) {
            projects[index].name = newName;
            await saveProjects();
            renderProjects();
            if (currentProjectIndex === index) {
                document.getElementById('project-title').textContent = newName;
            }
        }
    });
}

function renameTask(index) {
    if (currentProjectIndex === null) {
        showAlert('Сначала откройте проект.');
        return;
    }

    const taskItem = document.querySelectorAll('.task-item')[index];
    const taskNameElement = taskItem.querySelector('.file-name');

    const input = document.createElement('input');
    input.type = 'text';
    input.value = projects[currentProjectIndex].tasks[index].title || `Задача ${index + 1}`;
    input.classList.add('rename-input');

    taskNameElement.replaceWith(input);
    input.focus();

    input.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            const newName = input.value.trim();
            if (newName) {
                projects[currentProjectIndex].tasks[index].title = newName;
                await saveProjects();
                renderTasksInProject(projects[currentProjectIndex].tasks);
            }
        }
    });

    input.addEventListener('blur', async () => {
        const newName = input.value.trim();
        if (newName) {
            projects[currentProjectIndex].tasks[index].title = newName;
            await saveProjects();
            renderTasksInProject(projects[currentProjectIndex].tasks);
        }
    });
}

document.getElementById('project-filter').addEventListener('change', () => {
    const selectedProject = document.getElementById('project-filter').value;
    renderCalendar(currentMonth, currentYear); 
});

document.getElementById('add-project').addEventListener('click', async () => {
    const newProject = { name: `Проект ${projects.length + 1}`, tasks: [] };
    projects.push(newProject);
    await saveProjects();
    renderProjects();
    updateProjectFilter(); 
});

function resetTaskForm() {
    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('task-start-date').value = ''; 
    document.getElementById('task-end-date').value = '';
    document.getElementById('task-priority').value = 'low'; 
    document.getElementById('task-status').value = 'todo';
}

function editProjectTitle() {
    const projectTitle = document.getElementById('project-title');
    const currentName = projectTitle.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentName;
    input.classList.add('rename-input');
    projectTitle.replaceWith(input);
    input.focus();

    input.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            const newName = input.value.trim();
            if (newName && currentProjectIndex !== null) {
                projects[currentProjectIndex].name = newName;
                await saveProjects();
                renderProjects();
                projectTitle.textContent = newName;
                input.replaceWith(projectTitle);
            }
        }
    });

    input.addEventListener('blur', async () => {
        const newName = input.value.trim();
        if (newName && currentProjectIndex !== null) {
            projects[currentProjectIndex].name = newName;
            await saveProjects();
            renderProjects();
            projectTitle.textContent = newName;
            input.replaceWith(projectTitle);
        }
    });
}

document.getElementById('add-task').addEventListener('click', () => {
    const taskFormFrame = document.getElementById('task-form-frame');
    const taskForm = document.getElementById('task-form');
    taskFormFrame.style.display = 'block';
    taskForm.style.display = 'block';
});

function saveProjects() {
    try {
        ipcRenderer.invoke('save-projects', projects);
        updateProjectFilters(); 
    } catch (error) {
        console.error('Ошибка при сохранении проектов:', error);
    }
}

function updateProjectFilter() {
    const projectFilter = document.getElementById('project-filter');
    projectFilter.innerHTML = '<option value="all">Все проекты</option>'; 

    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project.name;
        option.textContent = project.name;
        projectFilter.appendChild(option);
    });
}

function filterTasksByStatus(tasks, status) {
    if (status === 'all') return tasks;
    return tasks.filter(task => task.status === status);
}

function renderTasksInProject(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    const statusFilter = document.getElementById('status-filter').value;
    const filteredTasks = filterTasksByStatus(tasks, statusFilter);

    filteredTasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.dataset.id = task.id;

        const today = new Date().toISOString().split('T')[0];
        const isEndingTask = task.endDate && task.endDate === today;

        if (isEndingTask) {
            taskItem.classList.add('ending-task');
            if (task.priority === 'low') {
                taskItem.classList.add('priority-low');
            } else if (task.priority === 'medium') {
                taskItem.classList.add('priority-medium');
            } else if (task.priority === 'high') {
                taskItem.classList.add('priority-high');
            }
        }

        taskItem.innerHTML = `
            <div class="task-content">
                <h3 class="task-title">${task.title}</h3>
                <p class="task-description">${task.description}</p>
                <small class="task-dates">${task.startDate} - ${task.endDate}</small>
            </div>
        `;

        taskItem.addEventListener('click', (e) => {
            if (!e.target.closest('.context-menu')) {
                openTaskEditor(task, true);
            }
        });

        taskItem.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            showContextMenu(e, task, index);
        });

        taskList.appendChild(taskItem);
    });
}

function filterTasksByStatus(tasks, status) {
    if (status === 'all') return tasks;
    return tasks.filter(task => task.status === status);
}

document.getElementById('status-filter').addEventListener('change', () => {
    if (currentProjectIndex !== null) {
        const status = document.getElementById('status-filter').value;
        const filtered = filterTasksByStatus(projects[currentProjectIndex].tasks, status);
        renderTasksInProject(filtered);
    }
});

function showNoteContextMenu(e, noteIndex) {
    e.preventDefault();
    const oldMenu = document.querySelector('.context-menu');
    if (oldMenu) oldMenu.remove();

    const contextMenu = document.createElement('div');
    contextMenu.className = 'context-menu';
    contextMenu.style.cssText = `
        left: ${e.clientX}px; 
        top: ${e.clientY}px;
        position: fixed;
        z-index: 1000;
        background: #eceff4;
        border: 1px solid #4c566a;
        border-radius: 6px;
        padding: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    `;

    const folderOptions = folders.map(folder => 
        `<option value="${folder.name}" ${folder.name === folders[currentFolderIndex].name ? 'selected' : ''}>${folder.name}</option>`
    ).join('');

    contextMenu.innerHTML = `
        <div class="folder-selector">
            <select class="folder-select">
                ${folderOptions}
            </select>
        </div>
    `;

    const folderSelect = contextMenu.querySelector('.folder-select');
    folderSelect.addEventListener('change', async () => {
        const newFolderName = folderSelect.value;
        const newFolder = folders.find(f => f.name === newFolderName);

        if (newFolder) {
            const note = folders[currentFolderIndex].notes.splice(noteIndex, 1)[0];
            newFolder.notes.push(note);
            await saveFolders();

            renderNotesInFolder(folders[currentFolderIndex].notes);

            contextMenu.remove();
        }
    });

    document.body.appendChild(contextMenu);

    const closeMenu = (event) => {
        if (!contextMenu.contains(event.target)) {
            contextMenu.remove();
            document.removeEventListener('click', closeMenu);
        }
    };
    document.addEventListener('click', closeMenu);
}

function updateFolderSelector() {
    const folderSelect = document.querySelector('.folder-select');
    if (folderSelect) {
        folderSelect.innerHTML = folders.map(folder => 
            `<option value="${folder.name}">${folder.name}</option>`
        ).join('');
    }
}

document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.note-item')) {
        const noteIndex = Array.from(document.querySelectorAll('.note-item')).indexOf(e.target.closest('.note-item'));
        showNoteContextMenu(e, noteIndex);
    }
});

document.addEventListener('click', (e) => {
    if (e.target.closest('.weekly-task')) {
        const taskElement = e.target.closest('.weekly-task');
        const taskTitle = taskElement.querySelector('span').textContent;
        const task = tasks.find(t => t.title === taskTitle);

        if (task) {
            showTaskDetailsModal(task);
        }
    }
});

function showContextMenu(e, task, index) {
    e.preventDefault();
    const oldMenu = document.querySelector('.context-menu');
    if (oldMenu) oldMenu.remove();

    const contextMenu = document.createElement('div');
    contextMenu.className = 'context-menu';
    contextMenu.style.cssText = `
        left: ${e.clientX}px; 
        top: ${e.clientY}px;
        position: fixed;
        z-index: 1000;
        background: #eceff4;
        border: 1px solid #4c566a;
        border-radius: 6px;
        padding: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    `;

    const projectOptions = projects.map(project => 
        `<option value="${project.name}" ${project.name === task.project ? 'selected' : ''}>${project.name}</option>`
    ).join('');

    contextMenu.innerHTML = `
        <div class="status-selector">
            <select class="status-select">
                <option value="todo" ${task.status === 'todo' ? 'selected' : ''}>К выполнению</option>
                <option value="in-progress" ${task.status === 'in-progress' ? 'selected' : ''}>В процессе</option>
                <option value="done" ${task.status === 'done' ? 'selected' : ''}>Выполнено</option>
            </select>
        </div>
        <div class="project-selector">
            <select class="project-select">
                ${projectOptions}
            </select>
        </div>
        <button class="delete-task">Удалить</button>
    `;

    const statusSelect = contextMenu.querySelector('.status-select');
    statusSelect.addEventListener('change', async () => {
        task.status = statusSelect.value;
        await saveProjects();
        renderTasksInProject(projects[currentProjectIndex].tasks);
        contextMenu.remove();
    });

    const projectSelect = contextMenu.querySelector('.project-select');
    projectSelect.addEventListener('change', async () => {
        const newProjectName = projectSelect.value;
        const newProject = projects.find(p => p.name === newProjectName);
    
        if (newProject) {
            const currentProject = projects.find(p => p.tasks.includes(task));
            if (currentProject) {
                const taskIndex = currentProject.tasks.indexOf(task);
                if (taskIndex !== -1) {
                    currentProject.tasks.splice(taskIndex, 1);
                }

                renderTasksInProject(currentProject.tasks);
            }

            newProject.tasks.push(task);
            task.project = newProjectName;

            await saveProjects();

            if (currentProjectIndex !== null && projects[currentProjectIndex].name === newProjectName) {
                renderTasksInProject(projects[currentProjectIndex].tasks);
            }

            contextMenu.remove();
        }
    });

    contextMenu.querySelector('.delete-task').addEventListener('click', async () => {
        const currentProject = projects.find(p => p.tasks.includes(task));
        if (currentProject) {
            const taskIndex = currentProject.tasks.indexOf(task);
            if (taskIndex !== -1) {
                currentProject.tasks.splice(taskIndex, 1);
            }
        }

        await saveProjects();
        renderTasksInProject(projects[currentProjectIndex].tasks);
        contextMenu.remove();
        updateTiles();
    });

    document.body.appendChild(contextMenu);

    const closeMenu = (event) => {
        if (!contextMenu.contains(event.target)) {
            contextMenu.remove();
            document.removeEventListener('click', closeMenu);
        }
    };
    document.addEventListener('click', closeMenu);
}

applyThemeButton.addEventListener('click', () => {
    const selectedTheme = themeSelect.value;
    showRestartModal(selectedTheme);
});

function showRestartModal(theme) {
    const restartModal = document.createElement('div');
    restartModal.classList.add('restart-modal');
    restartModal.innerHTML = `
        <div class="restart-modal-content">
            <h2>Перезапуск приложения</h2>
            <p>Для применения темы необходимо перезапустить приложение.</p>
            <button id="confirm-restart">Применить</button>
            <button id="cancel-restart">Отмена</button>
        </div>
    `;
    document.body.appendChild(restartModal);

    const confirmRestartButton = restartModal.querySelector('#confirm-restart');
    const cancelRestartButton = restartModal.querySelector('#cancel-restart');

    confirmRestartButton.addEventListener('click', () => {
        ipcRenderer.send('save-settings', { theme });
        restartModal.remove();
        ipcRenderer.send('restart-app');
    });

    cancelRestartButton.addEventListener('click', () => {
        restartModal.remove();
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const settings = await ipcRenderer.invoke('get-settings');
    if (settings.theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
});

document.addEventListener('DOMContentLoaded', async () => {

    const settings = await ipcRenderer.invoke('get-settings');

    if (settings.theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme');
    }

    const themeSelect = document.getElementById('theme-select');
    themeSelect.value = settings.theme; 
});

document.addEventListener('DOMContentLoaded', async () => {

    const defaultBackupPath = await ipcRenderer.invoke('get-default-backup-path')
    backupFolderInput.value = defaultBackupPath
    localStorage.setItem('backupFolder', defaultBackupPath)
})

noteEditor.addEventListener('input', () => {
    saveStatus.textContent = "● Не сохранено";
    saveStatus.classList.remove('saved');
    saveStatus.classList.add('unsaved');
});

saveNoteButton.addEventListener('click', () => {
    saveStatus.textContent = "Сохранено";
    saveStatus.classList.remove('unsaved');
    saveStatus.classList.add('saved');
});

function initCalendar() {
    renderCalendar(currentMonth, currentYear);
    loadCalendarTasks().then(() => { 
        document.querySelectorAll('.calendar-day').forEach(day => {
            day.style.pointerEvents = 'auto'; 
        });
    });
}

function renderCalendar(month = currentMonth, year = currentYear) {
    currentMonth = month;
    currentYear = year;
    calendarDays.innerHTML = '';

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0).getDate();

    const projectFilter = document.getElementById('project-filter').value;
    const statusFilter = document.getElementById('calendar-status-filter').value;

    const filteredTasks = projects
        .filter(p => projectFilter === 'all' || p.name === projectFilter)
        .flatMap(p => p.tasks)
        .filter(task => {
            return task.startDate && task.endDate && (statusFilter === 'all' || task.status === statusFilter);
        });

    let firstDayOfWeek = firstDay.getDay();
    if (firstDayOfWeek === 0) firstDayOfWeek = 7;

    for (let i = firstDayOfWeek - 1; i > 0; i--) {
        const day = document.createElement('div');
        day.className = 'calendar-day prev-month';
        day.textContent = prevLastDay - i + 1;
        calendarDays.appendChild(day);
    }

    function getTaskIndicators(date, tasks) {
        const formattedDate = new Date(date).toISOString().split('T')[0];
        const today = new Date().toISOString().split('T')[0];
    
        const dayTasks = tasks.filter(task => {
            const taskDate = new Date(task.startDate).toISOString().split('T')[0];
            const taskEndDate = task.endDate ? new Date(task.endDate).toISOString().split('T')[0] : null;
            return taskDate === formattedDate || taskEndDate === formattedDate;
        });

        const visibleTasks = dayTasks.slice(0, 15);
        const remainingTasks = dayTasks.length - 15;

        const firstRowTasks = visibleTasks.slice(0, 4);
        const secondRowTasks = visibleTasks.slice(4, 15);
    
        return `
            <div class="task-indicators-row">
                ${firstRowTasks.map(task => `
                    <div class="task-indicator 
                        ${task.endDate === today ? 'ending-today' : ''} 
                        ${task.endDate === formattedDate && task.endDate !== today ? 'ending-task' : ''} 
                        ${task.priority ? task.priority : ''}" 
                        title="${task.title} (${task.priority})">
                        <div class="priority-dot ${task.priority}"></div>
                    </div>
                `).join('')}
            </div>
            <div class="task-indicators-row">
                ${secondRowTasks.map(task => `
                    <div class="task-indicator 
                        ${task.endDate === today ? 'ending-today' : ''} 
                        ${task.endDate === formattedDate && task.endDate !== today ? 'ending-task' : ''} 
                        ${task.priority ? task.priority : ''}" 
                        title="${task.title} (${task.priority})">
                        <div class="priority-dot ${task.priority}"></div>
                    </div>
                `).join('')}
                ${remainingTasks > 0 ? `<div class="task-indicator-more">+${remainingTasks}</div>` : ''}
            </div>
        `;
    }    
    

    for (let i = 1; i <= lastDay.getDate(); i++) {
        const day = document.createElement('div');
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        day.dataset.date = dateStr;

        day.className = 'calendar-day current-month';
        day.innerHTML = `
            <div class="day-number">${i}</div>
            <div class="task-info">
                ${getTaskIndicators(dateStr, filteredTasks)}
            </div>
        `;

        const tasksEndingToday = filteredTasks.filter(task => {
            const taskEndDate = task.endDate ? new Date(task.endDate).toISOString().split('T')[0] : null;
            return taskEndDate === dateStr;
        });

        if (tasksEndingToday.length > 0) {
            day.classList.add('has-ending-tasks');
            tasksEndingToday.forEach(task => {
                if (task.priority === 'low') {
                    day.classList.add('priority-low');
                } else if (task.priority === 'medium') {
                    day.classList.add('priority-medium');
                } else if (task.priority === 'high') {
                    day.classList.add('priority-high');
                }
            });
        }

        day.dataset.date = dateStr;

        const today = new Date().toISOString().split('T')[0];
        if (dateStr === today) {
            day.classList.add('current-day');
        }

        day.addEventListener('click', (e) => {
            e.stopPropagation();
            const dateStr = day.dataset.date;
            showDayTasks(e, dateStr);

            document.querySelectorAll('.calendar-day').forEach(d => 
                d.classList.remove('selected-day'));
            day.classList.add('selected-day');
        });

        day.addEventListener('contextmenu', (e) => showCalendarContextMenu(e, dateStr));

        calendarDays.appendChild(day);
    }

    if (monthYear) {
        monthYear.textContent = `${new Date(year, month).toLocaleString('ru', { 
            month: 'long', year: 'numeric' 
        })}`.replace(' г.', '');
    } else {
        console.error("Элемент 'month-year' не найден в DOM!");
    }

    document.getElementById('month-select').value = currentMonth;
    document.getElementById('year-select').value = currentYear;
}


function formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru', {
        day: 'numeric',
        month: 'short'
    });
}

function getStatusIndicators(dateStr, tasks) {
    const statuses = [];
    const statusMap = {
        'todo': 'К выполнению',
        'in-progress': 'В процессе',
        'done': 'Выполнено'
    };

    tasks.forEach(task => {
        if (task.startDate === dateStr) {
            if (!statuses.includes(task.status)) {
                statuses.push(task.status);
            }
        }
    });

    return statuses
        .map(status => `
            <div class="status-dot ${status}" 
                 title="${statusMap[status] || status}">
            </div>
        `).join('');
}

async function loadCalendarTasks() {
    tasksMap.clear();
    const projects = await ipcRenderer.invoke('get-projects');
    
    projects.forEach(project => {
        project.tasks.forEach(task => {
            if (task.startDate && task.endDate) {
                if (!tasksMap.has(task.startDate)) {
                    tasksMap.set(task.startDate, []);
                }
                tasksMap.get(task.startDate).push({
                    ...task,
                    project: project.name
                });
            }
        });
    });
}

function showDayTasks(e, date) {

    const existingModal = document.querySelector('.calendar-day-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const formattedDate = new Date(date).toISOString().split('T')[0];
    const today = new Date().toISOString().split('T')[0];

    const filteredTasks = projects
        .filter(p => document.getElementById('project-filter').value === 'all' || p.name === document.getElementById('project-filter').value)
        .flatMap(p => p.tasks)
        .filter(task => {
            const taskDate = new Date(task.startDate).toISOString().split('T')[0];
            const taskEndDate = task.endDate ? new Date(task.endDate).toISOString().split('T')[0] : null;
            return (taskDate === formattedDate || taskEndDate === formattedDate) && 
                   (document.getElementById('calendar-status-filter').value === 'all' || 
                    task.status === document.getElementById('calendar-status-filter').value);
        });

    const priorityMap = {
        low: 'Низкий',
        medium: 'Средний',
        high: 'Высокий'
    };

    const modal = document.createElement('div');
    modal.className = 'calendar-day-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Задачи на ${new Date(formattedDate).toLocaleDateString('ru', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
            })}</h3>
            ${filteredTasks.length ? `
                <div class="task-list">
                    ${filteredTasks.map(task => `
                        <div class="task-item ${task.status} ${task.endDate === today ? 'ending-today' : ''}">
                            <div class="task-header">
                                <strong>${task.title}</strong>
                                <div class="deadline-info">
                                    ${task.endDate ? `
                                        <span class="end-date">
                                            ${task.endDate === today ? '🎯 Завершается сегодня' : `До ${formatDate(task.endDate)}`}
                                        </span>
                                    ` : '<span class="end-date">Без срока</span>'}
                                    <span class="project-badge">${task.project}</span>
                                </div>
                            </div>
                            ${task.description ? `<p>${task.description}</p>` : ''}
                            <div class="task-meta">
                                <span class="priority-badge">Приоритет: ${priorityMap[task.priority] || task.priority}</span>
                                <span class="status-dot ${task.status}"></span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : '<p>Нет задач на этот день</p>'}
            <button class="close-modal">Закрыть</button>
        </div>
    `;

    modal.querySelector('.close-modal').addEventListener('click', () => modal.remove());
    document.body.appendChild(modal);
}

function closeAllModals() {
    document.querySelectorAll(
        '#modal, #versions-modal, #rename-modal, #alert-modal, .calendar-day-modal, .task-editor-modal, .calendar-task-modal, .task-details-modal'
    ).forEach(modal => {
        modal.classList.remove('active');
        modal.remove();
    });

    document.querySelectorAll('.context-menu, .calendar-context-menu').forEach(modal => modal.remove());
}

document.getElementById('calendar-status-filter').addEventListener('change', () => {
    const status = document.getElementById('calendar-status-filter').value;
    renderCalendar(currentMonth, currentYear);
});

function showCalendarContextMenu(e, date) {
    e.preventDefault();
    const oldMenu = document.querySelector('.calendar-context-menu');
    if (oldMenu) oldMenu.remove();

    const menu = document.createElement('div');
    menu.className = 'calendar-context-menu';
    menu.style.left = `${e.clientX}px`;
    menu.style.top = `${e.clientY}px`;
    
    menu.innerHTML = `
    <button class="add-task-to-date">Добавить задачу</button>
    <button class="prev-month">&lt; Пред. месяц</button>
    <button class="next-month">След. месяц &gt;</button>
    <button class="close-context-menu">✕</button>
    `;

    menu.querySelector('.add-task-to-date').addEventListener('click', () => {
        showTaskModal(date);
        menu.remove();
    });
    
    menu.querySelector('.prev-month').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
        menu.remove();
    });

    menu.querySelector('.next-month').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
        menu.remove();
    });

    menu.querySelector('.close-context-menu').addEventListener('click', () => {
        menu.remove();
    });

    document.body.appendChild(menu);
    document.addEventListener('click', () => menu.remove(), { once: true });
}

function showTaskModal(date) {
    const modal = document.createElement('div');
    modal.className = 'calendar-task-modal';

    const projectOptions = projects.map(p => 
        `<option value="${p.name}">${p.name}</option>`
    ).join('');

    modal.innerHTML = `
        <h3>Новая задача на ${date}</h3>
        <div class="form-row">
            <label>Название:</label>
            <textarea id="task-title" placeholder="Название" class="task-title-input"></textarea>
        </div>
        <div class="form-row">
            <label>Описание:</label>
            <textarea id="task-description" placeholder="Описание" class="task-input"></textarea>
        </div>
        
        <div class="task-fields">
            <div>
                <label>Дата окончания:</label>
                <input type="date" id="task-end-date" class="task-input">
            </div>
            
            <div>
                <label>Приоритет:</label>
                <select id="task-priority" class="task-input">
                    <option value="low">Низкий</option>
                    <option value="medium">Средний</option>
                    <option value="high">Высокий</option>
                </select>
            </div>
            
            <div>
                <label>Этап:</label>
                <select id="task-status" class="task-input">
                    <option value="todo">К выполнению</option>
                    <option value="in-progress">В процессе</option>
                    <option value="done">Выполнено</option>
                </select>
            </div>
            
            <div>
                <label>Проект:</label>
                <select id="task-project" class="task-input">
                    ${projectOptions}
                </select>
            </div>
        </div>

        <div class="modal-buttons">
            <button class="save-task">Сохранить</button>
            <button class="cancel-task">Отмена</button>
        </div>
    `;

    modal.querySelector('.save-task').addEventListener('click', async () => {
        if (projects.length === 0) {
            showAlert('Сначала создайте проект!');
            return;
        }

        const title = modal.querySelector('#task-title').value;
        const description = modal.querySelector('#task-description').value;
        const endDate = modal.querySelector('#task-end-date').value;
        const priority = modal.querySelector('#task-priority').value;
        const status = modal.querySelector('#task-status').value;
        const projectName = modal.querySelector('#task-project').value;

        const selectedProject = projects.find(p => p.name === projectName);
        if (!selectedProject) {
            showAlert('Ошибка: проект не найден');
            return;
        }

        const newTask = {
            title,
            description,
            startDate: new Date(date).toISOString().split('T')[0],
            endDate,
            priority,
            status,
            project: selectedProject.name
        };

        selectedProject.tasks.push(newTask);

        await ipcRenderer.invoke('save-projects', projects);
        loadCalendarTasks();
        renderCalendar(currentMonth, currentYear);
        modal.remove();
    });

    modal.querySelector('.cancel-task').addEventListener('click', () => {
        modal.remove();
    });

    document.body.appendChild(modal);
}

document.addEventListener('DOMContentLoaded', initCalendar);


function initCalendarPanel() {
    document.getElementById('calendar-panel').style.display = 'block';
    initCalendar();
    document.getElementById('calendar-panel').style.display = 'none';
}
function getStatusIndicators(date, tasks) {
    const dayTasks = tasks.filter(t => t.startDate === date);
    const statuses = [...new Set(dayTasks.map(t => t.status))];
    
    return statuses.map(status => 
        `<div class="status-dot status-${status.replace(' ', '-')}"></div>`
    ).join('');
}

const today = new Date();
const currentDate = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
let day = document.createElement('div');
if (day.dataset.date === currentDate) {
    day.classList.add('current-day');
}

document.addEventListener('click', (e) => {
    if (e.target.closest('.weekly-task')) {
        const taskElement = e.target.closest('.weekly-task');
        const taskTitle = taskElement.querySelector('span').textContent;
        const task = tasks.find(t => t.title === taskTitle);

        if (task) {
            showTaskDetailsModal(task);
        }
    }
});

function showTaskDetailsModal(task) {

    const existingModal = document.querySelector('.task-details-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const priorityMap = {
        low: 'Низкий',
        medium: 'Средний',
        high: 'Высокий'
    };

    const modal = document.createElement('div');
    modal.className = 'task-details-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <small>Срок: ${formatDate(task.endDate)}</small>
            <div class="task-meta">
                <span class="priority-badge">Приоритет: ${priorityMap[task.priority] || task.priority}</span>
            </div>
            <button class="close-modal">Закрыть</button>
        </div>
    `;

    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });

    document.body.appendChild(modal);
}

function formatDate(dateStr) {
    if (!dateStr) return 'Без срока';
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}



function renderNotes() {
    console.warn("Внимание: renderNotes() пока не реализована.");
}

setTimeout(() => {
    calendarPanel.style.overflow = 'visible';
    calendarPanel.style.clipPath = 'none';
}, 50);

function initCalendarControls() {
    const months = [...Array(12).keys()].map(i => 
        new Date(0, i).toLocaleString('ru', { month: 'long' })
    );

    const startYear = currentYear - 5;
    const years = Array.from({length: 11}, (_, i) => startYear + i);

    const projectSelect = document.getElementById('project-filter');
    projectSelect.innerHTML = 
        '<option value="all">Все проекты</option>' + 
        projects.map(p => `<option value="${p.name}">${p.name}</option>`).join('');

    const monthSelect = document.getElementById('month-select');
    const yearSelect = document.getElementById('year-select');

    monthSelect.innerHTML = months.map((m, i) => 
        `<option value="${i}" ${i === currentMonth ? 'selected' : ''}>${m}</option>`
    ).join('');

    yearSelect.innerHTML = years.map(y => 
        `<option value="${y}" ${y === currentYear ? 'selected' : ''}>${y}</option>`
    ).join('');

    monthSelect.addEventListener('change', (e) => {
        currentMonth = parseInt(e.target.value);
        renderCalendar(currentMonth, currentYear);
    });

    yearSelect.addEventListener('change', (e) => {
        currentYear = parseInt(e.target.value); 
        renderCalendar(currentMonth, currentYear);
    });

    renderCalendar(currentMonth, currentYear);
}

function validateDate(input) {
    const year = new Date(input.value).getFullYear();
    if (year < 2000 || year > 2099) {
        input.setCustomValidity('Допустимый диапазон: 2000-2099 года');
        showAlert('Можно вводить только даты между 2000 и 2099 годом');
    } else {
        input.setCustomValidity('');
    }
}

function countAllTasks() {
    let total = 0;
    projects.forEach(project => {
        total += project.tasks.length;
    });
    return total;
}

function getWeeklyTasks() {
    const now = new Date();
    const startOfWeek = new Date(now);

    if (now.getDay() === 0) {
        startOfWeek.setDate(now.getDate() - 6);
    } else {
        startOfWeek.setDate(now.getDate() - (now.getDay() - 1));
    }
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    return projects.flatMap(project => {
        if (!project.tasks || !Array.isArray(project.tasks)) return [];
        
        return project.tasks.filter(task => {
            if (!task.endDate) return false;
            const taskDate = new Date(task.endDate);
            return taskDate >= startOfWeek && taskDate <= endOfWeek;
        });
    });
}

function getNextWeekTasks() {
    const now = new Date();
    const startOfNextWeek = new Date(now);

    if (now.getDay() === 0) {
        startOfNextWeek.setDate(now.getDate() + 1);
    } else {
        startOfNextWeek.setDate(now.getDate() + (8 - now.getDay()));
    }
    startOfNextWeek.setHours(0, 0, 0, 0);

    const endOfNextWeek = new Date(startOfNextWeek);
    endOfNextWeek.setDate(startOfNextWeek.getDate() + 6);
    endOfNextWeek.setHours(23, 59, 59, 999);

    return projects.flatMap(project => {
        if (!project.tasks || !Array.isArray(project.tasks)) return [];
        
        return project.tasks.filter(task => {
            if (!task.endDate) return false;
            const taskDate = new Date(task.endDate);
            return taskDate >= startOfNextWeek && taskDate <= endOfNextWeek;
        });
    });
}

function updateTiles() {
    const weeklyTasks = getWeeklyTasks();
    const nextWeekTasks = getNextWeekTasks();
    const tasksList = document.getElementById('weekly-tasks-list');
    const nextWeekTasksList = document.getElementById('next-week-tasks-list');

    tasksList.innerHTML = '';
    weeklyTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = `weekly-task priority-${task.priority || 'medium'}`;
        taskElement.innerHTML = `
            <span>${task.title}</span>
            <small>${task.endDate ? formatDate(task.endDate) : 'Без срока'}</small>
        `;
        tasksList.appendChild(taskElement);
    });

    nextWeekTasksList.innerHTML = '';
    nextWeekTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = `weekly-task priority-${task.priority || 'medium'}`;
        taskElement.innerHTML = `
            <span>${task.title}</span>
            <small>${task.endDate ? formatDate(task.endDate) : 'Без срока'}</small>
        `;
        nextWeekTasksList.appendChild(taskElement);
    });

    document.getElementById('total-tasks-count').textContent = countAllTasks();
}

document.querySelector('.tasks-scroll-container').addEventListener('wheel', (e) => {
    e.preventDefault();
    e.currentTarget.scrollBy({
        top: e.deltaY < 0 ? -30 : 30,
        behavior: 'smooth'
    });
});

document.getElementById('weekly-tasks-tile').addEventListener('mouseenter', () => {
    document.getElementById('weekly-tasks-list').focus();
});

function formatDate(dateString) {
    const options = { day: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
}

async function saveProjects() {
    await ipcRenderer.invoke('save-projects', projects);
    updateTiles(); 
}
loadNotes();
