
<template>
  <div class="header">
    <slot name="left-img" class="left-img"></slot>
    <slot name="right-img" class="right-img"></slot>
    <span class="txt">{{txt}}</span>
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
.header {
  width: 100%;
  height:.88rem;
  display: flex;
  align-items: center;
  font-size: 0.34rem;
  position: fixed;
  top: .4rem;
  .txt {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
  }

  .left-img {
    width:.44rem;height:.44rem;
    position: absolute;
    left: 0.4rem;
    color: #fff;
    font-size: 0.5rem;
  }
}
</style>
