window.addEventListener("keydown", (event) => {
  if (player.preventInput == true) {
    return;
  }
  // console.log(event.key);
  switch (event.key) {
    case "w":
    case "ArrowUp":
    case " ":
      for (let i = 0; i < doors.length; i++) {
        const door = doors[i];

        if (
          player.hitbox.position.x + player.hitbox.width <=
            door.position.x + door.width &&
          player.hitbox.position.x >= door.position.x &&
          player.hitbox.position.y + player.hitbox.height >= door.position.y &&
          player.hitbox.position.y <= door.position.y + door.height
        ) {
          player.velocity.x = 0;
          player.velocity.y = 0;
          player.preventInput = true;
          player.switchSprite("enterDoor");
          door.play();
          return;
        }
      }
      if (player.velocity.y === 0) player.velocity.y = -15;
      break;
    case "a":
    case "ArrowLeft":
      keys.a.isPressed = true;
      break;
    case "ArrowDown":
      break;
    case "d":
    case "ArrowRight":
      keys.d.isPressed = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "a":
    case "ArrowLeft":
      keys.a.isPressed = false;
      break;
    case "ArrowDown":
      break;
    case "d":
    case "ArrowRight":
      keys.d.isPressed = false;
      break;
  }
});
