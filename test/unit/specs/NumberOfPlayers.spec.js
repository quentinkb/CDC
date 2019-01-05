import Vue from 'vue'
import NumberOfPlayers from '@/components/NumberOfPlayers'

describe('HelloWorld.vue', () => {
  test('should render correct contents', () => {
    const Constructor = Vue.extend(NumberOfPlayers)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent).toEqual(
      'Welcome to Your Vue.js App',
    )
  })

  test('a le hook `created`', () => {
    expect(typeof NumberOfPlayers.created).toBe('function')
  })

  test('contient les données par défaut', () => {
    const defaultData = NumberOfPlayers.data()
    expect(defaultData.msg).toBe('Welcome to Your Vue.js App')
  })
  test('addition', () => {
    expect(2).toBe(2)
  })
  test('Composant a bien un attribut title', () => {
    const defaultData = NumberOfPlayers.data()
    expect(defaultData.title).toBeDefined()
  })
})
