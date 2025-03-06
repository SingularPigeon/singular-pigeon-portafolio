<script setup>
import { useProyectosStore } from '@/stores/proyectos'
import GraphicDesignCard from './GraphicDesignCard.vue'
import { onMounted, computed } from 'vue'

const proyectosStore = useProyectosStore()
const proyectos = computed(() => proyectosStore.proyectos)

onMounted(() => {
  proyectosStore.getProyectosByCategory('graphicDesign')
})
</script>
<template>
  <div class="container bg-custom pb-5 mb-5">
    <div class="row d-flex justify-content-center">
      <GraphicDesignCard
        v-for="proyecto in proyectos"
        :key="proyecto.id"
        :proyecto="proyecto"
        class="col-12 col-md-6 p-0 m-4"
      />
    </div>
  </div>
</template>
