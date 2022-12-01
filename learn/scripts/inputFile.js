const inputFile = document.querySelector("#file");

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  //파일을 event.target.files로 저장했다가
  // url을 가져옴
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.drawImage(image, x, y, width, height); args 생략가능
    inputFile.value = null;
  };
}

inputFile.addEventListener("change", onFileChange);
