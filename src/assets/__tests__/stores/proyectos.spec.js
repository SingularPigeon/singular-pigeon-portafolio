import { useProyectosStore } from '@/stores/proyectos'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

describe('useProyectosStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia()) // Inicializa Pinia para cada test
  })

  afterEach(() => {
    vi.resetAllMocks() // Limpia los mocks después de cada test
  })

  const dummyProyectos = []

  it('almacena los proyectos correctamente', async () => {
    const proyectosStore = useProyectosStore()

    vi.spyOn(proyectosStore, 'getProyectos').mockResolvedValueOnce(dummyProyectos)

    // Llama al método getProyectos
    await proyectosStore.getProyectos()

    expect(proyectosStore.proyectos).toEqual(dummyProyectos)
  })
})
