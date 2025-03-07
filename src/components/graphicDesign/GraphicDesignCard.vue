<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  proyecto: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card border-0 rounded-0 bg-transparent mb-3 h-100">
    <img
      :src="proyecto.imagen"
      class="card-img-top rounded-0 h-100 object-fit-cover shadow-sm"
      :alt="proyecto.nombre"
    />
    <div class="card-body">
      <h3 class="card-title">{{ proyecto.nombre }}</h3>
      <p class="card-subtitle">
        {{ proyecto.descripcion }}
      </p>
      <p>
        <span
          v-for="(req, index) in proyecto.tecnologias"
          :key="index"
          class="badge text-dark bg-transparent mt-4 mx-1"
        >
          {{ req }}
        </span>
      </p>

      <RouterLink
        :to="{ name: 'proyecto-detalle', params: { id: proyecto.id } }"
        class="btn btn-primary mt-3"
        >Detalles del proyecto</RouterLink
      >
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 30rem;
}
</style>
