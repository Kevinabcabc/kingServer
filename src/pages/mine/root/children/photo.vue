<template>
  <div class="photo">
    <div class="img">
      <img :src="imgData" alt ref="userImg" />
      <van-uploader :after-read="afterRead" class="loader" />
    </div>
    <span v-if="isLogin==1" @click="logOutAction" >{{name}}</span>
    <span v-else @click="loginAction">点击登录</span>
  </div>
</template>

<script>
import { Uploader } from "vant";
import { log } from "util";
export default {
  // data(){
  //     return {
  //         imgData:""
  //     }
  // },

  components: {
    [Uploader.name]: Uploader
  },
  computed: {
    imgData() {
      return this.$store.state.kevin.img
        ? this.$store.state.kevin.img
        : "../../../../assets/tx.png";
    },
     isLogin() {
      return this.$store.state.kevin.isLogin;
    },
     name() {
       return this.$store.state.kevin.username?this.$store.state.kevin.username:"无名的新手";
      //  if(this.usrename){
      //    console.log(this.usrename);
         
      //    return this.usrename
      //  }
      // return "无名的新手"
    }
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.$store.commit("kevin/upLoadImg", file.content);
    },
    loginAction() {
      this.$router.push("/login");
    },
    logOutAction(){
      this.$parent.show = true;
      // console.log(this.$parent);
      
    }
  }
};
</script>

<style lang='scss' scoped>
.photo {
  display: flex;
  height: 98px;
  width: 100%;
  .img {
    position: relative;
    height: 98px;
    width: 98px;
    background: url(../../../../assets/tx.png);
    background-size: cover;
    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
    .loader {
      opacity: 0;
    }
  }
  span {
    color: #333;
    font-size: 28px;
    line-height: 98px;
    padding-left: 30px;
  }
}
</style>