<script setup>
defineProps({
  proyecto: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card border-0 rounded-0 bg-transparent p-0 text-center mt-md-5">
    <h2 class="card-title mb-4">{{ proyecto.nombre }}</h2>
  </div>
  <div class="col-12 mb-3">
    <img
      v-if="proyecto.imagen1 && proyecto.imagen1.length"
      :src="proyecto.imagen1"
      class="card-img-top rounded-0 h-100 object-fit-cover"
      :alt="proyecto.nombre"
    />
  </div>
  <div class="row mb-3">
    <div class="card bg-transparent rounded-0 border-0">
      <div class="card-body">
        <h3 class="card-title mb-2">Objetivo</h3>
        <p class="card-text me-4">{{ proyecto.objetivo }}</p>
      </div>
    </div>
    <div class="card bg-transparent rounded-0 border-0">
      <div class="card-body">
        <h3 class="card-title text-sm-start mb-2">Requerimientos</h3>
        <ul
          v-if="proyecto.requerimientos && proyecto.requerimientos.length"
          class="me-4 lh-lg list-unstyled text-sm-start"
        >
          <li
            v-for="(req, index) in proyecto.requerimientos"
            :key="index"
            class="text-decoration-none"
          >
            {{ req }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
