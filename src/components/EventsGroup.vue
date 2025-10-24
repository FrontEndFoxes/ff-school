<template>
  <div class="ffeventsgroup">
      <CardEventGallery 
        v-for="eventToShow in events" 
        :key="eventToShow.id" 
        :eventToShow="eventToShow" 
      />
  </div>
</template>
<script>
import CardEventGallery from "./CardEventGallery.vue";

export default {
  props: ["events"],
  name: "EventsGroup",
  components: { CardEventGallery },
};
</script>

<style scoped>
.ffeventsgroup {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2.5rem;
}

/* Medium (md) */
@media (min-width: 768px) {
  .ffeventsgroup {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>