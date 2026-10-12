<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const root = ref(null)
let observer = null

const pillars = [
  {
    key: 'data',
    title: 'Data',
    text: 'Insight that turns raw activity into decisions, so providers optimize with evidence instead of guesswork.',
    icon: 'M4 20V10m6 10V4m6 16v-7m6 7H2',
  },
  {
    key: 'automation',
    title: 'Automation',
    text: 'Repeatable processes that remove manual friction, lift profitability and keep delivery consistent at scale.',
    icon: 'M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1m0-12.8l-2.1 2.1M7.7 16.3l-2.1 2.1M12 9a3 3 0 100 6 3 3 0 000-6z',
  },
  {
    key: 'ux',
    title: 'UX Simplicity',
    text: 'Consumer-centric design that keeps every experience clear, fast and effortless from the first tap.',
    icon: 'M4 5h16v10H4zM8 19h8M12 15v4',
  },
  {
    key: 'security',
    title: 'Infrastructure Security',
    text: 'Security built into the foundation, with monitoring and process automation guarding every layer.',
    icon: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4',
  },
]

const quidlyFeatures = [
  {
    title: 'Simple-to-integrate payment APIs',
    text: 'Get from first call to live payments without the usual integration drag.',
  },
  {
    title: 'Data insight for businesses',
    text: 'See how money moves through your business and act on it.',
  },
  {
    title: 'Managed payment integration',
    text: 'Hands-on integration for small and large businesses alike.',
  },
]

