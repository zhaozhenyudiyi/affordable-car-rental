<template>
  <div>
      <div class="Recommend">
      <h3>车型推荐</h3>
      <ul>
        <li v-for="(item,index) in car_type" :key="index">
            <img :src="item.car_img">
            <span class="rent">{{ item.rent }}</span>
          <p class="name">
            <span class="car_name">{{ item.car_name }}</span>
            <span class="hot">{{ item.hot }}</span>
          </p>
          <p class="details">
            <span class="type">{{ item.type }}</span>
            <span class="displacement">{{ item.displacement }}</span>
            <span class="num">{{ item.num }}</span>
          </p>
          <p class="sale">
            <span class="maney">{{ item.maney }}</span>
            <span class="Average">{{ item.Average }}</span>
            <span class="back">{{ item.back }}</span>
          </p>
        </li>
      </ul>
      <h3>顺风车推荐</h3>
      <ul>
         <li v-for="(item,index) in Freeride" :key="index">
            <img :src="item.car_img">
            <span class="rent">{{ item.rent }}</span>
          <p class="name">
            <span class="car_name">{{ item.car_name }}</span>
            <span class="hot">{{ item.hot }}</span>
          </p>
          <p class="details">
            <span class="type">{{ item.type }}</span>
            <span class="displacement">{{ item.displacement }}</span>
            <span class="num">{{ item.num }}</span>
          </p>
          <p class="sale">
            <span class="maney">{{ item.maney }}</span>
            <span class="Average">{{ item.Average }}</span>
            <span class="back">{{ item.back }}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        car_type:[
            {
            car_img:require('./../domestic/img/pic3 拷贝.png'),rent:'每日租金',car_name:'丰田汉兰达',
            hot:'热',type:'suv',displacement:'2.5自动',num:'5人',maney:245,Average:'元/日均',back:'自动取还'
            },
            {
            car_img:require('./../domestic/img/pic2@2x.png'),rent:'每日租金',car_name:'丰田汉兰达',
            hot:'热',type:'suv',displacement:'2.5自动',num:'5人',maney:245,Average:'元/日均',back:'自动取还'
            }],
        Freeride:[
            {
            car_img:require('./../domestic/img/pic3 拷贝.png'),rent:'每日租金',car_name:'丰田汉兰达',
            hot:'热',type:'suv',displacement:'2.5自动',num:'5人',maney:245,Average:'元/日均',back:'自动取还'
            },
            {
            car_img:require('./../domestic/img/pic2@2x.png'),rent:'每日租金',car_name:'丰田汉兰达',
            hot:'热',type:'suv',displacement:'2.5自动',num:'5人',maney:245,Average:'元/日均',back:'自动取还'
            }
        ]
     }
  },
  methods: {},
  components: {}
}
</script>

<style scoped lang='less'>
    .Recommend{
    h3{
      margin: .24rem 0 .24rem .31rem;
      font-size: .30rem;
      color: white;
    }
    ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow-y: auto;
      li{
        width: 3.30rem;
        background: white;
        position: relative;
        padding-bottom: .23rem;
        margin-left: .31rem;
        p{
          margin: 0;
        }
          img{
            width: 100%;
            font-size: 0;
          }
          .rent{
            position: absolute;
            right: 0;
            bottom: 2.1rem;
            display: block;
            width:1rem;
            height:.27rem;
            background:rgba(252,198,0,1);
            border-radius:.14rem 0 0 .14rem;
            font-size: .20rem;
            text-align: center;
            line-height: .24rem;
            padding: .04rem .06rem .04rem .10rem;
          }
        
        .name{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          .car_name{
            font-size: .28rem;
            margin-left:.11rem;
          }
          .hot{
            display: block;
            width:.28rem;
            height:.28rem;
            background:rgba(252,198,0,1);
            border-radius:.05rem;
            font-size: .20rem;
            text-align: center;
            line-height: .28rem;
            margin-right:.11rem;
          }
        }
        .details{
          display: flex;
          flex-direction: row;
          margin-top: .11rem;
          .type{
            font-size: .20rem;
            color: #999999;
            margin-left:.11rem;
          }
          .displacement{
            font-size: .20rem;
            color: #999999;
            margin-left: .25rem;
          }
          .num{
            font-size: .20rem;
            color: #999999;
            margin-left: .25rem;
          }
        }
        .sale{
          display: flex;
          flex-direction: row;
          align-items: center;
          position: relative;
          margin-top: .13rem;
          .maney{
            font-size: .36rem;
            color: #FF0000;
            margin-left:.11rem;
          }
          .Average{
             font-size: .29rem;
             color: #000000;
          }
          .back{
            display: block;
            width:1rem;
            height:.29rem;
            border:1px solid rgba(102,102,102,1);
            border-radius:.05rem;
            font-size: .20rem;
            text-align: center;
            line-height: .29rem;
            padding:.04rem .08rem .05rem .07rem;
            position: absolute;
            right: 0;
            margin-right:.11rem;
          }
        }
      }
    }
  }
</style>
