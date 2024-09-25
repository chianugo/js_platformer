const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const player = new Player();

const keys = {
  w: {
    isPressed: false,
  },
  a: {
    isPressed: false,
  },
  d: {
    isPressed: false,
  },
};

function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);
  player.velocity.x = 0;
  if (keys.d.isPressed) {
    player.velocity.x = 5;
  } else if (keys.a.isPressed) {
    player.velocity.x = -5;
  }

  // Draw Player
  player.draw();
  player.update();
}

animate();
