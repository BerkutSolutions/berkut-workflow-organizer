body.light-theme {
    background-color: #eceff4;
    color: #2e3440;
}

body.light-theme #sidebar {
    background: #d8dee9;
    color: #2e3440;
    border-right: 1px solid #4c566a;
}

body.light-theme #sidebar button:not(#settings-button) {
    width: 160px !important;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #4c566a; 
    padding: 0px 15px;
    border-radius: 5px;
    background-color: #eceff4;
    color: #2e3440; 
    font-family: 'Arial', sans-serif; 
    font-weight: 500; 
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 10px;
    box-shadow: 0px 0px 0px 2px rgba(212, 209, 255, 0.5); 
}

body.light-theme #sidebar button:hover {
    background-color: #d8dee9;
    color: #2e3440;
    border-color: #5e81ac; 
}

body.light-theme #main-panel {
    background: #eceff4;
    color: #2e3440;
}

body.light-theme textarea {
    background: #d8dee9;
    color: #2e3440;
    border: 1px solid #4c566a;
}

body.light-theme button {
    background-color: #4c566a;
    color: #eceff4;
}

body.light-theme button:hover {
    background-color: #5e81ac;
}

body.light-theme .tile {
    background: #d8dee9;
    color: #2e3440;
}

body.light-theme .tile:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

body.light-theme #modal,
body.light-theme #versions-modal,
body.light-theme #rename-modal,
body.light-theme #alert-modal {
    background: #eceff4;
    color: #2e3440;
}

body.light-theme #modal h2,
body.light-theme #versions-modal h2,
body.light-theme #rename-modal h2,
body.light-theme #alert-modal h2 {
    color: #2e3440;
}


body.dark-theme {
    background-color: #2e3440;
    color: #d8dee9;
}

body.dark-theme #sidebar {
    background: #3b4252;
    color: #d8dee9;
    border-right: 1px solid #4c566a;
}


body.dark-theme #sidebar button:not(#settings-button) {
    width: 160px !important; 
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #81a1c1; 
    padding: 0px 15px;
    border-radius: 5px;
    background-color: #3b4252;
    color: #d8dee9; 
    font-family: 'Arial', sans-serif; 
    font-weight: 500;
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 10px;
    box-shadow: 0px 0px 0px 2px rgba(129, 161, 193, 0.5); 
}

body.dark-theme #sidebar button:hover {
    background-color: #4c566a;
    color: #d8dee9; 
    border-color: #81a1c1; 
}
body.dark-theme #main-panel {
    background: #2e3440;
    color: #d8dee9;
}

body.dark-theme textarea {
    background: #4c566a;
    color: #d8dee9;
    border: 1px solid #81a1c1;
}

body.dark-theme button {
    background-color: #4c566a;
    color: #d8dee9;
    border: none !important;
}

body.dark-theme button:hover {
    background-color: #81a1c1;
}

body.dark-theme .tile:hover {
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

body.dark-theme #modal,
body.dark-theme #versions-modal,
body.dark-theme #rename-modal,
body.dark-theme #alert-modal {
    background: #3b4252;
    color: #d8dee9;
}

body.dark-theme #modal h2,
body.dark-theme #versions-modal h2,
body.dark-theme #rename-modal h2,
body.dark-theme #alert-modal h2 {
    color: #d8dee9;
}

#alert-modal, #versions-modal {
    position: fixed !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    z-index: 1000 !important;
    background: #eceff4;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 500px;
    width: 90%;
}

#alert-modal {
    background: #eceff4;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
}

#versions-modal {
    background: #eceff4;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 500px;
    width: 90%;
}

body.dark-theme #alert-modal,
body.dark-theme #versions-modal {
    background: #3b4252;
    color: #d8dee9;
}

.version-item {
    max-height: 150px; 
    overflow-y: auto;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    border-radius: 5px;
}

body.dark-theme .version-item {
    background: #4c566a;
    color: #d8dee9;
}

body.dark-theme .version-item small {
    color: #81a1c1;
}

body.dark-theme #rename-input {
    background: #4c566a;
    color: #d8dee9;
    border: 1px solid #81a1c1;
}


body.dark-theme #editor {
    background: #2e3440 !important; 
    border: none !important; 
}

#note-editor {
    width: 90%; 
    margin: 0 auto;
}

body.dark-theme #note-editor {
    background: #4c566a;
    color: #d8dee9;
    border: 1px solid #81a1c1;
}

body.dark-theme #note-editor::placeholder {
    color: #d8dee9;
    opacity: 0.7;
}

body.dark-theme .toolbar {
    background: #2e3440 !important; 
    border: none !important; 
    box-shadow: none !important; 
}

body.dark-theme .toolbar button {
    background-color: #4c566a;
    color: #d8dee9;
    border: none !important; 
}

body.dark-theme .toolbar button:hover {
    background-color: #81a1c1;
}

body.dark-theme #footer {
    background: #3b4252;
    color: #d8dee9;
    border-top: 1px solid #4c566a;
}

body.dark-theme #footer button {
    background-color: #4c566a;
    color: #d8dee9;
}

body.dark-theme #footer button:hover {
    background-color: #81a1c1;
}

body.light-theme #footer {
    background: #d8dee9 !important;
    color: #2e3440 !important;
    border-top: 1px solid #4c566a !important;
}

body.light-theme #footer button {
    background-color: #4c566a !important;
    color: #eceff4 !important;
}

body.light-theme #footer button:hover {
    background-color: #5e81ac !important;
}

body.light-theme .tile {
    background: rgba(255, 255, 255, 0.8);
    border-bottom: 3px solid rgba(0, 0, 0, 0.2);
    border-left: 2px outset rgba(0, 0, 0, 0.2);
    box-shadow: -20px 20px 20px rgba(0, 0, 0, 0.1);
    color: #2e3440;
}

body.light-theme .tile h3 {
    color: #2e3440;
    text-shadow: none;
}

body.light-theme .tile p {
    color: #4c566a;
}

body.dark-theme .tile {
    background: rgba(198, 198, 198, 0.1);
    border-bottom: 3px solid rgba(255, 255, 255, 0.44);
    border-left: 2px outset rgba(255, 255, 255, 0.545);
    box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.28);
    color: white;
}

body.dark-theme .tile h3 {
    color: rgb(218, 244, 237);
    text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
}

.tile {
    width: 130px; 
    height: 100px;
    padding: 0.5rem;
    background: rgba(198, 198, 198, 0.34);
    border-radius: 8px;
    backdrop-filter: blur(5px);
    border-bottom: 3px solid rgba(255, 255, 255, 0.44);
    border-left: 2px outset rgba(255, 255, 255, 0.545);
    box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.28);
    transform: skewX(10deg);
    transition: 0.4s;
    overflow: hidden;
    color: white;
    cursor: pointer;
    margin: 10px;
}
.tile-row {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.tile-row .tile {
    flex: 1; 
}
.tile:hover {
    height: 100px; 
    transform: skew(0deg);
}

.tile h3 {
    text-align: center;
    margin: 1rem;
    color: rgb(218, 244, 237);
    text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
}

.tile p {
    margin: 10px 0 0;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
}

.align {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-self: flex-start;
}

.red {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ff605c;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
}

.yellow {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffbd44;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
}

.green {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #00ca4e;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
}

#footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #2e3440;
    color: #d8dee9;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid #4c566a;
    z-index: 1000;
}

#footer #settings-button {
    margin-left: 10px;
    background-color: #4c566a;
    color: #eceff4;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    padding: 5px 10px;
}

#footer #settings-button:hover {
    background-color: #5e81ac;
}

#notes-panel {
    flex: 1;
    padding: 20px;
    background: #eceff4;
    color: #2e3440;
    display: flex;
    flex-direction: column;
}

#notes-panel h1 {
    margin-bottom: 20px;
}

