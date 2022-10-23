<template>
  <main class="relative py-10">
    <div class="pt-24 py-20">
      <div class="container mx-auto px-10 flex flex-wrap flex-col md:flex-row">
        <!--Left Col-->
        <div class="flex flex-col w-full md:w-3/5 text-left md:text-left">
          <h1 class="my-4 text-4xl md:text-6xl font-bold leading-normal">
            A New Kind of Bootcamp
          </h1>
          <p
            class="leading-normal text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8"
          >
            For women, by women. Always free of charge. Grow your front-end
            development skills with us either in person or by studying in our
            self-driven classroom. {{ status }}
            <span v-if="regFormOpen">
              Registration for the live cohort is now open.</span
            >
            Sign up for a
            <a
              class="cursor-pointer underline"
              href="https://forms.gle/GA9pUe8AFkcJJQvSA"
              target="_blank"
              >self-study class</a
            >
            any time!
          </p>

          <div
            v-if="regFormOpen"
            class="mb-5 flex flex-wrap lg:flex lg:flex-no-wrap md:flex lg:flex-no-wrap w-full justify-center md:justify-start z-10"
          >
            <a
              class="btn w-full lg:w-4/12 text-white mt-6 rounded-lg overflow-hidden py-3 bg-secondary-500 hover:bg-secondary-400"
              target="_blank"
              :href="formUrl"
              ><div class="uppercase text-center text-lg">Register</div></a
            >
          </div>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-2/5 py-6 text-center">
          <img class="logo w-full z-50" src="../assets/logo.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="relative -mt-12 lg:-mt-24">
      <svg
        viewBox="0 0 1428 174"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g
            transform="translate(-2.000000, 44.000000)"
            fill="#f7fafc"
            fill-rule="nonzero"
          >
            <path
              d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
              opacity="0.100000001"
            />
            <path
              d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
              opacity="0.100000001"
            />
            <path
              d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
              id="Path-4"
              opacity="0.200000003"
            />
          </g>
          <g
            transform="translate(-4.000000, 76.000000)"
            fill="#f7fafc"
            fill-rule="nonzero"
          >
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
            />
          </g>
        </g>
      </svg>
    </div>

<section class="py-8" style="background-color: #f7fafc">
    <div class="container mx-auto flex flex-wrap pt-4">
      <h2
        class="
          w-full
          text-3xl
          md:text-5xl
          font-bold
          leading-tight
          text-center text-gray-800
        "
      >
        We Get Results
      </h2>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-3 py-0 rounded-t"
        ></div>
      </div>
    </div>
