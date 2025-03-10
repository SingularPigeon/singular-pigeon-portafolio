<script setup>
import { useProyectosStore } from '@/stores/proyectos'
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import DetailTopGraphicCard from '@/components/graphicDesign/DetailTopGraphicCard.vue'
import DetailBodyGraphicCard from '@/components/graphicDesign/DetailBodyGraphicCard.vue'
import DetailFooterGraphicCard from '@/components/graphicDesign/DetailFooterGraphicCard.vue'

const route = useRoute()
const proyectosStore = useProyectosStore()
const proyecto = computed(() => proyectosStore.proyecto)

onMounted(() => {
  const id = parseInt(route.params.id)
  if (id) {
    proyectosStore.getProyectoById(id)
  }
})
</script>
<template>
  <main class="container pt-5">
    <div class="row mt-5">
      <DetailTopGraphicCard v-if="proyecto" :proyecto="proyecto" />
      <DetailBodyGraphicCard v-if="proyecto" :proyecto="proyecto" />
      <DetailFooterGraphicCard v-if="proyecto" :proyecto="proyecto" />
    </div>
  </main>
</template>
