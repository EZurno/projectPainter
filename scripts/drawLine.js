const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line_width");
const color = document.querySelector("#color");
const colorOptions = Array.from(
  document.getElementsByClassName("color_option")
);

//colorOption은 배열로 받아야 됨, color-option이 htmlCollection[]으로 주기 때문

const modeBtn = document.querySelector("#mode_btn");
const eraseAllBtn = document.querySelector("#eraseAll_btn");
const eraseBtn = document.querySelector("#erase_btn");

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;

let isPainting = false;
let isFilling = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath(); // 새로그린 선과 다음에 그리는 선의 경로를 끊어줘야 함.

  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  //console.dir(event.target.dataset.color);
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

function onEraseClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "white";
}

function onEraseAllClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
eraseAllBtn.addEventListener("click", onEraseAllClick);
eraseBtn.addEventListener("click", onEraseClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
