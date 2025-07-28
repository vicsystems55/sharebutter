<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

// State
const jobs = ref([])
const loading = ref(false)
const error = ref(null)

// Pagination
const currentPage = ref(1)
const perPage = 10

// Fetch data from API
async function fetchJobs() {
  loading.value = true
  try {
    const res = await axios.get('https://bridge.erp-55.com.ng/api/all-job-postings', {
      headers: {
        Authorization: 'Bearer 406|OfVN0noMZjoTZzAwayalO63KefSyOat3B9kpouHI044d0eb1',
      },
    })
    jobs.value = res.data
  } catch (err) {
    error.value = err.message || 'Failed to load jobs'
  } finally {
    loading.value = false
  }
}

const pagedJobs = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return jobs.value.slice(start, start + perPage)
})

const totalPages = computed(() => Math.ceil(jobs.value.length / perPage))

onMounted(fetchJobs)

function removeJob(id) {
  jobs.value = jobs.value.filter(job => job.id !== id)
}
</script>

<template>
  <div>
    <div class="mb-6">
      <h2 class="text-h4 font-weight-bold">Browse Job Listings</h2>
      <p class="text-body-1 text-medium-emphasis">
        Explore the latest job postings from our platform.
      </p>
    </div>

    <VProgressLinear v-if="loading" indeterminate color="primary" class="mb-6" />
    <div v-if="error" class="text-center text-error">{{ error }}</div>

    <VRow dense>
      <VCol
        v-for="job in pagedJobs"
        :key="job.id"
        cols="12"
        md="6"
      >
        <VCard class="pa-4 mb-4 job-card" height="100%">
          <div class="d-flex justify-space-between align-start mb-4">
            <div class="flex-grow-1">
              <h3 class="text-h6 font-weight-medium mb-1">
                {{ job.job_title }}
              </h3>
              <p class="text-body-2 text-medium-emphasis mb-2">
                {{ job.company_name }}
              </p>
            </div>
            <VBtn icon variant="tonal" color="error" @click="removeJob(job.id)">
              <VIcon icon="tabler-bookmark-off" />
            </VBtn>
          </div>

       <VRow class="mb-4" dense>
  <VCol cols="12" sm="6">
    <div class="text-body-2 d-flex align-center">
      <VIcon icon="tabler-map-pin" class="me-2" size="18" />
      {{ job.location }}
    </div>
  </VCol>

  <VCol cols="12" sm="6">
    <div class="text-body-2 d-flex align-center">
      <VIcon icon="tabler-briefcase" class="me-2" size="18" />
      {{ job.employment_type }}
    </div>
  </VCol>

  <VCol cols="12" sm="6">
    <div class="text-body-2 d-flex align-center">
      <VIcon icon="tabler-school" class="me-2" size="18" />
      {{ job.min_qualification }}
    </div>
  </VCol>

  <VCol cols="12" sm="6">
    <div class="text-body-2 d-flex align-center">
      <VIcon icon="tabler-clock" class="me-2" size="18" />
      Deadline: {{ new Date(job.deadline).toLocaleDateString() }}
    </div>
  </VCol>

  <VCol cols="12" sm="6">
    <div class="text-body-2 d-flex align-center">
      <VIcon icon="tabler-graph" class="me-2" size="18" />
      Experience: {{ job.min_experience }}
    </div>
  </VCol>
</VRow>

<!-- Apply Button -->
<div class="text-end">
  <VBtn color="primary">View & Apply</VBtn>
</div>

        </VCard>
      </VCol>
    </VRow>

    <div class="d-flex justify-center mt-6">
      <VPagination v-model="currentPage" :length="totalPages" total-visible="7" />
    </div>
  </div>
</template>

<style scoped>
.job-card {
  border-radius: 12px;
  transition: box-shadow 0.2s;
}

.job-card:hover {
  box-shadow: 0 4px 18px rgba(0, 0, 0, 6%);
}
</style>
