import { mount } from '@vue/test-utils'

import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import ProyectsListView from '@/views/ProyectsListView.vue'
import { describe, expect, it } from 'vitest'

describe('Renderiza ProyectListView después de navegar a la ruta "proyectos"', async () => {
  const routerPruebas = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/proyectos',
        name: 'proyectos',
        component: ProyectsListView,
      },
    ],
  })
  it('Navega y renderiza la vista correspondiente', async () => {
    routerPruebas.push({ name: 'proyectos' })
    await routerPruebas.isReady()
    const wrapper = mount(App, {
      global: {
        plugins: [routerPruebas],
      },
    })
    expect(wrapper.findComponent(ProyectsListView)).toBeTruthy()
  })
})
