const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = 'red';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

const draw = (e) => {
  if(!isDrawing) return;
  console.log(e);
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
};

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);