#notes-panel #add-note {
    margin-bottom: 20px;
    padding: 10px;
    background-color: #4c566a;
    color: #eceff4;
    border: none;
    cursor: pointer;
    border-radius: 3px;
}

#notes-panel #add-note:hover {
    background-color: #5e81ac;
}

#notes-panel #note-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

#notes-panel #note-list li {
    padding: 10px;
    background: #d8dee9;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#notes-panel #note-list li:hover {
    background: #c1c8d7;
}

#notes-panel #note-list li button {
    background: none;
    border: none;
    cursor: pointer;
    color: #4c566a;
}

#notes-panel #note-list li button:hover {
    color: #5e81ac;
}

#sidebar {
    width: 170px !important;
    background: #2e3440;
    color: #d8dee9;
    padding: 10px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
}

#sidebar button:not(#settings-button) {
    width: 160px !important; 
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: none;
    padding: 0px 15px;
    border-radius: 5px;
    background-color: rgb(49, 49, 83);
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 10px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    box-shadow: 0px 0px 0px 2px rgb(212, 209, 255);
}

#sidebar button:hover {
    background-color: rgb(58, 58, 94);
}

#sidebar button:active {
    transform: scale(0.95);
}

.filePage {
    width: 50%;
    height: auto;
    position: absolute;
    z-index: 2;
    transition: all 0.3s ease-out;
}

#sidebar button:hover .filePage {
    transform: translateY(-5px);
}

#sidebar button:hover .fileFront {
    transform: rotateX(30deg);
}
.folderContainer {
    width: 40px; 
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
}

.fileBack {
    z-index: 1;
    width: 100%; 
    height: auto;
}

.fileFront {
    width: 100%;
    height: auto;
    position: absolute;
    z-index: 3;
    opacity: 0.95;
    transform-origin: bottom;
    transition: all 0.3s ease-out;
}

#window-controls-frame {
    position: fixed; 
    top: 0; 
    right: 0;
    z-index: 1001;
    padding: 10px; 
    background: rgba(255, 255, 255, 0.8); 
    border-radius: 0 0 0 10px; 
    backdrop-filter: blur(5px); 
}

#window-controls {
    display: flex;
    gap: 8px;
}

.window-control.close {
    background-color: #ff605c;
}

.window-control.close:hover {
    background-color: #ff3b30;
}

.window-control.minimize {
    background-color: #ffbd44;
}

.window-control.minimize:hover {
    background-color: #ffa500;
}

.window-control.maximize {
    background-color: #00ca4e;
}

.window-control.maximize:hover {
    background-color: #00a344;
}

#settings-container {
    position: fixed; 
    bottom: 20px;
    left: 20px; 
    z-index: 1000; 
}

#settings-frame {
    position: absolute; 
    bottom: 20px; 
    left: 20px; 
    z-index: 1000; 
}

#settings-button {
    width: 45px !important; 
    height: 45px !important; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background-color: rgb(129, 110, 216);
    border-radius: 10px;
    cursor: pointer;
    border: none;
    box-shadow: 0px 0px 0px 2px rgb(212, 209, 255);
    margin: 0 !important; 
    padding: 0 !important; 
}

.bar {
    width: 50%;
    height: 2px;
    background-color: rgb(229, 229, 229);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 2px;
}

.bar::before {
    content: "";
    width: 2px;
    height: 2px;
    background-color: rgb(126, 117, 255);
    position: absolute;
    border-radius: 50%;
    border: 2px solid white;
    transition: all 0.3s;
    box-shadow: 0px 0px 5px white;
}

.bar1::before {
    transform: translateX(-4px);
}

.bar2::before {
    transform: translateX(4px);
}

.setting-btn:hover .bar1::before {
    transform: translateX(4px);
}

.setting-btn:hover .bar2::before {
    transform: translateX(-4px);
}

body.light-theme #settings-button {
    background-color: #eceff4 !important;
    box-shadow: 0px 0px 0px 2px rgba(212, 209, 255, 0.5) !important; 
}

body.light-theme #settings-button .bar {
    background-color: #4c566a !important; 
}

body.light-theme #settings-button .bar::before {
    background-color: #4c566a !important; 
    border: 2px solid #eceff4 !important; 
}

body.light-theme #settings-button:hover {
    background-color: #d8dee9 !important; 
}

body.light-theme #settings-button:hover .bar {
    background-color: #5e81ac !important;
}

body.light-theme #settings-button:hover .bar::before {
    background-color: #5e81ac !important; 
}

.button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
}

.button {
    --border-right: 6px;
    --text-stroke-color: rgba(255, 255, 255, 0.6);
    --animation-color: #37FF8B; 
    --fs-size: 2em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Arial";
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
    background: transparent !important;
    border: none !important;
}

.hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
}

.button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
}

body.light-theme .button {
    --text-stroke-color: rgba(0, 0, 0, 0.6); 
    --animation-color: black; 
}

body.light-theme .button .hover-text {
    color: black; 
    border-right: 6px solid white;
}

body.light-theme .button .actual-text {
    color: black;  
}

body.dark-theme .button {
    --text-stroke-color: rgba(255, 255, 255, 0.6);  
    --animation-color: white;  
}

body.dark-theme .button .hover-text {
    color: white;  
    border-right: 6px solid black;  
}

body.dark-theme .button .actual-text {
    color: white;  
}

#modal, #versions-modal, #rename-modal, #alert-modal {
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 0;
    transform: scale(0.9);
}

#modal.active, #versions-modal.active, #rename-modal.active, #alert-modal.active {
    opacity: 1;
    transform: scale(1);
}

.settings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
}

.settings-card {
    background: #d8dee9;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
}

.settings-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.settings-card-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.settings-card-header .icon {
    font-size: 24px;
    margin-right: 10px;
}

.icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
}

.settings-card-header h3 {
    margin: 0;
    font-size: 18px;
    color: #2e3440;
}

.settings-card-body {
    font-size: 14px;
    color: #4c566a;
}

.settings-card-body label {
    display: block;
    margin-bottom: 10px;
}

.settings-card-body input[type="text"] {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #4c566a;
    background: #eceff4;
    color: #2e3440;
    margin-top: 5px;
}

.settings-card-body button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #4c566a;
    color: #eceff4;
    border: none;
    cursor: pointer;
    border-radius: 3px;
}

.settings-card-body button:hover {
    background-color: #5e81ac;
}

.settings-card-body select {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #4c566a;
    background: #eceff4;
    color: #2e3440;
    margin-top: 5px;
}

.settings-card-body select {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #4c566a;
    background: #eceff4;
    color: #2e3440;
}

body.dark-theme .settings-card {
    background: #4c566a;
    color: #d8dee9;
}

body.dark-theme .settings-card-header h3 {
    color: #d8dee9;
}

body.dark-theme .settings-card-body {
    color: #d8dee9;
}

body.dark-theme .settings-card-body select {
    background: #3b4252;
    color: #d8dee9;
    border-color: #81a1c1;
}

#modal {
    position: fixed;
    top: 50%;  
    left: 50%;  
    transform: translate(-50%, -50%) scale(0.9);  
    opacity: 0;  
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 1000;
}

#modal.active {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);  
}

@keyframes openFromButton {
    0% {
        transform: translate(-100%, -100%) scale(0.5);
        opacity: 0;
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
}

#modal.active {
    animation: openFromButton 0.3s ease;
}

.file-explorer {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
}
.notes-container {
    display: flex;
    flex-direction: row;
    gap: 10px;  
    padding: 10px;  
}

.column {
    flex: 1;
}

#folder-column {
    max-width: 200px;  
}

#file-column {
    flex: 2;
}

.file-item {
    display: flex;
    align-items: center;
    gap: 8px;  
    padding: 8px;  
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}
#folder-view {
    display: flex;
    flex-direction: column;
    gap: 5px;  
}

