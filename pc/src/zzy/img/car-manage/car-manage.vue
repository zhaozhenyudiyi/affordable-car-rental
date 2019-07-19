
<template>
  <div class="car-manage">
    <header></header>
    <div class="main">
      <aside></aside>
      <article>
        <div class="search">
          <input type="search" />
          <button @click="btnClick">查询车辆</button>
        </div>
        <div class="massage">
          <nav>
            <ul>
              <li v-for="(item,index) in list.car_nav_list" :key="index">{{item}}</li>
            </ul>
          </nav>
          <ul class="car_massage">
            <li
              v-for="(item,index) in list.car_massage_list"
              :key="index"
              @click="fn(index)"
              :class="{active:isactive==index}"
            >
              <p>
                <img :src="item.photo_url" alt />
              </p>
              <p>{{item.name}}</p>
              <p>{{item.tel}}</p>
              <p>{{item.foul_play}}</p>
            </li>
          </ul>
        </div>
        <div class="num-list">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="5"
            background
            layout="prev, pager, next"
            :total="50"
          ></el-pagination>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: "",
      isactive: "",
      currentPage: 1,
      pagesize: 5
    };
  },
  mounted() {
    this.axios
      .get("../../../static/js/car-manage.json")
      .then(res => {
        console.log(res.data);
        this.list = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    fn(index) {
      this.isactive = index;
    },
    btnClick() {
      this.$router.replace("/car-use");
    },
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    currentChangePage(list, currentPage) {
      let from = (currentPage - 1) * this.pageSize;
      let to = currentPage * this.pageSize;
      this.tempList = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tempList.push(list[from]);
        }
      }
    },
     openData() {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.handleCurrentChange(this.currentPage);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      //需要判断是否检索
      if (!this.flag) {
        this.currentChangePage(this.tableDataEnd);
      } else {
        this.currentChangePage(this.filterTableDataEnd);
      }
    }, //组件自带监控当前页码
    currentChangePage(list) {
      let from = (this.currentPage - 1) * this.pageSize;
      let to = this.currentPage * this.pageSize;
      this.tableDataEnd = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tableDataEnd.push(list[from]);
        }
      }
    }
  },

  components: {}
};
</script>

<style scoped lang=less>
.car-manage {
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* overflow-y: auto; */
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 100px;
    background-color: #2d3647;
  }
  .main {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: row;
    aside {
      width: 210px;
      height: 100%;
      background-color: #3b4255;
    }
    article {
      flex: 1;
      .search {
        width: 100%;
        input {
          width: 60%;
          height: 62px;
          margin: 40px 48px;
          margin-right: 30px;
          border: 1px solid #999;
          border-radius: 10px;
          font-size: 25px;
          padding: 0 10px;
          outline: none;
        }
        button {
          width: 157px;
          height: 62px;
          border: 1px solid #999;
          border-radius: 10px;
          background-color: #ffc600;
          font-size: 24px;
          color: #fff;
          outline: none;
        }
      }
      .massage {
        margin: 0px 49px;
        height:554px;
        overflow: hidden;
        nav {
          width: 100%;
          height: 54px;
          background-color: #ccc;
          /* border: 1px solid #999; */
          ul {
            display: flex;
            list-style: none;
            li {
              flex: 1;
              text-align: center;
              line-height: 54px;
              font-size: 18px;
            }
          }
        }
        .car_massage {
          list-style: none;
          li {
            height: 100px;
            font-size: 15px;
            display: flex;
            text-align: center;
            align-items: center;
            border: 2px solod #fff;
            p {
              flex: 1;
              img {
                width: 171px;
                height: 95px;
              }
            }
          }
          .active {
            background-color: rgb(248, 248, 245);
          }
        }
      }
      .num-list {
        display: flex;
        justify-content: center;
        margin-top: 10px;
      }
    }
  }
}
</style>
