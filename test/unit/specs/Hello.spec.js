import Vue from 'vue'
// import Vuex from 'vuex'
import Hello from '../../../src/components/Hello/Hello.vue'

// Vue.use(Vuex)
//
// describe('Hello', () => {
//  let store
//  beforeEach(() => {
//    store = new Vuex.Store({
//      state: {
//        message: 'This is coming from the vuex store'
//      }
//    })
//  })
//  it('should render correct contents', () => {
//    const Constructor = Vue.extend(Hello)
//    const vm = new Constructor().$mount(null, {store})
//    expect(vm.$el.querySelector('.hello h1').textContent)
//      .to.equal('Hello World!')
//  })
// })

describe('Hello.vue', () => {
  it('has a created hook', () => {
    expect(Hello.created).to.be.a('function')
  })

  it('sets the correct default data', () => {
    expect(Hello.data).to.be.a('function')
    const defaultData = Hello.data()
    expect(defaultData.msg).to.equal('Hello World!')
  })

  it('renders the correct message', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.title').textContent).to.equal('Hello World!')
  })
})
