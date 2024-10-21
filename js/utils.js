Array.prototype.parse2D = function () {
  const rows = [];
  // 16 cells in tiled
  for (let i = 0; i < this.length; i += 16) {
    // get the first 16 elements in each i row
    rows.push(this.slice(i, i + 16));
  }

  return rows;
};

Array.prototype.createObjectsFrom2D = function () {
  const objects = [];
  this.forEach((row, y) => {
    // each item in column
    row.forEach((symbol, x) => {
      if (symbol == 292 || symbol == 250) {
        // push new collision into collisonblocks array
        objects.push(
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
  return objects;
};
