const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const parsedCollisions = collisionsLevel1.parse2D();
const collisionBlocks = parsedCollisions.createObjectsFrom2D();

const backgroundLevel1 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/backgroundLevel1.png",
});

const player = new Player({
  collisionBlocks: collisionBlocks,
  imageSrc: "./img/king/idleRight.png",
  frameRate: 11,
  animations: {
    idleRight: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: "./img/king/idleRight.png",
    },
    idleLeft: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: "./img/king/idleLeft.png",
    },
    runRight: {
      frameRate: 8,
      frameBuffer: 2,
      loop: true,
      imageSrc: "./img/king/runRight.png",
    },
    runLeft: {
      frameRate: 8,
      frameBuffer: 2,
      loop: true,
      imageSrc: "./img/king/runLeft.png",
    },
  },
});

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
  collisionBlocks.forEach((CollisionBlock) => {
    CollisionBlock.draw();
  });

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
