/**
 * Created by glastra on 11.08.18.
 */
<template>
  <div class="ledList">
    <app-led v-for="led in actualLedList" :key="led.id"
             :led="led">
    </app-led>
  </div>
</template>
<script>
  /*import Led from "../led/led.vue"*/

  export default {
    props: {
        ledList: Array
    },
    data: function () {
      return {
        actualLedList: this.ledList
      };
    },
    /*components: {
      "app-led": Led
    }*/
  }
</script>
<style>
  .ledList {
    display: flex;
    justify-content: flex-start;
    margin:auto;
  }
</style>
