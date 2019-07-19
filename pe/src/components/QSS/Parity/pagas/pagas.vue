<template>
  <div class="parity">
    <div class="PartyHeader"></div>
    <ul>
      <li>
        <router-link to="/pages/domestic">国内租</router-link>
      </li>
      <li>
        <router-link to="/pages/freeride">分时租</router-link>
      </li>
      <li>
        <router-link to="/pages/timesharing">顺风车</router-link>
      </li>
      <li>
        <router-link to="/pages/longrent">长租</router-link>
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
    this.$router.push('/pages/domestic');
  },
};
</script>

<style scoped lang='less'>
.parity {
  //    padding: 0 .34rem;
  .PartyHeader {
    height: 0.88rem;
    background: black;
    padding: 0 0.34rem;
  }
  ul {
    display: flex;
    flex-direction: row;
    font-size: 0;
    justify-content: space-between;
    padding: 0 0.34rem;
    margin-bottom: 0.29rem;
    margin-top: 0.51rem;
    li {
      a {
        font-size: 0.31rem;
        color: white;
      }
      .router-link-active {
        color: #ffc600;
      }
    }
  }
}
</style>
