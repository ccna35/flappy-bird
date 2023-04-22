const bird = document.querySelector(".bird");
const audio = new Audio("./assets/audio/wing.wav");

let step = 0;

document.addEventListener("keydown", (e) => {
  console.log(e.code);
  if (e.code === "Space") {
    audio.play();
    step += 4;
    bird.style.transform = `translateY(-${step}rem)`;
  }
});

bird.addEventListener("transitionend", () => {
  step = 0;
  bird.style.transform = `translateY(-${step}rem)`;
});
