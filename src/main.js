// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/App'
import Tools from "./app/components/tools/tools.vue"
import LedList from "./app/components/led-list/led-list.vue"
import Tree from './app/components/tree/tree.vue'
import Led from "./app/components/led/led.vue"


Vue.config.productionTip = false


Vue.component('app-led-list', LedList)
Vue.component('app-tools', Tools)
Vue.component('app-led', Led)
Vue.component('app-tree', Tree)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
