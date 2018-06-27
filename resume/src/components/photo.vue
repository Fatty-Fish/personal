<template>
<div>
  <div class = "wrapper">
	  <div class = "box">
      <div class = "demo"></div>
      <div class = "demo"></div>
      <div class = "demo">没了没了</div>
      <div class = "demo"></div>
      <div class = "demo"></div>
      <div class = "demo"></div>
	  </div>
  </div>
</div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.wrapper {
  position: relative;
  left:50%;
  transform: translateX(-50%);
  height: 600px;
  perspective: 2000px;
  .box {
    position: absolute;
    left: 300px;
    top: 150px;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    animation: moveTurn 6s infinite linear;
    &:hover {
      animation-play-state: paused;
    }
    .demo {
      position: absolute;
      width: 300px;
      height: 300px;
      font-size: 30px;
      color: white;
      line-height: 200px;
      text-align: center;
      &:nth-of-type(1) {
        background-image: url("../assets/achive.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: 0 0;
        transform: rotateX(0deg) translateZ(150px);
      }
      &:nth-of-type(2) {
        background-image: url("../assets/achive1.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: 0 0;
        transform: rotateX(90deg) translateZ(150px);
      }
      &:nth-of-type(3) {
        background: rgb(40, 193, 240);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: 0 0;
        transform: rotateY(180deg) translateZ(150px);
      }
      &:nth-of-type(4) {
        background-image: url("../assets/achive3.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: 0 0;
        transform: rotateX(-90deg) translateZ(150px);
      }
      &:nth-of-type(5) {
        background-image: url("../assets/achive2.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: 0 0;
        transform: rotateY(90deg) translateZ(150px);
      }
      &:nth-of-type(6) {
        background-image: url("../assets/achive4.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: 0 0;
        transform: rotateY(-90deg) translateZ(150px);
      }
    }
  }
}
@keyframes moveTurn {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
</style>
