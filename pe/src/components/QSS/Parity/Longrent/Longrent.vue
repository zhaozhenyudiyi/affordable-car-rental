<template>
  <div class="longrent">
    <ul>
      <li>
        <router-link to="/pages/longrent/year_sent" >年租</router-link>
      </li>
      <li>
        <router-link to="/pages/longrent/bestlong_sent">超值长租</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {},
  mounted() {
    this.$router.push('/pages/longrent/year_sent');
  },
};
</script>

<style scoped lang='less'>
.longrent {
  flex:1;
  background: #ffffff;
  // height: 100%;
  overflow: hidden;
  ul {
    display: flex;
    // flex-direction: row;
    justify-content: space-around;
    margin-top: .53rem;
    padding-bottom: .31rem;
    li {
      font-size: 0.28rem;
      color: #333333;
      a{
        color: #999999;
        padding-bottom: .28rem;
        margin-bottom: .49rem;
      }
      // .one-link{
      //   color: #333333;
      //   border-bottom: .04rem solid #333333;
      // }
      .router-link-active{
        color: #333333;
        border-bottom: .04rem solid #333333;
      }
    }
  }
}
</style>
