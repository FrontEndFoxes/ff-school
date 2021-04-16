
<template>
  <div class="bg-white">
    <div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Sponsors
      </h1>
      <div
        class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t mb-8 lg:mb-16"
      ></div>
      <div class="max-w-6xl mx-auto">
        <h2 class="text-center mb-4 text-3xl font-semibold text-black">
          Silver Sponsors
        </h2>

        <div class="text-black mx-8 lg:mx-20 text-base">
          <div class="lg:flex mb-4">
            <figure class="md:flex bg-white rounded-xl p-8 md:p-0">
              <img
                class="w-64 h-64 md:w-64 m md:rounded-none rounded-full mx-auto"
                src="../assets/kendo-logo.png"
                alt="Kendo UI"
                width="414"
                height="414"
              />
              <div class="pt-6 md:p-8 text-center space-y-4">
                <blockquote>
                  <p class="text-lg">
                    <p class="font-bold text-xl pb-5">Progress Kendo UI</p>
                    Build Better JavaScript Apps Faster! The ultimate collection
                    of JavaScript UI components with libraries for jQuery,
                    Angular, React, and Vue. Quickly build eye-catching,
                    high-performance, responsive web applications regardless of
                    your JavaScript framework choice. For more information visit:
                    <a
                      class="underline"
                      href="https://www.telerik.com/kendo-ui"
                      target="_blank"
                      >https://www.telerik.com/kendo-ui</a
                    >.
                  </p>
                </blockquote>
              </div>
            </figure>
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto">
        <h2 class="text-center mb-4 text-3xl font-semibold text-black">
          Community Sponsors
        </h2>

        <div class="text-black mx-8 lg:mx-20 text-base">
          <div class="lg:flex mb-4">
            <figure class="md:flex bg-white rounded-xl p-8 md:p-0">
              <img
                class="w-64 h-64 md:w-64 m md:rounded-none rounded-full mx-auto"
                src="../assets/pachi-logo.png"
                alt="Pachi Codes"
                width="414"
                height="414"
              />
              <div class="pt-6 md:p-8 text-center space-y-4">
                <blockquote>
                  <p class="text-lg">
                    <p class="font-bold text-xl pb-5">Pachi Codes</p>
                    Pachi is a self-directed learner. Very active online, Pachi
                    fell in love with the community and began teaching what she
                    knew and sharing her learning, writing and live coding. She
                    is a Developer Relations Engineer at New Relic. Visit her
                    site at
                    <a
                      class="underline"
                      href="https://pachicodes.com"
                      target="_blank"
                      >PachiCodes.com</a
                    >.
                  </p>
                </blockquote>
              </div>
            </figure>
          </div>
        </div>
      </div>

      <hr class="p-10 m-10" />
      <div class="max-w-6xl mx-auto">
        <div class="text-black mx-8 lg:mx-20 text-base">
          <div class="lg:flex mb-4">
            <div class="lg:w-2/3 lg:pr-20">
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
            <div class="lg:w-1/3">
              <img
                class="lg:float-right mx-auto my-4 hidden lg:flex"
                src="../assets/mentoring5.jpg"
                alt="Mentoring with us"
              />
            </div>
          </div>
          <div class="w-full leading-relaxed text-xl text-primary-700">
            <h2 class="mb-4 text-3xl font-semibold">
              You can help in other ways as well!
            </h2>

            <div class="w-full leading-relaxed text-xl text-primary-700">
              <p>
                👩‍🏫 Teach! We are currently looking for instructors eager to
                teach! This is a paid position and we want to hear from you!
                Please apply as an instructor
                <a class="underline" href="https://forms.gle/Yk8sWmKdLiKgSvvC9"
                  >using this form</a
                >.
              </p>

              <p>
                💪 Coach! We are looking for volunteer mentors to help coach
                students. Come bring your skills as a developer and help the
                next generation of women developers enter the work force. If you
                want to coach, please apply as a mentor
                <a class="underline" href="https://forms.gle/Yk8sWmKdLiKgSvvC9"
                  >using this form</a
                >.
              </p>
              <p>
                🏆 Learn! If you are interested in joining a cohort as a
                student, please apply
                <a class="underline" href="https://forms.gle/Yk8sWmKdLiKgSvvC9"
                  >using this form</a
                >.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sponsor",
});
</script>


