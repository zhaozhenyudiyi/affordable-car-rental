<template>
  <div class="longrent">
    <ul>
      <li>
        <router-link to="year_sent">年租</router-link>
      </li>
      <li>
        <router-link to="bestlong_sent">超值长租</router-link>
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
  components: {}
};
</script>

<style scoped lang='less'>
.longrent {
  background: #ffffff;
  height: 11.25rem;
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
      .router-link-active{
        color: #333333;
        border-bottom: .04rem solid #333333;
      }
    }
  }
}
</style>
