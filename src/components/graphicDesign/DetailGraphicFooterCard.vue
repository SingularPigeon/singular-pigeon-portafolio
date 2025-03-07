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
    <div class="card-body p-0">
      <div class="row">
        <div class="col-12 mb-4">
          <img
            v-if="proyecto.imagen2 && proyecto.imagen2.length"
            :src="proyecto.imagen2"
            class="card-img-top rounded-0 h-100 w-75 p-3 object-fit-cover shadow"
            :alt="proyecto.nombre"
          />
        </div>
        <div class="col-12 mb-4">
          <img
            v-if="proyecto.imagen3 && proyecto.imagen3.length"
            :src="proyecto.imagen3"
            class="card-img-top rounded-0 h-100 w-75 p-3 object-fit-cover shadow"
            :alt="proyecto.nombre"
          />
        </div>
        <div class="col-12">
          <img
            v-if="proyecto.imagen4 && proyecto.imagen4.length"
            :src="proyecto.imagen4"
            class="card-img-top rounded-0 h-100 w-75 p-3 object-fit-cover shadow"
            :alt="proyecto.nombre"
          />
        </div>
        <div class="col-12">
          <img
            v-if="proyecto.imagen5 && proyecto.imagen5.length"
            :src="proyecto.imagen5"
            class="card-img-top rounded-0 h-100 w-75 p-3 object-fit-cover shadow"
            :alt="proyecto.nombre"
          />
        </div>
      </div>
    </div>

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
