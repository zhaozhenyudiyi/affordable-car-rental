
<template>
  <div class='my_order'>
     <Myheader txt="我的订单">
      <span slot="left-img" class="left-img" @click="back">＜</span>
    </Myheader>
    <Order></Order>
  </div>
</template>

<script>
import Myheader from "./../header";
import Order from './../order'
export default {
  data() {
    return {

    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  },
  components: {
Myheader,
Order,
  }
}
</script>

<style scoped>
.my_order{
  width:100%;
  height:100%;
  background-color: #363b3e;
}
</style>
