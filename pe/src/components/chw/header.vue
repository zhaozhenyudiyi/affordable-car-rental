
<template>
  <div class="header">
    <slot name="left-img" class="left-img"></slot>
    <span class="txt">{{txt}}</span>
    <slot name="right-img" class="right-img"></slot>
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

<style scoped lang="less">
.header {
  width: 100%;
  height: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  font-size: 0;
  .txt {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-weight: bold;
  font-size: 0.36rem;

  }

  .left-img {
    width: 0.44rem;
    height: 0.44rem;
    margin: .31rem;
  }
  .right-img {
    width: 0.44rem;
    height: 0.44rem;
    margin: 0.31rem;
  }
}
</style>
