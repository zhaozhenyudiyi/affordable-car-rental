<template>
  <div class="login">
    <div class="Matte"></div>
    <div class="main">
      <div class="left">
        <img src="./img/插画.png" />
      </div>
      <div class="right">
        <div class="top">
          <img src="./img/登录页LOGO.png" />
          <h2>平价租车</h2>
        </div>
        <form action>
          <div class="ZH">
            <input type="text" placeholder="账号" name="num" id="ZH" />
          </div>
          <div class="MM">
            <input type="password" placeholder="密码" name="password" id="MM" />
          </div>
          <div class="forget">
            <div>
              <input type="checkbox" />
              <span>记住密码</span>
            </div>
            <a href>忘记密码？</a>
          </div>
          <div class="DL">
            <!-- <router-link to="/index"> -->
            <input type="button" value="登录" @click="PD" />
            <!-- </router-link> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import "../.././.././../static/css/reset.css";
export default {
  data() {
    return {};
  },
  methods: {
    PD() {
      var phone = document.getElementById("ZH").value;
      var pwd = document.getElementById("MM").value;
      if (!/^1[3456789]\d{9}$/.test(phone)) {
        alert("手机号码不正确，请重填");
        return;
      } else if (!/^[0-9A-Za-z]{6,15}$/.test(pwd)) {
        alert("密码不正确");
        return;
      } else {
        this.$router.push("/tb");
      }
    }
  },
  components: {}
};
</script>

<style scoped lang='less'>
.login {
  width: 100%;
  height: 100%;
  background: url(./img/登录背景.png) no-repeat;
  background-size: 100%;
  .Matte {
    z-index: 4;
    width: 1200px;
    height: 627px;
    background: rgba(0, 0, 0, 1);
    opacity: 0.5;
    position: fixed;
    left: 50%;
    margin-left: -600px;
    top: 50%;
    margin-top: -313.5px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main {
    width: 1200px;
    height: 627px;
    position: fixed;
    left: 50%;
    margin-left: -600px;
    z-index: 10;
    top: 50%;
    margin-top: -313.5px;
    .left {
      z-index: 5;
      position: absolute;
      left: 61px;
      top: 107px;
    }
    .right {
      z-index: 5;
      position: absolute;
      right: 75px;
      top: 60px;
      .top {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 74px;
        margin-left: 38px;
        h2 {
          font-size: 40px;
          color: #f1d507;
          margin-left: 24px;
          font-weight: 400;
          img {
            width: 114px;
            height: 87px;
          }
        }
      }
      form {
        .ZH {
          input {
            width: 432px;
            height: 70px;
            border: none;
            outline: none;
            border-radius: 10px;
            border: 2px solid #ffffff;
            font-size: 16px;
            color: #ffffff;
            // color: red;
            background: rgba(0, 0, 0, 0.5);
            // opacity: 0.5;
            margin-bottom: 30px;
          }
          input::-webkit-input-placeholder {
            color: #ffffff;
          }
        }
        .MM {
          input {
            width: 432px;
            height: 70px;
            border: none;
            outline: none;
            border-radius: 10px;
            border: 2px solid #ffffff;
            font-size: 16px;
            color: #ffffff;
            background: rgba(0, 0, 0, 0.5);
            // opacity: 0.5;
            margin-bottom: 30px;
          }
          input::-webkit-input-placeholder {
            color: #ffffff;
          }
        }
        .forget {
          margin-bottom: 50px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          div {
            display: flex;
            align-items: center;
            input {
              width: 21px;
              height: 21px;
              border: none;
              border: 2px solid #ffffff;
              border-radius: 4px;
            }
            span {
              margin-left: 18px;
              color: white;
            }
          }
          a {
            color: white;
          }
        }
        .DL {
          input {
            width: 432px;
            height: 80px;
            background: #ffc600;
            border: none;
            border-radius: 10px;
            font-size: 30px;
            color: #fefefe;
          }
        }
      }
    }
  }
}
</style>
