
<template>
  <div>
   
   同城{{asd}}
   <!-- <input type='text' @input='aa()'/> -->
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed:{
    asd(){
      return this.$store.state.num+=100    //在计算属性中返回某个状态：获取vuex的状态
    }
  },
  methods: {
    // aa(){
    //    return   this.asd=this.$store.state.num
    //  }
  },
  components: {

  }
}
</script>

<style scoped>
input{
  border:1px solid #ccc;
}
</style>
