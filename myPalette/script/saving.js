const save = document.querySelector("#save");

function saving() {
  const url = canvas.toDataURL();
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "myDrawing.png";
  anchor.click();
}

save.addEventListener("click", saving);
