<template>
  <div>
    <ul>
      <li @click="fn" v-for="(value,index) in dam" :key="index">
        <p>
          {{value.name}}门店
          <span>{{value.m}}km</span>
        </p>
        <div>{{value.dz}}</div>
      </li>
     
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      da:[],
      dam:[],
      site: [
        "附近门店",
        "金水区",
        "城管区",
        "二七区",
        "中原区",
        "惠济区",
        "高新区",
        "郑东新区",
        "龙湖区",
        "经开区",
        "航空港区"
      ],
    };
  },
  methods: {
    fn() {
      this.$router.push("/StoreDetails");
    }
  },
  components: {},
  mounted() {
    let num = 2;
    this
    .axios.get('../../../../static/md.json')
    .then(ae=>{ 
      for(let i = 0;ae.data.length;i++){
        if(ae.data[i].dz.indexOf(this.site[num]) != -1){
          this.dam.push(ae.data[i])
      console.log(i)
        }
      }
      // this.dam = ae.data
    })
    ;
  }
};
</script>

<style scoped lang='less'>
p {
  margin: 0;
}
ul {
  background-color: rgba(255, 255, 255, 0.4);
  color: #fff;
  width: 5.22rem;
  height: 100%;
  float: left;
  margin-left: 2.27rem;
  li {
    padding: 0.23rem 0.34rem 0.21rem 0.24rem;
    border-bottom: 1px solid #ededed;
    p {
      font-size: 0.26rem;
      span {
        font-size: 0.24rem;
        float: right;
      }
    }
    div {
      margin-top: 0.21rem;
      width: 3.43rem;
      font-size: 0.2rem;
    }
  }
}
</style>
