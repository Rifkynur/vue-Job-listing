<script setup>
import { ref, defineProps, onMounted } from "vue";

import jobData from "@/jobs.json";
import JobListing from "@/components/JobListing.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});
const jobs = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await axios("http://localhost:3000/jobs");
    jobs.value = response.data;
  } catch (error) {
    console.error("failed fetcing jobs");
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
    </div>
    <div v-if="isLoading" class="text-center text-gray-500 py-6">
      <PulseLoader />
    </div>
    <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <JobListing v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View All Jobs</RouterLink>
  </section>
</template>
