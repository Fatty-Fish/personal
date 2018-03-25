<template>
  <div>
    <div class="wrapper">
        <div class="box">
            <div class="demo">养老院唱歌</div>
            <div class="demo">我们班级</div>
            <div class="demo">肯德基兼职</div>
            <div class="demo">高中和姐姐约</div>
            <div class="demo">老妈在老家</div>
            <div class="demo">室友加小七</div>
        </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
    .wrapper {
            position: absolute;
            left:30%;
            width: 400px;
            height: 400px;
            /*border:1px solid black;*/
            perspective: 2000px;
        }
        
        .box {
            position: absolute;
            left: 100px;
            top: 100px;
            width: 200px;
            height: 200px;
            transform-style: preserve-3d;
            animation: moveTurn 6s infinite linear;
        }
        
        .box:hover {
            animation-play-state: paused;
        }
        
        .demo {
            position: absolute;
            width: 200px;
            height: 200px;
            opacity: 0.6;
            font-size: 30px;
            color: white;
            line-height: 200px;
            text-align: center;
            backface-visibility: hidden;
        }
        
        .demo:nth-of-type(1) {
            background-image: url("../assets/life.jpg");
            background-size: 200px 200px;
            transform: rotateY(0deg) translateZ(173px);
        }
        
        .demo:nth-of-type(2) {
            background-image: url("../assets/life1.jpg");
            background-size: 200px 200px;
            transform: rotateY(60deg) translateZ(173px);
        }
        
        .demo:nth-of-type(3) {
            background-image: url("../assets/life2.jpg");
            background-size: 200px 200px;
            transform: rotateY(120deg) translateZ(173px);
        }
        
        .demo:nth-of-type(4) {
            background-image: url("../assets/life3.jpg");
            background-size: 200px 200px;
            transform: rotateY(180deg) translateZ(173px);
        }
        
        .demo:nth-of-type(5) {
            background-image: url("../assets/life4.jpg");           
            background-size: 200px 200px;
            transform: rotateY(-60deg) translateZ(173px);
        }
        
        .demo:nth-of-type(6) {
            background-image: url("../assets/life5.jpg");
            background-size: 200px 200px;
            transform: rotateY(-120deg) translateZ(173px);
        }
        
        @keyframes moveTurn {
            0% {
                transform: rotateY(0deg);
            }
            100% {
                transform: rotateY(360deg);
            }
        }

</style>

