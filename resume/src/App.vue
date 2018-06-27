<template>
  <div id="app">
    <div class = "top">
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
    </div>
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
    position:relative;
    margin:50px 50px;
    border-left:2px solid black;
    border-right:2px solid black;
    .top {
      padding:20px;
      display: flex;
      .motto {
        flex:1;
        height:100px;
        border: 1px solid gray;
        background:yellow;
        border-radius: 100px;
        overflow: hidden;
        padding: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .nav {
        flex:10;
        list-style: none;
        text-align: center;
        li {
          display: inline-block;
          height: 50px;
          width: 50px;
          font-size:18px;
          font-weight: bold;
          line-height: 50px;
          margin: 50px;
          cursor: pointer;
          text-align: center;
          color: black;
        }
        .active {
          color: red;
          border: 2px solid yellow;
          border-radius: 20%;
          box-shadow: 2px 2px 2px red;
          background-color: rgba(248, 252, 7, 0.849)
        }
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
      position:absolute;
      width:100%;
      padding-bottom:20px;
      border-bottom: 2px solid rgba(147, 150, 17, 0.849);
      text-indent:2em;
      background-color: rgba(221, 225, 0, 0.233);
    }
  }
}
</style>

