
<template>
  <div id="foot">
    <ul>
      <li>
        <router-link to="/home">
          <img src="./img-foot/ic_tab_home_normal.png" alt />
          <img src="./img-foot/ic_tab_home_active.png" alt />
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link to="/subject">
          <img src="./img-foot/ic_tab_subject_normal.png" alt />
          <img src="./img-foot/ic_tab_subject_active.png" alt />
          <p>书影音</p>
        </router-link>
      </li>
      <li>
        <router-link to="/status">
          <img src="./img-foot/ic_tab_status_normal.png" alt />
          <img src="./img-foot/ic_tab_status_active.png" alt />
          <p>广播</p>
        </router-link>
      </li>
      <li>
        <router-link to="/group">
          <img src="./img-foot/ic_tab_group_normal.png" alt />
          <img src="./img-foot/ic_tab_group_active.png" alt />
          <p>小组</p>
        </router-link>
      </li>
      <li>
        <router-link to="/mine">
          <img src="./img-foot/ic_tab_profile_normal.png" alt />
          <img src="./img-foot/ic_tab_profile_active.png" alt />
          <p>我的</p>
        </router-link>
      </li>
    </ul>
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

<style scoped lang=less>
#foot {
  width: 100%;
  font-size: 0.15rem;
  position: fixed;
  bottom: 0px;
  background-color: #fff;
  border-top: 1px solid #999;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      flex: 1;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          display: block;
          width: 0.44rem;
          height: 0.44rem;
        }
        img:nth-child(2) {
          display: none;
        }
        &.router-link-active {
          img:nth-child(1) {
            display: none;
          }
          img:nth-child(2) {
            display: block;
          }
          p {
            color: green;
          }
        }
      }
    }
  }
}
</style>
