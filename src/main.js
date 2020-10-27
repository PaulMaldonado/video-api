import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Embed from 'v-video-embed'

Vue.use(Embed)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
