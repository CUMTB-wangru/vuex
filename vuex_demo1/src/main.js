import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // 挂载vue上  使得vue的每个组件都能访问store中的共享数据
  store,
  render: h => h(App)
}).$mount('#app')
