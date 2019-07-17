<template>
 <div class="login">
     <img src="./img/bj.png" alt="">
     <div class="wrap">
         <form>
            <div>
                <img src="./img/ICON-1.png" alt="">
                <input type="text" placeholder="请输入手机号" id="phone">
            </div>
            <div>
                <img src="./img/ICON-2.png" alt="">
                <input type="password"  placeholder="请输入密码" id='pwd'>
            </div>
            <p>忘记密码?</p>
         </form>
        <section>
            <p>使用以下账号登录</p>
            <ul>
                <li><img src="./img/ICON-QQ.png" alt=""></li>
                <li><img src="./img/ICON-WB.png" alt=""></li>
                <li><img src="./img/ICON--WX.png" alt=""></li>
            </ul>
        </section>
        <footer>
            <div>
                <router-link to="/registered"><button class="aa">注册</button></router-link>
                <a><button  @click="phone" class="log">登录</button></a>
            </div>
            <p>登录或者注册即同意平价分时租车<router-link to="/login">用户服务协议</router-link></p>
        </footer>
     </div>
 </div>
</template>

<script>
export default {
 data() {
 return {
     
 }
 },
 methods: {
     
    phone(){ 
        if(window.location.href.split('#')[1] == '/login1'){
            var phone = document.getElementById('phone').value;
        var pwd = document.getElementById('pwd').value;
        if(!(/^1[3456789]\d{9}$/.test(phone))){ 
            alert("手机号码不正确，请重填");  
            return false; 
        } else if(!/^[0-9A-Za-z]{6,15}$/.test(pwd)){
            alert('密码不正确');
        }else{
            alert('登录成功');
        }
        }
    }
 },
 components: {

 }
}
</script>

<style scoped lang="less">
    .log{
        left: 0;
        background-color:#FFC600;
        z-index: 3;
    }
    .aa{
      background:rgba(245,245,245,.2);
      color:rgba(255,255,255,1);
    }
    .login{
        position: fixed;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        img{
            width: 100%;
            height: 100%;
        }
        .wrap{
            margin: 0 .96rem 0 .91rem;
            font-size: 0;
            form{
                overflow: hidden;
                position: absolute;
                top:5.24rem;
                div{
                   width: 5.63rem;
                   height: 1.17rem;
                   border-bottom:1px solid rgba(153,153,153,1);
                   font-size: 0;
                   display: flex;
                   position: relative;
                   img{
                       width: .44rem;
                       height: .44rem;
                       position: absolute;
                       bottom: .19rem;
                       left: .38rem;
                   }
                   input{
                       background: transparent;
                       position: absolute;
                       bottom:.19rem;
                       left: 1.15rem;
                       font-size: .28rem;
                       color: #ffffff;
                       border: 0;
                   }
                   input::-webkit-input-placeholder{
                       color: #ffffff;
                       font-size: .28rem;
                   }
                }
                p{
                    color: #ffffff;
                    margin-top: .27rem;
                    margin-left: 4.4rem;
                    font-size: .23rem;
                   }
            }
            section{
                position: absolute;
                overflow: hidden;
                top:9rem;
                margin-bottom: .33rem;
                p{
                    color: #ffffff;
                    margin-left: 1.85rem;
                    font-size: .12rem;
                }
                ul{
                    margin: .59rem .48rem .54rem .52rem;
                    display: flex;
                    li{
                        img{
                            width: 1.2rem;
                            height: 1.2rem;
                        }
                    }
                    li:nth-child(2){
                        img{
                            margin-left: .52rem;
                            margin-right:.5rem ;
                        }
                    }
                }
            }
            footer{
                position: absolute;
                bottom:-.1rem;
                font-size: 0;
                div{
                    width: 5.63rem;
                    height: .88rem;
                    display: flex;
                    margin-bottom: .14rem;
                    a{
                        position: relative;
                        font-size: 0;
                        button{
                            width:3.15rem;
                            height:.88rem;
                            box-shadow:-9px 0px 16px 0px rgba(51,51,51,0.18);
                            border-radius:.44rem;
                            font-size: .36rem;
                            position: absolute;
                            border: 0;
                        }
                    }
                    a:last-child{
                        button{
                            left: 2.47rem;
                            z-index: 333;
                        }
                    }
                }
                p{
                    font-size: .12rem;
                    text-align: center;
                    a{
                        color: #ffffff;
                    }
                }
            }
        }
    }
</style>
