class Player {
  constructor({ collisionBlocks = [] }) {
    this.position = {
      x: 100,
      y: 100,
    };
    this.width = 100;
    this.height = 100;
    this.sides = {
      bottom: this.position.y + this.height,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };
    this.gravity = 1;

    this.collisionBlocks = collisionBlocks;
    console.log(this.collisionBlocks);
  }

  draw() {
    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.sides.bottom = this.position.y + this.height;

    // Above the bottom of canvas
    if (this.sides.bottom + this.velocity.y <= canvas.height) {
      this.velocity.y += this.gravity;
    } else {
      this.velocity.y = 0;
      // Reset box in case of overshoot due to high gravity values
      this.position.y = canvas.height - this.height;
    }
  }
}
