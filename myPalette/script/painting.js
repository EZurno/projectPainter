const paint = document.querySelector("#paint");
const buttons = document.querySelector(".brushOption");

let onPaint = false;

function paintingCheck() {
  onPaint = true;
}

function painting() {
  if (onPaint) {
    ctx.rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fill();
  }
}

function closingPaint() {
  onPaint = false;
}

paint.addEventListener("click", paintingCheck);
canvas.addEventListener("click", painting);
buttons.addEventListener("mousedown", closingPaint);
