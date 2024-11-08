<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="container-fluid p-0 header-proyects overflow-hidden position-relative mb-5">
    <div class="row">
      <img
        src="/src/assets/img/header-fondo.png"
        alt="header-fondo"
        class="img-fluid object-fit-cover"
      />
      <div class="z-3 position-absolute top-50 start-50 translate-middle text-center">
        <h2 class="title-proyects">{{ props.title }}</h2>
      </div>
    </div>
  </div>
</template>
