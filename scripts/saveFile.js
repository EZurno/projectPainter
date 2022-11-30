const saveFile = document.querySelector("#save");

function onSaveClick() {
  const url = canvas.toDataURL(); // 그린 그림의 데이터를 dataUrl로 저장함
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "myDrawing.png";
  anchor.click();

  // <a href="~~~" download>를 사용하면 a를 클릭시 저장
  // 이 점을 이용해 가상의 anchor를 만들어서 동작하게 함
}

saveFile.addEventListener("click", onSaveClick);
