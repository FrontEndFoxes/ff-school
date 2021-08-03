<template>
  <div class="bg-white">
    <div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        About Us
      </h1>
      <div
        class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t mb-8 lg:mb-16"
      ></div>
      <div class="max-w-6xl mx-auto">
        <div class="text-black mx-8 lg:mx-20 text-base">
          <div class="lg:flex mb-4">
            <div class="lg:w-2/3 lg:pr-10">
              <h2 class="mb-4 text-3xl font-semibold">Who We Are</h2>
              <p class="leading-relaxed text-xl text-primary-700">
                Front-End Foxes is a 501(c)(3) nonprofit, tax-exempt charity
                registered in Massachusetts, USA. We are people who identify as
                women and who want to learn front-end technologies to make
                websites and mobile apps. Founded by Jen Looper in February
                2018, we create and host educational events to teach front-end
                technologies to women in a cool and fun way. Our activities
                include free self-driven code labs completed in a workshop
                format in groups with mentoring by volunteers, either online or
                in-person. The goal of the program is to familiarize women with
                front-end technologies in a supportive and inclusive
                environment.
              </p>

              <p
                class="pt-5 leading-relaxed text-2xl font-bold text-primary-700"
              >
                Visit our
                <a
                  class="underline"
                  href="https://frontendfoxes.org/gallery"
                  target="_blank"
                  >Gallery</a
                >
                to see some of our events, which we call 'skulks' (like foxes!)
              </p>
            </div>

            <div class="lg:w-1/3">
              <img
                class="lg:float-right mx-auto my-4 hidden lg:flex"
                src="../assets/mentoring4.jpg"
                alt="Mentoring in Bogota"
              />
            </div>
          </div>
          <div class="w-full leading-relaxed text-xl text-primary-700">
            In 2020 we pivoted to an entirely online format, and hosted several
            Zoom workshops and streamed events via our chapters. In 2021 we
            propose to retain this model for the Community wing of the
            organization while creating a completely new, Educational wing. With
            this structure we intend to launch a new online boot camp to teach
            development skills to women in a new and unique way. We are one of
            the very few non-corporate, free-of-charge community-generated boot
            camps for women in the world.
          </div>
          <div class="lg:w-full mt-5 lg:pr-20">
              <h2 class="mb-4 text-3xl font-semibold">Sponsor a Cohort</h2>
              <p class="leading-relaxed text-xl text-primary-700">
                Your sponsorship will make a difference! Sponsor a cohort or our
                entire organization. Please reach out to us directly or email
                <a class="underline" href="mailto:jen@frontendfoxes.org">Jen</a>
                to receive a prospectus and to become a sponsor.
              </p>
              <div>
                <div class="text-center mt-6">
                  <a
                    class="text-white mt-6 rounded-lg py-3 bg-blue-800 hover:bg-blue-500"
                    target="_blank"
                    href="https://us7.list-manage.com/contact-form?u=bb4724549551e6cf7bb5e3165&form_id=b15c2877e7d0009daf90e6911111e5b4"
                    ><span class="p-5 uppercase text-center text-lg">
                      Contact us for a Prospectus
                    </span></a
                  >
                </div>
              </div>
            </div>
         <div class="mb-5">
            <h3 class="text-center m-4 text-2xl font-semibold mt-5">
              We are now accepting applications our September cohort
            </h3>
            <a
              class="text-white"
              target="_blank"
              href="https://forms.gle/xF6EbqAiQdWgbp9Q9"
            >
              <div
                class="rounded-lg w-full md:w-1/2 m-auto py-3 uppercase text-center text-lg bg-secondary-500 hover:bg-secondary-400"
              >
                Register
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
});
</script>


