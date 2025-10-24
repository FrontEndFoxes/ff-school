<template>
  <div class="ffevent__card">
        <ImageItem
            class="ffevent__image"
            :source="eventToShow.image"
        />
		<div class="ffgallery__body">
    <div class="text-1xl text-center text-gray-600">
				{{ eventToShow.title }}
			</div>
			<div class="text-1xl text-center text-gray-600">
				{{ eventToShow.city }}, {{ eventToShow.country }}
			</div>
			<p class="font-bold text-1xl text-center text-gray-600">
				{{ eventToShow.month }} {{ eventToShow.day }}
			</p>
		</div>
  </div>
</template>
<script>
import ImageItem from "./ImageItem.vue";
export default {
	name: "CardEventGallery",
    props: ["eventToShow"],
    components: { ImageItem },
};
</script>
<style scoped>
.ffgallery__body {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.ffevent__card {
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.ffevent__wrap {
  border-radius: 0.25rem;
}

/* Small (sm) */
@media (min-width: 640px) {
  .ffevent__card {
    height: 19rem;
  }
  .ffevent__wrap {
    height: 20rem;
  }
}

/* Medium (md) */
@media (min-width: 768px) {
  .ffevent__card {
    width: 30%;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

.ffevent__image {
    height: 13rem;
}
</style>
