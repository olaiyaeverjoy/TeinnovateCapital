
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Slide {
  image: string
  title: string
  subtitle: string
  category: string
}

const slides: Slide[] = [
  {
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85',
    title: 'Dubai EXPO2020',
    subtitle: 'Seeds of Opportunity - Nigeria',
    category: 'Innovation & Impact',
  },
  {
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85',
    title: 'Ideas Into Action',
    subtitle: 'Building a sustainable future together',
    category: 'Our Projects',
  },
  {
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=85',
    title: 'People. Purpose. Progress.',
    subtitle: 'Creating opportunities through collaboration',
    category: 'Our Community',
  },
]

const activeIndex = ref(0)
let slideInterval: ReturnType<typeof setInterval> | undefined

function nextSlide() {
  activeIndex.value = (activeIndex.value + 1) % slides.length
}

function previousSlide() {
  activeIndex.value =
    (activeIndex.value - 1 + slides.length) % slides.length
}

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})
</script>

<template>
  <section class="bg-black px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
    <div
      class="mx-auto grid max-w-[1600px] grid-cols-1 overflow-hidden
             lg:min-h-[480px] lg:grid-cols-2"
    >
      <!-- LEFT CARD: FIXED IMAGE + WRITE-UP -->
      <div
        class="group grid min-h-[440px] overflow-hidden
               bg-[#343a40] sm:grid-cols-2 lg:min-h-[480px]"
      >
        <!-- Stationary image -->
        <div class="relative min-h-[300px] overflow-hidden sm:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85"
            alt="Bright collaborative workspace"
            class="absolute inset-0 h-full w-full object-cover
                   transition-transform duration-700 group-hover:scale-105"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t
                   from-black/30 via-transparent to-transparent"
          />
        </div>

        <!-- Fixed content -->
        <div
          class="flex flex-col justify-center px-7 py-10 text-white
                 sm:px-8 lg:px-9 xl:px-10"
        >
          <span
            class="mb-5 text-xs font-semibold uppercase tracking-[0.25em]
                   text-[#2b7fff]"
          >
            Who we are
          </span>

          <h2
            class="mb-5 text-3xl font-bold leading-tight tracking-tight
                   sm:text-3xl xl:text-4xl"
          >
            We’re idealists and strategic thinkers.
          </h2>

          <p class="text-base leading-7 text-gray-300 sm:text-lg">
            Sustainable changes driven by innovation, creativity and
            a vision for a better future.
          </p>

          <div class="mt-8 flex flex-col items-start gap-3">
            <a
              href="#news"
              class="group/link inline-flex items-center gap-2
                     text-sm font-semibold transition-colors hover:text-cyan-300"
            >
              Read News & Events
              <span
                class="transition-transform duration-300
                       group-hover/link:translate-x-1"
              >→</span>
            </a>

            <a
              href="#contact"
              class="group/link inline-flex items-center gap-2
                     text-sm font-semibold transition-colors hover:text-cyan-300"
            >
              Engage with Us
              <span
                class="transition-transform duration-300
                       group-hover/link:translate-x-1"
              >→</span>
            </a>
          </div>
        </div>
      </div>

      <!-- RIGHT CARD: AUTOMATIC IMAGE SLIDER -->
      <div class="relative flex min-h-[420px] flex-col sm:min-h-[480px]">
        <!-- Image transition -->
        <div class="absolute inset-0 overflow-hidden bg-gray-800">
          <Transition name="fade" mode="out-in">
            <img
              :key="slides[activeIndex].image"
              :src="slides[activeIndex].image"
              :alt="slides[activeIndex].title"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </Transition>

          <div
            class="absolute inset-0 bg-gradient-to-t
                   from-black/60 via-black/5 to-black/10"
          />
        </div>

        <!-- Image label -->
        <div
          class="relative z-10 flex flex-1 flex-col justify-end
                 p-6 pb-28 text-white sm:p-8 sm:pb-32 lg:p-10 lg:pb-32"
        >
          <span
            class="mb-3 text-xs font-semibold uppercase
                   tracking-[0.25em] text-[#2b7fff]"
          >
            {{ slides[activeIndex].category }}
          </span>

          <h3
            class="text-3xl font-bold leading-tight sm:text-4xl
                   lg:text-4xl xl:text-5xl"
          >
            {{ slides[activeIndex].title }}
          </h3>

          <p class="mt-3 max-w-md text-base text-white/90 sm:text-lg">
            {{ slides[activeIndex].subtitle }}
          </p>
        </div>

        <!-- Controls -->
        <div
          class="absolute bottom-0 right-0 z-20 flex items-center
                 gap-3 bg-white/90 p-4 backdrop-blur-sm sm:p-5"
        >
          <span class="mr-2 text-sm font-medium text-gray-600">
            {{ String(activeIndex + 1).padStart(2, '0') }}
            /
            {{ String(slides.length).padStart(2, '0') }}
          </span>

          <button
            type="button"
            aria-label="Previous slide"
            @click="previousSlide"
            class="flex h-12 w-12 items-center justify-center rounded-full
                   bg-[#0d4c55] text-2xl text-white transition-all
                   duration-300 hover:bg-cyan-600 hover:scale-105
                   focus-visible:outline focus-visible:outline-2
                   focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next slide"
            @click="nextSlide"
            class="flex h-12 w-12 items-center justify-center rounded-full
                   bg-[#172326] text-2xl text-white transition-all
                   duration-300 hover:bg-cyan-600 hover:scale-105
                   focus-visible:outline focus-visible:outline-2
                   focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            ›
          </button>
        </div>

        <!-- Progress indicator -->
        <div
          class="absolute bottom-0 left-0 right-0 z-10 h-1
                 overflow-hidden bg-white/20"
        >
          <div
            :key="activeIndex"
            class="slide-progress h-full bg-cyan-400"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(1.035);
}

.fade-leave-to {
  opacity: 0;
  transform: scale(1.015);
}

.slide-progress {
  animation: progress 5s linear forwards;
  transform-origin: left;
}

@keyframes progress {
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }

  .slide-progress {
    animation: none;
    width: 100%;
  }
}
</style>
