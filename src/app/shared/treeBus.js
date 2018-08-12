import Vue from 'vue'
import InitialledList from './data'


export const TreeBus = new Vue({
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