#notes-in-folder {
    display: flex;
    flex-direction: column;
    gap: 10px;  
    margin-top: 10px;  
}

#folder-title {
    margin-bottom: 10px;  
}
.file-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.file-icon {
    width: 24px;  
    height: 24px;
}

.delete-button {
    margin-left: auto;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.delete-button svg {
    width: 16px;
    height: 16px;
    fill: #ff605c;
}

.delete-button:hover svg {
    fill: #ff3b30;
}

.file-name {
    font-size: 14px;
    word-wrap: break-word;
}
#add-note {
    width: 160px;  
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #4c566a;
    padding: 0px 15px;
    border-radius: 5px;
    background-color: #eceff4;
    color: #2e3440;
    font-family: 'Arial', sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 10px;
}

#add-note:hover {
    background-color: #d8dee9;
    border-color: #5e81ac;
}

#add-folder {
    width: 160px;  
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #4c566a;
    padding: 0px 15px;
    border-radius: 5px;
    background-color: #eceff4;
    color: #2e3440;
    font-family: 'Arial', sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 10px;
}

#add-folder:hover {
    background-color: #d8dee9;
    border-color: #5e81ac;
}
.rename-input {
    border: 1px solid #4c566a;
    border-radius: 5px;
    padding: 5px;
    font-size: 14px;
    font-family: 'Arial', sans-serif;
    outline: none;
    width: 100%;
    background-color: #eceff4;
    color: #2e3440;
}

.rename-input:focus {
    border-color: #5e81ac;
}

.folder-item.active {
    border: 2px solid #5e81ac;  
    border-radius: 5px;
    background-color: rgba(94, 129, 172, 0.1);  
}

.note-item.active {
    border: 2px solid #81a1c1;  
    border-radius: 5px;
    background-color: rgba(129, 161, 193, 0.1);  
}
#title-bar {
    -webkit-app-region: drag;  
    height: 30px;
    background-color: #2e3440;
    color: #d8dee9;
    display: flex;
    align-items: center;
    justify-content: space-between;  
    padding: 0 10px;  
    position: fixed;  
    top: 0;
    left: 0;
    right: 0;
    z-index: 1002;
}
#content-wrapper {
    margin-top: 30px; 
    height: calc(100vh - 30px);  
    overflow: hidden; 
}

#container {
    height: 100%;  
}
#title {
    font-size: 14px;
    font-weight: bold;
}

#window-controls {
    display: flex;
    gap: 8px; 
    -webkit-app-region: no-drag; 
}

.window-control {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s;
}

.window-control.minimize {
    background-color: #ffbd44; 
}

.window-control.minimize:hover {
    background-color: #ffa500;
}

.window-control.maximize {
    background-color: #00ca4e; 
}

.window-control.maximize:hover {
    background-color: #00a344;
}

.window-control.close {
    background-color: #ff605c; 
}

.window-control.close:hover {
    background-color: #ff3b30;
}

#tasks-panel {
    flex: 1;
    padding: 20px;
    background: #eceff4;
    color: #2e3440;
    display: flex;
    flex-direction: column;
}

.tasks-container {
    display: flex;
    gap: 20px;
}

.task-column {
    flex: 1;
    background: #d8dee9;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.task-list {
    margin-top: 10px;
}

.task-item h3 {
    margin: 0;
    font-size: 16px;
}

.task-item p {
    margin: 5px 0;
    font-size: 14px;
    color: #4c566a;
}

.task-item small {
    display: block;
    font-size: 12px;
    color: #5e81ac;
}

#task-form-frame {
    max-width: 250px;  
    background: #eceff4;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-left: 20px; 
}

#task-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#task-form input, #task-form textarea, #task-form select {
    width: 90%;  
    padding: 8px;  
    margin-bottom: 10px;  
    border: 1px solid #4c566a;  
    border-radius: 5px;  
    font-size: 14px; 
}

#task-form textarea {
    height: 80px; 
    resize: vertical; 
    margin-left: 0;
}

#task-form button {
    width: 100%; 
    padding: 8px;  
    margin-bottom: 10px; 
}

#task-form button:hover {
    background-color: #5e81ac;
}

.project-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.task-item:hover {
    background: rgba(94, 129, 172, 0.1);
}

body.dark-theme .task-editor-modal {
    background: #3b4252;
    color: #d8dee9;
}

.task-editor-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #eceff4;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    z-index: 10000;
    min-width: 400px;
}

.project-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.modal-buttons {
    justify-content: center !important;
    gap: 20px;
}

.task-editor-modal textarea {
    width: 85%;
    margin: 0 auto;
    max-height: 150px;
}

.project-item.active, .task-item.active {
    border: 2px solid #5e81ac;
    border-radius: 5px;
    background-color: rgba(94, 129, 172, 0.1);
}
.tasks-container {
    display: flex;
    gap: 20px; 
    padding: 20px;
}

.column {
    flex: 1; 
    background: #d8dee9;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#project-column {
    max-width: 200px;
}

#task-column {
    flex: 2; 
}

.task-columns {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

.task-column {
    flex: 1;
    background: #eceff4;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.task-list {
    margin-top: 10px;
}

.task-item {
    background: #d8dee9;
    padding: 15px;
    margin: 10px 0;
    border-radius: 8px;
    border-left: 4px solid;
    pointer-events: auto !important;
    position: relative;
    user-select: none;
    cursor: pointer;
    transition: all 0.2s;
}

.task-item h3 {
    margin: 0;
    font-size: 16px;
}

.task-item small {
    display: block;
    font-size: 12px;
    color: #5e81ac;
}

.task-status-select {
    margin-top: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #4c566a;
    background: #eceff4;
    color: #2e3440;
}

.task-details-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #eceff4;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    border-radius: 10px;
    max-width: 400px;
    width: 90%;
}

.task-details-modal h3 {
    margin-top: 0;
    color: #2e3440;
}

.task-details-modal p {
    margin: 10px 0;
    color: #4c566a;
}

.task-details-modal small {
    display: block;
    margin: 5px 0;
    color: #5e81ac;
}

.task-details-modal button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #4c566a;
    color: #eceff4;
    border: none;
    cursor: pointer;
    border-radius: 3px;
}

.task-details-modal button:hover {
    background-color: #5e81ac;
}
.task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.project-badge {
    white-space: nowrap; 
}

.add-task-button {
    background-color: #4c566a;
    color: #eceff4;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add-task-button:hover {
    background-color: #5e81ac;
}
#status-filter {
    margin-right: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #4c566a;
    background: #eceff4;
    color: #2e3440;
    cursor: pointer;
}

#status-filter:hover {
    background-color: #d8dee9;
}

.context-menu {
    background: #fff;
    border: 1px solid #4c566a;
    border-radius: 6px;
    border-radius: 5px;
    padding: 10px; 
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 1000;
    min-width: 150px; 
    margin: 0; 
    box-sizing: border-box;
    padding: 8px 0;
}

.context-menu select,
.context-menu button {
    display: block;
    width: 100%; 
    margin: 0 0 8px 0; 
    padding: 10px 12px; 
    font-size: 14px;
    border: 1px solid #4c566a;
    border-radius: 5px;  
    background: #d8dee9;
    color: #2e3440;
    cursor: pointer;
    text-align: left; 
    box-sizing: border-box; 
}

.context-menu button:hover {
    background: #5e81ac;
    color: #eceff4;
}

.context-menu button:last-child {
    margin-bottom: 0;
}
body.dark-theme .file-item {
    background-color: #3b4252;
    color: #d8dee9;
}

body.dark-theme .file-item:hover {
    background-color: #4c566a;
}

body.dark-theme .file-name {
    color: #d8dee9;
}

body.dark-theme .delete-button svg {
    fill: #d8dee9;
}

