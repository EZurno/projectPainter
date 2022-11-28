const canvas = document.querySelector("canvas");
// 그림을 그리기위해 context를 사용 => paintbrush

const ctx = canvas.getContext("2d"); // ctx == context
// 2d pallette를 사용하기 위함

canvas.width = 600;
canvas.height = 600;
// css뿐만 아니라 js에도 설정을 해줘야 한다.

ctx.fillRect(50, 50, 100, 200);
ctx.strokeRect(350, 350, 200, 100);
// rectangle(사각형) 만들기
// fillRect 함수 매개변수를 확인하여 값 입력

// 두가지는 path 이므로
// ctx.rect()로 사용
ctx.rect(500, 500, 50, 50); // 생성은 되었지만 색이 없어 안보임
ctx.fill();
// ctx.fill이나 stroke로 스타일을 정해주어야함

ctx.beginPath(); // 새로운 경로를 만듦
//위의 ctx의 경로와 밑의 ctx의 경로가 달라서 새로운 값으로 시작
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.stroke();

ctx.rect(350, 350, 100, 100);
ctx.fillStyle = "red";

setTimeout(() => {
  ctx.fill();
}, 5000); // 5초 후 색상 변경

/////// rect도 shotcut임
