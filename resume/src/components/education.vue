<template>
<div>
  <p>
    初高中~四川省宜宾市第六中学校
  </p>
  <p>
  大学就读于哈尔滨理工大学英语专业。
  <p>证书展示：校三好学生，校优秀团员，多次获得三等奖学金，校级奖学金。
  长跑女子3000米第五名，英语口译三等奖，专四四六级证书。</p>
  <p>参加过很多志愿活动。喜欢运动，会羽毛球，乒乓球，排球。 </p>   
    <router-link to = "/education/photo" class = "link">photos</router-link>    
    <router-view></router-view>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.link {
  display: inline-block;
  text-align:center;
  text-indent:0;
  border: 2px solid rgb(248, 20, 31);
  background:rgb(248, 162, 3);
  font-size: 25px;
  font-weight: 200;
  text-decoration:none;
  margin-left:30px;
  margin-bottom:10px;
  color:rgba(151, 149, 19, 0.829);
}
</style>
