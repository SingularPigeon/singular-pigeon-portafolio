import axios from 'axios'

export const api = axios.create({
  baseURL: './api/proyectos.json',
})
export const fetchAllProyectos = async () => {
  try {
    const response = await api.get()
    return response.data
  } catch (error) {
    console.error('Error al traer la data', error)
  }
}
export const fetchProyectosByCategory = async (categoria) => {
  try {
    const proyectos = await fetchAllProyectos()
    if (proyectos[categoria]) {
      return proyectos[categoria]
    } else {
      throw new Error(`La categoría ${categoria} no existe`)
    }
  } catch (error) {
    console.error(`Error al traer proyectos de la categpría ${categoria}`, error)
  }
}

export const fetchProyectosById = async (id) => {
  try {
    const proyectos = await fetchAllProyectos()
    const proyecto = proyectos.find((proyecto) => proyecto.id === id)
    if (!proyecto) {
      throw new Error(`No se encontro el proyecto con id ${id}`)
    }
    return proyecto
  } catch (error) {
    console.error(`Error al traer el proyecyo con id, ${id}`, error)
  }
}
