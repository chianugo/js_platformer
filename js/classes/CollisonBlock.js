class CollisionBlock {
  constructor({ position }) {
    this.position = position;
    this.width = BLOCK_SIZE;
    this.height = BLOCK_SIZE;
  }

  draw() {
    context.fillStyle = "rgba(255, 0, 0, 0.4)";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
