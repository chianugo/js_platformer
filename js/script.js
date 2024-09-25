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
  // console.log(event.key);
  switch (event.key) {
    case "w":
    case "ArrowUp":
      console.log(event.key);
      // if (player.velocity.y === 0)
      player.velocity.y = -20;
      break;
    case "a":
    case "ArrowLeft":
      player.velocity.x = -4;
      break;
    case "ArrowDown":
      break;
    case "d":
    case "ArrowRight":
      player.velocity.x = 4;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "a":
    case "ArrowLeft":
      player.velocity.x = 0;
      break;
    case "ArrowDown":
      break;
    case "d":
    case "ArrowRight":
      player.velocity.x = 0;
      break;
  }
});
