<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-transparent pt-0 mb-5">
    <div class="container-fluid">
      <div class="collapse navbar-collapse d-flex justify-content-center mt-4" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item fs-5">
            <RouterLink class="nav-link" :to="{ name: 'frontend' }">Proyectos</RouterLink>
          </li>
          <li class="nav-item fs-5">
            <RouterLink class="nav-link" :to="{ name: 'graphic-design' }"
              >Diseño Gráfico
            </RouterLink>
          </li>
          <li class="nav-item fs-5">
            <RouterLink class="nav-link" :to="{ name: 'sobre mi' }">Sobre mi</RouterLink>
          </li>
          <li class="nav-item">
            <a
              class="nav-link fs-5"
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
