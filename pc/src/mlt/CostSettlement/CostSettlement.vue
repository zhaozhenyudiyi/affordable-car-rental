<template>
  <div>
      <div class="bit">
      <div class="header">
      </div>
      <div class="center">
      <div class="left">
      </div>
      <div class="right">
        <div class="ipt">
          <input type="text" v-model="key">
          <button>查询订单</button>
          </div> 
        
        <div class="biaoge">
          <table border="2">
    <tr class="hrt" v-for="(item,inde) in lt">
        <th>{{item.name}}</th>
        <th>{{item.Contact}}</th>
        <th>{{item.cart}}</th>
        <th>{{item.haoma}}</th>
        <th>{{item.shi}}</th>
        <th>{{item.money}}</th>
        <th>{{item.qu}}</th>
        <th>{{item.huan}}</th>
        <th>{{item.operation}}</th>
    </tr>
    <tr v-for="(item,index) in searc" :key="index" v-show="ias">
        <td>{{item.name }}</td>
        <td>{{item.phone}}</td>
        <td>{{item.carType}}</td>
        <td>{{item.carPhone}}</td>
        <td>{{item.LeasinMode}}</td>
        <td>{{item.rent}}</td>
        <td>{{item.pCarTime}}</td>
        <td>{{item.returnTime}}</td>
        <td class="operat"><span @click="fn(index)"
        :class="{active:index == num}">完成</span><span @click="f1(index)"
        :class="{active:index == nt}">删除</span></td>
    </tr>
    
</table>
        </div>

      </div> 
      </div>
       </div>
  </div>
</template>

<script>
export default {
  data() {
   
    return { 
      ias:true,
      lt:[
        {name:"客户姓名",
        Contact:"联系方式",
        cart:"车型",
        haoma:"车牌号码",
        shi:"租赁方式",
        money:"租金",
        qu:"取车时间",
        huan:"还车时间",
        operation:"操作"
        },
         
          
      ],
      list:[
        {name:"周末",
         phone:'13185854476',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
        },
           {name:"耿耿",
         phone:'12002389009',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
        },
           {name:"星河",
         phone:'15002389009',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
        },
           {name:"于海",
         phone:'16002389009',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
        },
           {name:"你好",
         phone:'17002389009',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
        },
           {name:"张环",
         phone:'18002389009',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
        },
           {name:"李朗",
         phone:'19002389009',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
        },
           {name:"问责一",
         phone:'134552389009',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
        },
           {name:"耿毛",
         phone:'15756798080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
        },
           {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
        },
      ],
      num:0,
      nt:0,
      key:"",
      searc:[],
    }
  },
  methods: {
   fn(index){
     this.num=index;
   },
   f1(index){
     this.nt=index;
     this.ias=!this.ias;
   }
  },

  watch:{
    key:function(newValue,oldValue){
      var that = this;
      if(newValue!=oldValue){
         var arrT=[];
        for(var i=0;i<that.list.length;i++){
          if(that.list[i].phone.indexOf(newValue)==0){
            arrT.push(that.list[i]);
            that.searc=arrT;
           
          }
        }   
        console.log(that.searc)
      }
    } 
  },
  //通过计算属性过滤数据
  computed:{
    //根据input的value值过滤值
  //  lit:function(){
  //    var _this=this;
  //    var arrList=[];//声明一个空数组来存放数据
  //    for(var i=0;i<this.list.length;i++){
  //       //判断输入框中的值是否可以匹配到数据，如果匹配成功
  //        if(this.list[i].name.search(this.searchVal)!=-1){
  //           //向空数组中添加数据
  //          arrList.push(this.list[i]);

  //        }
  //    }
  //    return arrList//返回
  //  }
  },
mounted(){
 this.searc=this.list;
},
  components: {

  }
}
</script>

<style scoped lang="less">
.active{
  background:#FFC600;
  color: white;
}
.bit{
    .header{
     width: 100%;
     height: 100px;
     background: #293345;
 }
 .center{
     display: flex;
 }
 .left{
    width: 210px;
    height:900px;
    background: yellow;
 }
tr td{
  text-align: center;
  width: 120px;
  height: 50px;
  font-size: 16px;
  span{
   
    display: inline-block;
    height: 22px;
    width: 53px;
    border-radius: 4px
  }
}
tr th{
  background: #E8E8E8;
  height: 50px;
}
 .right{
  margin-top: 50px;
  margin-left: 50px;
 }
 .biaoge{
       margin-top: 73px;
 }
 .operat{
   display: flex;
   justify-content: space-around;
   align-items: center;
 }
.ipt{
  display: flex;
  input{
    width:682px;
    height: 62px;
    border: 1px #cccccc solid;
    border-radius: 10px;
  }
  button{
    width: 157px;
    height: 62px;
    background: #FFC600;
    border-radius: 10px;
    font-size: 24px;
    color: white;
    margin-left: 36px;
  }
}
}
 
</style>