body.dark-theme .delete-button:hover svg {
    fill: #ff3b30;
}
body.dark-theme #add-folder, body.dark-theme #add-note {
    background-color: #4c566a;
    color: #d8dee9;
    border-color: #81a1c1;
}

body.dark-theme #add-folder:hover, body.dark-theme #add-note:hover {
    background-color: #5e81ac;
    border-color: #81a1c1;
}
body.dark-theme #folder-title, body.dark-theme #notes-panel h1 {
    color: #d8dee9;
}

body.dark-theme #notes-panel {
    background-color: #2e3440;
    color: #d8dee9; 
}
body.dark-theme #notes-panel h1 {
    color: #d8dee9; 
}

body.dark-theme .tile p {
    color: #d8dee9; 
}

body.dark-theme #add-folder, body.dark-theme #add-note {
    background-color: #4c566a; 
    color: #d8dee9; 
    border-color: #81a1c1; 
}

body.dark-theme #add-folder:hover, body.dark-theme #add-note:hover {
    background-color: #5e81ac; 
    border-color: #81a1c1; 
}
#theme-select {
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #4c566a;
    background: #eceff4;
    color: #2e3440;
    margin-bottom: 10px;
}

#apply-theme {
    width: 100%;
    padding: 5px 10px;
    background-color: #4c566a;
    color: #eceff4;
    border: none;
    cursor: pointer;
    border-radius: 3px;
}

#apply-theme:hover {
    background-color: #5e81ac;
}

.restart-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000; 
}

.restart-modal-content {
    background: #eceff4;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 400px;
    width: 90%;
}

.restart-modal-content h2 {
    margin-top: 0;
    color: #2e3440;
}

.restart-modal-content p {
    margin: 10px 0;
    color: #4c566a;
}

.restart-modal-content button {
    margin: 10px 5px;
    padding: 5px 10px;
    background-color: #4c566a;
    color: #eceff4;
    border: none;
    cursor: pointer;
    border-radius: 3px;
}

.restart-modal-content button:hover {
    background-color: #5e81ac;
}

body.dark-theme #folder-column {
    background-color: #3b4252; 
    color: #d8dee9; 
}

body.dark-theme #file-column {
    background-color: #3b4252; 
    color: #d8dee9; 
}

body.dark-theme .file-item {
    background-color: #4c566a; 
    color: #d8dee9; 
}

body.dark-theme .file-item:hover {
    background-color: #5e81ac; 
}

body.dark-theme .file-name {
    color: #d8dee9; 
}

body.dark-theme .delete-button svg {
    fill: #d8dee9; 
}

body.dark-theme .delete-button:hover svg {
    fill: #ff3b30; 
}

body.dark-theme #add-folder, body.dark-theme #add-note {
    background-color: #4c566a; 
    color: #d8dee9; 
    border-color: #81a1c1; 
}

body.dark-theme #add-folder:hover, body.dark-theme #add-note:hover {
    background-color: #5e81ac; 
    border-color: #81a1c1; 
}

body.dark-theme #folder-title, body.dark-theme #notes-panel h1 {
    color: #d8dee9; 
}

body.dark-theme .tile p {
    color: #d8dee9; 
}

body.dark-theme #tasks-panel {
    background-color: #2e3440; 
    color: #d8dee9; 
}

body.dark-theme .tasks-container {
    background-color: #2e3440; 
    color: #d8dee9; 
}

body.dark-theme .task-column {
    background-color: #3b4252; 
    color: #d8dee9; 
    border: 1px solid #4c566a; 
}

body.dark-theme .task-item {
    background-color: #4c566a; 
    color: #d8dee9; 
    border: 1px solid #5e81ac; 
}

body.dark-theme .task-item h3 {
    color: #d8dee9; 
}

body.dark-theme .task-item p {
    color: #d8dee9; 
}

body.dark-theme .task-item small {
    color: #81a1c1; 
}

body.dark-theme #task-form-frame {
    background-color: #3b4252; 
    color: #d8dee9; 
    border: 1px solid #4c566a; 
}

body.dark-theme #task-form input,
body.dark-theme #task-form textarea,
body.dark-theme #task-form select {
    background-color: #4c566a; 
    color: #d8dee9; 
    border: 1px solid #5e81ac; 
}

body.dark-theme #task-form button {
    background-color: #5e81ac; 
    color: #d8dee9; 
    border: 1px solid #81a1c1; 
}

body.dark-theme #task-form button:hover {
    background-color: #81a1c1; 
}

body.dark-theme .task-details-modal {
    background-color: #3b4252; 
    color: #d8dee9; 
    border: 1px solid #4c566a; 
}

body.dark-theme .task-details-modal h3 {
    color: #d8dee9; 
}

body.dark-theme .task-details-modal p {
    color: #d8dee9; 
}

body.dark-theme .task-details-modal small {
    color: #81a1c1; 
}

body.dark-theme .task-details-modal button {
    background-color: #5e81ac; 
    color: #d8dee9; 
    border: 1px solid #81a1c1; 
}

body.dark-theme .task-details-modal button:hover {
    background-color: #81a1c1; 
}

body.dark-theme .context-menu {
    color: #d8dee9; 
    background: #4c566a;
    border: 1px solid #5e81ac;
}

body.dark-theme .context-menu select,
body.dark-theme .context-menu button {
    background-color: #4c566a; 
    color: #d8dee9; 
    border: 1px solid #5e81ac; 
}

body.dark-theme .context-menu button:hover {
    background-color: #81a1c1; 
}

body.dark-theme select {
    background-color: #4c566a; 
    color: #d8dee9; 
    border: 1px solid #5e81ac;
}

body.dark-theme select:hover {
    background-color: #5e81ac; 
}

body.dark-theme select option {
    background-color: #3b4252; 
    color: #d8dee9; 
}

body.dark-theme select option:hover {
    background-color: #4c566a; 
}

body.dark-theme #project-column,
body.dark-theme #task-column {
    background: #3b4252 !important; 
    border: 1px solid #4c566a !important;  
}

body.dark-theme .project-item,
body.dark-theme .task-item {
    background: #4c566a !important; 
    color: #d8dee9 !important; 
    border: 1px solid #5e81ac !important; 
}

body.dark-theme #task-form-frame {
    background: #3b4252 !important; 
    border: 1px solid #4c566a !important;
}

body.dark-theme #task-form input,
body.dark-theme #task-form textarea,
body.dark-theme #task-form select {
    background: #4c566a !important;
    color: #d8dee9 !important;
    border: 1px solid #81a1c1 !important;
}

body.dark-theme .task-item small {
    color: #81a1c1 !important;
}

body.dark-theme #add-project {
    background: #4c566a !important;
    color: #d8dee9 !important;
    border: 1px solid #81a1c1 !important;
}

body.dark-theme #add-project:hover {
    background: #5e81ac !important;
}

body.dark-theme #notes-panel {
    background: #2e3440 !important; 
    color: #d8dee9 !important;
}

body.dark-theme #folder-column,
body.dark-theme #file-column {
    background: #3b4252 !important; 
    border: 1px solid #4c566a !important; 
}

body.dark-theme .file-item {
    background: #4c566a !important; 
    color: #d8dee9 !important;
    border: 1px solid #5e81ac !important; 
}

body.dark-theme .file-item:hover {
    background: #5e81ac !important; 
}

body.dark-theme #add-folder,
body.dark-theme #add-note {
    background: #4c566a !important; 
    color: #d8dee9 !important;
    border: 1px solid #81a1c1 !important;
}

body.dark-theme #add-folder:hover,
body.dark-theme #add-note:hover {
    background: #5e81ac !important;
    border-color: #81a1c1 !important;
}

body.dark-theme #folder-title,
body.dark-theme #notes-panel h1 {
    color: #d8dee9 !important; 
}

body.dark-theme .file-name {
    color: #d8dee9 !important; 
}

