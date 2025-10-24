<template>
  <div class="pt-24 bg-blue-100 bg-gradient-to-b from-white pb-10">
    <h1 class="gallery__title">
      Gallery
    </h1>
    <div class="w-full mb-4">
      <div
        class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
      ></div>
    </div>
    <div v-if="years.length > 0">
      <!-- Years -->
      <YearsGroup :years="years" :currentYear="yearToFilter" @show="onShow" />
      <div v-if="yearToFilter > 0 && eventsByYear.length > 0">
        <div
          class="text-gray-800 mx-20 mt-5 mb-5 text-xl font-bold text-center"
        >
          <p class="text-2xl">
            Images of past skulks
          </p>
        </div>
        <!-- Events -->
        <EventsGroup :events="eventsByYear" />
      </div>
      <div
        v-else-if="yearToFilter == 0 && eventsByYear.length == 0"
        class="text-gray-800 mx-20 mt-5 mb-5 text-xl font-bold text-center"
      >
        <p class="text-2xl">
          Sorry, there are no results for the selected year
        </p>
      </div>
      <div
        v-else
        class="text-gray-800 mx-20 mt-5 mb-5 text-xl font-bold text-center"
      >
        <p class="text-2xl">
          Sorry, there are no results for the selected year
        </p>
      </div>
    </div>
    <div
      v-else
      class="text-gray-800 mx-20 mt-5 mb-5 text-xl font-bold text-center"
    >
      <p class="text-2xl">
        Sorry, there are no events
      </p>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import ffEventsGalleries from "../assets/gallery.json";
import YearsGroup from "../components/YearsGroup.vue";
import EventsGroup from "../components/EventsGroup.vue";
export default defineComponent({
  name: "Gallery",
  components: { YearsGroup, EventsGroup },
  data() {
    return {
      ffEventsGalleries: ffEventsGalleries,
      years: [],
      yearToFilter: 0,
    };
  },

  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.extractYearFromEvents();

      if (Array.isArray(this.years) && this.years.length > 0) {
        this.yearToFilter = this.years[0];
      }
    },
    extractYearFromEvents() {
      let result = [];

      if (
        this.ffEventsGalleries !== undefined &&
        this.ffEventsGalleries !== null
      ) {
        this.ffEventsGalleries.forEach(({ year }) => {
          if (!result.includes(year)) {
            result.push(year);
          }
        });
      }
      this.years = result.sort().reverse();
    },
    onShow(year) {
      this.yearToFilter = year;
    },
  },
  computed: {
    eventsByYear() {
      const result = this.ffEventsGalleries.filter(
        (ffElement) => ffElement.year === this.yearToFilter
      );
      return result;
    },
  },
});
</script>
<style scoped>
.gallery__title {
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.25;
  text-align: center;
  color: #374151;
}
</style>
