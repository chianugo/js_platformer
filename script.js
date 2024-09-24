const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

let y = 100;
let x = 100;
function animate() {
  window.requestAnimationFrame(animate);
  // Draw Player
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "red";
  context.fillRect(x, y, 100, 100);
  y++;
}

animate();
