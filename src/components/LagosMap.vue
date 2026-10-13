<template>
  <section class="w-full overflow-hidden bg-white">
    <div class="relative h-[300px] w-full sm:h-[380px] lg:h-[460px]">
      <iframe
        title="New Oko-Oba, 47 Progress College Road, Lagos"
        src="https://maps.google.com/maps?q=New%20Oko-Oba%2C%2047%20Progress%20College%20Road%2C%20Abule%20Egba%2C%20Lagos%2C%20Nigeria&t=&z=16&ie=UTF8&iwloc=&output=embed"
        class="absolute inset-0 h-full w-full grayscale"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>

      <!-- Location card -->
      <div
        class="absolute bottom-5 left-5 max-w-[280px]
               rounded-xl bg-white p-4 shadow-lg
               sm:bottom-8 sm:left-8"
      >
        <div class="flex items-start gap-3">
          <div
            class="flex h-10 w-10 shrink-0 items-center
                   justify-center rounded-full bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
              />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </div>

          <div>
            <h3 class="font-bold text-gray-900">
              Find Us
            </h3>

            <p class="mt-1 text-sm leading-relaxed text-gray-600">
              47 Progress College Road, Abule Egba,
              Lagos, Nigeria.
            </p>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=New+Oko-Oba%2C+47+Progress+College+Road%2C+Abule+Egba%2C+Lagos%2C+Nigeria"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-flex items-center gap-2
                 rounded-lg bg-gray-900 px-4 py-2.5
                 text-sm font-medium text-white
                 transition hover:bg-gray-700"
        >
          Get Directions
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </section>
</template>
