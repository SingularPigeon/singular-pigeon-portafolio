<script setup>
defineProps({
  proyecto: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card border-0 rounded-0 bg-transparent p-0 text-center my-md-5">
    <h2 class="card-title mb-4">{{ proyecto.nombre }}</h2>
    <img
      :src="proyecto.imagen"
      class="card-img-top rounded-0 h-100 object-fit-cover shadow img-fluid"
      :alt="proyecto.nombre"
    />
    <div class="card-body pt-4 mt-5">
      <h3>Tecnologías utilizadas</h3>
      <h4 class="card-text mt-4">
        <span
          v-for="(req, index) in proyecto.tecnologias"
          :key="index"
          class="badge text-dark bg-transparent m-1"
        >
          {{ req }}
        </span>
      </h4>
    </div>
  </div>
</template>
<style scoped></style>
