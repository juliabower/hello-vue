import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
