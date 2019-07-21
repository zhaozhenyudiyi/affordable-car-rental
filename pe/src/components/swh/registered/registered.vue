<template>
  <div class="registered">
    <img src="./img/bj.png" alt />
    <div class="wrap">
      <form>
        <div>
          <img src="./img/ICON-1.png" alt />
          <input type="text" placeholder="请输入手机号" id="phone" v-model="tel" />
        </div>
        <div>
          <img src="./img/ICON-2.png" alt />
          <input type="text" placeholder="请输入验证码" v-model="yzm_num" />
          <button  @click.stop="yzm" :disabled="timer">{{yzm_text}}</button>
        </div>
        <div>
          <img src="./img/ICON-3.png" alt />
          <input type="password" placeholder="请输入最少6位密码" id="pwd" />
        </div>
      </form>
      <footer>
        <div>
          <router-link to="/registered">
            <button class="aa" @click="res()" style="color:#000000">注册</button>
          </router-link>
          <router-link to="/login">
            <button class="log">登录</button>
          </router-link>
        </div>
        <p>
          登录或者注册即同意平价分时租车
          <router-link to="/login">用户服务协议</router-link>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: "",
      yzm_num: "",
      num: "",
      yzm_text: "获取验证码",
      down: 10,
      timer: false
    };
  },
  methods: {
    res() {
      if (window.location.href.split("#")[1] == "/registered") {
        var phone = document.getElementById("phone").value;
        var pwd = document.getElementById("pwd").value;
        if (!/^1[3456789]\d{9}$/.test(phone)) {
          alert("手机号码不符合规范，请重填");
          return false;
        } else if (!/^[0-9A-Za-z]{6,15}$/.test(pwd)) {
          alert("密码不符合规范");
        } else if (this.yzm_num != this.num) {
            alert('验证码不正确')
        } else {
          alert("注册成功");
        }
      }
    },
    yzm() {
      let num = Math.floor(Math.random() * (999999 - 100000) + 100000);
      this.num = num;
      //   if (/^1[3456789]\d{9}$/.test(this.tel)) {
      //     console.log(this.tel);
      //     this.axios
      //       .get(
      //         "http://172.25.1.67:8080/message/send?tel=" +
      //           this.tel +
      //           "&verificationCode=" +
      //           this.num
      //       )
      //       .then(response=> {
      //         console.log(response);
      //       })
      //       .catch(error=> {
      //         // console.log(error);
      //       });
      //   }
      //   if(this.timer){
      //       this.timer = !this.timer;
      //   }

      //   this.timer =!this.timer
      let time = setInterval(() => {
        this.yzm_text = this.down +'秒';
        this.down--;
        if (this.down < 0) {
          clearInterval(time);
          console.log("aaa");
          this.yzm_text = "获取验证码";
          this.down = 10;
          this.timer = !this.timer;
        }
      }, 1000);
      // console.log()
      this.timer = !this.timer;
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.aa {
  left: 0;
  background-color: #ffc600;
  z-index: 3;
}
.log {
  background-color: rgba(245, 245, 245, 0.4);
  color: rgba(255, 255, 255, 1);
}
.registered {
  position: fixed;
  width: 100%;
  height: 100%;
  background-size: 100%;
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
        button {
          background: #ffc600;
          width: 1.8rem;
          height: 0.55rem;
          border-radius: 0.44rem;
          color: #000000;
          font-size: 0.23rem;
          position: absolute;
          left: 3.63rem;
          bottom: 0.13rem;
          border: 0;
        }
      }
      p {
        color: #ffffff;
        margin-top: 0.27rem;
        margin-left: 4.4rem;
        font-size: 0.23rem;
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
