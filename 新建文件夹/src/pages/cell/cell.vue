
<template>
  <div class="cell">
    <div>
      <slot name="left_img"></slot>
      <span name="title" >{{title}}</span>
    </div>
    <slot name="right_img"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: ""
    },
     txt_color: {
      type: String,
      default: ""
    }
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang=less>
.cell {
  margin-top:170px;
  height: 40px;
  display: flex;
  position: relative;
  border-bottom: 1px solid #999;
  text-align: left;
  font-size: 0.15rem;
  div {
     display: flex;
  align-items: center;
    span {
      display: inline-block;
      /* color: salmon; */
      margin-left:.1rem;
    }
    .left_img {
      width: 0.05rem;
      height: 0.2rem;
      background-color: salmon;
    }
    .left_images {
      width: 0.3rem;
      height: 0.3rem;
      border-radius: 50%;
    }
  }
}
</style>
