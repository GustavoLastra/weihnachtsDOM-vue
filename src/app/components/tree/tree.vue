/**
 * Created by glastra on 11.08.18.
 */
<template>
  <div class="rootContainer">
    <div class="toolsContainer">
      <app-tools v-on:onClick="onClick"></app-tools>
    </div>

      <div v-if="showTree">
        <div class="treeContainer" >
          <app-led-list
            :ledList="actualTree"></app-led-list>
        </div>
      </div>
      <div v-if="!showTree">
        <div class="hintContainer">
          <div class="hint">Please click on the "Create Tree" button</div>
        </div>
      </div>
  </div>
</template>
<script>
  import { TreeBus } from '../../shared/treeBus'

  export default {
    data: function () {
      return {
        actualTree: TreeBus.tree,
        showTree: false
      };
    },
    methods: {
      onClick(todo) {
        if (todo=="create") {
          this.showTree = true;
        } else {
          this.showTree = false;
        }
      }

    },
    created() {
      TreeBus.$on('updateTree', (tree) => {
        this.actualTree = tree;
      });
    }
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
    line-height: 26px;
    padding: 10px 20px;
  }

  .hintContainer {
    background-color:gainsboro;
    width: 40%;
    margin: auto;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    margin-top: 2%;
    overflow: auto;
  }
</style>
