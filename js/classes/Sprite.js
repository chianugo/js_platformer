class Sprite {
  constructor({ position, imageSrc, spriteFrames = 1 }) {
    this.position = position;
    this.image = new Image();
    this.image.onload = () => {
      this.loaded = true;
      this.width = this.image.width / this.spriteFrames;
      this.height = this.image.height;
    };
    this.image.src = imageSrc;
    this.loaded = false;
    this.spriteFrames = spriteFrames;
    this.currentFrame = 0;
    this.elapsedFrames = 0;
    this.frammeBuffer = 2;
  }

  draw() {
    if (!this.loaded) return;
    const cropbox = {
      position: {
        x: this.width * this.currentFrame,
        y: 0,
      },
      width: this.width,
      height: this.height,
    };
    context.drawImage(
      this.image,
      cropbox.position.x,
      cropbox.position.y,
      cropbox.width,
      cropbox.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    this.updateFrames();
  }

  updateFrames() {
    this.elapsedFrames++;

    if (this.elapsedFrames % this.frammeBuffer === 0) {
      if (this.currentFrame < this.spriteFrames - 1) {
        this.currentFrame++;
      } else {
        this.currentFrame = 0;
      }
    }
  }
}
