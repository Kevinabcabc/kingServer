<template>
<div class="page" id="home">
  <app-header title="首页"></app-header>
  <app-scroll class="content">
    <banner :list="bannerList"/>
    <template v-for="data in goodsList">
      <list :key="data.name" :data="data"/>
    </template>
    
  </app-scroll>
</div>
</template>

<script>
import homeService from '../../../services/homeService'
import banner from './children/banner'
import list from './children/goods-list'
export default {
  components: {
    banner,
    list
  },
  data(){
    return {
      bannerList: [],
      goodsList: []
    }
  },
  methods: {
    async initData(){
      // 请求初始化数据
      const {bannerData, goodsData} = await homeService.requestGoodsListData();
      this.bannerList = bannerData;
      this.goodsList = goodsData;
    }
  },
  created(){
    this.initData();
   

  }
}
</script>

<style>

</style> 