</section>

    <section class="py-5 md:py-10" style="background-color: #f7fafc">
      <vueper-slides
        class="no-shadow"
        :breakpoints="breakpoints"
        :dragging-distance="70"
        prevent-y-scroll
        :bullets="false"
        
      >

      

        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :style="'background-color: ' + '#f7fafc'"
        >
          <template #content>
            <div
              class="container mx-auto px-10 flex flex-wrap flex-col md:flex-row"
            >
              <!-- image -->
              <div class="w-full lg:w-1/2 p-2">
                <img
                  class="w-full h-full object-cover shadow-lg rounded-lg"
                  :src="slide.smallPicture"
                  :alt="slide.fullName"
                  width="300"
                  height="200"
                  :srcset="`${slide.smallPicture} 1x, ${slide.mediumPicture} 2x,
                    ${slide.largePicture} 3x`"
                />
              </div>


              

              <!-- text -->
              <div class="w-full lg:w-1/2 p-6">
                <div class="text-secondary-600 font-bold leading-normal text-left">
                  
                  <h3 class="text-xl md:text-3xl lg:text-3xl 2xl:text-5xl">
                    {{ slide.fullName }}
                  </h3>
                   <div class="h-1 gradient w-64 opacity-25 my-3 py-0 rounded-t">
                   </div>
                </div>

                <div class="leading-normal text-gray-800">
                  <p class="text-md md:text-xl lg:text-xl 2xl:text-3xl mb-4">
                    <em>{{ slide.about }}</em>
                  </p>
                  <p class="text-md md:text-xl lg:text-xl 2xl:text-3xl">
                   "{{ slide.testimonial }}"
                  </p>
                </div>
              </div>
              
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </section>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default defineComponent({
  components: { VueperSlides, VueperSlide },
  name: "Home",
  data() {
    return {
      regFormOpen: this.regFormOpen,
      formUrl: this.formUrl,
      status: this.status,
      
      // Testimonial slides
      slides: [
        {
          fullName: "Karla Agraz",
          smallPicture: "../testimonials/testimonial-karla-agraz-small-300.png",
          mediumPicture: "../testimonials/testimonial-karla-agraz-medium-600.png",
          largePicture: "../testimonials/testimonial-karla-agraz-large-1200.png",
          about: "UI developer, Peru",
          testimonial:
            "Personally, [the boot camp] helped me learn JavaScript and stop the fear of programming. The atmosphere of the classes is very cool. The other girls also inspired me that I could get a good job. The people at work liked what I was learning. It helped me in the hiring process.",
        },
        {
          fullName: "Kirsten",
          smallPicture: "../testimonials/testimonial-kirsten-small-300.png",
          mediumPicture: "../testimonials/testimonial-kirsten-medium-600.png",
          largePicture: "../testimonials/testimonial-kirsten-large-1200.png",
          about: "Student, Zimbabwe",
          testimonial:
            "My time during the weeks of the boot-camp was such fun, whenever it was time for class I was always super excited because my instructor always explained things in a way that made sense to me and it was truly an enjoyable experience...thank you, both to her and the community.",
        },
        {
          fullName: "Oluwaseyi Olulaye",
          smallPicture:
            "../testimonials/testimonial-oluwaseyi-olulaye-small-300.png",
          mediumPicture:
            "../testimonials/testimonial-oluwaseyi-olulaye-medium-600.png",
          largePicture:
            "../testimonials/testimonial-oluwaseyi-olulaye-large-1200.png",
          about: "Front-End Intern, Nigeria",
          testimonial:
            "Front-End Foxes Bootcamp gave me the confidence and the motivation to continue honing my skills in web development. My instructor made sure we got the fundamentals right. Now I am part of a great startup company as an intern, where I can put my skills to good use.",
        },
        {
          fullName: "Daniela Sanchez",
          smallPicture:
            "../testimonials/testimonial-daniela-sanchez-small-300.png",
          mediumPicture:
            "../testimonials/testimonial-daniela-sanchez-medium-600.png",
          largePicture:
            "../testimonials/testimonial-daniela-sanchez-large-1200.png",
          about: "IT Analyst, Mexico",
          testimonial:
            "The Front-End Foxes Bootcamp was a before and after in my training as a professional in IT. Thanks to my mentors and classmates, who helped me boost my knowledge and self-confidence. Now, I am part of a great company where I can show my skills.",
        },
      ],
      breakpoints: {
        2441: {
          slideRatio: 0.3,
        },
        1025: {
          slideRatio: 0.4,
        },
        1024: {
          slideRatio: 1,
        },
        601: {
          slideRatio: 1.25,
        },
        500: {
          slideRatio: 1.5,
        },
        350: {
          slideRatio: 2.75,
        },
        321: {
          slideRatio: 2.1,
        },
        300: {
          slideRatio: 3,
        },
      },
    };
  },
});
</script>

<style>
.nav,
.footer,
.gradient {
  background: linear-gradient(
    90deg,
    theme("colors.primary.700") 0%,
    theme("colors.primary.500") 100%
  );
}
#drawer {
  background-color: theme("colors.primary.700");
}

.logo {
  max-width: 500px;
}

/* Testimonial slides */
/* info on vueper slides: https://antoniandre.github.io/vueper-slides */
.vueperslides__arrow {
  color: rgb(0, 0, 0);
}

.vueperslides__arrow:focus {
  outline: none;
}
</style>