function onCardMove(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - r.left}px`)
  el.style.setProperty('--my', `${e.clientY - r.top}px`)
}

onMounted(() => {
  const targets = root.value.querySelectorAll('[data-reveal]')
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach((t) => t.classList.add('is-in'))
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  )
  targets.forEach((t) => observer.observe(t))
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section ref="root" class="about" id="about">
    <div class="about__grid" aria-hidden="true" />
    <div class="about__glow about__glow--green" aria-hidden="true" />
    <div class="about__glow about__glow--blue" aria-hidden="true" />

    <div class="about__inner">
      <!-- Heading -->
      <header class="head" data-reveal>
        <span class="eyebrow"><i /> About Teinnovate Capital</span>
        <h2>Let us <span class="grad">create…</span></h2>
        <p class="lead">
          <strong>Teinnovate Capital</strong> builds consumer-centric innovation that delivers
          exceptional experiences, while keeping service providers optimized and profitable.
        </p>
      </header>

      <!-- Mission + Focus -->
      <div class="duo">
        <article class="panel" data-reveal style="--d: 0.05s" @mousemove="onCardMove">
          <span class="panel__tag">Our mission</span>
          <h3>Innovation people actually feel.</h3>
          <p>
            We aim to build consumer-centric innovation that enables the delivery of exceptional
            experience, while ensuring optimization and profitability for service providers. We do
            it with three things: <b>data</b>, <b>automation</b> and <b>UX simplicity</b>.
          </p>
        </article>

        <article class="panel" data-reveal style="--d: 0.15s" @mousemove="onCardMove">
          <span class="panel__tag">Our focus</span>
          <h3>Better delivery, end to end.</h3>
          <p>
            We are focused on transforming service and product delivery: monitoring it, optimizing
            it, and making sure infrastructure security and process automation hold up underneath.
          </p>
        </article>
      </div>

      <!-- Pillars -->
      <div class="pillars">
        <article
          v-for="(p, i) in pillars"
          :key="p.key"
          class="pillar"
          data-reveal
          :style="{ '--d': `${0.06 * i}s` }"
          @mousemove="onCardMove"
        >
          <div class="pillar__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <path :d="p.icon" />
            </svg>
          </div>
          <h4>{{ p.title }}</h4>
          <p>{{ p.text }}</p>
        </article>
      </div>

      <!-- Quidly spotlight -->
      <div class="quidly" data-reveal @mousemove="onCardMove">
        <div class="quidly__copy">
          <span class="badge">Payment Solutions · Quidly</span>
          <h3>Transforming payments in Nigeria.</h3>
          <p>
            Our Payment Solutions Service Provision, <b>Quidly</b>, is aimed at delivering
            disruptive technology solutions in the Nigerian payment space. With simple-to-integrate
            payment APIs, data insight for businesses and managed payment integration for small and
            large businesses alike, we hope to transform the service delivery that currently
            exists.
          </p>

          <ul class="features">
            <li v-for="f in quidlyFeatures" :key="f.title">
              <span class="tick">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7" /></svg>
              </span>
              <div>
                <strong>{{ f.title }}</strong>
                <span>{{ f.text }}</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Flow visual -->
        <div class="flow" aria-hidden="true">
          <div class="node node--a">
            <small>Your business</small>
            <b>Checkout &amp; billing</b>
          </div>
          <div class="wire"><span /></div>
          <div class="node node--core">
            <small>Quidly</small>
            <b>Payment APIs</b>
            <div class="orbit"><i /><i /><i /></div>
          </div>
          <div class="wire"><span /></div>
          <div class="node node--b">
            <small>Result</small>
            <b>Data insight</b>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  --green: #7dffa0;
  --green-d: #3ddc84;
  --amber: #f5a623;
  --blue: #3aa0ff;
  --ink: #eef2f6;
  --mute: #9aa4b2;
  --line: rgba(255, 255, 255, 0.08);
  --card: rgba(255, 255, 255, 0.03);

  position: relative;
  overflow: hidden;
  padding: clamp(72px, 10vw, 140px) 6%;
  background: #05080c;
  color: var(--ink);
  font-family: -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  isolation: isolate;
}

/* Background */
.about__grid {
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse at 30% 20%, #000 0%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at 30% 20%, #000 0%, transparent 70%);
}
.about__glow {
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.22;
  pointer-events: none;
}
.about__glow--green {
  width: 460px;
  height: 460px;
  top: -140px;
  left: -120px;
  background: var(--green-d);
}
.about__glow--blue {
  width: 520px;
  height: 520px;
  bottom: -200px;
  right: -160px;
  background: var(--blue);
  opacity: 0.16;
}

.about__inner {
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  gap: clamp(28px, 4vw, 48px);
}

/* Reveal */
[data-reveal] {
  opacity: 0;
  transform: translateY(26px);
  transition:
    opacity 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) var(--d, 0s),
    transform 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) var(--d, 0s);
}
[data-reveal].is-in {
  opacity: 1;
  transform: none;
}

/* Header */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--mute);
}
.eyebrow i {
  width: 28px;
  height: 2px;
  background: linear-gradient(90deg, var(--green), transparent);
}
.head h2 {
  margin: 14px 0 18px;
  font-size: clamp(38px, 7vw, 78px);
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.02em;
}
.grad {
  background: linear-gradient(100deg, var(--green) 10%, var(--amber) 90%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.lead {
  max-width: 720px;
  margin: 0;
  font-size: clamp(16px, 1.9vw, 21px);
  line-height: 1.65;
  color: #c6cdd6;
  font-weight: 300;
}
.lead strong {
  color: var(--ink);
  font-weight: 700;
  letter-spacing: 0.02em;
}

/* Shared card glow */
.panel,
.pillar,
.quidly {
  position: relative;
  border: 1px solid var(--line);
  background: var(--card);
  border-radius: 20px;
  backdrop-filter: blur(6px);
  overflow: hidden;
}
.panel::after,
.pillar::after,
.quidly::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(360px circle at var(--mx, 50%) var(--my, 0%), rgba(125, 255, 160, 0.12), transparent 60%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}
.panel:hover::after,
.pillar:hover::after,
.quidly:hover::after {
  opacity: 1;
}

/* Mission / focus */
.duo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.panel {
  padding: clamp(24px, 3vw, 38px);
}
.panel__tag {
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--green);
}
.panel h3 {
  margin: 12px 0 12px;
  font-size: clamp(22px, 2.6vw, 30px);
  line-height: 1.15;
}
.panel p {
  margin: 0;
  color: var(--mute);
  line-height: 1.75;
  font-weight: 300;
}
.panel b {
  color: var(--ink);
  font-weight: 600;
}

/* Pillars */
.pillars {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.pillar {
  padding: 26px 22px 28px;
  transition: transform 0.3s, border-color 0.3s;
}
.pillar:hover {
  transform: translateY(-4px);
  border-color: rgba(125, 255, 160, 0.35);
}
.pillar__icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: var(--green);
  background: rgba(125, 255, 160, 0.08);
  border: 1px solid rgba(125, 255, 160, 0.22);
  margin-bottom: 18px;
}
.pillar__icon svg {
  width: 22px;
  height: 22px;
}
.pillar h4 {
  margin: 0 0 8px;
  font-size: 17px;
}
.pillar p {
  margin: 0;
  font-size: 14px;
  line-height: 1.65;
  color: var(--mute);
  font-weight: 300;
}

/* Quidly */
.quidly {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(24px, 4vw, 56px);
  padding: clamp(26px, 4vw, 52px);
  background:
    radial-gradient(600px circle at 100% 0%, rgba(58, 160, 255, 0.12), transparent 60%),
    radial-gradient(500px circle at 0% 100%, rgba(125, 255, 160, 0.1), transparent 60%),
    var(--card);
}
.badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--green);
  border: 1px solid rgba(125, 255, 160, 0.3);
  background: rgba(125, 255, 160, 0.07);
}
.quidly h3 {
  margin: 16px 0 14px;
  font-size: clamp(26px, 3.4vw, 40px);
  line-height: 1.1;
  letter-spacing: -0.01em;
}
.quidly__copy > p {
  margin: 0 0 22px;
  color: #aeb7c3;
  line-height: 1.75;
  font-weight: 300;
}
.quidly__copy b {
  color: var(--ink);
}
.features {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
}
.features li {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.features strong {
  display: block;
  font-size: 15px;
}
.features li span:not(.tick) {
  display: block;
  font-size: 13.5px;
  color: var(--mute);
  margin-top: 2px;
  line-height: 1.5;
}
.tick {
  flex: none;
  width: 24px;
  height: 24px;
  margin-top: 1px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #04110a;
  background: var(--green);
}
.tick svg {
  width: 13px;
  height: 13px;
}

/* Flow visual */
.flow {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 0;
}
.node {
  position: relative;
  padding: 16px 20px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(8, 12, 18, 0.85);
}
.node small {
  display: block;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--mute);
  margin-bottom: 4px;
}
.node b {
  font-size: 16px;
}
.node--core {
  border-color: rgba(125, 255, 160, 0.45);
  box-shadow: 0 0 0 6px rgba(125, 255, 160, 0.05), 0 0 40px rgba(125, 255, 160, 0.18);
}
.node--core small {
  color: var(--green);
}
.orbit {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 5px;
}
.orbit i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  animation: blink 1.4s infinite ease-in-out;
}
.orbit i:nth-child(2) { animation-delay: 0.2s; }
.orbit i:nth-child(3) { animation-delay: 0.4s; }

.wire {
  position: relative;
  height: 44px;
  width: 2px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
}
.wire span {
  position: absolute;
  left: 0;
  top: -40%;
  width: 100%;
  height: 40%;
  background: linear-gradient(to bottom, transparent, var(--green), transparent);
  animation: travel 1.8s infinite linear;
}

@keyframes travel {
  to { top: 110%; }
}
@keyframes blink {
  0%, 100% { opacity: 0.25; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.1); }
}

/* Responsive */
@media (max-width: 960px) {
  .pillars { grid-template-columns: repeat(2, 1fr); }
  .quidly { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .duo,
  .pillars { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  [data-reveal] { transition: none; }
  .wire span,
  .orbit i { animation: none; }
}
</style>