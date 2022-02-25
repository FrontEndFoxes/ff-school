<template>
  <div class="bg-white">
    <div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Our School
      </h1>
      <div
        class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t mb-8 lg:mb-16"
      ></div>
      <div class="max-w-6xl mx-auto">
        <div class="text-black mx-8 lg:mx-20 text-base">
          <div class="lg:flex mb-4">
            <div class="lg:w-2/3 lg:pr-20">
              <h2 class="mb-4 text-3xl font-semibold">What to Expect</h2>
              <p class="leading-relaxed text-xl text-primary-700">
                We propose to host, throughout the year, free cohorts of 5
                weeks each. We also offer asyncronous online learning. 
                Each cohort will be designed groups of 20 students organized by region, with one paid, trained instructor per region teaching
                online twice a week, aided by volunteer mentor
                coaches. Our current schedule is:
                <ul class="pt-5 leading-relaxed text-xl text-primary-700">
                  <li>👩‍🎓 C0: April 5 - June 18 2021</li>
                  <li>👩‍🎓 C1​: September 6 - October 8 2021</li>
                  <li>👩‍🎓 C2​: January 10 - February 18 2022</li>
                  <li>👩‍🎓 C3​: coming this summer! </li>
                </ul>
              </p>
              
              
            </div>
            <div class="lg:w-1/3">
              <img
                class="lg:float-right mx-auto my-4 hidden lg:flex"
                src="https://res.cloudinary.com/front-end-foxes/image/upload/v1602815746/skulks-2020/tech-ladies-singapore-2020_jt9jyk.png"
                alt="Zoom Events"
              />
            </div>
          </div>
          <p
                class="rounded-lg bg-gray-300 m-5 p-5 font-bold leading-relaxed text-xl text-primary-700"
              >
                Front-End Foxes School is a part-time program, taught twice a
                week in the evenings for 6 weeks per cohort - perfect for working women, students and
                moms. We also offer ad hoc asyncronous classroom learning. We will ALWAYS be free of charge for students with no
                strings attached. By the end of the program you will have learned the basics of JavaScript, CSS, and HTML.
              </p>

              <h2 class="mb-4 text-3xl font-semibold">Eligibility</h2>
              <p class="leading-relaxed text-xl text-primary-700">
                Our programs are designed for women students. While we teach remote cohorts, it is still important to ensure that our student groups are women only. To this effect, we ask that students, when applying, self-certify as women. Membership in a cohort can be revoked if self-identification is found to be false.</p>

                      <h2 class="mb-4 text-3xl font-semibold mt-4">Participating</h2>

          
          <div class="pt-2 w-full leading-relaxed text-xl text-primary-700">
            <span class="font-bold">Students</span> will learn the basics of web
            development with JavaScript, HTML and CSS and become comfortable with GitHub. Our project-based curriculum
            allows new developers to create and maintain a web portfolio site
            and a GitHub presence for professional use. Our curriculum is partly
            based on Microsoft's
            <a
              class="underline"
              href="https://aka.ms/webdev-beginners"
              target="_blank"
              rel="noopener"
              >"Web Dev for Beginners"</a
            >
            curriculum, developed by a team led by Jen.
            <hr class="pt-5 mt-5" />
            <p><span class="font-bold">Paid Instructors</span> will be responsible
            for teaching our curriculum and giving feedback on student
            progress. You will offer drop-in office hours once a week and complete feedback for each of your 20 students at the end of a cohort.</p>
          <hr class="pt-5 mt-5" />
          
          <p><span class="font-bold">Volunteer Mentors</span> will attend classes and be prepared to answer questions during class while the instructor teaches. You will offer drop-in office hours once a week to support student progress. You will help students complete their work by coaching them and giving them feedback.
  </p>
          
          </div>
          <div>
            <h2 class="mb-4 text-3xl font-semibold mt-5">Our Goals</h2>
            <div class="w-full leading-relaxed text-xl text-primary-700">
              <p>
                🦊 We teach cohorts of women front-end web
                development skills, skills often not taught in college.
              </p>
              <p>
                🦊 We will use a curriculum designed to help
                students build their professional portfolios.
              </p>
              <p>
                🦊 Provide opportunities for companies to help improve the
                pipeline of well-trained new developers for the front-end
                ecosystem.
              </p>
              <p>
                🦊 Some of the best teachers in the industry are on our staff!
              </p>
              <p>
                🦊 Learn at your own pace with asyncronous learning opportunities, or join an in-person cohort. The choice is yours!
              </p>
            </div>
          </div>
          <Register/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Register from "../components/Register.vue";

export default defineComponent({
    name: "Our School",
    components: { Register }
});
</script>


