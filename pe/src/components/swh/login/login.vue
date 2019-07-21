<template>
  <div class="login">
    <img src="./img/bj.png" alt />
    <div class="wrap">
      <form>
        <div>
          <img src="./img/ICON-1.png" alt />
          <input type="text" placeholder="请输入手机号" id="phone" />
        </div>
        <div>
          <img src="./img/ICON-2.png" alt />
          <input type="password" placeholder="请输入密码" id="pwd" />
        </div>
        <p>忘记密码?</p>
      </form>
      <section>
        <p>使用以下账号登录</p>
        <ul>
          <li>
            <img src="./img/ICON-QQ.png" alt />
          </li>
          <li>
            <img src="./img/ICON-WB.png" alt />
          </li>
          <li>
            <img src="./img/ICON--WX.png" alt />
          </li>
        </ul>
      </section>
      <footer>
        <div class="inp">
          <router-link to="/registered">
            <button class="zc">注册</button>
          </router-link>
          <router-link to="/pages">
            <button @click="phone">登录</button>
          </router-link>
        </div>
        <p>
          登录或者注册即同意平价分时租车
          <router-link to="/shop">用户服务协议</router-link>
        </p>
      </footer>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    //   window.location.pathname
    phone() {
      // var phone = document.getElementById("phone").value;
      // var pwd = document.getElementById("pwd").value;
      // if (!/^1[3456789]\d{9}$/.test(phone)) {
      //   alert("手机号码不正确，请重填");
      //   return false;
      // } else if (!/^[0-9A-Za-z]{6,15}$/.test(pwd)) {
      //   alert("密码不正确");
      // } else {
        this.$router.push("/pages");
      // }
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.zc{
  background-color: rgba(245, 245, 245, 0.4);
  color: rgba(255, 255, 255, 1);
}
.inp{
  font-size: .36rem;
}
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  img {
    width: 100%;
    height: 100%;
  }
  .wrap {
    margin: 0 0.96rem 0 0.91rem;
    font-size: 0;
    form {
      overflow: hidden;
      position: absolute;
      top: 5.24rem;
      div {
        width: 5.63rem;
        height: 1.17rem;
        border-bottom: 1px solid rgba(153, 153, 153, 1);
        font-size: 0;
        display: flex;
        position: relative;
        img {
          width: 0.44rem;
          height: 0.44rem;
          position: absolute;
          bottom: 0.19rem;
          left: 0.38rem;
        }
        input {
          background: transparent;
          position: absolute;
          bottom: 0.19rem;
          left: 1.15rem;
          font-size: 0.28rem;
          color: #ffffff;
          border: 0;
        }
        input::-webkit-input-placeholder {
          color: #ffffff;
          font-size: 0.28rem;
        }
      }
      p {
        color: #ffffff;
        margin-top: 0.27rem;
        margin-left: 4.4rem;
        font-size: 0.23rem;
      }
    }
    section {
      position: absolute;
      overflow: hidden;
      top: 9rem;
      margin-bottom: 0.33rem;
      p {
        color: #ffffff;
        margin-left: 1.85rem;
        font-size: 0.12rem;
      }
      ul {
        margin: 0.59rem 0.48rem 0.54rem 0.52rem;
        display: flex;
        li {
          img {
            width: 1.2rem;
            height: 1.2rem;
          }
        }
        li:nth-child(2) {
          img {
            margin-left: 0.52rem;
            margin-right: 0.5rem;
          }
        }
      }
    }
    footer {
      position: absolute;
      bottom: -0.1rem;
      font-size: 0;
      div {
        width: 5.63rem;
        height: 0.88rem;
        display: flex;
        margin-bottom: 0.14rem;
        a {
          position: relative;
          button {
            width: 3.15rem;
            height: 0.88rem;
            box-shadow: -9px 0px 16px 0px rgba(51, 51, 51, 0.18);
            border-radius: 0.44rem;
            font-size: 0.36rem;
            position: absolute;
            border: 0;
          }
        }
        a:last-child {
          button {
            left: 2.47rem;
            background-color: #ffc600;
            z-index: 333;
            color: #000000;
          }
        }
        a:frist-child {
          button {
            left: 0;
            background-color: #7c7e7d;
            color: #000000;
          }
        }
      }
      p {
        font-size: 0.12rem;
        text-align: center;
        a {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
