<template>
  <div class="bg-blue-100 h-full">
    <div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
      <h1
        class="
          w-full
          my-2
          text-5xl
          font-bold
          leading-tight
          text-center text-gray-800
        "
      >
        Our Curriculum
      </h1>
      <div
        class="
          h-1
          mx-auto
          gradient
          w-64
          opacity-25
          my-0
          py-0
          rounded-t
          mb-8
          lg:mb-16
        "
      ></div>
      <div class="max-w-6xl mx-auto">
        <div class="text-black mx-8 lg:mx-20 text-base">
          <div class="lg:flex mb-4">
            <div class="lg:w-2/3 lg:pr-10">
              <p class="leading-relaxed text-xl text-primary-700">
                We base our curriculum on Microsoft's
                <a
                  class="underline"
                  href="https://aka.ms/webdev-beginners"
                  target="_blank"
                  rel="noopener"
                  >"Web Dev for Beginners"</a
                >
                curriculum, developed by a team led by Jen. In addition, we
                offer lessons at the end of the cohort to teach the basics
                of Vue.js in order to create a web portfolio site useful to
                students when seeking jobs. The students will learn GitHub basics and then dive into HTML and CSS.
                They will work on their portfolio site throughout the cohort and have a showcase at the end of week 6.
                Mentors and Instructors will be available to give feedback and
                help as the student progresses.
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

          <table class="table-auto border-solid border border-gray-800">
            <thead class="border-solid border border-gray-800">
              <tr class="p-3 bg-gray-200">
                <th>Week</th>
                <th>Concepts/Project</th>
                <th>Learning Objectives</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-solid border border-gray-800">
                <td class="p-5">1</td>
                <td class="p-5">Getting Started as a Web Programmer</td>
                <td class="p-5">
                  Introduction to Programming and Tools of the Trade, Basics of GitHub
                </td>
              </tr>
    
              <tr class="border-solid border border-gray-800">
                <td class="p-5">2</td>
                <td class="p-5">Accessibility and Semantic HTML</td>
                <td class="p-5">Writing HTML for Everyone</td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">3</td>
                <td class="p-5">Introduction to CSS</td>
                <td class="p-5">Style your Apps!</td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">4</td>
                <td class="p-5">Introduction to JavaScript</td>
                <td class="p-5">Variables, Functions and Methods, Making Decisions, Conditionals</td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">5</td>
                <td class="p-5">Applied JavaScript</td>
                <td class="p-5">Build a Typing Game and a Todo App</td>
              </tr>
              
              <tr class="border-solid border border-gray-800">
                <td class="p-5">6</td>
                <td class="p-5">Introduction to Vue, SPAS and PWAs</td>
                <td class="p-5">Build Apps with Modern Frameworks and support Offline users</td>
              </tr>

             

              
            </tbody>
          </table>

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
    name: "Curriculum",
    components: { Register }
});
</script>


