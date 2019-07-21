<template>
  <section>
    <div class="PartyHeader">
      <Myheader txt="我的订单">
        <img src="./../domestic/img/icon1.png" slot="left-img" class="left-img"  @click="fn"  />
        <img
          src="./../domestic/img/icon2.png"
          slot="right-img"
          class="right-img"
          alt
        />
      </Myheader>
    </div>

    <div class="parity">
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
          <router-link :to="{name: 'Longrent'}">长租</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import Myheader from "./../../../chw/header";
export default {
  data() {
    return {};
  },
  methods: {
    fn(){
      this.$router.push("/mine")
    }
  },
  components: {
    Myheader
  },
  mounted() {
    this.$router.push("/pages/domestic");
  }
};
</script>

<style scoped lang='less'>
section {
  width: 100%;
  height: 100%;
  font-size: 0;
}
.parity {
  width: 100%;
  height: 100%;
  font-size: 0;
  .PartyHeader {
    width: 100%;
    height: 0.88rem;
  }
  ul {
    display: flex;
    flex-direction: row;
    font-size: 0;
    justify-content: space-between;
    padding: 0 0.34rem;
    margin-bottom: 0.29rem;
    margin-top: 0.1rem;
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
