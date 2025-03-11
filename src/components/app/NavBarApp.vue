<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <nav
    class="navbar fixed-top navbar-expand-lg mb-5"
    :class="[
      visible
        ? 'bg-custom'
        : scrolled
          ? 'bg-custom bg-custom--fade shadow-sm'
          : 'bg-transparent bg-transparent--fade',
    ]"
  >
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerApp"
        aria-controls="navbarTogglerApp"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-three-dots-vertical"></i>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        :class="visible ? 'show' : ''"
        id="navbarTogglerApp"
      >
        <ul class="navbar-nav bg-custom col-3 rounded-3 mt-2 ps-2">
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              aria-current="page"
              :to="{ name: 'home' }"
              @click="visible = !visible"
              >Inicio</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :to="{ name: 'graphic-design' }"
              @click="visible = !visible"
              >Diseño Gráfico</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'frontend' }" @click="visible = !visible"
              >Frontend</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'sobre mi' }" @click="visible = !visible"
              >Sobre mi</RouterLink
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/paloma-rivera-orellana-1bb348190/"
              target="_blank"
              >LinkedIn</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped></style>
