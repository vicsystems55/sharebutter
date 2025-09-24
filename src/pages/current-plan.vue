<script setup>
import { ref } from 'vue'

// Mock: User’s current package
const currentPackage = ref('Pro')

// Packages data
const packages = [
  {
    name: 'Starter',
    price: '$9.99/mo',
    accounts: 3,
    features: ['Connect up to 3 accounts', 'Basic analytics', 'Community templates'],
    color: 'primary',
    icon: 'tabler-rocket',
    image: new URL('@/assets/images/banner/banner-1.jpg', import.meta.url).href,
  },
  {
    name: 'Pro',
    price: '$19.99/mo',
    accounts: 5,
    features: ['Connect up to 5 accounts', 'Advanced analytics', 'Post scheduling', 'Custom branding'],
    color: 'success',
    icon: 'tabler-diamond',
    image: new URL('@/assets/images/banner/banner-2.jpg', import.meta.url).href,
  },
  {
    name: 'Premium',
    price: '$29.99/mo',
    accounts: 7,
    features: ['Connect up to 7 accounts', 'Full analytics & insights', 'AI-powered recommendations', 'Priority support'],
    color: 'warning',
    icon: 'tabler-crown',
    image: new URL('@/assets/images/banner/banner-3.jpg', import.meta.url).href,
  },
]

// Mock user’s subscription details
const userSubscription = {
  plan: 'Pro',
  registered: '2025-01-15',
  connectedAccounts: 4,
  maxAccounts: 5,
}
</script>

<template>
  <VContainer fluid>
    <!-- ===================== -->
    <!-- Row 1: Subscription Details -->
    <!-- ===================== -->
    <VRow>
      <VCol cols="12">
        <VCard class="pa-4" elevation="6">
          <VCardItem>
            <template #prepend>
              <VIcon
                icon="tabler-user-check"
                size="32"
                color="info"
              />
            </template>
            <VCardTitle class="text-h6">Your Subscription</VCardTitle>
          </VCardItem>

          <VCardText>
            <p><strong>Plan:</strong> {{ userSubscription.plan }}</p>
            <p><strong>Registered:</strong> {{ userSubscription.registered }}</p>
            <p><strong>Accounts Connected:</strong> {{ userSubscription.connectedAccounts }} / {{ userSubscription.maxAccounts }}</p>
            <p>
              <strong>Remaining Slots:</strong>
              {{ userSubscription.maxAccounts - userSubscription.connectedAccounts }}
            </p>
          </VCardText>

          <VCardActions>
            <VBtn color="info" block>Manage Subscription</VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>

    <!-- ===================== -->
    <!-- Row 2: Packages Group -->
    <!-- ===================== -->
    <VRow class="mt-6">
      <VCol
        v-for="(pkg, index) in packages"
        :key="index"
        cols="12"
        md="4"
      >
        <VCard
          class="pa-4"
          :elevation="currentPackage === pkg.name ? 10 : 2"
          :class="currentPackage === pkg.name ? 'border border-4 border-' + pkg.color : ''"
        >
          <!-- Package Image -->
          <VImg
            :src="pkg.image"
            height="140"
            class="mb-3 rounded-lg"
            cover
          />

          <VCardItem>
            <template #prepend>
              <VIcon
                :icon="pkg.icon"
                size="32"
                :color="pkg.color"
              />
            </template>
            <VCardTitle class="text-h6">{{ pkg.name }}</VCardTitle>
          </VCardItem>

          <VCardText>
            <h4 class="text-h5 font-weight-bold">{{ pkg.price }}</h4>
            <ul class="pl-4 mt-3">
              <li v-for="(feature, i) in pkg.features" :key="i">
                {{ feature }}
              </li>
            </ul>
          </VCardText>

          <VCardActions>
            <VBtn
              v-if="currentPackage !== pkg.name"
              :color="pkg.color"
              block
            >
              Upgrade
            </VBtn>
            <VChip
              v-else
              color="success"
              variant="flat"
              class="mx-auto"
            >
              Current Plan
            </VChip>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
