<template>
<div id="app">
  <router-view></router-view>
  <tab-bar></tab-bar>
</div>
</template>

<script>
import TabBar from './components/tab-bar'
export default {
  components: {
    [TabBar.name]: TabBar
  }
}
</script>

<style lang="scss">
.page{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 49px;
  width: 100%;
  .content{
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 0;
    width: 100%;
  }
}
</style>



