
<script setup lang="ts">
import { ArrowUpRight, CreditCard, Store, Wallet, Handshake } from 'lucide-vue-next'

const products = [
  {
    number: '01',
    name: 'Quidly',
    category: 'PAYMENT SOLUTIONS',
    description:
      'Accept payments seamlessly, manage transactions, and give your customers a better payment experience.',
    url: 'https://www.quidly.ng/',
    icon: CreditCard,
    color: 'bg-cyan-50 text-cyan-700',
  },
  {
    number: '02',
    name: 'SellDesk',
    category: 'BUSINESS MANAGEMENT',
    description:
      'Create professional invoices, track payments in real time, and stay in control of your business.',
    url: 'https://www.quidly.ng/selldesk',
    icon: Store,
    color: 'bg-violet-50 text-violet-700',
  },
  {
    number: '03',
    name: 'Pay4me',
    category: 'FLEXIBLE PAYMENTS',
    description:
      'Make delegated payments easier with a solution designed to simplify the payment experience.',
    url: 'https://www.quidly.ng/',
    icon: Wallet,
    color: 'bg-amber-50 text-amber-700',
  },
  {
    number: '04',
    name: 'Partners',
    category: 'GROW WITH US',
    description:
      'Connect with us to explore partnerships, collaborate on ideas, and create new opportunities.',
    url: 'https://www.teinnovatecapital.ng/',
    icon: Handshake,
    color: 'bg-emerald-50 text-emerald-700',
  },
]
</script>

<template>
  <section id="products" class="bg-[#f7f8fa] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
    <div class="mx-auto max-w-7xl">
      <!-- Section heading -->
      <div class="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
        <div class="max-w-2xl">
          <span class="text-xs font-bold uppercase tracking-[0.25em] text-[#2b7fff]">
            Our ecosystem
          </span>

          <h2 class="mt-4 text-4xl font-bold tracking-tight text-[#18232d] sm:text-5xl lg:text-6xl">
            Products built for
            <span class="text-cyan-700">progress.</span>
          </h2>
        </div>

        <p class="max-w-md text-base leading-7 text-gray-600 sm:text-lg">
          Explore our solutions designed to simplify processes, empower
          businesses, and create better experiences.
        </p>
      </div>

      <!-- Product cards -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
        <a
          v-for="product in products"
          :key="product.number"
          :href="product.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative flex min-h-[310px] flex-col overflow-hidden
                 rounded-2xl border border-gray-200 bg-white p-7
                 transition-all duration-300 hover:-translate-y-1
                 hover:border-cyan-200 hover:shadow-xl hover:shadow-gray-200/60
                 sm:min-h-[340px] sm:p-9"
        >
          <!-- Top row -->
          <div class="flex items-start justify-between">
            <div
              :class="[
                'flex h-14 w-14 items-center justify-center rounded-2xl',
                product.color,
              ]"
            >
              <component :is="product.icon" :size="27" :stroke-width="1.7" />
            </div>

            <span class="text-sm font-medium text-gray-400">
              {{ product.number }}
            </span>
          </div>

          <!-- Product information -->
          <div class="mt-9">
            <span class="text-[10px] font-bold tracking-[0.2em] text-cyan-700">
              {{ product.category }}
            </span>

            <h3 class="mt-2 text-2xl font-bold text-[#18232d] sm:text-3xl">
              {{ product.name }}
            </h3>

            <p class="mt-3 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
              {{ product.description }}
            </p>
          </div>

          <!-- Link -->
          <div class="mt-auto flex items-center justify-between pt-8">
            <span
              class="text-sm font-semibold text-[#18232d]
                     transition-colors group-hover:text-cyan-700"
            >
              Explore product
            </span>

            <span
              class="flex h-10 w-10 items-center justify-center rounded-full
                     border border-gray-200 text-gray-700
                     transition-all duration-300
                     group-hover:border-cyan-700 group-hover:bg-cyan-700
                     group-hover:text-white"
            >
              <ArrowUpRight :size="20" />
            </span>
          </div>

          <!-- Decorative hover accent -->
          <div
            class="absolute bottom-0 left-0 h-1 w-0 bg-cyan-600
                   transition-all duration-500 group-hover:w-full"
          />
        </a>
      </div>
    </div>
  </section>
</template>
