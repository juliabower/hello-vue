import Vue from 'vue'
import Vuex from 'vuex'
import Hello from '@/components/Hello'

Vue.use(Vuex)

describe('Hello', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        message: 'This is coming from the vuex store'
      }
    })
  })
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount(null, {store})
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Hello World!')
  })
})
