
<template>
  <ul class='home_list'>
     <li v-for='(item,index) in list' :key="index">
         <div class='txt'>
             <p>{{item.title}}</p>
             <p>{{item.target.desc}}</p>
             <p>作者：{{item.target.author.name}}</p>
         </div>
         <img :src="item.target.cover_url" alt="">
         </li> 
  </ul>
</template>

<script>
// import axios from "axios";
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
  this.$axios.get("./../../../static/js/homeData.json"
   ).then((res)=>{
       console.log(res.recommend_feeds);
       this.list=res.data.recommend_feeds;
       console.log(this.list)
   }).catch((err)=>{
       console.log(err)
   })
  }
}
</script>

<style scoped lang="less">
  .home_list{
      width:100%;
      // display:flex;
      // flex-direction: column;
      flex: 1;
      overflow-y: auto;
      width:100%;
      padding:.1rem 0 .7rem 0;
      li{
          display:flex;
          font-size:.12rem;
          padding:.1rem 0;
          border-bottom:1px solid #ccc;
          
       .txt{
         width:70%;
         padding:.1rem ;
         text-align: left;
          p:nth-child(2){
             color:#999;
         }
         p:last-of-type{
             color:#ccc;
         }
       }
        img{
           width:1rem;
           height:1rem;
         }
      }
      li:last-of-type{
             border-bottom:none; 
          }
  }
</style>
