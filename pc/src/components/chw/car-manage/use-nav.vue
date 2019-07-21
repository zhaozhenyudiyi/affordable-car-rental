 
<template>
  <div class="use-nav">
    <slot name="txt1-1"></slot>
    <slot name="txt1-2"></slot>
    <div class="right_x">
      <slot name="txt2"></slot>
      <slot name="txt3"></slot>
      <slot name="txt4"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang=less>
.use-nav {
  display: flex;
  padding: 10px 0;
  position:relative;
  p{
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 19px;
    padding: 3px 10px;
    margin-right:15px;
  }
  .p_active{
    color:#fff;
    background-color:  #ffc600;
    border:1px solit #ffc600
  }
  .right_x{
    position:absolute;
    right:0;
    span {
    border: 1px solid #999;
    margin-left: 10px;
    border-radius: 5px;
    padding: 3px 10px;
    font-size: 12px;
    color: #999;
  }
  .span_active{
      border: 1px solid #ffc600;
    background-color: #ffc600;
    color: #fff;
  }
  }
}
</style>
