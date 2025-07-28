<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Reactive list for saved jobs
const savedJobs = ref([])

const fetchSavedJobs = async () => {
  try {
    const response = await axios.get('https://bridge.erp-55.com.ng/api/all-job-postings', {
      headers: {
        Authorization: 'Bearer 406|OfVN0noMZjoTZzAwayalO63KefSyOat3B9kpouHI044d0eb1',
      },
    })

    // Filter bookmarked jobs
    savedJobs.value = response.data.filter(job => job.bookmarked)

  } catch (error) {
    console.error('Failed to fetch saved jobs:', error)
  }
}

const removeJob = id => {
  savedJobs.value = savedJobs.value.filter(job => job.id !== id)
}

// Fetch when component mounts
onMounted(fetchSavedJobs)
</script>

<template>
  <div>
    <!-- Page Title -->
    <div class="mb-6">
      <h1 class="text-h5 font-weight-bold">Saved Jobs</h1>
      <p class="text-body-1 text-medium-emphasis">
        Easily access the jobs you've saved to apply later.
      </p>
    </div>

    <!-- Saved Jobs Cards -->
    <VRow dense>
      <VCol
        v-for="job in savedJobs"
        :key="job.id"
        cols="12"
        md="6"
      >
        <VCard class="pa-4 mb-4" :style="{ backgroundColor: '#f9f9f9' }" height="100%">
          <div class="d-flex justify-space-between align-center mb-3">
            <!-- Job Info -->
            <div>
              <h3 class="text-h6 font-weight-medium mb-1">{{ job.job_title }}</h3>
              <p class="text-body-2 text-medium-emphasis">
                {{ job.job_description.slice(0, 90) }}...
              </p>

              <!-- Icons Row -->
              <VRow dense>
                <VCol cols="6">
                  <div class="text-body-2 d-flex align-center">
                    <VIcon icon="tabler-map-pin" size="18" class="me-1" />
                    {{ job.location }}
                  </div>
                </VCol>
                <VCol cols="6">
                  <div class="text-body-2 d-flex align-center">
                    <VIcon icon="tabler-briefcase" size="18" class="me-1" />
                    {{ job.employment_type }}
                  </div>
                </VCol>
                <VCol cols="6">
                  <div class="text-body-2 d-flex align-center">
                    <VIcon icon="tabler-school" size="18" class="me-1" />
                    {{ job.min_qualification }}
                  </div>
                </VCol>
                <VCol cols="6">
                  <div class="text-body-2 d-flex align-center">
                    <VIcon icon="tabler-clock" size="18" class="me-1" />
                    Deadline: {{ new Date(job.deadline).toLocaleDateString() }}
                  </div>
                </VCol>
              </VRow>
            </div>

            <!-- Placeholder Avatar -->
            <VAvatar image="/src/assets/images/job-default.png" size="72" class="ms-4" />
          </div>

          <!-- Recruiter Info & Rating -->
          <div class="d-flex justify-space-between align-center flex-wrap">
            <div class="d-flex align-center">
              <VAvatar image="/src/assets/images/logos/company.png" size="36" class="me-2" />
              <div class="d-flex flex-column">
                <span class="font-weight-medium text-body-2">
                  {{ job.company_name }}
                </span>
                <span class="text-caption text-disabled">
                  Posted {{ new Date(job.created_at).toLocaleDateString() }}
                </span>
              </div>
            </div>

            <!-- Static Rating Placeholder -->
            <div class="d-flex align-center">
              <VRating :model-value="4" readonly half-increments size="16" class="me-2" />
              <span class="text-caption">(4.0)</span>
            </div>
          </div>

          <!-- Actions -->
          <VCardActions class="mt-3">
            <VBtn color="primary" variant="elevated" class="me-2">View & Apply</VBtn>
            <VBtn variant="outlined" color="error" @click="removeJob(job.id)">Remove</VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
