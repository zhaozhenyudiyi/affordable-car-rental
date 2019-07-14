
<template>
  <div id="group">
    <Myheader txt="小组">
      <img
        src="../../pages/header/img-head/ic_actionbar_search_icon.png"
        alt
        slot="left"
        class="leftImg"
      />
      <img src="../../pages/header/img-head/ic_chat_green.png" alt slot="right" class="rightImg" />
    </Myheader>
    <GroupTxt></GroupTxt>
    
  </div>
</template>

<script>
import Myheader from "../../pages/header/head.vue";
import GroupTxt from './groupTxt.vue';
export default {
  data() {
    return {
     
    };
  },
  methods: {},
  components: {
    Myheader,
    GroupTxt,
  }
};
</script>

<style scoped>
</style>
