import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import EmbarkJS from '../embarkArtifacts/embarkjs'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  EmbarkJS,
  render: h => h(App)
}).$mount('#app')
