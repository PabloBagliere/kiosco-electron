const path = require('path');

const { app, BrowserWindow, Menu } = require('electron');
const isDev = require('electron-is-dev');

// Menu Template
const templateMenu = [
  {
    label: 'Productos',
    submenu: [
      {
        label: 'Abrir Rubro',
        accelerator: 'F2',
        click() {
          mainWindow.loadURL(`${URL}rublo`);
        },
      },
      {
        label: 'Abrir Producto',
        accelerator: 'Shift+F2',
        click() {
          mainWindow.loadURL(`${URL}product`);
        },
      },
    ],
  },
  {
    label: 'Ventas',
    accelerator: 'F3',
    click() {
      mainWindow.loadURL(`${URL}sales`);
    },
  },
  {
    label: 'Listado',
    accelerator: 'F4',
    click() {
      mainWindow.loadURL(`${URL}`);
    },
  },
  {
    label: 'Estadisticas',
    accelerator: 'F5',
    click() {
      mainWindow.loadURL(`${URL}statistics`);
    },
  },
  {
    label: 'Stock',
    accelerator: 'F6',
    click() {
      mainWindow.loadURL(`${URL}stock`);
    },
  },
  {
    label: 'Caja',
    accelerator: 'F7',
    click() {
      mainWindow.loadURL(`${URL}cashdesk`);
    },
  },
  {
    label: 'Vender',
    accelerator: 'F8',
    click() {
      mainWindow.loadURL(`${URL}sell`);
    },
  },
  {
    label: 'Salir',
    accelerator: process.platform == 'darwin' ? 'command+Q' : 'Ctrl+Q',
    click() {
      app.quit();
    },
  },
];

let mainWindow;

const URL = isDev
  ? 'http://localhost:3000/#/'
  : `file://${path.join(__dirname, '../build/index.html#')}`;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL(URL);
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

const mainMenu = Menu.buildFromTemplate(templateMenu);

Menu.setApplicationMenu(mainMenu);

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
