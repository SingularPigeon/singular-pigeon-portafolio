import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { fetchAllProyectos, fetchProyectosById, api } from '@/services/ApiService'

describe('ApiService', () => {
  let espiaGet

  beforeEach(() => {
    espiaGet = vi.spyOn(api, 'get').mockResolvedValue({
      data: [
        { id: 1, nombre: 'Proyecto 1' },
        { id: 2, nombre: 'Proyecto 2' },
        { id: 3, nombre: 'Proyecto 3' },
      ],
    })
  })
  afterEach(() => {
    espiaGet.mockRestore()
  })

  it('fetchAllproyectos llama a la API', async () => {
    await fetchAllProyectos()
    expect(espiaGet).toHaveBeenCalledWith()
  })

  it('fetchProyectosById trae el proyecto con id existente', async () => {
    const proyecto = await fetchProyectosById(2)
    expect(proyecto).toEqual({ id: 2, nombre: 'Proyecto 2' })
  })
})
