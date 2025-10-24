<template>
  <div class="bg-blue-100 h-full">
    <div class="pt-24 bg-blue-100 bg-gradient-to-b from-white  pb-10">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Annual Reports
      </h1>
      <div
        class="h-1 mx-auto w-64 opacity-25 my-0 py-0 rounded-t mb-8 lg:mb-16"
      ></div>
      <div class="ffreportsgroup">
        <div class="ffreport__card">
          <ImageItem
            class="ffreport__image"
            source="https://res.cloudinary.com/beanpot-studio/image/upload/f_auto,q_auto/v1614296641/reports/2018_feqpy9.png"
          />
          <div class="ffgallery__body text-center">
            <a
              class="font-bold text-1xl text-gray-600 underline"
              href="/reports/annual-report-2018-min.pdf"
              target="_blank"
              rel="noopener"
              >2018</a
            >
          </div>
        </div>
        <div class="ffreport__card">
          <ImageItem
            class="ffreport__image"
            source="https://res.cloudinary.com/beanpot-studio/image/upload/f_auto,q_auto/v1614296639/reports/2019_ibv6av.png"
          />
          <div class="ffgallery__body text-center">
            <a
              class="font-bold text-1xl text-gray-600 underline"
              href="/reports/annual-report-2019-min.pdf"
              target="_blank"
              rel="noopener"
              >2019</a
            >
          </div>
        </div>
        <div class="ffreport__card">
          <ImageItem
            class="ffreport__image"
            source="https://res.cloudinary.com/beanpot-studio/image/upload/f_auto,q_auto/v1614296639/reports/2020_efbzbp.png"
          />
          <div class="ffgallery__body text-center">
            <a
              class="font-bold text-1xl text-gray-600 underline"
              href="/reports/annual-report-2020-min.pdf"
              target="_blank"
              rel="noopener"
              >2020</a
            >
          </div>
        </div>
         <div class="ffreport__card">
          <ImageItem
            class="ffreport__image"
            source="https://res.cloudinary.com/beanpot-studio/image/upload/f_auto,q_auto/v1657286794/reports/Screen_Shot_2022-07-08_at_9.23.35_AM_fwwmcc.png"
          />
          <div class="ffgallery__body text-center">
            <a
              class="font-bold text-1xl text-gray-600 underline"
              href="/reports/annual-report-2021-min.pdf"
              target="_blank"
              rel="noopener"
              >2021</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ImageItem from "../components/ImageItem.vue";

export default defineComponent({
  name: "Reports",
  components: { ImageItem },
});
</script>

<style scoped>
.ffgallery__body {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.ffreport__card {
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.ffreportsgroup {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2.5rem;
}

/* Medium (md) */
@media (min-width: 768px) {
  .ffreportsgroup {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.ffreport__wrap {
  border-radius: 0.25rem;
}

/* Small (sm) */
@media (min-width: 640px) {
  .ffreport__card {
    height: 17rem;
  }
  .ffreport__wrap {
    height: 16rem;
  }
}

/* Medium (md) */
@media (min-width: 768px) {
  .ffreport__card {
    width: 30%;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

.ffreport__image {
  height: 13rem;
}
</style>


