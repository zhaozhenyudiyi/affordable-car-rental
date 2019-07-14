//下边写法配置项不能用
<template>
  <div class="banner">
    <swiper  class=".swiper-container">
      <!-- <div class="swiper-wrapper"> -->
      <slot name="swiper-sil"></slot>
      <!-- </div> -->
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Swiper from 'swiper';
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      // swiperOption: {
      //   // some swiper options/callbacks
      //   // 所有的参数同 swiper 官方 api 参数
      //   // ...
      //   autoplay: true,
      //   paginationType: "Bullets",
      //   pagination: ".swiper-pagination",
      //   effects: "slide"
      // }
    };
  },
  // props: {
  //   swiperid: {
  //     type: String,
  //     default: ""
  //   },
  //   paginationshow: {
  //     type: Boolean,
  //     default: true
  //   },
  //   paginationdisition: {
  //     type: String,
  //     default: "right"
  //   },
  //   paginationType: {
  //     type: String,
  //     default: "Bullets"
  //   },
  //   autoplay: {
  //     type: Number,
  //     default: 3000
  //   },
  //   Bool: {
  //     type: Boolean,
  //     default: true
  //   },
  //   direction: {
  //     type: String,
  //     default: "horizontal"
  //   },
  //   pagination: {
  //     type: String,
  //     default: ".swiper-pagination"
  //   },
  //   effects: {
  //     type: String,
  //     default: "slide"
  //   }
  // },
  //  在最新版本中这种写法没效果
  mounted() {  
    new Swiper('.swiper-container', {
      direction: "horizontal", // 水平切换选项
      loop: true, // 循环模式选项
      autoplay: 1000,
      // 如果需要分页器
      pagination: ".swiper-pagination",
      effect: "slide",
      paginationType: "Bullets"
    });
  },
  methods: {},
  components: {
    // swiper,swiperSlide
  }
};
</script>

<style scoped lang=less>
/* @import "../../../static/css/swiper.css"; */
/* @import 'swiper/dist/css/swiper.css'; */
/* .swiper-container {
  width: 100%;
  height: 200px;
}
.swiper-container img {
  width: 100%;
  height: 200px;
} */
</style>
