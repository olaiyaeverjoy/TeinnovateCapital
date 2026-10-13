<script setup>
import logo from "../assets/logo/teinnovate-logo.png";

import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const sections = ["home", "services", "pricing", "about", "contact"];
const isClickScrolling = ref(false);
const scrollToSection = (sectionId) => {
  if (sectionId === "home") {
    window.location.reload();
    return;
  }
  if (sections.includes(sectionId)) {
    activeSection.value = sectionId;
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const activeSection = ref("home");

const handleScroll = () => {
  if (isClickScrolling.value) return;

  const scrollY = window.scrollY;
  const scrollPosition = scrollY + 150;

  // Explicitly force 'home' when at/near the top — avoids overlap bugs entirely
  if (scrollY < 100) {
    activeSection.value = "home";
    return;
  }

  // Find the last section whose top we've scrolled past
  let current = activeSection.value;

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element && element.offsetTop <= scrollPosition) {
      current = section;
    }
  }

  activeSection.value = current;
};

onMounted(() => {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  activeSection.value = "home";

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="bg-white fixed top-0 left-0 right-0 w-full border-gray-200 z-50">
    <nav class="w-full mx-4 sm:px-6 lg:px-8 px-4 py-6 border-t">
      <div
        class="relative flex items-center justify-between"
        data-aos="fade-down"
      >
        <img class="h-[35px] w-[99px] object-contain" :src="logo" alt="" />

        <ul
          class="hidden items-center gap-7 sm:absolute sm:left-1/2 sm:flex sm:-translate-x-1/2"
        >
          <!-- your four <li> items stay exactly as they are -->
          <li>
            <a
              @click="scrollToSection('home')"
              :class="[
                'font-semibold cursor-pointer transition-colors',
                activeSection === 'home'
                  ? 'text-[#122600] border-[#122600]'
                  : 'text-gray-500 hover:text-[#122600]',
              ]"
            >
              Home
            </a>
          </li>

          <li>
            <a
              @click="scrollToSection('about')"
              :class="[
                'font-semibold cursor-pointer transition-colors',
                activeSection === 'about'
                  ? 'text-[#122600] border-[#122600]'
                  : 'text-gray-500 hover:text-[#122600]',
              ]"
            >
              About
            </a>
          </li>

          <li>
            <a
              @click="scrollToSection('products')"
              :class="[
                'font-semibold cursor-pointer transition-colors',
                activeSection === 'products'
                  ? 'text-[#122600] border-[#122600]'
                  : 'text-gray-500 hover:text-[#122600]',
              ]"
            >
              Products
            </a>
          </li>

          <li>
            <a
              @click="scrollToSection('contact')"
              :class="[
                'font-semibold cursor-pointer transition-colors',
                activeSection === 'contact'
                  ? 'text-[#122600] border-[#122600]'
                  : 'text-gray-500 hover:text-[#122600]',
              ]"
            >
              Contact
            </a>
          </li>
        </ul>

        <!-- hamburger button stays as it is -->
      </div>

      <!--Mobile view-->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isOpen" class="fixed inset-0 top-[72px] z-50 sm:hidden">
          <!-- Backdrop -->
          <!-- <div
            class="absolute inset-0 bg-black/40 backdrop-blur-sm"
            @click="isOpen = false"
          ></div> -->

          <!-- Dropdown panel -->
          <div
            class="relative w-full h-full bg-white shadow-xl p-6 flex flex-col overflow-y-auto"
          >
            <!-- Menu -->
            <ul class="flex flex-col gap-6 text-left">
              <li>
                <a
                  @click="
                    scrollToSection('home');
                    isOpen = false;
                  "
                  :class="[
                    'font-semibold text-lg cursor-pointer transition-colors',
                    activeSection === 'home'
                      ? 'text-[#122600]'
                      : 'text-gray-500 hover:text-[#122600]',
                  ]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  @click="
                    scrollToSection('about');
                    isOpen = false;
                  "
                  :class="[
                    'font-semibold text-lg cursor-pointer transition-colors',
                    activeSection === 'about'
                      ? 'text-[#122600]'
                      : 'text-gray-500 hover:text-[#122600]',
                  ]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  @click="
                    scrollToSection('products');
                    isOpen = false;
                  "
                  :class="[
                    'font-semibold text-lg cursor-pointer transition-colors',
                    activeSection === 'products'
                      ? 'text-[#122600]'
                      : 'text-gray-500 hover:text-[#122600]',
                  ]"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  @click="
                    scrollToSection('contact');
                    isOpen = false;
                  "
                  :class="[
                    'font-semibold text-lg cursor-pointer transition-colors',
                    activeSection === 'contact'
                      ? 'text-[#122600]'
                      : 'text-gray-500 hover:text-[#122600]',
                  ]"
                >
                  Contact
                </a>
              </li>

              <hr class="faded" />
            </ul>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>
