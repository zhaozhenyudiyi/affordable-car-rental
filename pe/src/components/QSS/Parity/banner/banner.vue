<template>
  <div>
      <template>
  <swiper :options="swiperOption" ref="mySwiper">
    <slot name="swiper_sli"></slot>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
     </template>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          loop:true,//是否循环播放
          autoplay:{
              delay:1000,//轮播的速度
              disableOnInteraction : false//用户操作swiper之后，是否禁止autoplay
          },
          effect : 'slide',
          pagination : {
            el: '.swiper-pagination',
            type: 'bullets',  
          },
          
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style scoped>
</style>
