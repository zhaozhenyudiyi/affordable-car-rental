
<template>
  <div id="headerwrap">
    <span>{{txt}}</span>
    <slot name='left'></slot>
    <slot name='right'></slot>
    <slot name='search'></slot>
    <!-- <img :src="src1" alt class="leftImg" />
    <img :src="src2" alt class="rightImg" /> -->
  </div>
</template>

<script>

export default {
  props: ["txt"],
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang=less>
#headerwrap {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  background-color: #f7f7f7;
  font-size: 0.17rem;
  border-bottom: .005rem solid #999;
  position:fixed;
  z-index: 100;
  top: 0;
  img {
    width: 0.25rem;
    position: absolute;
  }
  .rightImg {
    top: 0.1rem;
    right: 0.1rem;
  }
  .leftImg {
    top: 0.1rem;
    right: 0.5rem;
  }
}
</style>