body.dark-theme .folder-item.active,
body.dark-theme .note-item.active {
    border: 2px solid #81a1c1 !important; 
    background: rgba(129, 161, 193, 0.1) !important;
}

body.dark-theme .delete-button svg {
    fill: #d8dee9 !important;
}

body.dark-theme .delete-button:hover svg {
    fill: #ff3b30 !important;
}
.folder-item.active {
    background: rgba(94, 129, 172, 0.1) !important;
    border: 2px solid #5e81ac !important;
}
.selected-folder {
    margin-right: 15px;
    color: #81a1c1;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
    background: rgba(129, 161, 193, 0.1);
}

body.dark-theme .selected-folder {
    color: #d8dee9;
    background: rgba(94, 129, 172, 0.1);
}

.folder-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 15px;
}

#selected-folder-name {
    color: #5e81ac;
    font-weight: bold;
    padding: 5px 10px;
    background: rgba(94, 129, 172, 0.1);
    border-radius: 5px;
}

body.dark-theme #selected-folder-name {
    color: #81a1c1;
    background: rgba(129, 161, 193, 0.1);
}

.toolbar {
    gap: 8px;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 15px;
    background: #d8dee9 !important;
    border: 1px solid #4c566a;
    display: flex;
    align-items: center; 
    flex-wrap: nowrap; 
    overflow: hidden; 
}

.toolbar button {
    position: relative;
    overflow: hidden;
    transition: 
        transform 0.2s ease,
        background 0.2s ease,
        box-shadow 0.2s ease;
}

.toolbar button::before {
    content: none; 
}

.toolbar button:hover::before {
    left: 100%;
}

body.light-theme .toolbar {
    background: #d8dee9 !important;
    border-color: #4c566a;
}

body.light-theme .toolbar button {
    background: #4c566a;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

body.light-theme .toolbar button:hover {
    background: #5e81ac !important;
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0,0,0,0.15);
}

.toolbar button:active {
    transform: translateY(1px) !important;
    box-shadow: none !important;
}

body.dark-theme .toolbar {
    background: #3b4252 !important;
    border-color: #81a1c1;
}

body.dark-theme .toolbar button {
    background: #4c566a;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

body.dark-theme .toolbar button:hover {
    background: #81a1c1;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(255,255,255,0.1);
}

.toolbar button img {
    width: 20px;
    height: 20px;
    filter: invert(1);
}

.save-status {
    margin-right: auto;
    margin-left: 10px;
    font-size: 12px;
    opacity: 0.8;
    transition: opacity 0.3s;
    flex-shrink: 0; 
    white-space: nowrap; 
}

.save-status.saved {
    color: #00ca4e;
}

.save-status.unsaved {
    color: #ffbd44;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

#add-folder,
#add-note,
#add-project,
#save-task,
#cancel-task,
#add-task {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease;
    height: 36px; 
    min-width: 120px; 
    border: 1px solid;
    box-sizing: border-box;
}

body.light-theme #add-folder,
body.light-theme #add-note,
body.light-theme #add-project,
body.light-theme #save-task,
body.light-theme #cancel-task,
body.light-theme #add-task {
    background: #4c566a;
    color: #eceff4;
    border-color: #4c566a;
}

body.light-theme #add-folder:hover,
body.light-theme #add-note:hover,
body.light-theme #add-project:hover,
body.light-theme #save-task:hover,
body.light-theme #cancel-task:hover,
body.light-theme #add-task:hover {
    background: #5e81ac;
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0,0,0,0.15);
}

body.dark-theme #add-folder,
body.dark-theme #add-note,
body.dark-theme #add-project,
body.dark-theme #save-task,
body.dark-theme #cancel-task,
body.dark-theme #add-task {
    background: #4c566a;
    color: #d8dee9;
    border-color: #81a1c1;
}

body.dark-theme #add-folder:hover,
body.dark-theme #add-note:hover,
body.dark-theme #add-project:hover,
body.dark-theme #save-task:hover,
body.dark-theme #cancel-task:hover,
body.dark-theme #add-task:hover {
    background: #81a1c1;
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0,0,0,0.3);
}

#add-task {
    min-width: 36px; 
    padding: 8px;
    border-radius: 50%;
    font-size: 18px;
}

#cancel-task {
    background: transparent !important;
    border: 1px solid currentColor !important;
}

body.light-theme #cancel-task {
    color: #4c566a;
}

body.dark-theme #cancel-task {
    color: #81a1c1;
}

#add-folder:active,
#add-note:active,
#add-project:active,
#save-task:active,
#cancel-task:active,
#add-task:active {
    transform: translateY(1px) !important;
    box-shadow: none !important;
}

.button-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
}

body.light-theme .button-icon {
    fill: #eceff4;
}

body.dark-theme .button-icon {
    fill: #d8dee9;
}

#save-task {
    background: transparent !important;
    border: 1px solid currentColor !important;
    transition: all 0.2s ease !important;
}

body.light-theme #save-task {
    color: #4c566a !important;
    border-color: #4c566a !important;
}

body.light-theme #save-task:hover {
    background: rgba(76, 86, 106, 0.1) !important;
    color: #2e3440 !important;
}

body.dark-theme #save-task {
    color: #81a1c1 !important;
    border-color: #81a1c1 !important;
}

body.dark-theme #save-task:hover {
    background: rgba(129, 161, 193, 0.1) !important;
    color: #d8dee9 !important;
}

#save-task:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0,0,0,0.15);
}

#save-task:active {
    transform: translateY(1px) !important;
    box-shadow: none !important;
}

body.dark-theme #task-title,
body.dark-theme #task-description {
    color: #d8dee9 !important;
}

body.dark-theme #task-title::placeholder,
body.dark-theme #task-description::placeholder {
    color: #81a1c1 !important;
}
body.dark-theme #status-filter {
    background: #4c566a;
    color: #d8dee9;
    border: 1px solid #81a1c1;
}

body.dark-theme #status-filter option {
    background: #3b4252;
    color: #d8dee9;
}
#modal,
#rename-modal,
#versions-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    max-width: 90%;
}

.modal-content {
    width: 100%;
    padding: 20px;
}

#calendar-panel {
    flex: 1;
    padding: 20px;
    display: block;
    flex-direction: column;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.3s ease-out;
    max-width: 800px;
    margin: 0 auto;
    padding: 15px;
    scroll-behavior: smooth;
    overflow: visible !important
}

.weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    margin-bottom: 8px;
    font-size: 12px;
    color: #4c566a;
    padding: 0 4px;
}

body.dark-theme .weekdays {
    color: #81a1c1;
}

#calendar-panel.active {
    display: flex;
    opacity: 1;
    transform: translateY(0);
}

.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
    padding: 4px;
    flex: 1;
    margin-top: 20px;
    min-height: 500px;
}

.calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.calendar-day {
    aspect-ratio: 1;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    min-width: 35px;
    min-height: 35px;
    padding: 4px;
    font-size: 12px;
    border-radius: 5px;
}

.day-number {
    position: absolute;
    top: 3px;
    left: 3px;
    font-weight: bold;
}

body.light-theme .calendar-day {
    background: #d8dee9;
    color: #2e3440;
}

body.dark-theme .calendar-day {
    background: #4c566a;
    color: #d8dee9;
    border: 1px solid #4c566a;
}

.calendar-day.prev-month {
    opacity: 0.5;
}

.calendar-day.has-tasks {
    font-weight: bold;
}

.task-badge {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    background: #ff605c;
    color: white;
    border-radius: 50%;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    font-size: 9px;
    top: 2px;
    right: 2px;
}

.calendar-day-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #eceff4;
    width: 500px; 
    max-width: 600px;
    max-height: 80vh;
    border-radius: 10px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    overflow-y: auto;
    overflow-x: hidden; 
    max-width: 95vw; 
}

