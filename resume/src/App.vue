<template>
  <div id="app">
    <div class = "motto">
      <img src="./assets/motto.jpg">
    </div>
    <ul class  ="nav">
      <router-link to = "/" tag = "li">主页</router-link>
      <router-link to = "/education" tag = "li">教育</router-link>
      <router-link to = "/skills" tag = "li">技能</router-link>
      <router-link to = "/projectExperiences" tag = "li">项目</router-link>
      <router-link to = "/objective" tag = "li">idea</router-link>
    </ul>
    <transition :name = "direction">
    <router-view class = "router"></router-view>      
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      direction: "left"
    };
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.meta.index;
      const fromDepth = from.meta.index;
      this.direction = toDepth < fromDepth ? 'right' : 'left'
    }
  }
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  #app {
    // margin: 0 200px;
    .motto {
      position: absolute;
      top: 23%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid gray;
      background:dimgray;
      border-radius: 100px;
      overflow: hidden;
      padding: 20px;
      width: 200px;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nav {
      position: absolute;
      list-style: none;
      text-align: center;
      width: 100%;
      height:100px;
      top:50%;
      left: 50%;
      transform: translate(-50%, -50%);
      li {
        display: inline-block;
        height: 50px;
        width: 50px;
        line-height: 50px;
        margin: 10px;
        cursor: pointer;
        text-align: center;
        color: black;
      }
      .active {
        color: red;
      }
    }
    .left-enter {
      opacity: 0;
      transform: translateX(-100%)
    }
    .left-enter-active {
      transition:1000ms;
    }
    .left-enter-to{
      opacity: 1;
      transform: translateX(0)
    }
    .left-leave {
      opacity: 1;
      transform: translateX(0)
    }
    .left-leave-active {
      transition:1000ms;
    }
    .left-leave-to{
      opacity: 0;
      transform: translateX(100%)
    }
    .right-enter {
      opacity: 0;
      transform: translateX(100%)
    }
    .right-enter-active {
      transition:1000ms;
    }
    .right-enter-to{
      opacity: 1;
      transform: translateX(0)
    }
    .right-leave {
      opacity: 1;
      transform: translateX(0)
    }
    .right-leave-active {
      transition:1000ms;
    }
    .right-leave-to{
      opacity: 0;
      transform: translateX(-100%)
    }
    .router {
      // margin-top: 400px;
      position:absolute;
      top:400px;
      margin: 0px 50px 50px 50px;
    }
  }
}
</style>

