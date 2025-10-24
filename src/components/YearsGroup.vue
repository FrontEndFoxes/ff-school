<template>
  <div class="years">
      <div v-for="(year, index) in years" 
          :key="index" :class="paintYearSelected(year)"
          @click="show(year)">
          <span class="cursor-pointer">{{ year }}</span>
      </div>
  </div>
</template>
<script>
export default {
	props: ["years", "currentYear"],
	name: "YearsGroup",
	emits: ["show"],
	data() {
		return {
			yearSelected: 0,
		};
	},
	created() {
		this.yearSelected = this.currentYear;
	},
	methods: {
		show(year) {
			// Change values
			this.yearSelected = year;
			// Emit any event
			this.$emit("show", this.yearSelected);
		},
		paintYearSelected(year) {
			const cssNormal = "years__title";
			const cssSelected = "years__title--selected";
			const activeClass = this.yearSelected === year ? cssSelected : cssNormal;

			return [activeClass, cssNormal];
		}
	},
};
</script>
<style scoped>
.years {
  width: 91.666667%;
  margin-bottom: 1.25rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border-radius: 0.25rem;
  padding: 0.25rem;
}

.years__title {
  width: 4rem;
  text-align: center;
  margin: 0.25rem;
  padding: 0.25rem;
  color: #4B5563;
}

.years__title--selected {
  border-bottom-width: 2px;
  border-bottom-color: #4B5563;
}

/* Medium */

@media (min-width: 768px) {
  .years {
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
  .years__title {
    width: 3rem;
  }
}

/* Large (lg) */

@media (min-width: 1024px) {
  .years {
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
  .years__title {
    width: 3rem;
  }
}
</style>