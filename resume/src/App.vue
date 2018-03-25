<template>
  <div id="app">
    <div class = "motto">
      <img src="./assets/motto.jpg">
    </div>
    <ul class  ="nav">
      <router-link :to = "item.path" tag = "li" v-for="(item, index) in page" :key = "index">{{item.name}}</router-link>
    </ul>

    <router-view class = "router"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: [
        { name: "主页", path: "/" },
        { name: "教育", path: "/education" },
        { name: "技能", path: "/skills" },
        { name: "项目", path: "/projectExperiences" },
        { name: "idea", path: "/objective" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  #app {
    margin: 0 10px;
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
    .router {
      margin-top: 400px;
      margin-bottom: 50px;
    }
  }
}
</style>

