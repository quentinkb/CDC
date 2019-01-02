import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  test('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent).toEqual(
      'Welcome to Your Vue.js App',
    )
  })

  test('a le hook `created`', () => {
    expect(typeof HelloWorld.created).toBe('function')
  })

  test('contient les données par défaut', () => {
    const defaultData = HelloWorld.data()
    expect(defaultData.msg).toBe('Welcome to Your Vue.js App')
  })
  test('addition', () => {
    expect(2).toBe(2)
  })
  test('Composant a bien un attribut title', () => {
    const defaultData = HelloWorld.data()
    expect(defaultData.title).toBeDefined()
  })
})
