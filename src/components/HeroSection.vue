<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  // title: { type: String, default: 'Teinnovate Capital' },
  // highlight: { type: String, default: 'push back.' },
  // subtitle: {
  //   type: String,
  //   default:
  //     '... innovating to create sustainable developments in all sector verticals fintech | agrictech | medtech | govtech | x-tech',
  // },
  bgImage: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
  },
  density: { type: Number, default: 5000 }, // px² per particle — lower = more particles
  linkDist: { type: Number, default: 130 },
  repelRadius: { type: Number, default: 180 },
  repelForce: { type: Number, default: 3.2 },
});

const heroRef = ref(null);
const canvasRef = ref(null);

let ctx = null;
let W = 0;
let H = 0;
let particles = [];
let rafId = null;
const mouse = { x: -9999, y: -9999, active: false };

function resize() {
  const hero = heroRef.value;
  const canvas = canvasRef.value;
  if (!hero || !canvas) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = hero.clientWidth;
  H = hero.clientHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const count = Math.floor((W * H) / props.density);
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.4 + 0.6,
  }));
}

function step() {
  ctx.clearRect(0, 0, W, H);

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;

    if (mouse.active) {
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const d = Math.hypot(dx, dy) || 1;
      if (d < props.repelRadius) {
        const f =
          ((props.repelRadius - d) / props.repelRadius) * props.repelForce;
        p.x += (dx / d) * f;
        p.y += (dy / d) * f;
      }
    }

    // wrap around edges
    if (p.x < -20) p.x = W + 20;
    if (p.x > W + 20) p.x = -20;
    if (p.y < -20) p.y = H + 20;
    if (p.y > H + 20) p.y = -20;
  }

  // connecting lines
  ctx.lineWidth = 1;
  const maxD2 = props.linkDist * props.linkDist;
  for (let i = 0; i < particles.length; i++) {
    const a = particles[i];
    for (let j = i + 1; j < particles.length; j++) {
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < maxD2) {
        const o = 1 - Math.sqrt(d2) / props.linkDist;
        ctx.strokeStyle = `rgba(255,255,255,${o * 0.35})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  // dots
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  for (const p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }

  rafId = requestAnimationFrame(step);
}

function setPointer(clientX, clientY) {
  const rect = canvasRef.value.getBoundingClientRect();
  mouse.x = clientX - rect.left;
  mouse.y = clientY - rect.top;
  mouse.active = true;
}

function onMouseMove(e) {
  setPointer(e.clientX, e.clientY);
}

function onMouseLeave() {
  mouse.active = false;
}

function onTouchMove(e) {
  const t = e.touches[0];
  if (t) setPointer(t.clientX, t.clientY);
}

onMounted(() => {
  ctx = canvasRef.value.getContext("2d");
  resize();
  step();
  window.addEventListener("resize", resize);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId);
  window.removeEventListener("resize", resize);
});
</script>

<template>
  <section
    ref="heroRef"
    class="hero"
    :style="{ '--hero-image': `url('${bgImage}')` }"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    @touchmove.passive="onTouchMove"
  >
    <canvas ref="canvasRef" class="hero__canvas" />

    <div class="hero__copy">
      <!-- Override with your own content via the default slot -->
      <div>
        <h1 class="text-4xl md:text-6xl font-bold">
          <span class="text-orange-500">TE</span>
          <span class="text-blue-500">INNOVATE CAPITAL</span>
        </h1>

        <p class="mt-3 text-base md:text-xl text-white/90 leading-relaxed">
          ... innovating to create sustainable developments in all sector [
          verticals ]: fintech | agrictech | medtech | govtech | x-tech
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  --accent1: ;
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  background:
    linear-gradient(120deg, rgba(10, 14, 20, 0.65), rgba(10, 14, 20, 0.85)),
    var(--hero-image) center / cover no-repeat;
  background-color: #0d1117;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  backdrop-filter: blur(2px);
  pointer-events: none;
}

.hero__canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}

.hero__copy {
  position: absolute;
  left: 6%;
  top: 50%;
  transform: translateY(-50%);
  max-width: 640px;
 
  z-index: 5;
  pointer-events: none; /* let the cursor reach the particles through the text */
}

/* .hero__copy :deep(h1) {
  font-size: clamp(28px, 5vw, 52px);
  line-height: 1.05;
  margin: 0 0 14px;
  font-weight: 700;
}

.hero__copy :deep(h1 span) {
  color: var(--accent1);
}

.hero__copy :deep(p) {
  font-size: clamp(14px, 1.6vw, 17px);
  line-height: 1.6;
  color: #c6cdd6;
  margin: 0;
  font-weight: 300;
} */

@media (max-width: 640px) {
  .hero__copy {
    left: 6%;
    right: 6%;
    max-width: none;
  }
}
</style>
