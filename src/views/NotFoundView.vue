<template>
  <div
    class="container-fluid p-0 position-relative vh-100 d-flex align-items-center justify-content-center"
  >
    <img
      src="/src/assets/img/404-NOT-FOUND.png"
      alt="error 404"
      class="img-fluid w-100 h-100 object-fit-cover"
    />

    <div class="overlay-content position-absolute text-center">
      <h2 class="">Parece que nos perdimos</h2>
      <router-link to="/" class="btn btn-primary">Volver al inicio</router-link>
    </div>
  </div>
</template>
<style scoped></style>
