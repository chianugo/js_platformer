class Player extends Sprite {
  constructor({ collisionBlocks = [], imageSrc }) {
    super({ imageSrc });
    this.position = {
      x: 200,
      y: 200,
    };
    this.width = 25;
    this.height = 25;
    this.sides = {
      bottom: this.position.y + this.height,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };
    this.gravity = 1;

    this.collisionBlocks = collisionBlocks;
  }

  // draw() {
  //   context.fillStyle = "red";
  //   context.fillRect(this.position.x, this.position.y, this.width, this.height);
  // }

  update() {
    this.position.x += this.velocity.x;
    this.checkForHorizontalCollisions();

    this.applyGravity();
    this.checkForVerticalCollisions();
  }

  checkForHorizontalCollisions() {
    // Check for horizontal collisions
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];

      // check if a collision exists from
      if (
        this.position.x <= collisionBlock.position.x + collisionBlock.width &&
        this.position.x + this.width >= collisionBlock.position.x &&
        this.position.y + this.height >= collisionBlock.position.y &&
        this.position.y <= collisionBlock.position.y + collisionBlock.height
      ) {
        if (this.velocity.x < 0) {
          this.position.x =
            collisionBlock.position.x + collisionBlock.width + 0.01;
          break;
        }
        if (this.velocity.x > 0) {
          this.position.x = collisionBlock.position.x - this.width - 0.01;
          break;
        }
      }
    }
  }

  applyGravity() {
    // apply gravity
    this.velocity.y += this.gravity;
    this.position.y += this.velocity.y;
  }

  checkForVerticalCollisions() {
    // Check for vertical collisions
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i];

      // check if a collision exists from
      if (
        this.position.x <= collisionBlock.position.x + collisionBlock.width &&
        this.position.x + this.width >= collisionBlock.position.x &&
        this.position.y + this.height >= collisionBlock.position.y &&
        this.position.y <= collisionBlock.position.y + collisionBlock.height
      ) {
        // collision on x moving to the left. therefore set left side of player to right side of collision block
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          this.position.y =
            collisionBlock.position.y + collisionBlock.height + 0.01;
          break;
        }
        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          this.position.y = collisionBlock.position.y - this.height - 0.01;
          break;
        }
      }
    }
  }
}
