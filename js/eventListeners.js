window.addEventListener("keydown", (event) => {
  console.log(event.key);
  switch (event.key) {
    case "w":
    case "ArrowUp":
    case " ":
      if (player.velocity.y === 0) player.velocity.y = -25;
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
