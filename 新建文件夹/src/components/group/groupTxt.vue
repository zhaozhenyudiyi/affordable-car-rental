
<template>
  <ul class="groupTxt">
    <li v-for="(item,index) in list" :key="index">
         <h3>{{item.title}}</h3>
      <ul class='group_m'>
        <li v-for='(items,index) in item.group_list' :key="index">
          <div class='group_m_txt'>
            <img :src="items.img_url" alt />
            <p>{{items.group_name}}</p>
            <span>{{items.group_member}}</span>
          </div>
          <p>{{items.topic_title}}</p>
        </li>
      </ul>
      <p>更多相关小组</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {},
  components: {},
  mounted() {
    this.$axios
      .get("./../../../static/js/groupData.json")
      .then(res => {
        console.log(res);
        this.list = res.data.group;
        console.log(this.list);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped lang='less'>
.groupTxt{
    width:100%;
    font-size:.15rem;
    text-align: left;
    padding-left:.2rem;
    padding-bottom:.4rem;
    li{
         padding-bottom:.3rem;
        h3{
         font-size:.2rem;
         padding:.1rem 0;
         color:#000;
        }
        p{
            text-align: center;
            color:green;
            padding:.05rem 0;
        }
        .group_m{
            li{
                padding-bottom:.1rem;
                 border-bottom:1px solid #ccc;
              .group_m_txt{
                display: flex;
                align-items: center;
                position:relative;
                padding:.1rem 0;
               
                 img{
                     width:.5rem;
                     height:.5rem;
                    //  border:1px solid #ccc;
                   
                 }
                 p{
                   margin-left:.1rem;
                   color:#000; 
                 }
                 span{
                  color:#ccc;
                 position:absolute;
                 right:.1rem;
                 }
              }
              p{
               color:#999;
              }
            }
        }
    }
    li:last-of-type ul li:last-of-type{
        border-bottom:none;
    }

}
</style><template>
  <ul class="groupTxt">
    <li v-for="(item,index) in list" :key="index">
         <h3>{{item.title}}</h3>
      <ul class='group_m'>
        <li v-for='(items,index) in item.group_list' :key="index">
          <div class='group_m_txt'>
            <img :src="items.img_url" alt />
            <p>{{items.group_name}}</p>
            <span>{{items.group_member}}</span>
          </div>
          <p>{{items.topic_title}}</p>
        </li>
      </ul>
      <p>更多相关小组</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {},
  components: {},
  mounted() {
    this.$axios
      .get("./../../../static/js/groupData.json")
      .then(res => {
        console.log(res);
        this.list = res.data.group;
        console.log(this.list);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped lang='less'>
.groupTxt{
    width:100%;
    font-size:.15rem;
    text-align: left;
    padding-left:.2rem;
    padding-bottom:.4rem;
    li{
         padding-bottom:.3rem;
        h3{
         font-size:.2rem;
         padding:.1rem 0;
         color:#000;
        }
        p{
            text-align: center;
            color:green;
            padding:.05rem 0;
        }
        .group_m{
            li{
                padding-bottom:.1rem;
                 border-bottom:1px solid #ccc;
              .group_m_txt{
                display: flex;
                align-items: center;
                position:relative;
                padding:.1rem 0;
               
                 img{
                     width:.5rem;
                     height:.5rem;
                    //  border:1px solid #ccc;
                   
                 }
                 p{
                   margin-left:.1rem;
                   color:#000; 
                 }
                 span{
                  color:#ccc;
                 position:absolute;
                 right:.1rem;
                 }
              }
              p{
               color:#999;
              }
            }
        }
    }
    li:last-of-type ul li:last-of-type{
        border-bottom:none;
    }

}
</style>