body.dark-theme .calendar-day-modal {
    background: #3b4252;
    color: #d8dee9;
}

.calendar-context-menu {
    position: fixed;
    background: #eceff4;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    z-index: 1000;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

body.dark-theme .calendar-context-menu {
    background: #4c566a;
}

.calendar-task-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #eceff4;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    max-width: 90%;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

body.dark-theme .calendar-task-modal {
    background: #3b4252;
    color: #d8dee9;
}

.calendar-day:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

@media (max-width: 768px) {
    .calendar-grid {
        grid-template-columns: repeat(5, 1fr);
        min-width: 30px;
        min-height: 30px;
        font-size: 12px;
        padding: 4px;
    }
    
    .task-badge {
        width: 14px;
        height: 14px;
    }
}

@media (max-width: 480px) {
    .calendar-day {
        min-width: 28px;
        min-height: 28px;
        font-size: 11px;
    }
    
    .weekdays {
        font-size: 11px;
    }
}

@media (min-width: 1600px) {
    #calendar-panel {
        max-width: 1000px;
    }
    
    .calendar-day {
        min-width: 45px;
        min-height: 45px;
        font-size: 13px;
    }
}

#month-year {
    font-size: 1.2em;
    margin: 10px 0;
    padding: 0 15px;
}
#calendar-panel {
    overflow-y: auto;
    max-height: calc(100vh - 150px);
}

#calendar-panel::-webkit-scrollbar {
    display: none;
}


.calendar-day.prev-month {
    opacity: 0.3;
    pointer-events: none;
}

.calendar-day.current-day {
    box-shadow: 0 0 0 2px #5e81ac;
}

body.dark-theme .calendar-day.current-day {
    box-shadow: 0 0 0 2px #81a1c1;
}

.current-day {
    background: #5e81ac !important;
    color: white !important;
    position: relative;
}

.current-day::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
}
body.dark-theme .current-day {
    background: #81a1c1 !important;
    color: #2e3440 !important;
}

#calendar-panel {
    display: none; 
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
}

#calendar-panel.active {
    display: block;
    opacity: 1;
    transform: translateY(0);
}

.calendar-controls {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
}

.calendar-controls h1 {
    margin: 0 0 15px 0;
    font-size: 1.5em;
}

.selectors {
    display: flex;
    gap: 10px;
    justify-content: flex-end; 
    flex-wrap: wrap;
}
.selectors select {
    order: 2; 
    min-width: 150px;
}
#calendar-status-filter {
    order: 1; 
    margin-left: auto; 
}

select {
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #4c566a;
    background: #d8dee9;
    cursor: pointer;
    font-size: 14px;
}

body.dark-theme select {
    background: #4c566a;
    color: #d8dee9;
    border-color: #81a1c1;
}

.task-status {
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 2px;
}

.status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
}

.status-todo { background: #ffbd44; }
.status-in-progress { background: #5e81ac; }
.status-done { background: #00ca4e; }

.task-input {
    background: #d8dee9;
    color: #2e3440;
    border: 1px solid #4c566a;
    padding: 8px;
    border-radius: 6px;
    width: 100%;
    box-sizing: border-box;
}

body.dark-theme .task-input {
    background: #4c566a;
    color: #d8dee9;
    border-color: #81a1c1;
}

.task-fields {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin: 15px 0;
}

.modal-buttons {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

.task-indicator {
    background: none !important;
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
    box-shadow: none !important;
    display: flex;
    gap: 4px;
    align-items: center;
    margin: 2px 0;
    padding: 3px;
    border-radius: 4px;
    background: rgba(0,0,0,0.05);
}

body.dark-theme .task-indicator {
    background: rgba(255,255,255,0.05);
}

.end-date {
    font-size: 0.75rem;
    color: #4c566a;
    white-space: nowrap;
}

body.dark-theme .end-date {
    color: #d8dee9;
}

.task-indicator:hover .end-date {
    display: block;
}
.task-status-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
}

.status-dot.todo { background: #ffbd44; }
.status-dot.in-progress { background: #5e81ac; }
.status-dot.done { background: #00ca4e; }

.task-item.todo { border-color: #ffbd44; }
.task-item.in-progress { border-color: #5e81ac; }
.task-item.done { border-color: #00ca4e; }

.project-badge {
    background: #4c566a;
    color: #eceff4;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.8em;
}

.task-indicator.last-day {
    border: 2px solid #ff605c;
    border-radius: 4px;
    padding: 2px;
}
.task-period {
    font-size: 0.9em;
    color: #4c566a;
    margin-top: 5px;
}

body.dark-theme .task-period {
    color: #81a1c1;
}
.task-item p {
    margin: 8px 0;
    color: #4c566a;
    font-size: 14px;
}

.task-priority {
    font-size: 12px;
    color: #5e81ac;
    margin-top: 5px;
}

body.dark-theme .task-item p {
    color: #d8dee9;
}

body.dark-theme .task-priority {
    color: #81a1c1;
}
.calendar-day-modal .task-list {
    max-width: 700px;
    margin: 0 auto; 
}

.calendar-day-modal .task-item {
    width: 100%;
    max-width: 460px; 
    padding: 12px;
    box-sizing: border-box;
    margin-bottom: 10px;
    background: #d8dee9;
    border-radius: 8px;
    border-left: 4px solid #5e81ac;
}

.calendar-day-modal .task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.calendar-day-modal .project-badge {
    font-size: 0.8em;
    padding: 2px 8px;
    margin-left: 10px;
}

.calendar-day-modal .task-period {
    font-size: 0.85em;
    margin: 5px 0;
}
@media (max-width: 480px) {
    .calendar-day-modal .task-list {
        max-width: 300px;
    }
    
    .calendar-day-modal .task-item {
        max-width: 280px;
        padding: 10px;
    }
}

.end-date {
    color: #ff605c;
    font-size: 0.9em;
    margin-right: 10px;
}


.deadline-info {
    display: flex;
    align-items: center;
    margin-top: 5px;
}

.task-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.priority-badge {
    font-size: 0.85em;
    color: #5e81ac;
    padding: 3px 8px;
    border-radius: 12px;
    background: rgba(94, 129, 172, 0.1);
}

body.dark-theme .end-date {
    color: #ffbd44;
}


body.dark-theme .priority-badge {
    color: #81a1c1;
    background: rgba(129, 161, 193, 0.1);
}

.end-task-indicator {
    position: absolute;
    bottom: 2px;
    right: 2px;
}

.end-dot {
    width: 8px;
    height: 8px;
    background: #ff605c;
    border-radius: 50%;
    box-shadow: 0 0 0 2px rgba(255, 96, 92, 0.3);
}

body.dark-theme .end-dot {
    background: #ffbd44;
    box-shadow: 0 0 0 2px rgba(255, 189, 68, 0.3);
}

.task-section {
    margin: 20px 0;
    border-top: 1px solid #e0e0e0;
    padding-top: 15px;
}

.task-section h4 {
    color: #5e81ac;
    margin: 0 0 10px 0;
    font-size: 1.1em;
}

body.dark-theme .task-section h4 {
    color: #81a1c1;
}

.task-section:first-child {
    border-top: none;
    padding-top: 0;
}
.task-indicator.ending-task {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 2px 0;
}

.status-dot.ending {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ff605c;
    box-shadow: 0 0 0 2px rgba(255, 96, 92, 0.3);
}

body.dark-theme .status-dot.ending {
    background: #ffbd44;
    box-shadow: 0 0 0 2px rgba(255, 189, 68, 0.3);
}

.task-item * {
    pointer-events: auto !important;
}

.delete-task, .edit-task {
    pointer-events: auto !important;
}

.task-details-modal {
    user-select: text;
    -webkit-user-select: text;
}

.form-row {
    margin-bottom: 15px;
}

.form-row label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
}

.form-row.columns {
    display: flex;
    gap: 15px;
}

.form-row .col {
    flex: 1;
}


textarea {
    width: 100%;
    min-height: 80px;
    resize: vertical;
}

select {
    width: 100%;
    padding: 6px;
}

body.dark-theme #edit-task-priority,
body.dark-theme #edit-task-status {
    width: 120px !important; 
    min-width: 120px; 
}

#edit-task-priority,
#edit-task-status {
    width: 120px;
    flex-shrink: 0; 
}

 
.form-row.columns {
    gap: 10px !important;
}

.form-row .col {
    flex-basis: 140px !important;
    flex-grow: 0 !important;
}

body.dark-theme #edit-task-title {
    background: #4c566a !important;
    color: #d8dee9 !important;
    border: 1px solid #81a1c1 !important;
}

body.dark-theme input[type="date"] {
    background: #4c566a !important;
    color: #d8dee9 !important;
    border-color: #81a1c1 !important;
}

body.dark-theme input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-clear-button {
    display: none;
}


input[type="date"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.2s;
}

input[type="date"]::-webkit-calendar-picker-indicator:hover {
    opacity: 1;
}

#project-filter, 
#calendar-status-filter,
#task-status,
#task-priority {
    width: 180px !important;
    min-width: 180px !important;
    max-width: 180px !important;
    box-sizing: border-box;
}

.selectors {
    gap: 8px;
    align-items: center;
}

.selectors select {
    width: 180px !important;
    flex-shrink: 0;
}

.calendar-context-menu button {
    width: 180px !important;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

#weekly-tasks-list {
    max-height: auto; 
    overflow-y: hidden; 
    overflow-x: hidden; 
    padding-right: 10px; 
    margin-top: 10px; 
}

#weekly-tasks-list::-webkit-scrollbar {
    width: 6px; 
}

#weekly-tasks-list::-webkit-scrollbar-thumb {
    background-color: #4c566a; 
    border-radius: 3px;  
}

#weekly-tasks-list::-webkit-scrollbar-track {
    background-color: #d8dee9; 
}

body.dark-theme #weekly-tasks-list::-webkit-scrollbar-thumb {
    background-color: #81a1c1; 
}

