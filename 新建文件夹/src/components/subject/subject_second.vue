
<template>
  <ul class="subject-second">
    <li>
      <router-link to="/subject/movie">
        <p>电影</p>
      </router-link>
    </li>
    <li>
      <router-link to="/subject/book">
        <p>读书</p>
      </router-link>
    </li>
    <li>
      <router-link to="/subject/TV">
        <p>电视</p>
      </router-link>
    </li>
    <li>
      <router-link to="/subject/city">
        <p>同城</p>
      </router-link>
    </li>
    <li>
      <router-link to="/subject/music">
        <p>音乐</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
   beforeCreate(){
   this.$router.push('/subject/movie')
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.subject-second{
    width:100%;
    height:.3rem;
    display: flex;
    align-items: center;
    font-size:.12rem;
    margin:0;
    border-bottom:1px solid #ccc;
    li{
     flex: 1;
     height:100%;
     line-height: .3rem;
     a{
         color:#999;
     }
     .router-link-exact-active{
        display: block;
        background-color: rgb(80, 163, 80);
        color:#fff;
    }
    }
    
}
</style>
