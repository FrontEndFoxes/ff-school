<template>
  <div class="bg-white">
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
                  >"Web Dev for Beginners"</a
                >
                curriculum, developed by a team led by Jen. In addition, we
                offer four lessons at the end of the cohort to teach the basics
                of React.js in order to create a web portfolio site useful to
                students when seeking jobs. The students will complete four
                projects in vanilla JavaScript, learning HTML and CSS basics
                along the way, and then have creative freedom to build a
                portfolio site in React.js reflecting their personal brand.
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
                <td class="p-5">Getting Started</td>
                <td class="p-5">
                  Introduction to Programming and Tools of the Trade
                </td>
              </tr>
              <tr class="border-solid border border-gray-800">
                <td class="p-5">1</td>
                <td class="p-5">Getting Started</td>
                <td class="p-5">
                  Basics of GitHub, includes working with a team
                </td>
              </tr>
              <tr class="border-solid border border-gray-800">
                <td class="p-5">2</td>
                <td class="p-5">Getting Started</td>
                <td class="p-5">Accessibility</td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">2</td>
                <td class="p-5">JS Basics</td>
                <td class="p-5">JavaScript Data Types</td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">3</td>
                <td class="p-5">JS Basics</td>
                <td class="p-5">Functions and Methods</td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">3</td>
                <td class="p-5">JS Basics</td>
                <td class="p-5">Making Decisions with JS</td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">4</td>
                <td class="p-5">JS Basics</td>
                <td class="p-5">Arrays and Loops</td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">4</td>
                <td class="p-5">Terrarium</td>
                <td class="p-5">HTML in Practice</td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">5</td>
                <td class="p-5">Terrarium</td>
                <td class="p-5">CSS in Practice</td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">5</td>
                <td class="p-5">Terrarium</td>
                <td class="p-5">JavaScript Closures, DOM manipulation</td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">6</td>
                <td class="p-5">Typing Game</td>
                <td class="p-5">Event-Driven Development</td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">6</td>
                <td class="p-5">Green Browser Extension</td>
                <td class="p-5">Working with Browsers</td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">7</td>
                <td class="p-5">Green Browser Extension</td>
                <td class="p-5">
                  Building a form, calling an API and storing variables in local
                  storage
                </td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">7</td>
                <td class="p-5">Green Browser Extension</td>
                <td class="p-5">
                  Background processes in the browser, web performance
                </td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">8</td>
                <td class="p-5">Banking App</td>
                <td class="p-5">HTML Templates and Routes in a Web App</td>
              </tr>
              <tr class="border-solid border border-gray-800">
                <td class="p-5">8</td>
                <td class="p-5">Banking App</td>
                <td class="p-5">Build a Login and Registration Form</td>
              </tr>
              <tr class="border-solid border border-gray-800">
                <td class="p-5">9</td>
                <td class="p-5">Banking App</td>
                <td class="p-5">Methods of Fetching and Using Data</td>
              </tr>
              <tr class="border-solid border border-gray-800">
                <td class="p-5">9</td>
                <td class="p-5">Banking App</td>
                <td class="p-5">Concepts of State Management</td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">10</td>
                <td class="p-5">A taste of Vue.js</td>
                <td class="p-5">Build a pet adoption app with Vue</td>
              </tr>

              <tr class="border-solid border border-gray-800">
                <td class="p-5">10</td>
                <td class="p-5">Build your Portfolio with React</td>
                <td class="p-5">
                  Introduction to React.js; JSX, Scaffold your site
                </td>
              </tr>
              <tr class="border-solid border border-gray-800">
                <td class="p-5">11</td>
                <td class="p-5">Build your Portfolio with React</td>
                <td class="p-5">Components, Props, Methods</td>
              </tr>
              <tr class="border-solid border border-gray-800">
                <td class="p-5">11</td>
                <td class="p-5">Build your Portfolio with React</td>
                <td class="p-5">State Management in React, Routing</td>
              </tr>
            </tbody>
          </table>

          <div class="mb-5">
            <h3 class="text-center m-4 text-2xl font-semibold mt-5">
              We are now accepting applications for self-driven learning
            </h3>
            <a
              class="text-white"
              target="_blank"
              href="https://forms.gle/GA9pUe8AFkcJJQvSA"
            >
              <div
                class="
                  rounded-lg
                  w-full
                  md:w-1/2
                  m-auto
                  py-3
                  uppercase
                  text-center text-lg
                  bg-secondary-500
                  hover:bg-secondary-400
                "
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
  name: "Curriculum",
});
</script>


