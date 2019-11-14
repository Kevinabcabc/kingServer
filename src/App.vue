<template>
  <div>
    <div id="app">
      <router-view></router-view>
      <tab-bar></tab-bar>
    </div>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view name="login"></router-view>
    </transition>
  </div>
</template>

<script>
import TabBar from "./components/tab-bar";
export default {
  components: {
    [TabBar.name]: TabBar
  }
};
</script>

<style lang="scss">
#app {
  height: 100px;
}
.page {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 98px;
  width: 100%;
  .content {
    position: absolute;
    top: 0px;
    left: 0;
    bottom: 0;
    width: 100%;
  }
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
</style>



