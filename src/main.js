// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/App'
import InitialledList from './app/shared/data'
import Tools from "./app/components/tools/tools.vue"
import LedList from "./app/components/led-list/led-list.vue"
import Tree from './app/components/tree/tree.vue'
import Led from "./app/components/led/led.vue"


Vue.config.productionTip = false
export const treeBus = new Vue({
  data: {
      tree: InitialledList,
  },
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    },

    turn(id, newButtonState) {
      console.log("id: " + id);
      let temp= this.tree;
      let found = false;
      this.scan(temp, id, newButtonState, found);
      this.tree = temp;
      this.$emit('updateTree', this.tree);
    },

    scan(obj, id, newButtonState, found) {
      if (found===true) {
        obj.map(led =>{
          led.buttonState = newButtonState;
          this.scan(led.ledList, id, newButtonState, found);
        })
      } else {
        obj.map(led =>{
          if (led.id === id) {
            found = true;
            led.buttonState = newButtonState;
            return this.scan(led.ledList, id, newButtonState, found);
          } else if(found===false){
            //recursion
            return this.scan(led.ledList, id, newButtonState, found);
          }
        })
      }
    }
  }

});

Vue.component('app-led-list', LedList)
Vue.component('app-tools', Tools)
Vue.component('app-led', Led)
Vue.component('app-tree', Tree)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
