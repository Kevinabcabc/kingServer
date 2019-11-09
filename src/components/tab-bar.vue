<template>
  <nav class="tab-bar border-top ">
      <router-link class="tab-item" v-for="item in tabList" :key="item.id" :to="item.path" @click="actionPic">
          <van-icon class="icon" :name="item.icon" />
          <span class="title" >{{item.title}}</span>
      </router-link>
  </nav>
</template>

<script>
export default {
    name:'tab-bar',
    data(){
        return {
            tabList:[
                {id: 1, path: '/home', title: '首页', icon: 'home-o'},
                {id: 2, path: '/borrow', title: '产品', icon: 'orders-o'},
                {id: 3, path: '/credit', title: '信用', icon:'balance-o'},
                {id: 4, path: '/mine', title: '我的', icon: 'user-o'},
            ]   
        }
    },
    methods:{
        actionPic(){

        }
    }
}
</script>

<style scoped lang='scss'  >
.tab-bar{
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 98px;
    overflow: hidden;
    .tab-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        text-align: center;
        .icon{
            font-size: 44px;
            margin-bottom: 10px;
        }
        .title{
            font-size: 20px;
        }
        &.router-link-active{
            color: #F8984E;
        }
    }
}
</style>