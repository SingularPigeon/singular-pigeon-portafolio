<script setup>
defineProps({
  proyecto: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="card-group my-md-5">
    <div class="card bg-transparent rounden-0 border-0">
      <div class="card-body">
        <h4 class="card-title text-md-center text-sm-start mb-4">
          <span>Objetivo</span>
        </h4>
        <p class="card-text me-4">{{ proyecto.objetivo }}</p>
      </div>
    </div>
    <div class="card bg-transparent rounden-0 border-0">
      <div class="card-body">
        <h4 class="card-title text-md-center text-sm-start mb-4">
          <span class="">Requerimientos</span>
        </h4>
        <ul v-if="proyecto.requerimientos && proyecto.requerimientos.length" class="me-4 lh-lg">
          <li v-for="(req, index) in proyecto.requerimientos" :key="index">
            {{ req }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
