const lineWidth = document.querySelector("#lineWidth");
ctx.lineWidth = lineWidth.value;

function linWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

lineWidth.addEventListener("change", linWidthChange);
