<script setup>
import { useProyectosStore } from '@/stores/proyectos'
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import DetailTopCard from '@/components/proyects/DetailTopCard.vue'
import DetailBodyCard from '@/components/proyects/DetailBodyCard.vue'
import DetailGraphicFooterCard from '@/components/graphicDesign/DetailGraphicFooterCard.vue'

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
      <DetailTopCard v-if="proyecto" :proyecto="proyecto" />
      <DetailBodyCard v-if="proyecto" :proyecto="proyecto" />
      <DetailGraphicFooterCard v-if="proyecto" :proyecto="proyecto" />
    </div>
  </main>
</template>
