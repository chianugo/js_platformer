const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const player = new Player();

function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  // Draw Player
  player.draw();
  player.update();
}

animate();

window.addEventListener("keydown", (event) => {
  console.log(event.key);
  switch (event.key) {
    case " w":
    case "ArrowUp":
      player.velocity.y = -10;
    case " a":
    case "ArrowLeft":
      break;
    case " s":
    case "ArrowDown":
      break;
    case "d":
    case "ArrowRight":
      break;
  }
});
