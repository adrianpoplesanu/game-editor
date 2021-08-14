import { app, BrowserWindow } from 'electron';
import * as path from 'path';
const { ipcMain } = require('electron');

app.on('ready', () => {
    console.log('App is ready');

    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
          preload: path.join(__dirname, '/preload.js'),
          nodeIntegration: true,
          contextIsolation: false
        }
    });
    win.webContents.openDevTools();

    const indexHTML = path.join(__dirname + '/index.html');
    win.loadFile(indexHTML).then(() => {
        console.log("send the platform to client");
    }).catch(e => console.error(e));
});
