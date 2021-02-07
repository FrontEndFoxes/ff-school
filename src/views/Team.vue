<template>
  <div class="bg-white">
    <div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Our Team
      </h1>
      <div
        class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t mb-8 lg:mb-16"
      ></div>
      <div class="max-w-6xl mx-auto">
        <div class="text-black mx-8 lg:mx-20 text-base">
          <div class="lg:flex mb-4">
            <figure class="md:flex bg-white rounded-xl p-8 md:p-0">
              <img
                class="w-64 h-64 md:w-64 m md:rounded-none rounded-full mx-auto"
                src="../assets/jen.png"
                alt="Jen Looper"
                width="414"
                height="414"
              />
              <div class="pt-6 md:p-8 text-center space-y-4">
                <blockquote>
                  <p class="text-lg">
                    <span class="font-bold"
                      >Jen Looper (President and Founder)</span
                    >
                    is a Google Developer Expert and a Cloud Developer Advocate
                    Lead at Microsoft with over 20 years' experience as a web
                    and mobile developer. She is a multilingual multiculturalist
                    with a passion for teaching.
                  </p>
                </blockquote>
              </div>
            </figure>
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="text-black mx-8 lg:mx-20 text-base">
          <div class="lg:flex mb-4">
            <figure class="md:flex bg-white rounded-xl p-8 md:p-0">
              <img
                class="w-64 h-64 md:w-64 m md:rounded-none rounded-full mx-auto"
                src="../assets/diana.png"
                alt="Diana Rodriguez"
                width="414"
                height="414"
              />
              <div class="pt-6 md:p-8 text-center space-y-4">
                <blockquote>
                  <p class="text-lg">
                    <span class="font-bold"
                      >Diana Rodríguez (Education Coordinator)</span
                    >
                    is a web developer, infrastructure and automation specialist
                    with over 20 years’ experience in the tech ecosystem. Strong
                    in community presence, she leads GDG Durham and PyLadies
                    RDU.
                  </p>
                </blockquote>
              </div>
            </figure>
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="text-black mx-8 lg:mx-20 text-base">
          <div class="lg:flex mb-4">
            <figure class="md:flex bg-white rounded-xl p-8 md:p-0">
              <img
                class="w-64 h-64 md:w-64 m md:rounded-none rounded-full mx-auto"
                src="../assets/jaeriah.png"
                alt="Jaeriah Tay"
                width="414"
                height="414"
              />
              <div class="pt-6 md:p-8 text-center space-y-4">
                <blockquote>
                  <p class="text-lg">
                    <span class="font-bold"
                      >Jaeriah Tay (Student Satisfaction Coordinator)</span
                    >
                    is a multilingual front-end developer/designer who builds
                    and designs product and integrations at Chec/Commerce.js.
                    Coming from a design and entrepreneurial background, Jaeriah
                    applies her passion by building software and working on
                    developer resources.
                  </p>
                </blockquote>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Team",
});
</script>

