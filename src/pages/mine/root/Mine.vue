<template>
  <div>
    <div class="page" id="mine">
      <photo />
      <!-- <button @click="Action">dakai</button> -->
    </div>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition>

    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->

    <van-popup position="bottom" round :style="{ height: '16%' }" v-model="show">
      <p class="bottom">分享</p>
      <p class="bottom" @click="changeNameAction">修改用户名</p>
      <p class="bottom" @click="logOutAction">退出登陆</p>
    </van-popup>

    <van-popup round :style="{ height: '20%' ,width:'80%'}" v-model="showInput">
      
      <input class="inputBox" type="text" ref="username" placeholder="输入新的用户名">

      <p class="Actions"> <span @click="cancleAction">取消</span> <span @click="comfirmAction">确认</span></p>

    </van-popup>
  </div>
</template>

<script>
import photo from "./children/photo";
import { Popup, Cell } from "vant";
export default {
  data() {
    return {
      show: false,
      showInput:false,
    };
  },
  components: {
    photo,
    "van-popup": Popup,
  },
  methods: {
    Action() {
      this.$router.push("/mine/collect");
    },
    showPopup() {
      this.show = true;
    },
    logOutAction() {
      this.$store.dispatch("kevin/logOutAction");
      this.show = false;
    },
    changeNameAction() {
      this.showInput=true;
      this.show=false;
    },
    cancleAction(){
      this.showInput=false;
    },
    comfirmAction(){
      this.$store.state.kevin.username =  this.$refs.username.value
      this.showInput=false;
      
    }
  }
};
</script>

<style lang="scss" scoped>
#mine {
  background: #f7f7f7;
  box-sizing: border-box;
  padding: 30px;
}

.inputBox{
  display: block;
  margin: 50px auto;
  line-height: 60px;
  height: 60px;
  width: 80%;
  font-size: 30px;
  border: none;
  border-bottom: 1px solid #ddd;
}
.Actions{
  display: flex;
  justify-content: space-around;
  font-size: 28px;
}
@keyframes slideInRight {
  0% {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translateZ(0);
  }
}
@keyframes slideOutRight {
  0% {
    transform: translateZ(0);
  }
  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
}

.slideInRight {
  animation-name: slideInRight;
}
.slideOutRight {
  animation-name: slideOutRight;
}
.slideOutRight,
.slideInRight {
  animation-duration: 200ms;
}
.bottom {
  line-height: 70px;
  font-size: 30px;
  text-align: center;
}
</style>