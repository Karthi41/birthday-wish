/* Typewriter Effect */
const text = "🎉 Happy Birthday Prathyusha 💙";
let index = 0;
const speed = 100;
const h1 = document.querySelector(".typewriter");
h1.textContent = "";

function typeEffect() {
  if (index < text.length) {
    h1.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}
typeEffect();

/* Slideshow */
let slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 2500);

/* Candle Blow */
document.querySelector(".flame").addEventListener("click", () => {
  document.querySelector(".flame").style.display = "none";
  startConfetti();
});

/* Confetti */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
  for (let i = 0; i < 200; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 5
    });
  }
  drawConfetti();
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = "#1e90ff";
    ctx.fill();
    c.y += c.d;
    if (c.y > canvas.height) c.y = 0;
  });
  requestAnimationFrame(drawConfetti);
}
