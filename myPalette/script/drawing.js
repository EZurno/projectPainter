const stroke = document.querySelector("#brush");
const fill = document.querySelector("#fill");
const rect = document.querySelector("#rect");
const circle = document.querySelector("#circle");

function brushStroke() {
  brushMode = "stroke";
}
function brushFill() {
  brushMode = "fill";
}
function brushRect() {
  brushMode = "rect";
}
function brushCircle() {
  brushMode = "circle";
}

stroke.addEventListener("click", brushStroke);
fill.addEventListener("click", brushFill);
rect.addEventListener("click", brushRect);
circle.addEventListener("click", brushCircle);
