<template>
  <main class="relative py-10">
    <div class="pt-24 py-20">
      <div class="container mx-auto px-10 flex flex-wrap flex-col md:flex-row">
        <!--Left Col-->
        <div class="flex flex-col w-full text-left md:text-left">
          <h1 class="my-4 text-4xl md:text-6xl font-bold leading-normal">
            Thank you for five great years!
          </h1>
          <p
            class="leading-normal text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8"
          >
            Front-End Foxes has closed our doors. We appreciate the community's support over the past five years. Never stop learning, and we wish you the best! For a trip down memory lane, visit our gallery.
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

<!--<section class="py-8" style="background-color: #f7fafc">
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
    </section>-->

     <div style="background-color: #f7fafc" class="w-full py-6 mx-auto">
        <img class="logo w-full" src="../assets/logo.svg" alt="Front-End Foxes Logo" />
     </div>
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
          fullName: "Eda Yavuz",
          smallPicture: "../testimonials/testimonial-eda-yavuz-small-300.png",
          mediumPicture: "../testimonials/testimonial-eda-yavuz-medium-600.png",
          largePicture: "../testimonials/testimonial-eda-yavuz-large-1200.png",
          about: "Teacher, Bulgaria",
          testimonial:
            "Front-End Foxes School gave me the second chance I've been trying to get to shift my career. Learning and growing with a group of amazing women from all around the world is just another perk. Still can't believe this amazing Bootcamp with highly skilled instructors was free. I'm thrilled to be part of this community!",
        },
        {
          fullName: "Tiffany Clark",
          smallPicture: "../testimonials/testimonial-tiffany-clark-small-300.png",
          mediumPicture: "../testimonials/testimonial-tiffany-clark-medium-600.png",
          largePicture: "../testimonials/testimonial-tiffany-clark-large-1200.png",
          about: "Help Desk Analyst, Chicago, USA",
          testimonial:
            "Before joining the program, I had very little experience with JavaScript. Front-End Foxes really helped me a lot with this. All the teachers and mentors were very helpful. A couple times I really thought I wouldn't catch on. But with determination and patience, I was able to finish and now I have a portfolio!",
        },
        {
          fullName: "Sofia Rebelo",
          smallPicture: "../testimonials/testimonial-sofia-rebelo-small-300.jpg",
          mediumPicture: "../testimonials/testimonial-sofia-rebelo-medium-600.jpg",
          largePicture: "../testimonials/testimonial-sofia-rebelo-large-1200.jpg",
          about: "Graphic Designer, Portugal",
          testimonial:
            "Being a complete stranger to coding, at first I was really afraid I would not be able to keep up. But Front End Foxes School has the most amazing community and mentors, that supported and cheered every small conquer, making me feel proud of my achievements and motivated to learn more!",
        },
        {
          fullName: "Yeşim Akar Hozman",
          smallPicture: "../testimonials/testimonial-yesim-hozman-small-300.png",
          mediumPicture: "../testimonials/testimonial-yesim-hozman-medium-600.png",
          largePicture: "../testimonials/testimonial-yesim-hozman-large-1200.png",
          about: "Front-End Developer, Turkey",
          testimonial:
            "It is a great opportunity to meet with qualified instructors, experienced mentors and hardworking classmates. We learnt a lot in five weeks and surely will continue to share knowledge and experience with the Front-End Foxes community. It lasts forever! #redfox!",
        },
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
  display: flex;
  margin: auto;
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
