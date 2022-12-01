const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

ctx.lineWidth = 2;
// 선 굵기

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
  "#18dcff",
  "#7d5fff",
]; // color palette

function onClick(event) {
  ctx.beginPath(); //같은 path를 받지 않게 하기 위함
  ctx.moveTo(0, 0);
  //console 속 onclick 함수 내 offsetX, Y 값을 사용
  const color = colors[Math.floor(Math.random() * colors.length)];
  //랜덤 색상 출력

  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);
// 마우스 클릭 지점을 알기 위해 eventListener 사용
