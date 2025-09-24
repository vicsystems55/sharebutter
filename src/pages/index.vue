<script setup>
import RecentActivityFeed from "@/components/RecentActivityFeed.vue";
import TotalFollowersCard from "@/components/TotalFollowersCard.vue";

const followersSeries = [
  {
    data: [120, 140, 180, 200, 230, 250, 270],
  },
];
</script>

<template>
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
    <VCol cols="12">
      <VCard class="pa-4 py-3" outlined>
        <VCardItem>
          <VCardTitle class="text-h4 font-weight-bold"
            >Recent Posts</VCardTitle
          >
        </VCardItem>

        <RecentActivityFeed />
      </VCard>
    </VCol>
  </VRow>
</template>
