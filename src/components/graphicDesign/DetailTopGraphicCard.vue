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
</template>
<style scoped></style>
