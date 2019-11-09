<template>
<div class="app-scroll" ref="scroll">
  <div class="scoll-wrap">
    <slot/>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'app-scroll',
  mounted(){
    this.scroll = new BScroll(this.$refs.scroll, {
      tap: true,
      click: true
    });
    this.scroll.on('beforeScrollStart', ()=>{
      this.scroll.refresh();
    });
  }
};
</script>

<style scoped>
.app-scroll{
  overflow: hidden;
}
</style>