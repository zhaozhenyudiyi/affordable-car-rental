
<template>
  <div class='banner'>
    <swiper :options="swiperOption">
      <slot name="swiper-sil"></slot>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        autoplay:true,
        autoplay: true,
        paginationType: "Bullets",
        pagination: ".swiper-pagination",
        effects: "slide"
      },
    };
  },
 
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.banner{
  width:100%;
  position: fixed;
  top:45px;
  z-index: 100;
  img{
    width:100%;
  }
}
</style>
