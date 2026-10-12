<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "@/components/HeroSection.vue";
import FeatureSection from "@/components/FeatureSection.vue";
import { onMounted, ref } from "vue";

import quidlyLogo from "@/assets/logo/quidly-logo.png";
</script>

<template>
  <div class="relative bg-gray-100 px-0 sm:px-0 overflow-hidden">
    <Navbar />

    <!--hero section-->
    <HeroSection />

    <!--About us-->

    <section
      id="about"
      class="relative overflow-hidden bg-[#050505] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28"
    >
      <div class="mx-auto max-w-7xl space-y-16">
        <!-- Header -->
        <header class="max-w-4xl">
          <div class="mb-6 flex items-center gap-3">
            <span class="h-1 w-8 rounded-full bg-[#F28C28]"></span>
            <span
              class="text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
            >
              About Teinnovate Capital
            </span>
          </div>

          <h2
            class="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            Let us
            <span
              class="bg-gradient-to-r from-[#F28C28] via-[#55A6F6] to-[#84CC16] bg-clip-text text-transparent"
            >
              create...
            </span>
          </h2>

          <p
            class="mt-6 max-w-3xl text-base leading-8 text-white/60 sm:text-lg"
          >
            <strong class="text-white">TEINNOVATE CAPITAL</strong> builds
            consumer-centric innovations that deliver exceptional experiences,
            helping service providers optimize operations, improve
            profitability, and create lasting value through technology.
          </p>
        </header>

        <!-- Mission and Focus -->
        <div class="grid gap-6 md:grid-cols-2">
          <article
            class="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-9"
          >
            <span
              class="text-xs font-semibold uppercase tracking-[0.2em] text-[#F28C28]"
            >
              Our Mission
            </span>

            <h3 class="mt-5 text-2xl font-bold leading-snug sm:text-3xl">
              Innovation people actually feel.
            </h3>

            <p class="mt-5 leading-7 text-white/55">
              We build consumer-centric solutions that make services more
              accessible, efficient, and enjoyable. By combining data,
              automation, and user experience simplicity, we help businesses
              deliver better products while improving operational performance
              and profitability.
            </p>

            <div class="mt-7 h-1 w-16 rounded-full bg-[#F28C28]"></div>
          </article>

          <article
            class="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-9"
          >
            <span
              class="text-xs font-semibold uppercase tracking-[0.2em] text-[#55A6F6]"
            >
              Our Focus
            </span>

            <h3 class="mt-5 text-2xl font-bold leading-snug sm:text-3xl">
              Better delivery, end to end.
            </h3>

            <p class="mt-5 leading-7 text-white/55">
              We focus on transforming how services and products are delivered.
              Through continuous monitoring, process automation, infrastructure
              security, and optimization, we create reliable technology
              foundations that support business growth and sustainable
              performance.
            </p>

            <div class="mt-7 h-1 w-16 rounded-full bg-[#55A6F6]"></div>
          </article>
        </div>



        <!-- Quidly Spotlight -->
        <div
          class="grid gap-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#10151A] via-[#0B0D0D] to-[#11170C] p-7 sm:p-10 lg:grid-cols-2 lg:items-center lg:p-14"
        >
          <div>
            <div
              class="inline-flex rounded-full border border-[#84CC16]/30 bg-[#84CC16]/10 px-4 py-2 text-xs font-semibold tracking-wide text-[#84CC16]"
            >
              Payment Solutions · Quidly
            </div>

            <h3 class="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
              Transforming payments in Nigeria.
            </h3>

            <p class="mt-5 leading-7 text-white/55">
              Quidly is our payment solutions platform, focused on delivering
              innovative technology for the Nigerian payment ecosystem. From
              simple-to-integrate payment APIs to actionable business insights
              and managed payment integration, we help businesses simplify
              payment operations and improve service delivery.
            </p>
          </div>

          <div class="space-y-4">
            <div
              class="flex gap-4 rounded-xl border border-white/10 bg-black/20 p-5"
            >
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F28C28]/10 text-[#F28C28]"
              >
                <span class="text-lg">01</span>
              </div>
              <div>
                <h4 class="font-semibold">Simple-to-integrate payment APIs</h4>
                <p class="mt-2 text-sm leading-6 text-white/45">
                  Connect payment capabilities with less integration complexity.
                </p>
              </div>
            </div>

            <div
              class="flex gap-4 rounded-xl border border-white/10 bg-black/20 p-5"
            >
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#55A6F6]/10 text-[#55A6F6]"
              >
                <span class="text-lg">02</span>
              </div>
              <div>
                <h4 class="font-semibold">Data insights for businesses</h4>
                <p class="mt-2 text-sm leading-6 text-white/45">
                  Understand payment activity and make informed business
                  decisions.
                </p>
              </div>
            </div>

            <div
              class="flex gap-4 rounded-xl border border-white/10 bg-black/20 p-5"
            >
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#84CC16]/10 text-[#84CC16]"
              >
                <span class="text-lg">03</span>
              </div>
              <div>
                <h4 class="font-semibold">Managed payment integration</h4>
                <p class="mt-2 text-sm leading-6 text-white/45">
                  Support businesses through payment integration and
                  implementation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Closing statement -->
        <div class="border-t border-white/10 pt-8">
          <p
            class="max-w-3xl text-xl font-medium leading-relaxed text-white/70 sm:text-2xl"
          >
            Different challenges.
            <span class="text-[#F28C28]">Innovative thinking.</span>
            <span class="text-[#55A6F6]">Smarter technology.</span>
            <span class="text-[#84CC16]">Meaningful impact.</span>
          </p>
        </div>
      </div>
    </section>

    <!--Feature-->
    <FeatureSection/>

    <!--Our Pricing-->

    <!--Get started section-->

    <Footer product-name="Quidly" :product-logo="quidlyLogo" />
  </div>
</template>
