<template>
  <div class="toolsRow">
    <div class="toolItem">
      <h1 class="weihnachsDOMLabel">WeihnachtsDOM</h1>
    </div>
    <div class="toolItem">
      <button v-on:click="onClick" class="toolsButton">{{buttonLabel}}</button>
    </div>
  </div>
</template>

<script>
  import { TreeBus } from '../../shared/treeBus'
  export default {
    data: function () {
      return {
        buttonLabel: "Create Tree"
      };
    },
    methods: {
      onClick () {
        if(this.buttonLabel == "Create Tree") {
          this.buttonLabel = "Destroy Tree";
          this.$emit("onClick", "create");
        } else {
          this.buttonLabel = "Create Tree";
          this.$emit("onClick", "destroy");
          TreeBus.initialTree();
        }
      }
    }
  }
</script>


<style>
  .toolsRow {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: auto;
  }

  .toolItem {
    margin:2%;
  }

  .toolsButton {
    cursor: pointer;
    background-color: #f44336;
    box-shadow: 0 3px 10px rgba(0,0,0,.23), 0 3px 10px rgba(0,0,0,.16);
    outline: 0!important;
    color: #fff;
    font-size: 1em;
    height: 30%;
    line-height: 26px;
    text-align: center;
    padding: 10px 20px;
    text-decoration: none;
    border: none;
  }

  .toolsButton:active {
    background-color: #f44336;
    transform: translateY(2px);
  }

  .weihnachsDOMLabel {
    color: #FFFFFF;
    line-height: 26px;
  }
</style>
