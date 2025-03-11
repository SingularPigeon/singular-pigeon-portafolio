<script setup>
defineProps({
  proyecto: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="card-body text-center">
    <h3 class="card-titletext-sm-start mt-4">Tecnologías utilizadas</h3>
    <h4 class="card-text mt-4 mb-5">
      <span
        v-for="(req, index) in proyecto.tecnologias"
        :key="index"
        class="badge text-dark bg-badge m-1 fs-5"
      >
        {{ req }}
      </span>
    </h4>
  </div>
</template>
