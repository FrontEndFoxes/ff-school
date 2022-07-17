<template>
       <div class="mb-5" v-if="regFormOpen">
            <h3 class="text-center m-4 text-2xl font-semibold mt-5">
              We are now accepting applications our September 2022 cohort
            </h3>
            <a
              class="text-white"
              target="_blank"
              rel="noopener"
              :href="formUrl"
            >
              <div
                class="rounded-lg w-full md:w-1/2 m-auto py-3 uppercase text-center text-lg bg-secondary-500 hover:bg-secondary-400"
              >
                Register
              </div>
            </a>
          </div>
</template>
<script>
export default {
    data() {
        return {
            regFormOpen: this.regFormOpen,
            formUrl: this.formUrl
        }
    }
}
</script>