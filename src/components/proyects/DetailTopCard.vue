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
  </div>
</template>
<style scoped></style>
