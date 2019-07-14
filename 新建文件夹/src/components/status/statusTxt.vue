<template>
  <ul class='statusTxt'>
   <li v-for="(item,index) in list" :key="index">
       <div class='txt_top'>
           <img src="./img-status/ic_douban_logo.png" alt="">
           <div>
               <p>{{item.write_name}} <span>{{item.goto}}</span></p>
               <p>{{item.time}}</p>
           </div>
       </div>
       <div class='txt_bottom'>
           <div></div>
           <div>
               <h4>{{item.title}}</h4>
               <p>{{item.article}}</p>
           </div>
       </div>
       <div class='header'>
           <div>
              <i class="fa fa-thumbs-o-up"></i>{{item.yea}}
           </div>
           <div>
               <i class="fa fa-thumbs-o-down"></i>{{item.nay}}
           </div>
           <div>
              <i class="fa fa-refresh"></i>{{item.auno}}
           </div>
           <div>•••</div>
       </div>
   </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
       list:[]
    }
  },
  methods: {

  },
  components: {

  },
  mounted(){
  this.$axios.get("./../../../static/js/statusData.json"
   ).then((res)=>{
       console.log(res);
       this.list=res.data.group_list;
       console.log(this.list)
   }).catch((err)=>{
       console.log(err)
   })
  }
}
</script>

<style scoped lang="less">
  .statusTxt{
      width:100%;
      margin-bottom: 1rem;
      li{
         font-size:.15rem;
        .txt_top{
          display: flex;
          img{
            width:.5rem;
            height:.5rem;
            border-radius: 50%;
            margin:.2rem .2rem;
          }
          div{
            text-align: left;
            margin:.25rem 0;
          }
        } 
        .txt_bottom{
            div:last-of-type{
              width:70%;
              margin-left:.85rem;
              text-align: left;
              p{
                font-size:.12rem;
                color:#999;
              }
            }
        } 
        .header{
          display: flex;
          width:70%;
          padding:.1rem 0;
          margin-left: .85rem;
           position:relative;
          div{
            margin-right: .1rem;
            i{
              margin-right: .05rem;
            }
          }
          div:last-of-type{
            position:absolute;
            right:0;
          }
        }
      }
  }
</style>
