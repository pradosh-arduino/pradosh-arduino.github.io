const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

let width, height;
let particles = [];


let particleCount = 120;

if(isMobileDevice()){
  particleCount = 60;
}

const maxDistance = 120;
const mouse = { x: null, y: null };

function resizeCanvas() {
  if(document.body.scrollHeight > window.innerHeight){
    width = document.body.scrollWidth;
    height = document.body.scrollHeight;
    canvas.width = width;
    canvas.height = height;
  } else {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
}

window.addEventListener("resize", resizeCanvas);

window.addEventListener("mousemove", e => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
});

window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
});

class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = 1.5;
    }

    move() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x <= 0 || this.x >= width) this.vx *= -1;
      if (this.y <= 0 || this.y >= height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#eb8d52";
      ctx.fill();
    }
}

function connectParticles(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const distance = Math.sqrt(dx * dx + dy * dy); // distance formula

    if (distance < maxDistance) {
      const alpha = (1 - distance / maxDistance);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(191, 103, 48, ${alpha})`;
      ctx.stroke();
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.move();
      p.draw();

      particles.forEach(other => {
        connectParticles(p, other);
      });

      if (mouse.x && mouse.y) {
        connectParticles(p, { x: mouse.x, y: mouse.y });
      }
    });

    requestAnimationFrame(animate);
}

function init() {
    resizeCanvas();
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    animate();
}

init();