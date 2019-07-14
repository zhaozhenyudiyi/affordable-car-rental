
<template>
  <ul class='movie'>
    <li v-for='(item,index) in list' :key="index">
        <h2>{{item.title}}</h2>

        <ul class='info'>
           <li v-for='(items,index) in item.movie_example' :key='index'>
               <img :src="items.movie_url" alt="">
               <p>{{items.movie_name}}</p>
               <span>{{items.movie_grade}}</span>
           </li>
        </ul>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
       list:[],
       bool:false,
    }
  },
  methods: {

  },
  components: {

  },
   mounted(){
  this.$axios.get("./../../../static/js/movieData.json"
   ).then((res)=>{
       console.log(res);
       this.list=res.data.data;
       console.log(this.list)
   }).catch((err)=>{
       console.log(err)
   })
  }
}
</script>

<style scoped lang='less'>
.movie{
    width:100%;
    text-align: left;
    margin-bottom:1rem;
    flex: 1;
    overflow-y: auto;
    li{
        h2{
            font-size:.15rem;
            padding:.1rem .2rem;
        }
        .info{
            width:100%;
            display: flex;
            li{
             flex: 1;
             display: flex;
             flex-direction: column;
            //  justify-content: center;
             align-items: center;
             font-size:.15rem;
             img{
                 width:90%;
                 height:1.8rem;
             }
            //  .hover{
            //      display: block;
            //      width:300%;
            //      height:100%;
            //      background-color:rgba(0,0,0,.3);
            //      position:fixed;
            //      left:0;top:0;right:0;bottom:0;
            //      margin:auto;
            //  }
             p{
              
             }
             span{
                 font-size:.12rem;
                 color:#ccc;
             }
            }
        }
    }
}
</style>
