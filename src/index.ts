import { Board } from "./ts/Board";

const { ipcRenderer } = require('electron')

let canvas;
let context;
let board : Board;

function init() {
    canvas = <HTMLCanvasElement> document.querySelector("#canvas");
    context = <CanvasRenderingContext2D> canvas.getContext("2d");

    board = new Board(12, 8);

    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    addEvents();
}

window.onload = init;

function saveFile() {
    console.log("save file to disk");
}

function addEvents() {
    // https://stackoverflow.com/questions/43102216/button-click-event-binding-in-electron-js
    const saveButton = <HTMLElement> document.querySelector('#save-btn')
    saveButton.addEventListener('click', () => {
        saveFile();
    });
}

// https://www.codegrepper.com/code-examples/javascript/typescript+get+mouse+location+from+event
// https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
/*document.addEventListener("mousemove", () => {
  let mousex = event.clientX; // Gets Mouse X
  let mousey = event.clientY; // Gets Mouse Y
  console.log([mousex, mousey]); // Prints data
});*/