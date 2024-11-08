<script setup>
defineProps({
  proyecto: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="card border-0 rounded-0 bg-transparent my-5 p-0 text-center">
    <img
      v-if="proyecto.imagenSecundaria && proyecto.imagenSecundaria.length"
      :src="proyecto.imagenSecundaria"
      class="card-img-top rounded-0 h-100 object-fit-cover shadow"
      :alt="proyecto.nombre"
    />
    <div class="card-body pt-4 d-flex justify-content-center gap-3 my-5">
      <a
        v-if="proyecto.github"
        :href="proyecto.github"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary btn-primary--link"
        >Github</a
      >
      <a
        v-if="proyecto.app"
        :href="proyecto.app"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary btn-primary--link"
        >App</a
      >
    </div>
  </div>
</template>
