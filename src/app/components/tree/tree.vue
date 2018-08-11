/**
 * Created by glastra on 11.08.18.
 */
<template>
  <div class="rootContainer">
    <div class="toolsContainer">
      <app-tools v-on:onCreate="onCreate"></app-tools>
    </div>
    <div class="treeContainer" >
      <div v-if="showTree">
        <app-led-list
          :ledList="actualTree"></app-led-list>
      </div>
      <div v-if="!showTree">
        <div class="hint">Please click on the "Create Tree" button</div>
      </div>
    </div>
  </div>
</template>
<script>
  import { treeBus } from '../../../main'
/*  import Tools from "../tools/tools.vue"
  import LedList from "../led-list/led-list.vue"*/

  export default {
    data: function () {
      return {
        actualTree: treeBus.tree,
        showTree: false
      };
    },
    methods: {
      onCreate() {
        this.showTree = true;
      }

    },
    created() {
      treeBus.$on('updateTree', (tree) => {
        this.actualTree = tree;
      });
    }/*,
    components: {
      "app-tools": Tools,
      "app-led-list": LedList
    }*/
  }
</script>
<style>
  .rootContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .toolsContainer {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    margin: auto;
    background-color: #00796B;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }

  .treeContainer {
    background-color:#009688;
    padding-top: 2%;
    padding-bottom: 5%;
    width: 95%;
    margin: auto;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    margin-top: 2%;
    overflow: auto;
  }

  .hint {
    text-align: center;
    color: #FFFFFF;
    font-family: Material-Design-Icons;
    font-style: italic;

  }

</style>
