const inputText = document.querySelector("#texts");
const fontType = document.querySelector("#fontType");
const fontSize = document.querySelector("#fontSize");
const font = document.querySelector("#font");

function onDoubleClick(event) {
  const text = inputText.value;

  if (text !== "") {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = `${fontType.value} ${fontSize.value}px ${font.value}`;
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore();
  }
}

canvas.addEventListener("dblclick", onDoubleClick);
