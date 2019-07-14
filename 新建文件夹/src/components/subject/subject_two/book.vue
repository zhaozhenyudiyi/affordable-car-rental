
<template>
  <div>
   读书{{$store.state.num}}
   <button @click='change()'>我要修改num的值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
  change(){
       this.$store.commit('add',12)
     }
  },
  components: {
   
  }
}
</script>

<style scoped>

</style>
