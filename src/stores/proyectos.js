import { fetchAllProyectos, fetchProyectosById } from '@/services/ApiService'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProyectosStore = defineStore('Proyectos', () => {
  const proyectos = ref([])
  const proyecto = ref(null)

  async function getProyectos() {
    try {
      const proyectosData = await fetchAllProyectos()
      if (proyectosData) {
        proyectos.value = proyectosData
      }
    } catch (error) {
      console.error(error)
    }
  }
  async function getProyectoById(id) {
    try {
      const proyectoData = await fetchProyectosById(id)
      if (proyectoData) {
        proyecto.value = proyectoData
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    proyectos,
    proyecto,
    getProyectos,
    getProyectoById,
  }
})
