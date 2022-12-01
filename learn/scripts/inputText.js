const inputText = document.querySelector("#text");

function onDoubleClick(event) {
  // console.log(event.offsetX, event.offsetY)
  const text = inputText.value;

  if (text !== "") {
    ctx.save();
    // 현재 ctx 상태를 저장함
    ctx.lineWidth = 1;
    ctx.font = "48px serif";
    ctx.fillText(text, event.offsetX, event.offsetY);

    ctx.restore();
    // save()한 지점으로 돌아감
  }
}

canvas.addEventListener("dblclick", onDoubleClick);
