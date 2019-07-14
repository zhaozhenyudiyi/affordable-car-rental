
<template>
  <div>
<div class="swiper-container">
    <div class="swiper-wrapper">
         <slot name="swiper-sil"></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
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
        effects: "slide",
          mousewheel: true,
      },
    }
  },
  mounted(){
     new Swiper ('.swiper-container', {
    autoplay: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
  }) 
  },       
  methods: {

  },
  components: {
Swiper,
  }
}
</script>

<style scoped>


.swiper-container {
        width: 100%;
        /* height: 300px; */
        margin: 0px auto;
    }
</style>
