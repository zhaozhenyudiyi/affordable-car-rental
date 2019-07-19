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
          <table border="2" cellspacing="0">
    <tr class="hrt" v-for="(item,inde) in lt" :key="inde">
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
    <router-link class="ai" :to="{ path:'/hou'}"
    >
    <tr v-for="(item,index) in searc.slice((this.tl-1)*this.to,this.tl*this.to)" :key="index" v-show="item.bol"

    >
        <td @click="f2(index)">{{item.name}}</td>
        <td @click="f2(index)">{{item.phone}}</td>
        <td @click="f2(index)">{{item.carType}}</td>
        <td @click="f2(index)">{{item.carPhone}}</td>
        <td @click="f2(index)">{{item.LeasinMode}}</td>
        <td @click="f2(index)">{{item.rent}}</td>
        <td @click="f2(index)">{{item.pCarTime}}</td>
        <td @click="f2(index)">{{item.returnTime}}</td>
        <td class="operat"><span @click="fn(index)"
        :class="{active:index == num}">完成</span><span @click="f1(index)"
        :class="{active:index == nt}">删除</span></td>
    </tr>
    </router-link>
</table>
        </div>
     <div class="pageContainer">
  <ul class="pagesInner">
   <li class="page" v-for="(item, index) in pages" :key="index"
   :class="{actived:item === currentPage}" 
   @click="select(item)">
    <span>{{item}}</span>
   </li>
  </ul>

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
      currentPage:1,
      totlePages:null,//总页数
      to:7,
      tl:1,
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
         bol:true
        },
           {name:"耿耿",
         phone:'12002389009',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
           {name:"星河",
         phone:'15002389009',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
           {name:"于海",
         phone:'16002389009',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
           {name:"你好",
         phone:'17002389009',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
           {name:"张环",
         phone:'18002389009',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
           {name:"李朗",
         phone:'19002389009',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
           {name:"问责一",
         phone:'134552389009',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
           {name:"耿毛",
         phone:'15756798080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
           {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
          {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
          {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
          {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
         {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
         {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
         {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
         {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
         {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
         {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
         {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
         {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
         {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
         {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
         {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
         {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
         {name:"孟子",
         phone:'16576598080',
         carType:"雷克萨斯",
         carPhone:"豫A999999",
         LeasinMode:'时租',
         rent:"50/小时",
         pCarTime:"2019-8-20",
         returnTime:"2019-9-20",
         bol:true
        },
      ],
      num:0,
      nt:0,
      key:"",
      searc:[],
      a:null,
    }
  },
  methods: {
    //点击完成
   fn(index,e){
     this.num=index;
     e = e || window.event;
			e.preventDefault();
   },
   //点击删除
   f1(index,e){
      e = e || window.event;
			e.preventDefault();
     this.nt=index;
     setTimeout(()=>{
       this.a[index].bol = !this.a[index].bol;
     },200)
     console.log(index);
   },
   f2(id,e){
      e = e || window.event;
			e.preventDefault();
      this.a=this.searc.slice((this.tl-1)*this.to,this.tl*this.to);
      console.log(this.a[id]);
      this.$router.push({
        path:"/hou",
        query:{
          id:id,
          p:this.a,
        }
      })
   },
   //分页的
   select(item) {
    if (item === this.currentPage) return
    if (typeof item === 'string') return
    this.currentPage = item
    this.tl = item;
    this.a = this.searc.slice((this.tl-1)*this.to,this.tl*this.to);
  }
  },

  watch:{
    //过滤所搜索到的值
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
  computed:{
     pages(){
       const c=this.currentPage;
       const t=this.totlePages;
       if(c<5){
         let nub = [];
         for(let i = 1;i<t;i++){
           nub.push(i);
         }
         return nub;
       }
     }
  },
mounted(){
 this.searc=this.list;
 this.a = this.searc.slice((this.tl-1)*this.to,this.tl*this.to);
 this.totlePages = Math.ceil(this.list.length / 7);
},

  components: {

  }
}
</script>

<style scoped lang="less">
.ai{
  display: contents;
}
.pageContainer{
      margin-left: 343px;
      margin-top: 30px;
}
.page{
  width: 28px;
  height: 28px;
  float: left;
  border:1px solid rgba(102,102,102,1);
  margin-left: 10px;
  text-align: center;
  line-height: 28px;
  border-radius: 50%;
}
.actived {
  border-color: #3399FF;
  background-color:#3399FF;
  color: #fff;
}
table{
  width: 1000px;
}
.active{
  background:#FFC600;
  color: white;
}
.bit{
    .header{
     width: 100%;
    //  height: 100px;
     background: #293345;
 }
 .center{
     display: flex;
 }
 .left{
    // width: 210px;
    // height:900px;
    // background: yellow;
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
  width:212px;
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
