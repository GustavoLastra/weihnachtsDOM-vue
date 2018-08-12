<template>
  <div class="ledDiv">
    <button  v-on:click="update(led.id, !led.buttonState)"
             v-bind:class="led.buttonState ? 'led backgroundOn' : 'led backgroundOff'">
      {{led.label}}
    </button>

    <div v-if="led.ledList.length">
      <app-led-list :ledList="led.ledList"></app-led-list>
    </div>
  </div>
</template>
<script>
  import { TreeBus } from '../../shared/treeBus'
  export default {
    props: {
      led: Object
    },
    data: function () {
      return {
        actualLed: this.led,
      };
    },
    methods: {
      update(id, turn) {
        TreeBus.turn(id, turn);
      }
    }
  }
</script>


<style>

  .backgroundOff {
    color: #212121;
    background-color: #BDBDBD;
  }

  .backgroundOn{
    color: #FFFFFF;
    background-color: #FF5252;
  }

  .led {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    width: 40px;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    outline: none;
    text-decoration: none;
    font-weight: bold;
    height: 25px;
    margin-left: 50%;
  }

  .led:active {
    background-color: #f44336;
    transform: translateY(2px);
  }

  .ledDiv {
    margin: 0;
  }

</style>
