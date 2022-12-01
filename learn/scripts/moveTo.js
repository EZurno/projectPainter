const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

ctx.moveTo(50, 50); // brush를 50, 50으로 옮김
ctx.lineTo(150, 50); // brush로 150, 50까지 선을 그림
ctx.lineTo(150, 550);
ctx.lineTo(50, 550);
ctx.fill();

ctx.moveTo(50, 250);
ctx.lineTo(250, 250);
ctx.lineTo(250, 350);
ctx.lineTo(50, 350);
ctx.lineTo(50, 250);
ctx.fill();

ctx.moveTo(250, 50);
ctx.lineTo(250, 550);
ctx.lineTo(350, 550);
ctx.lineTo(350, 50);
ctx.fill();

ctx.moveTo(500, 100);
ctx.arc(500, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.moveTo(550, 250);
ctx.lineTo(550, 550);
ctx.lineTo(450, 550);
ctx.lineTo(450, 250);
ctx.fill();
