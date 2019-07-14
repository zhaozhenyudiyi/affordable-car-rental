
<template>
  <div id='subject'>
<Myheader txt='书影音' >
  <img src="../../\pages\header\img-head\ic_actionbar_search_icon.png" alt="" slot='left' class="leftImg">
  <img src="../../\pages\header\img-head\ic_chat_green.png" alt="" slot='right' class="rightImg">
</Myheader>
  <Subject_second></Subject_second>
  <router-view></router-view>
  </div>
</template>

<script>
import Myheader from "../../pages/header/head.vue"
import Subject_second from "./subject_second.vue"
export default {
  data() {
    return {
     url1:"../../pages/header/img-head/ic_actionbar_search_icon.png",
     url2:"../../pages/header/img-head/ic_chat_green.png"

    }
  },
  methods: {

  },
  components: {
 Myheader ,
 Subject_second,
  }
}
</script>

<style scoped lang='less'>
#subject{
  display: flex;
  flex-direction: column;
}
</style>
