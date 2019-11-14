<template>
  <van-popup class="box" round :style="{ height: '20%' ,width:'80%'}" v-model="show">
    <h3>登陆失败</h3>

    <span>密码错误，重置密码？</span>
    <p class="Actions">
      <span @click="cancleAction">残忍离开</span>
      <span class="middle">|</span>
      <span class="right" @click="comfirmAction">重置密码</span>
    </p>
  </van-popup>
</template>

<script>
import { Popup } from "vant";
export default {
  components: {
    "van-popup": Popup
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    //  取消按钮

    cancleAction() {
      this.show = false;
    },

    //  确认按钮

    comfirmAction() {
      this.$router.push('/resetPassword')
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  text-align: center;
  font-size: 30px;
  box-sizing: border-box;
  color: #333;

  h3 {
    font-weight: 600;
    padding: 30px;
  }

  span {
    display: inline-block;
    font-size: 26px;
    color: #999;
    padding-top: 20px;
    padding-bottom: 42px;
  }
  .Actions {

      display: flex;
      justify-content: space-around;
    span {
      color: #333;
        &.middle{
            color: #999;
        }
        &.right{
            color: #FC9C35;
        }
    }
  }
}
</style>