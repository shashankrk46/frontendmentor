const mode = document.querySelector(".switch");
const ball = document.querySelector(".ball");
console.log(ball);
mode.addEventListener("click", moveball);

function moveball(e) {
  if (mode.checked == true) {
    console.log("clicked");
    ball.style.transform = "translateX(33px)";
    ball.style.transition = "transform 0.5s ease";
    // mode.style.background = "hsl(225, 100%, 98%)";
    // ball.style.background = "blue";
  } else if (mode.checked == false) {
    console.log("false");
    ball.style.transform = "translateX(0px)";
    ball.style.transition = "transform 0.5s ease";
    // mode.style.background = "hsl(228, 12%, 44%)";
  }
}
