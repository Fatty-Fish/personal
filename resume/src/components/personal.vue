<template>
  <div class= "person">
    <p class = "point">权静的主页</p>
    <p>年龄：21岁</p>
    <p>星座：天蝎座</p>
    <p>电话：188-0462-2892</p>
    <p>e-mail: qjfish1997@163.com 或者 2949763766@qq.com</p>
    <p>github:<a href = "https://github.com/Fatty-Fish"> https://github.com/Fatty-Fish</a></p>
    <p>blog:<a href = "https://fishqj.com"> https://fishqj.com</a></p>
    <router-link to = "/life" class = "more">点击了解权静</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
* {
    text-decoration:none;
    .person {
      .point {
        font-weight:bold;
      }
      .more {
        display: inline-block;
        width: 200px;
        height:60px;
        text-indent:0;
        text-align:center;
        margin-bottom:5px;
        line-height:60px;
        border: 1px solid yellow;
        background: yellow;
        color: red;
        border-radius: 50%;
      }
    }
}
</style>
