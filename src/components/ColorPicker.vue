<template>
  <div class="colorPicker">
    <div
      @click="selectColor(color)"
      class="color"
      :style="{'background-color' : color}"
      v-for="(color, i) in colors"
      :key="i"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["colors", "onSelectColor"],
  methods: {
    selectColor: function(color) {
      this.onSelectColor(color);
    }
  }
};
</script>


<style lang="scss">
.colorPicker {
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  .color {
    width: 30px;
    height: 30px;
    margin: 5px;
    border-radius: 15px;
    transition: opacity 0.2s;
    border: 1px solid rgba(0, 0, 0, 0.1);
    &:not(.active):hover {
      cursor: pointer;
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
  }
}
</style>