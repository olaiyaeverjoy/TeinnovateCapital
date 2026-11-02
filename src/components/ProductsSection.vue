<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import payment from '../assets/img/payment.jpg'
import payment1 from '../assets/img/payment1.jpg'
import invoice from '../assets/img/invoice.jpg'

const products = [
  { name: 'Take payments', text: 'Accept card and contactless payments from your phone or a card reader.', img: payment, cta: { label: 'See payment options', href: '#' } },
  { name: 'Run your business', text: 'Manage orders, stock and staff from one register.', img: payment1, cta: { label: 'Explore the register', href: '#' } },
  { name: 'Manage your money', text: 'Send invoices, track expenses and move money without leaving the app.', img: invoice, cta: { label: 'Open an account', href: '#' } },
]

const active = ref(0)
const blocks = [] // plain array: no reactivity needed
let io, mq

// Trigger line: middle of the screen on desktop, middle of the visible text zone on mobile
const observe = () => {
  io?.disconnect()
  io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (active.value = +e.target.dataset.index)),
    { rootMargin: mq.matches ? '-54% 0px -46% 0px' : '-71% 0px -29% 0px' }
  )
  blocks.forEach((el) => el && io.observe(el))
}

onMounted(() => {
  mq = matchMedia('(min-width: 1024px)')
  observe()
  mq.addEventListener('change', observe)
})
onBeforeUnmount(() => {
  io?.disconnect()
  mq?.removeEventListener('change', observe)
})
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto max-w-6xl px-6 py-16">
      <h2 class="max-w-xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Made for how you trade
      </h2>

      <!-- Mobile: plain block flow so the image stays pinned. Desktop: two-column grid. -->
      <div class="mt-8 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-12">
        <!-- top-16 = navbar height. Change it if your navbar is a different height. -->
        <div class="sticky top-20 z-10 bg-white py-3 lg:self-start lg:py-0">
          <div
            class="relative h-[30svh] overflow-hidden rounded-2xl bg-slate-100  lg:h-[calc(100svh-6rem)] lg:w-full"
          >
            <img
              v-for="(p, i) in products"
              :key="p.name"
              :src="p.img"
              :alt="p.name"
              :aria-hidden="i !== active"
              class="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out motion-reduce:transition-none"
              :class="i === active ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
            />
          </div>
        </div>

        <div>
          <article
            v-for="(p, i) in products"
            :key="p.name"
            :ref="(el) => (blocks[i] = el)"
            :data-index="i"
            class="flex flex-col justify-center gap-4 py-12 transition-opacity duration-300 motion-reduce:transition-none lg:min-h-[calc(100svh-4rem)] lg:gap-6 lg:py-0"
            :class="i === active ? 'lg:opacity-100' : 'lg:opacity-40'"
          >
            <h3 class="text-2xl font-semibold text-slate-900 lg:text-4xl">{{ p.name }}</h3>
            <p class="max-w-md text-lg text-slate-600">{{ p.text }}</p>
            <a :href="p.cta.href" class="w-fit font-medium text-slate-900 underline underline-offset-4">{{ p.cta.label }}</a>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>