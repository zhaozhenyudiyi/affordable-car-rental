<template>
 <div class="login">
     <from>
         <div>
             <img src="./img/ICON-1.png" alt="">
             <input type="text" placeholder="请输入手机号">
         </div>
         <div>
             <img src="./img/ICON-2.png" alt="">
             <input type="text"  placeholder="请输入密码">
         </div>
         <p>忘记密码</p>
     </from>
     <section>
         <p></p>
         <ul>
             <li><img src="./img/ICON-QQ.png" alt=""></li>
             <li><img src="./img/ICON-WB.png" alt=""></li>
             <li><img src="./img/ICON--WX.png" alt=""></li>
         </ul>
         <div>
             <router-link><button>注册</button></router-link>
             <router-link><button>登录</button></router-link>
         </div>
     </section>
     <footer>
         <p>登录或者注册即同意平价分时租车<router-link>用户服务协议</router-link></p>
     </footer>
 </div>
</template>

<script>
export default {
 data() {
 return {

 }
 },
 methods: {

 },
 components: {

 }
}
</script>

<style scoped lang="less">
    .login{
        background: url('./img/矩形 2.png');
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
    }
</style>
