<script setup>
import { register } from 'swiper/element/bundle'

register()

// Import icons from Tabler
import { VIcon } from 'vuetify/components'

// Example banners (replace with dynamic import if needed)
import banner1 from '@/assets/images/banner/banner-1.jpg'
import banner2 from '@/assets/images/banner/banner-2.jpg'
import banner3 from '@/assets/images/banner/banner-3.jpg'
import banner4 from '@/assets/images/banner/banner-4.jpg'
import banner5 from '@/assets/images/banner/banner-5.jpg'
import banner6 from '@/assets/images/banner/banner-6.jpg'

// Demo posts
const posts = [
  {
    id: 1,
    image: banner1,
    title: 'New Instagram Campaign',
    description: 'Our latest story campaign reached 12k impressions in 24 hours.',
    platform: 'Instagram',
    platformIcon: 'tabler-brand-instagram',
    color: '#E1306C',
    stats: { views: '12k', likes: '1.5k', shares: '230' },
  },
  {
    id: 2,
    image: banner2,
    title: 'Facebook Promo',
    description: 'Boosted post reached 10k people organically.',
    platform: 'Facebook',
    platformIcon: 'tabler-brand-facebook',
    color: '#1877F2',
    stats: { views: '10k', likes: '850', shares: '120' },
  },
  {
    id: 3,
    image: banner3,
    title: 'YouTube Upload',
    description: 'New tutorial got 3k views in the first day.',
    platform: 'YouTube',
    platformIcon: 'tabler-brand-youtube',
    color: '#FF0000',
    stats: { views: '3k', likes: '500', shares: '60' },
  },
  {
    id: 4,
    image: banner4,
    title: 'LinkedIn Article',
    description: 'Our article on industry trends received great engagement.',
    platform: 'LinkedIn',
    platformIcon: 'tabler-brand-linkedin',
    color: '#0A66C2',
    stats: { views: '8k', likes: '1.1k', shares: '150' },
  },
  {
    id: 5,
    image: banner5,
    title: 'TikTok Challenge',
    description: 'The challenge video went viral with over 20k views.',
    platform: 'TikTok',
    platformIcon: 'tabler-brand-tiktok',
    color: '#000000',
    stats: { views: '20k', likes: '2.5k', shares: '300' },
  },
  {
    id: 6,
    image: banner6,
    title: 'Twitter Thread',
    description: 'Our thread on marketing tips got retweeted 500 times.',
    platform: 'Twitter',
    platformIcon: 'tabler-brand-twitter',
    color: '#1DA1F2',
    stats: { views: '6k', likes: '700', shares: '80' },
  },
]
</script>

<template>
  <VRow>
    <VCol cols="12">


      <section class="swiper-virtual">
        <swiper-container
          navigation="true"
          slides-per-view="3"
          space-between="30"
          free-mode="true"
          :breakpoints="{
            1024: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            320: { slidesPerView: 1, spaceBetween: 10 },
          }"
        >
          <swiper-slide
            v-for="post in posts"
            :key="post.id"
          >
            <VCard class="mx-2 pa-2" outlined>
              <!-- Image -->
              <VImg
                :src="post.image"
                height="260"
                class="rounded-lg mb-3"
                cover
              />

              <!-- Title + Platform -->
              <div class="d-flex align-center justify-space-between ">
                <VCardTitle class="text-h6">
                  {{ post.title }}
                </VCardTitle>
                <div class="d-flex align-center">
                  <VIcon
                    :icon="post.platformIcon"
                    :color="post.color"
                    size="20"
                  />
                  <span class="ms-1 text-body-2" :style="{ color: post.color }">
                    {{ post.platform }}
                  </span>
                </div>
              </div>

              <!-- Description -->
              <VCardText class="text-body-2 text-secondary ">
                {{ post.description }}
              </VCardText>

              <!-- Stats -->
              <VCardText class="d-flex align-center justify-space-between">
                <div class="d-flex align-center">
                  <VIcon icon="tabler-eye" size="18" class="me-1 text-secondary" />
                  <span class="text-body-2">{{ post.stats.views }}</span>
                </div>
                <div class="d-flex align-center">
                  <VIcon icon="tabler-heart" size="18" class="me-1 text-secondary" />
                  <span class="text-body-2">{{ post.stats.likes }}</span>
                </div>
                <div class="d-flex align-center">
                  <VIcon icon="tabler-share" size="18" class="me-1 text-secondary" />
                  <span class="text-body-2">{{ post.stats.shares }}</span>
                </div>
              </VCardText>
            </VCard>
          </swiper-slide>
        </swiper-container>
      </section>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.swiper-virtual {
  swiper-container {
    inline-size: 100%;
    margin-inline: auto;
    padding-bottom: 1rem;
  }

  swiper-slide {
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  .v-card {
    width: 100%;
    max-width: 320px;
    border-radius: 12px;
    transition: transform 0.2s ease;
  }

  .v-card:hover {
    transform: translateY(-4px);
  }
}
</style>
