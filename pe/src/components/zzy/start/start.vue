<template>
  <div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {},
  mounted() {
     setTimeout(()=>{
      this.$router.push("/intro");
    }, 3000);
   
  }
};
</script>

<style scoped lang='less'>
div {
  width: 100%;
  height: 100%;
}
img{
  float: left;
  width: 100%;
}
</style>
