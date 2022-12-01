const color = document.querySelector("#color");
const defaultColor = Array.from(
  document.getElementsByClassName("defaultColor")
);

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

color.addEventListener("change", onColorChange);
defaultColor.forEach((color) => color.addEventListener("click", onColorClick));
