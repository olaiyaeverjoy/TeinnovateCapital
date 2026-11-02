<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Adjust names/paths to match your files in src/assets
import payment from "../assets/img/payment.jpg"
import payment1 from "../assets/img/payment1.jpg"
import invoice from "../assets/img/invoice.jpg"


const products = [
  {
    name: 'Take payments',
    text: 'Accept card and contactless payments from your phone or a card reader.',
    img: payment,
    cta: { label: 'See payment options', href: '#' },
  },
  {
    name: 'Run your business',
    text: 'Manage orders, stock and staff from one register.',
    img: payment1,
    cta: { label: 'Explore the register', href: '#' },
  },
  {
    name: 'Manage your money',
    text: 'Send invoices, track expenses and move money without leaving the app.',
    img: invoice,
    cta: { label: 'Open an account', href: '#' },
  },
]

const active = ref(0)
const blocks = ref([])

let observer
let mq

// Desktop: trigger when a block crosses the middle of the viewport.
// Mobile: the pinned image covers the top ~40%, so the trigger line sits lower.
function setupObserver() {
  observer?.disconnect()
  const rootMargin = mq.matches ? '-50% 0px -50% 0px' : '-65% 0px -35% 0px'

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = Number(entry.target.dataset.index)
      }
    },
    { rootMargin }
  )
  blocks.value.forEach((el) => el && observer.observe(el))
}

onMounted(() => {
  mq = window.matchMedia('(min-width: 1024px)')
  setupObserver()
  mq.addEventListener('change', setupObserver) // rebuild on resize / rotation
})

onBeforeUnmount(() => {
  observer?.disconnect()
  mq?.removeEventListener('change', setupObserver)
})
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <h2 class="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
      Made for how you trade
    </h2>

    <div class="mt-8 grid lg:mt-12 lg:grid-cols-2 lg:gap-12">
      <!-- Image column
           Mobile: whole column is sticky, so the image pins to the top of the screen.
           Desktop: column is static and the inner wrapper is sticky instead. -->
      <div class="sticky top-0 z-10 bg-white py-4 lg:relative lg:top-auto lg:z-auto lg:bg-transparent lg:py-0">
        <div class="flex h-[40vh] items-center lg:sticky lg:top-0 lg:h-screen">
          <div class="relative h-full w-full overflow-hidden rounded-2xl bg-neutral-100 lg:aspect-square lg:h-auto">
            <img
              v-for="(p, i) in products"
              :key="p.name"
              :src="p.img"
              :alt="p.name"
              class="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out motion-reduce:transition-none"
              :class="i === active ? 'scale-100 opacity-100' : 'scale-95 opacity-0'"
            />
          </div>
        </div>
      </div>

      <!-- Scrolling text -->
      <div>
        <article
          v-for="(p, i) in products"
          :key="p.name"
          :ref="(el) => (blocks[i] = el)"
          :data-index="i"
          class="flex min-h-[60vh] flex-col justify-center gap-4 transition-opacity duration-300 motion-reduce:transition-none lg:min-h-screen lg:gap-6"
          :class="i === active ? 'lg:opacity-100' : 'lg:opacity-40'"
        >
          <h3 class="text-2xl font-semibold lg:text-4xl">{{ p.name }}</h3>
          <p class="max-w-md text-lg text-neutral-600">{{ p.text }}</p>
          <a :href="p.cta.href" class="w-fit font-medium underline underline-offset-4">
            {{ p.cta.label }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>