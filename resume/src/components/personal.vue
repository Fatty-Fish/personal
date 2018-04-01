<template>
  <div>
    <p class = "point">姓名：权静</p>
    <p>年龄：22岁</p>
    <p>星座：天蝎座</p>
    <p>电话：188-0462-2892</p>
    <p>e-mail: 18804622892@163.com 或者 2949763766@qq.com</p>
    <p>github:<a href = "https://github.com/Fatty-Fish"> https://github.com/Fatty-Fish</a></p>
    <p>blog:<a href = "https://fatty-fish.github.io/"> https://fatty-fish.github.io/</a></p>
    来个生活展示：<router-link to = "/life" class = "point">click me</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.point {
  font-size: 25px;
  font-weight: 200;
  color: chocolate;
}
</style>
