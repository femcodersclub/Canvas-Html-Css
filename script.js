const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const particles = [];
const colors = ["#821ad4", "#ea4f33", "#d1c4f9", "#4737bb"];
const text = "femCoders Club";
const fontSize = 100;

function createText() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = `${fontSize}px 'Poppins', sans-serif`;
  ctx.textAlign = "center";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  const textCoordinates = ctx.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  ).data;
  for (let y = 0; y < canvas.height; y += 4) {
    for (let x = 0; x < canvas.width; x += 4) {
      const alpha = textCoordinates[(y * canvas.width + x) * 4 + 3];
      if (alpha > 128) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color));
      }
    }
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

class Particle {
  constructor(x, y, color) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = 2;
    this.baseX = x;
    this.baseY = y;
    this.color = color;
    this.density = Math.random() * 30 + 1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    let dx = this.baseX - this.x;
    let dy = this.baseY - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    this.x += dx / distance;
    this.y += dy / distance;
    this.draw();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => particle.update());
  requestAnimationFrame(animate);
}

createText();
animate();
