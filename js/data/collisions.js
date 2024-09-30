const BLOCK_SIZE = 64;

const collisionsLevel1 = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,
  292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,
  292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

Array.prototype.parse2D = function () {
  const rows = [];
  // 16 cells in tiled
  for (let i = 0; i < this.length; i += 16) {
    // get the first 16 elements in each i row
    rows.push(this.slice(i, i + 16));
  }

  return rows;
};

class CollisionBlock {
  constructor({ position }) {
    this.position = position;
    this.width = BLOCK_SIZE;
    this.height = BLOCK_SIZE;
  }

  draw() {
    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const collisionBlocks = [];

const parsedCollisions = collisionsLevel1.parse2D();
parsedCollisions.forEach((row, y) => {
  // each item in column
  row.forEach((symbol, x) => {
    if (symbol == 292) {
      // push new collision into collisonblocks array
      collisionBlocks.push(
        new CollisionBlock({
          position: {
            x: x * BLOCK_SIZE,
            y: y * BLOCK_SIZE,
          },
        })
      );
    }
  });
});
