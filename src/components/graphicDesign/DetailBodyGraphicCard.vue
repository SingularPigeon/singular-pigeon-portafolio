<script setup>
defineProps({
  proyecto: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="card border-0 rounded-0 bg-transparent p-0 text-center">
    <div class="card-body p-0">
      <div class="row">
        <div class="col-12">
          <img
            v-if="proyecto.imagen2 && proyecto.imagen2.length"
            :src="proyecto.imagen2"
            class="card-img-top rounded-0 h-100 object-fit-cover shadow"
            :alt="proyecto.nombre"
          />
        </div>
        <div class="col-12">
          <img
            v-if="proyecto.imagen3 && proyecto.imagen3.length"
            :src="proyecto.imagen3"
            class="card-img-top rounded-0 h-100 object-fit-cover shadow"
            :alt="proyecto.nombre"
          />
        </div>
        <div class="col-12">
          <img
            v-if="proyecto.imagen4 && proyecto.imagen4.length"
            :src="proyecto.imagen4"
            class="card-img-top rounded-0 h-100 object-fit-cover shadow"
            :alt="proyecto.nombre"
          />
        </div>
        <div class="col-12">
          <img
            v-if="proyecto.imagen5 && proyecto.imagen5.length"
            :src="proyecto.imagen5"
            class="card-img-top rounded-0 h-100 object-fit-cover shadow"
            :alt="proyecto.nombre"
          />
        </div>
        <div class="col-12">
          <img
            v-if="proyecto.imagen6 && proyecto.imagen6.length"
            :src="proyecto.imagen6"
            class="card-img-top rounded-0 h-100 object-fit-cover shadow"
            :alt="proyecto.nombre"
          />
        </div>
        <div class="col-12">
          <img
            v-if="proyecto.imagen7 && proyecto.imagen7.length"
            :src="proyecto.imagen7"
            class="card-img-top rounded-0 h-100 object-fit-cover shadow"
            :alt="proyecto.nombre"
          />
        </div>
        <div class="col-12">
          <img
            v-if="proyecto.imagen8 && proyecto.imagen8.length"
            :src="proyecto.imagen8"
            class="card-img-top rounded-0 h-100 object-fit-cover shadow"
            :alt="proyecto.nombre"
          />
        </div>
      </div>
    </div>
  </div>
</template>
