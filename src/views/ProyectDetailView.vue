<script setup>
import { useProyectosStore } from '@/stores/proyectos'
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import DetailTopCard from '@/components/proyects/DetailTopCard.vue'
import DetailBodyCard from '@/components/proyects/DetailBodyCard.vue'
import DetailFooterCard from '@/components/proyects/DetailFooterCard.vue'

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
  <div class="container pt-5">
    <div class="row mt-5">
      <DetailTopCard v-if="proyecto" :proyecto="proyecto" />
      <DetailBodyCard v-if="proyecto" :proyecto="proyecto" />
      <DetailFooterCard v-if="proyecto" :proyecto="proyecto" />
    </div>
  </div>
</template>
