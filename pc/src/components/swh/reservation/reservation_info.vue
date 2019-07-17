<template>
<div class="box">
    <div class="header"></div>
    <div class="aside"></div>
    <div class='wrap'>
        <div class="search">
                <input type="text">
                <router-link to='/reservation_info'><button>查询预订</button></router-link>
        </div>
        <div class="info">
            <p>预订详细信息</p>
            <ul class="left">
                <li>客户姓名：</li>
                <li>联系方式：</li>
                <li>证件类型：</li>
                <li>证件号码：</li>
                <li>积分：</li>
                <li>平驾币：</li>
            </ul>
            <ul class='right'>
                <li>车辆型号：</li>
                <li>车牌号码：</li>
                <li>租用方式：</li>
                <li>车型：</li>
                <li>取车时间：</li>
                <li>还车时间：</li>
            </ul>
        </div>
        <div class="type">
            <p><span>×</span>状态：未取车</p>
            <router-link to='/reservation'><button>完成</button></router-link>
            <router-link to='/reservation'><button>删除</button></router-link>
        </div>
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

 },
 components: {

 }
}
</script>

<style scoped lang='less'>
    .box{
        width: 100%;
        height: 100%;
    }
    .header{
        height: 100px;
        background: red;
    }
    .aside{
        width: 210px;
        background: blue;
        float: left;
        height: 100%;
        padding: 400px 0
    }
    .wrap{
        margin: 0 48px;
        float: left;
        .search{
            width: 100%;
            margin-top: 49px;
            display: flex;
            input{
                width:682px;
                height:62px;
                background:rgba(255,255,255,1);
                border:1px solid rgba(204,204,204,1);
                opacity:0.5;
                border-radius:10px;
            }
            button{
                width:157px;
                height:62px;
                background:rgba(255,198,0,1);
                border-radius:10px;
                border: 0;
                margin-left: 24px;
                color: #ffffff;
                font-size:24px;
                font-family:SourceHanSansCN-Bold;
                font-weight:bold;
            }
        }
        .info{
            margin-top: 93px;
            overflow: hidden;
            p{
                height: 54px;
                line-height: 54px;
                background:rgba(232,232,232,1);
                width: 100%;
                padding-left: 16px;
            }
            ul{
                list-style: none;
                font-size: 14px;
                float: left;
                margin-top: 26px;
                li{
                    margin-bottom: 16px;
                    color:rgba(51,51,51,1);
                }
                li:last-child{
                    margin-bottom: 0;
                }
            }
            .right{
                margin-left: 380px;
            }
        }
        .type{
            margin-top: 71px;
            p{
                font-size: 16px;
                color:rgba(102,102,102,1);
                span{
                    width: 28px;
                    height: 28px;
                    background: #f56c6d;
                    border-radius: 50%;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 10px;
                    color:#ffffff;
                    text-align: center;
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 28px;
                }
            }
            a{
                button{
                    margin-top: 29px;
                    border: 0;
                    width:114px;
                    height:43px;
                    border-radius:10px;
                    font-size: 24px;
                }
            }
            a:first-of-type{
                button{
                    margin-right: 30px;
                    color: #ffffff;
                    background:rgba(255,198,0,1);
                }
            }
            a:last-of-type{
                button{
                    color:rgba(255,204,0,1);
                    background: #ffffff;
                    border: 1px solid rgba(255,204,0,1);
                }
            }
        }
    }
</style>
