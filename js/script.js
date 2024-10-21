const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

let parsedCollisions;
let collisionBlocks;
let background;
let doors;

const player = new Player({
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
      frameBuffer: 4,
      loop: true,
      imageSrc: "./img/king/runRight.png",
    },
    runLeft: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: "./img/king/runLeft.png",
    },
    enterDoor: {
      frameRate: 8,
      frameBuffer: 4,
      loop: false,
      imageSrc: "./img/king/enterDoor.png",
      onComplete: () => {
        console.log("Completed animation");
        gsap.to(overlay, {
          opacity: 1,
        });
      },
    },
  },
});

let level = 1;
let levels = {
  1: {
    init: () => {
      parsedCollisions = collisionsLevel1.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      (player.collisionBlocks = collisionBlocks),
        (background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: "./img/backgroundLevel1.png",
        }));

      doors = [
        new Sprite({
          position: {
            x: 740,
            y: 270,
          },
          imageSrc: "./img/doorOpen.png",
          frameRate: 5,
          frameBuffer: 6,
          loop: false,
          autoplay: false,
        }),
      ];
    },
  },
};

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

const overlay = {
  opacity: 0,
};

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  collisionBlocks.forEach((CollisionBlock) => {
    CollisionBlock.draw();
  });

  doors.forEach((door) => {
    door.draw();
  });
  player.handleInput(keys);
  // Draw Player
  player.draw();
  player.update();

  context.save();
  context.globalAlpha = overlay.opacity;
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.restore();
}

levels[level].init();

animate();