body.dark-theme #weekly-tasks-list::-webkit-scrollbar-track {
    background-color: #3b4252; 
}

.weekly-task {
    padding: 8px;
    margin-bottom: 5px;
    background: #eceff4;
    border-radius: 5px;
    border-left: 4px solid #5e81ac;
    font-size: 14px;
    color: #2e3440;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

body.dark-theme .weekly-task {
    background: #4c566a;
    color: #d8dee9;
    border-left-color: #81a1c1;
}

.weekly-task span {
    flex-grow: 1;
    margin-right: 10px;
}

.weekly-task small {
    font-size: 12px;
    opacity: 0.8;
}

.priority-low { border-color: #00ca4e; }
.priority-medium { border-color: #ffbd44; }
.priority-high { border-color: #ff605c; }


body.dark-theme .weekly-task {
    background: rgba(76, 86, 106, 0.3);
}

body.dark-theme .context-menu {
    background: #3b4252 !important; 
    border: 1px solid #4c566a !important;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3) !important;
}

body.dark-theme .context-menu .status-select {
    background: #4c566a !important;
    color: #d8dee9 !important;
    border: 1px solid #81a1c1 !important;
}

body.dark-theme .context-menu .delete-task {
    background: #4c566a !important;
    color: #d8dee9 !important;
    border: 1px solid #81a1c1 !important;
}

body.dark-theme .context-menu .status-select:hover,
body.dark-theme .context-menu .delete-task:hover {
    background: #5e81ac !important;
    border-color: #88c0d0 !important;
}

body.dark-theme .context-menu .status-select option {
    background: #3b4252 !important;
    color: #d8dee9 !important;
}

body.dark-theme .context-menu {
    background: #3b4252 !important; 
    border: 1px solid #4c566a !important;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3) !important;
}

body.dark-theme .context-menu .status-select {
    background: #4c566a !important;
    color: #d8dee9 !important;
    border: 1px solid #81a1c1 !important;
}

body.dark-theme .context-menu .delete-task {
    background: #4c566a !important;
    color: #d8dee9 !important;
    border: 1px solid #81a1c1 !important;
}

body.dark-theme .context-menu .status-select:hover,
body.dark-theme .context-menu .delete-task:hover {
    background: #5e81ac !important;
    border-color: #88c0d0 !important;
}

body.dark-theme .context-menu .status-select option {
    background: #3b4252 !important;
    color: #d8dee9 !important;
}

body.dark-theme #footer {
    background: #2e3440 !important;
    border-top-color: #3b4252 !important;
}

body.light-theme #add-folder,
body.light-theme #add-note {
    background-color: #d8dee9 !important;
    color: #2e3440 !important;
    border: 1px solid #4c566a !important;
}

body.light-theme #add-project,
body.light-theme .add-task-button,
body.light-theme .context-menu .delete-task,
body.light-theme .modal-buttons button {
    background: #d8dee9 !important;
    color: #2e3440 !important;
    border: 1px solid #4c566a !important;
}

body.dark-theme .calendar-context-menu button.add-task-to-date {
    background: #4c566a !important;
    color: #d8dee9 !important;
    border: 1px solid #81a1c1 !important;
}

body.dark-theme .calendar-context-menu button.add-task-to-date:hover {
    background: #5e81ac !important;
}

body.dark-theme .calendar-context-menu button {
    background: #4c566a;
    color: #d8dee9;
    border: 1px solid #81a1c1;
    transition: all 0.2s;
}

body.dark-theme .calendar-context-menu button:hover {
    background: #5e81ac !important;
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(255, 255, 255, 0.1);
}

body.dark-theme .calendar-context-menu button:active {
    transform: translateY(1px) !important;
}

body.dark-theme .calendar-context-menu button.close-context-menu {
    background: #bf616a !important;
    color: white !important;
}

#weekly-tasks-tile {
    display: flex;
    width: 320px;
    flex-direction: column;
    height: 200px; 
}

#next-week-tasks-tile {
    display: flex;
    width: 320px;
    flex-direction: column;
    height: 200px; 
}

.tasks-scroll-container {
    max-height: 200px; 
    overflow-y: auto; 
    overflow-x: hidden; 
    padding-right: 10px; 
    margin-top: 10px; 
    scroll-behavior: smooth; 
}

.tasks-scroll-container::-webkit-scrollbar {
    width: 6px; 
}

.tasks-scroll-container::-webkit-scrollbar-thumb {
    background-color: #4c566a; 
    border-radius: 3px;  
}

.tasks-scroll-container::-webkit-scrollbar-track {
    background-color: #d8dee9;
}

body.dark-theme .tasks-scroll-container::-webkit-scrollbar-thumb {
    background-color: #81a1c1; 
}

body.dark-theme .tasks-scroll-container::-webkit-scrollbar-track {
    background-color: #3b4252; 
}

.weekly-task.priority-low {
    background-color: #e6f4ea; 
    border-left: 4px solid #00ca4e; 
}

.weekly-task.priority-medium {
    background-color: #fff3e0; 
    border-left: 4px solid #ffbd44; 
}

.weekly-task.priority-high {
    background-color: #ffebee; 
    border-left: 4px solid #ff605c; 
}

body.dark-theme .weekly-task.priority-low {
    background-color: #1a3a1a; 
    border-left: 4px solid #00ca4e; 
}

body.dark-theme .weekly-task.priority-medium {
    background-color: #3a2a1a; 
    border-left: 4px solid #ffbd44;
}

body.dark-theme .weekly-task.priority-high {
    background-color: #3a1a1a; 
    border-left: 4px solid #ff605c; 
}

