const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

// TODO Add image source
class Sprite {
  constructor({ position, imageSrc }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
  }

  draw() {
    context.drawImage(this.image, this.position.x, this.position.y);
  }
}

const backgroundLevel1 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/backgroundLevel1.png",
});

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
  backgroundLevel1.draw();

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
