<script setup>
import { RouterView } from 'vue-router'

import NavBarApp from './components/app/NavBarApp.vue'
import FooterComponent from '@/components/app/FooterApp.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ref, onMounted, watch } from 'vue'

const route = useRoute()
const isHome = computed(() => route.path === '/')

const isLoading = ref(true)
const isFading = ref(false)
const fadeInClass = ref('')

watch(
  () => route.path,
  () => {
    fadeInClass.value = 'fade-in'
    setTimeout(() => {
      fadeInClass.value = ''
    }, 500)
  },
)

onMounted(() => {
  setTimeout(() => {
    isFading.value = true
    setTimeout(() => {
      isLoading.value = false
    }, 500)
  }, 2000)
})
</script>

<template>
  <div v-if="isLoading" :class="['loader', { fadeOut: isFading }]"></div>
  <div v-else>
    <NavBarApp v-if="!isHome" />
    <div :class="fadeInClass">
      <RouterView />
    </div>
    <FooterComponent />
  </div>
</template>
