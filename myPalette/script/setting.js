const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
//default

canvas.width = 600;
canvas.height = 600;

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
// canvas size

let preX, preY;
let isPainting = false;
let brushMode = "stroke";

function onMove(event) {
  if (isPainting) {
    if (brushMode === "stroke") {
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
      return;
    } else if (brushMode === "fill") {
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.fill();
      return;
    } else if (brushMode === "rect") {
      ctx.rect(preX, preY, event.offsetX - preX, event.offsetY - preY);
      ctx.fill();
      return;
    } else if (brushMode === "circle") {
      ctx.arc(
        preX,
        preY,
        Math.max(event.offsetX - preX, event.offsetY - preY),
        0,
        2 * Math.PI
      );
      ctx.fill();
      return;
    } else if (brushMode === "eraser") {
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.strokeStyle = "white";

      ctx.stroke();
      return;
    } else {
      ctx.moveTo(event.offsetX, event.offsetY);
    }
  }
  ctx.beginPath();

  ctx.moveTo(event.offsetX, event.offsetY);
}

function startDrawing(event) {
  isPainting = true;
  preX = event.offsetX;
  preY = event.offsetY;
}

function endDrawing() {
  isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", endDrawing);
canvas.addEventListener("mouseleave", endDrawing);
