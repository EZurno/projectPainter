const eraser = document.querySelector("#eraser");
const eraserAll = document.querySelector("#delete");

const check = false;

function erase() {
  brushMode = "eraser";
}

function eraseAll() {
  if (confirm("Really restart drawing???") === true) {
    ctx.fillStyle = "white";
    ctx.rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fill();
  }
}

eraser.addEventListener("click", erase);
eraserAll.addEventListener("click", eraseAll);
