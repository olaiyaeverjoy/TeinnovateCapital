<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "@/components/HeroSection.vue";
import FeatureSection from "@/components/FeatureSection.vue";
import ProductsSection from "@/components/ProductsSection.vue";
import LagosMap from "@/components/LagosMap.vue";
import { onMounted, ref } from "vue";

import quidlyLogo from "@/assets/logo/quidly-logo.png";

// import AOS from "aos";
// import "aos/dist/aos.css";


// onMounted(() => {
//   AOS.init({
//     duration: 800,
//     easing: "ease-in-out",
//     once: true,
//     offset: 100,
//   });
// });
</script>

<template>
  <div class="relative bg-gray-300 px-0 sm:px-0 ">
    <Navbar />

    <!--hero section-->
    <HeroSection />

    <!--About us-->

    <div id="about" class="bg-white text-slate-600">
      <!-- Header + Mission/Focus -->
      <section class="px-6 pt-20 sm:px-10 lg:px-16 lg:pt-28">
        <div class="mx-auto max-w-6xl space-y-20">
          <!-- About Header -->
          <header class="max-w-3xl">
            <h2
              data-aos="fade-up"
              data-aos-duration="900"
              class="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl"
            >
              Let us create...
            </h2>

            <div
              data-aos="fade-right"
              data-aos-delay="200"
              class="mt-6 flex h-1.5 w-28 overflow-hidden rounded-full"
            >
              <span class="flex-1 bg-[#F28C28]"></span>
              <span class="flex-1 bg-[#55A6F6]"></span>
              <span class="flex-1 bg-[#84CC16]"></span>
            </div>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              class="mt-8 text-lg leading-8 text-slate-600"
            >
              <strong class="font-semibold text-slate-900">
                Teinnovate Capital
              </strong>
              builds consumer-centric innovations that deliver exceptional
              experiences, helping service providers optimize operations,
              improve profitability, and create lasting value through
              technology.
            </p>
          </header>

          <!-- Mission and Focus -->
          <div class="grid gap-x-14 gap-y-12 md:grid-cols-2">
            <article
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="100"
            >
              <p class="text-sm font-semibold text-[#B45309]">Our mission</p>

              <h3
                class="mt-3 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl"
              >
                Innovation people actually feel.
              </h3>

              <p class="mt-4 leading-7">
                We build consumer-centric solutions that make services more
                accessible, efficient, and enjoyable. By combining data,
                automation, and user experience simplicity, we help businesses
                deliver better products while improving operational performance
                and profitability.
              </p>
            </article>

            <article
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="250"
            >
              <p class="text-sm font-semibold text-[#1D6FC4]">Our focus</p>

              <h3
                class="mt-3 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl"
              >
                Better delivery, end to end.
              </h3>

              <p class="mt-4 leading-7">
                We focus on transforming how services and products are
                delivered. Through continuous monitoring, process automation,
                infrastructure security, and optimization, we create reliable
                technology foundations that support business growth and
                sustainable performance.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- Quidly Section -->
      <section
        class="mt-20 w-full bg-gradient-to-r from-orange-200 to-slate-200 px-6 py-16 sm:px-10 lg:px-16 lg:py-20"
      >
        <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <!-- Quidly Description -->
          <div data-aos="fade-right" data-aos-duration="1000">
            <p class="text-sm font-semibold text-[#4D7C0F]">
              Quidly, our payments platform
            </p>

            <h3
              class="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
            >
              Transforming payments in Nigeria.
            </h3>

            <p class="mt-5 leading-7 text-slate-700">
              Quidly is our payment solutions platform, focused on delivering
              innovative technology for the Nigerian payment ecosystem. From
              simple-to-integrate payment APIs to actionable business insights
              and managed payment integration, we help businesses simplify
              payment operations and improve service delivery.
            </p>
          </div>

          <!-- Quidly Features -->
          <ul class="divide-y divide-slate-900/10 self-center">
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              class="flex gap-4 py-5 first:pt-0"
            >
              <span
                class="mt-2 h-2.5 w-2.5 shrink-0 rounded-sm bg-[#F28C28]"
              ></span>

              <div>
                <h4 class="font-semibold text-slate-900">
                  Simple-to-integrate payment APIs
                </h4>
                <p class="mt-1 text-sm leading-6 text-slate-700">
                  Connect payment capabilities with less integration complexity.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="250" class="flex gap-4 py-5">
              <span
                class="mt-2 h-2.5 w-2.5 shrink-0 rounded-sm bg-[#55A6F6]"
              ></span>

              <div>
                <h4 class="font-semibold text-slate-900">
                  Data insights for businesses
                </h4>
                <p class="mt-1 text-sm leading-6 text-slate-700">
                  Understand payment activity and make informed business
                  decisions.
                </p>
              </div>
            </li>

            <li
              data-aos="fade-up"
              data-aos-delay="400"
              class="flex gap-4 py-5 last:pb-0"
            >
              <span
                class="mt-2 h-2.5 w-2.5 shrink-0 rounded-sm bg-[#84CC16]"
              ></span>

              <div>
                <h4 class="font-semibold text-slate-900">
                  Managed payment integration
                </h4>
                <p class="mt-1 text-sm leading-6 text-slate-700">
                  Support businesses through payment integration and
                  implementation.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Closing Statement -->
        <section class="px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            class="mx-auto max-w-6xl border-t border-slate-200 pt-8"
          >
            <p
              class="max-w-3xl text-xl font-semibold leading-relaxed text-slate-800 sm:text-2xl"
            >
              Different challenges.
              <span class="text-[#C2610A]">Innovative thinking.</span>
              <span class="text-[#1D6FC4]">Smarter technology.</span>
              <span class="text-[#4D7C0F]">Meaningful impact.</span>
            </p>
          </div>
        </section>
      </section>
    </div>

    <!--Feature-->
    <FeatureSection />

    <!--Our Products-->
    <ProductsSection />

    <!--Map-->
    <LagosMap />

    <Footer product-name="Quidly" :product-logo="quidlyLogo" />
  </div>
</template>
