<script setup>
import RecentActivityFeed from "@/components/RecentActivityFeed.vue";
import ScheduledPostsTimeline from "@/components/ScheduledPostsTimeline.vue";
import TotalFollowersCard from "@/components/TotalFollowersCard.vue";
import { VIcon } from 'vuetify/components'


const followersSeries = [
  {
    data: [120, 140, 180, 200, 230, 250, 270],
  },
];

// Fake user data (can later be replaced with props or store data)
const user = {
  name: 'Kelvin Speed',
  package: 'Pro Plan',
  status: 'Active',
  color: 'success', // could be success, warning, error depending on status
}
</script>




<template>
   <VCard class="pa-5 mb-4" rounded="lg" elevation="1">
    <div class="d-flex flex-column flex-sm-row justify-space-between align-center gap-4">
      
      <!-- Left: Greeting -->
      <div>
        <h4 class="text-h5 font-weight-medium mb-2">
          👋 Welcome back, {{ user.name }}
        </h4>
        <div class="d-flex align-center">
          <VIcon icon="tabler-star" color="primary" class="me-2" />
          <span class="text-body-1">
            Current Package: <strong>{{ user.package }}</strong>
          </span>
        </div>
        <div class="mt-1">
          <VChip
            :color="user.color"
            size="small"
            label
          >
            Status: {{ user.status }}
          </VChip>
        </div>
      </div>

      <!-- Right: Actions -->
      <div class="d-flex gap-3">
        <VBtn color="primary" variant="flat" prepend-icon="tabler-settings">
          Manage Subscription
        </VBtn>
        <VBtn color="success" variant="outlined" prepend-icon="tabler-arrow-up">
          Upgrade
        </VBtn>
      </div>
    </div>
  </VCard>
  <VRow class="match-height">
    <!-- Accounts Connected -->
    <VCol cols="12" md="4">
      <VCard class="pa-4" outlined>
        <VCardItem>
          <VCardTitle class="text-h4 font-weight-bold"
            >Accounts Connected</VCardTitle
          >
        </VCardItem>

        <VCardText class="d-flex align-center flex-wrap gap-4 mb-2">
          <VIcon icon="tabler-brand-tiktok" size="32" color="#000000" />
          <VIcon icon="tabler-brand-instagram" size="32" color="#E1306C" />
          <VIcon icon="tabler-brand-facebook" size="32" color="#1877F2" />
          <VIcon icon="tabler-brand-linkedin" size="32" color="#0A66C2" />
          <VIcon icon="tabler-brand-youtube" size="32" color="#FF0000" />
        </VCardText>

        <VCardText class="text-subtitle-2 text-grey mb-3">
          3 of 7 accounts connected
        </VCardText>
      </VCard>
    </VCol>

    <!-- Total Followers -->
    <VCol cols="12" md="4">
      <TotalFollowersCard
        totalFollowers="45.2k"
        growth="+8.4%"
        :series="followersSeries"
      />
    </VCol>

    <!-- Best Performing Platform -->
    <VCol cols="12" md="4">
      <VCard class="pa-4" outlined>
        <VCardItem class="d-flex align-center">
          <VCardTitle class="text-h4 font-weight-bold"
            >Best Performing Platform</VCardTitle
          >
          <VIcon icon="tabler-brand-instagram" size="32" color="#E1306C" />
        </VCardItem>
        <VCardText>
          <div class="text-h5 font-weight-bold">Instagram</div>
          <div class="text-subtitle-2 text-grey">
            Avg. Engagement Rate: 8.4%
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <VRow class="match-height">
    <VCol cols="8">
      <VCard class="pa-4 py-3" outlined>
        <VCardItem>
          <VCardTitle class="text-h4 font-weight-bold"
            >Recent Posts</VCardTitle
          >
        </VCardItem>

        <RecentActivityFeed />
      </VCard>
    </VCol>
    <VCol>
    

        <ScheduledPostsTimeline />
    
    </VCol>
  </VRow>
</template>

<style scoped>
.welcome-card {
  background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
}
</style>
