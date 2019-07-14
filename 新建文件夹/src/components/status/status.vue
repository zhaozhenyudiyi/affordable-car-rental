
<template>
  <div class='status'>
    <Myheader txt="广播">
      <img src="../../\pages\header\img-head\ic_status_search_user.png" alt="" slot='left' class="leftImg">
  <img src="../../\pages\header\img-head\ic_chat_green.png" alt="" slot='right' class="rightImg">
    </Myheader>
    <Cell title='登录发广播'>
         <img src="./img-status/user_normal.jpg" slot='left_img' class='left_images'>
         <span slot='title'></span>
      </Cell> 
      <StatusTxt></StatusTxt> 
  </div>
</template>

<script>
import Myheader from "../../pages/header/head.vue"
import Cell from "../../pages/cell/cell.vue";
import StatusTxt from "./statusTxt"

export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
Myheader,
Cell,
StatusTxt,
  }
}
</script>

<style scoped>
</style>
