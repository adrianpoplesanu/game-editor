import { Board } from "./ts/Board";

let canvas;
let context;
//let board : Board;

function init() {
    canvas = <HTMLCanvasElement> document.getElementById("canvas");
    context = <CanvasRenderingContext2D> canvas.getContext("2d");

    //board = new Board(12, 8);

    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

window.onload = init;

// https://www.codegrepper.com/code-examples/javascript/typescript+get+mouse+location+from+event
// https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
/*document.addEventListener("mousemove", () => {
  let mousex = event.clientX; // Gets Mouse X
  let mousey = event.clientY; // Gets Mouse Y
  console.log([mousex, mousey]); // Prints data
});*/