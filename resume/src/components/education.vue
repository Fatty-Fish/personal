<template>
<div>就读于哈理工英语专业，证书展示：校三好学生，校优秀团员，多次获得三等奖学金，（曾经？）擅长长跑，长跑女子3000米第五名，英语口译三等奖，专四四六级裸考过，喜欢参加志愿活动。还有一些小奖：)低调忽略
    <router-link to = "/education/photo" class = "link">photo</router-link>    
    <router-view></router-view>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.link {
  font-size: 25px;
  font-weight: 200;
  color: chocolate;
}
</style>
