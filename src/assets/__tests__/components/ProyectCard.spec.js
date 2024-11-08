import { expect, describe, it, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ProyectCard from '@/components/proyects/ProyectCard.vue'
import { RouterLinkStub } from '@vue/test-utils'

describe('ProyectCard', () => {
  const dummyProyectCard = {
    id: '1',
    nombre: 'Proyecto 1',
    imagen: 'src/assets/img/proyecto-1.png',
    descripcion: 'este es el proyecto 1 en Vue',
    tecnologias: ['Vue', 'JavaScript'],
  }

  let wrapper
  beforeEach(() => {
    wrapper = mount(ProyectCard, {
      props: {
        proyecto: dummyProyectCard,
      },
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    })
  })

  it('La card tiene el nombre del proyecto', () => {
    expect(wrapper.find('h3').text()).toEqual(dummyProyectCard.nombre)
  })

  it('Muestra la descripción del proyecto', () => {
    expect(wrapper.find('.card-subtitle').text()).toEqual(dummyProyectCard.descripcion)
  })

  it('El enlace "Detalles del proyecto" apunta al proyecto correcto', () => {
    const link = wrapper.findComponent(RouterLinkStub)
    expect(link.props().to).toEqual({
      name: 'proyecto-detalle',
      params: { id: dummyProyectCard.id },
    })
  })
})
