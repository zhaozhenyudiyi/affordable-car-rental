
<template>
  <div class="header">
    <slot name="left-img" class="left-img"></slot>
    <slot name="right-img" class="right-img"></slot>
    <span class="txt">{{txt}}</span>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["txt"],
  methods: {},
  components: {}
};
</script>

<style scoped lang=less>
.clear{
  clear: both;
}
.header {
  overflow: hidden;
  height: .88rem;


  width: 100%;
  display: flex;
  align-items: center;
  font-size: 0.34rem;
  position: relative;
  top: 0;
  .txt {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
  }

  .left-img {
    position: absolute;
    left: 0.4rem;
    color: #fff;
    font-size: 0.5rem;
  }
}
</style>