.scrollable-container {
    max-height: 300px; 
    overflow-y: auto; 
    overflow-x: hidden; 
    padding-right: 10px; 
    margin-top: 10px; 
    scroll-behavior: smooth; 
}

.scrollable-container::-webkit-scrollbar {
    width: 6px; 
}

.scrollable-container::-webkit-scrollbar-thumb {
    background-color: #4c566a; 
    border-radius: 3px;  
}

.scrollable-container::-webkit-scrollbar-track {
    background-color: #d8dee9; 
}

body.dark-theme .scrollable-container::-webkit-scrollbar-thumb {
    background-color: #81a1c1; 
}

body.dark-theme .scrollable-container::-webkit-scrollbar-track {
    background-color: #3b4252; 
}

#folder-view, 
#note-view, 
#project-view, 
#task-list,
#todo-tasks,
#in-progress-tasks,
#done-tasks {
    max-height: 400px; 
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 8px;
    margin-bottom: 15px;
    scrollbar-width: thin;
}

::-webkit-scrollbar {
    width: 6px;
    background: rgba(0,0,0,0.1);
}

::-webkit-scrollbar-thumb {
    background: #5e81ac;
    border-radius: 3px;
}

body.dark-theme ::-webkit-scrollbar-thumb {
    background: #81a1c1;
}

.priority-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    margin: 0 1px;
    background-clip: padding-box !important;
    -webkit-background-clip: padding-box !important;
}

.priority-dot.ending {
    animation: pulse 1.5s infinite;
    box-shadow: 0 0 0 2px rgba(255, 189, 68, 0.3);
}

.priority-dot.low { background: #00ca4e; }
.priority-dot.medium { background: #ffbd44; }
.priority-dot.high { background: #ff605c; }


body.dark-theme .priority-dot.low { background: #00a344; }
body.dark-theme .priority-dot.medium { background: #ff9900; }
body.dark-theme .priority-dot.high { background: #ff3b30; }
.task-indicators-row {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 4px;
}

.task-indicator {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
}

.task-indicator-more {
    font-size: 12px;
    color: #4c566a;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

body.dark-theme .task-indicator-more {
    color: #d8dee9;
}

.priority-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.priority-dot.low {
    background-color: #00ca4e;
}

.priority-dot.medium {
    background-color: #ffbd44;
}

.priority-dot.high {
    background-color: #ff605c;
}

.priority-dot.ending {
    background-color: #ff605c;
    box-shadow: 0 0 0 2px rgba(255, 96, 92, 0.3);
}

body.dark-theme .priority-dot.ending {
    background-color: #ff605c;
    box-shadow: 0 0 0 2px rgba(255, 189, 68, 0.3);
}
.task-indicator.ending-today {
    background-color: #ff3b30;
    animation: pulse 1.5s infinite;
    position: relative;
}

.task-indicator.ending-today::after {
    content: "!";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
    font-weight: bold;
}

.task-indicator.ending-today.low::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(0, 202, 78, 0.7);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    animation: wave-today 2s infinite;
}

.task-indicator.ending-today.medium::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(255, 189, 68, 0.7); 
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    animation: wave-today 2s infinite;
}

.task-indicator.ending-today.high::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(255, 96, 92, 0.7); 
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    animation: wave-today 2s infinite;
}

.task-indicator.ending-task.low::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(0, 202, 78, 0.7); 
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    animation: wave-task 2s infinite;
}

.task-indicator.ending-task.medium::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(255, 189, 68, 0.7); 
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    animation: wave-task 2s infinite;
}

.task-indicator.ending-task.high::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(255, 96, 92, 0.7); 
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    animation: wave-task 2s infinite;
}

@keyframes wave-today {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0.8;
    }
    100% {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 0;
    }
}

@keyframes wave-task {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0.8;
    }
    100% {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 0;
    }
}

.task-indicator.ending-today.low::before,
.task-indicator.ending-task.low::before {
    border: 2px solid rgba(0, 202, 78, 0.7);
    transform: translate(-50%, -50%) scale(1.1); 
    animation: wave-low 1.5s infinite;
}

.task-indicator.ending-today.medium::before,
.task-indicator.ending-task.medium::before {
    border: 2px solid rgba(255, 189, 68, 0.7); 
    transform: translate(-50%, -50%) scale(1.1); 
    animation: wave-medium 1.5s infinite;
}

.task-indicator.ending-today.high::before,
.task-indicator.ending-task.high::before {
    border: 2px solid rgba(255, 96, 92, 0.7); 
    transform: translate(-50%, -50%) scale(1.1); 
    animation: wave-high 1.5s infinite;
}

@keyframes wave-low {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0.7; 
    }
    100% {
        transform: translate(-50%, -50%) scale(1.3);
        opacity: 0;
    }
}

@keyframes wave-medium {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0.7;
    }
    100% {
        transform: translate(-50%, -50%) scale(1.3);
        opacity: 0;
    }
}

@keyframes wave-high {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0.7;
    }
    100% {
        transform: translate(-50%, -50%) scale(1.3);
        opacity: 0;
    }
}

.task-title-input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #4c566a;
    border-radius: 5px;
    font-size: 14px;
    resize: vertical;
    overflow-y: auto;
    min-height: 20px;
    max-height: 40px;
    background: #d8dee9;
    color: #2e3440;
}

body.dark-theme .task-title-input {
    background: #4c566a;
    color: #d8dee9;
    border-color: #81a1c1;
}
#rename-modal {
    position: fixed !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    z-index: 1000 !important;
    width: 400px;
    max-width: 90%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: none;
}

#rename-modal.active {
    display: block !important;
    opacity: 1 !important;
    transform: translate(-50%, -50%) scale(1) !important;
}

/* Для темной темы */
body.dark-theme #rename-modal {
    background: #3b4252;
    color: #d8dee9;
}

/* Общие стили для всех модальных окон */
#modal,
#versions-modal,
#rename-modal,
#alert-modal {
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.9);
}

#modal.active,
#versions-modal.active,
#rename-modal.active,
#alert-modal.active {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
}
.context-menu {
    background: #eceff4;
    border: 1px solid #4c566a;
    border-radius: 6px;
    padding: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    z-index: 1000;
    min-width: 150px;
}

.context-menu select {
    display: block;
    width: 100%;
    margin: 0 0 8px 0;
    padding: 10px 12px;
    font-size: 14px;
    border: 1px solid #4c566a;
    border-radius: 5px;
    background: #d8dee9;
    color: #2e3440;
    cursor: pointer;
    text-align: left;
    box-sizing: border-box;
}

body.dark-theme .context-menu {
    background: #3b4252;
    color: #d8dee9;
}

body.dark-theme .context-menu select {
    background: #4c566a;
    color: #d8dee9;
    border: 1px solid #81a1c1;
}
.task-details-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #eceff4;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    max-width: 400px;
    width: 90%;
}

.task-details-modal h3 {
    margin-top: 0;
    color: #2e3440;
}

.task-details-modal p {
    margin: 10px 0;
    color: #4c566a;
}

.task-details-modal small {
    display: block;
    margin: 5px 0;
    color: #5e81ac;
}

.task-details-modal button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #4c566a;
    color: #eceff4;
    border: none;
    cursor: pointer;
    border-radius: 3px;
}

.task-details-modal button:hover {
    background-color: #5e81ac;
}

body.dark-theme .task-details-modal {
    background: #3b4252;
    color: #d8dee9;
}

body.dark-theme .task-details-modal h3 {
    color: #d8dee9;
}

body.dark-theme .task-details-modal p {
    color: #d8dee9;
}

body.dark-theme .task-details-modal small {
    color: #81a1c1;
}

body.dark-theme .task-details-modal button {
    background-color: #5e81ac;
    color: #d8dee9;
}

body.dark-theme .task-details-modal button:hover {
    background-color: #81a1c1;
}
