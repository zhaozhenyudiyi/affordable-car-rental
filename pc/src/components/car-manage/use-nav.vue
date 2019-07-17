
<template>
  <div class='use-nav'>
     <slot name='txt1'></slot>
     <slot name='txt2'></slot>
     <slot name='txt3'></slot>
     <slot name='txt4'></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang=less>
  .use-nav{
      display: flex;
      padding:10px 0;
      p{
         border:1px solid #fff;
         font-size:19px;
          padding:3px 0px;  
      }
      span{
          border:1px solid #999;
          margin-left:10px;
          border-radius: 5px;
          padding:3px 10px;
          font-size:12px;
          color:#999;
      }
      span:first-of-type{
          border:1px solid #fff;
          background-color:#ffc600;
          color:#fff;
          margin-left:30px;
      }
  }
</style>
