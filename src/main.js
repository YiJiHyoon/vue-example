import Vue from 'vue'
import App from './App.vue'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(Viewer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
