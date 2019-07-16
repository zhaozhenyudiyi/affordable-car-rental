<template>
  <section>
    <div class="hea">
      <div @click="fn">
        <router-link :to="{name: 'Member'}">
          <p :class="member?'p':''">会员充值</p>
        </router-link>
      </div>
      <div @click="fn2">
        <router-link :to="{name: 'enquiries'}">
          <p :class="member?'':'p'">会员查询</p>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  data() {
    return {
      member: false
    };
  },
  methods: {
    fn() {
      if (this.member == false) {
        this.member = true;
      } else {
        return;
      }
    },
    fn2() {
      if (this.member == true) {
        this.member = false;
      } else {
        this.member = true;
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
section {
  width: 100%;
  font-size: 0;
  display: flex;
  flex-direction: column;
  .hea {
    width: 100%;
    height: 94px;
    border: 1px solid #e8e8e8;
    display: flex;
    align-items: flex-end;
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        flex: 1;
        display: flex;
        p {
          width: 100px;
          font-size: 24px;
          font-family: SourceHanSansCN-Regular;
          font-weight: 400;
          line-height: 14px;
          margin-left: 51px;
          padding-bottom: 26px;
        }
      }
    }
    .p {
      color: rgba(255, 198, 0, 1);
      border-bottom: 4px solid #ffc600;
    }
  }
}
</style>
