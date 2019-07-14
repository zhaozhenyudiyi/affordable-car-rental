
<template>
  <div class="mine">
    <Myheader txt="我的">
      <img src="../../\pages\header\img-head\ic_settings.png" alt slot="right" class="rightImg" />
    </Myheader>
    <div class="list-group">
      <router-link to="/mine" class="list-group-item" href="#">
        <i class="fa fa-lock fa-fw" aria-hidden="true"></i>
        <br />密码管理
      </router-link>
      <router-link to="/mine" class="list-group-item" href="#">
        <i class="fa fa-credit-card fa-fw" aria-hidden="true"></i>
        <br />银行卡管理
      </router-link>
    </div>
    <div class="list">
      <ul class="fa-ul">
        <li class="h">
          <router-link to="/mine">
            <i class="fa fa-file-archive-o fa-fw" aria-hidden="true"></i>风险承受能力评估
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/mine">
            <i class="fa fa-check-square fa-fw" aria-hidden="true"></i>安全保障
            <span>></span>
          </router-link>
        </li>
        <li class="h">
          <router-link to="/mine">
            <i class="fa fa-user-o fa-fw" aria-hidden="true"></i>我的关注
            <span>></span>
          </router-link>
        </li>
        <li class="h">
          <router-link to="/mine">
            <i class="fa fa-question-circle fa-fw" aria-hidden="true"></i>帮助中心
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/mine">
            <i class="fa fa-user-o fa-fw" aria-hidden="true"></i>关于我们
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/mine">
            <i class="fa fa-search fa-fw" aria-hidden="true"></i>检查更新
            <span>></span>
          </router-link>
        </li>
        <li>
          <router-link to="/mine">
            <i class="fa fa-reddit fa-fw" aria-hidden="true"></i>联系客服
            <span>></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Myheader from "../../pages/header/head.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Myheader
  }
};
</script>

<style scoped lang=less>
.mine {
  .list-group {
    display: flex;
    padding: .1rem 0;
    border-bottom: 0.5px solid #ccc;
    a {
      font-size: .15rem;
      width: 50%;
      text-align: center;
      line-height: .3rem;
      i {
        font-size: .30rem;
        color: #42bd56;
      }
    }
  }
  .list {
    width: 100%;
    .fa-ul {
      margin: 0px;
      li {
        width: 100%;
        /* height: 50px; */
        border-bottom: 0.5px solid #ccc;
        padding: 0 .1rem;
        a {
          /* height: 100%; */
          display: flex;
          align-items: center;
          justify-items: center;
          font-size: .15rem;
          i {
            font-size: .20rem;
            color: #42bd56;
            line-height: .55rem;
            margin-right: .1rem;
          }
          span {
            color: #42bd56;
            position: absolute;
            right: .1rem;
          }
        }
      }
      .h {
        margin-top: .1rem;
      }
    }
  }
}
</style>
