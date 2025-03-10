<script setup>
defineProps({
  proyecto: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="row my-5">
    <div class="card bg-transparent rounded-0 border-0">
      <div class="card-body text-center">
        <h3 class="card-title text-center mb-4">Objetivo</h3>
        <p class="card-text me-4">{{ proyecto.objetivo }}</p>
      </div>
    </div>
    <div class="card bg-transparent rounded-0 border-0">
      <div class="card-body">
        <h3 class="card-title text-md-center text-sm-start mb-4">Requerimientos</h3>
        <ul v-if="proyecto.requerimientos && proyecto.requerimientos.length" class="me-4 lh-lg">
          <li v-for="(req, index) in proyecto.requerimientos" :key="index">
            {{ req }}
          </li>
        </ul>
      </div>
    </div>
    <div class="card bg-transparent rounded-0 border-0"></div>
    <div class="card-body text-center">
      <h3 class="card-title text-md-center text-sm-start mb-4">Tecnologías utilizadas</h3>
      <h4 class="card-text mt-4">
        <span
          v-for="(req, index) in proyecto.tecnologias"
          :key="index"
          class="badge text-dark bg-badge m-1"
        >
          {{ req }}
        </span>
      </h4>
    </div>
  </div>
</template>
