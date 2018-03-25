<template>
  <div id = "app">
    <h3>豆瓣音乐动态页面仿写：</h3><a href = "https://fatty-fish.github.io/douban/douban.html">点我看看</a> 
    <h4>技术：</h4>html+css+jQuery+ajax; <h4>总结：</h4>用到flex布局，jQuery的animate动画和自制ajax函数获取数据；虽然写页面前，想好了要怎样浮动，怎样脱离层定位，但布局经验还不成熟，越到后面总想着补短，我应该要结合每一部分的功能效果来布局。flex很好用，我主要用在了ul标签上。js里我写了一个轮播图函数和制作页面里重复标签的函数，轮播图的运动主要依靠jQuery的animate函数。在搜索框获取豆瓣开源数据的是jQuery的$.ajax,本想用自己封装的ajax函数，但是受浏览器同源限制，又尝试用jsonp来跨域，但豆瓣方响应头并未允许。所以用到了jQuery封装的结合了jsonp的$.ajax。  
    <h3>计算器：</h3><a href = "https://fatty-fish.github.io/calculator/index.html">看看去</a>
    <h4>技术：</h4>html+css+js; <h4>总结：</h4>原生js代码实现计算，有点模块化开发的意识，所以很小的函数也分在了不同js文件。html和css需求很容易实现，难在计算，一直避免eval函数，所以不知道它的功能那么强大，实在憋的不行，发现大神用的eval轻松解决！但还是觉得自己的count函数就差一点，经过仔细推敲琢磨，研究报错和输出的数组，最后用简单的正则和递归终于实现了。  
    <h3>贪吃蛇游戏：</h3><a href="https://fatty-fish.github.io/snake/index.html">玩一下</a>
    <h4>技术：</h4>html+css+webpack+js; <h4>总结：</h4>每个吃到的食物会变成蛇身体数组的第一个元素，每次四个方向移动，蛇头会做出新改变，而后面的身体会向前占用，从而移动。思想很简单，但写代码遇到很多小bug；食物不能生长在蛇身上，所以每次生成食物都会for循环蛇数组元素判断是否相等，用到递归。最后用webpack打包，正逢webpack升级为4，打包过程曲折坎坷，最后勉强实现打包。为追求完美，还是换成了比较熟悉的webpack3打包，但是外部环境和文件夹环境是不同的webpack版本，折腾了半天反应过来，改好。
    <h3>租车预约微信小程序：</h3><a href = "https://github.com/Fatty-Fish/carrent">看一下</a>
    <h4>技术：</h4>WX-API+WX框架； <h4>总结：</h4>自己想的页面，不太漂亮。主要是加强了模块化开发，数据绑定，传输格式的意识，更加清楚生命周期。用easy-mock造了假数据，用WX的各大API在页面间切换抓取数据。预约页面造了个时间滚轮，供用户随意切换时间，主要利用数据绑定和日期函数，分年，月，日三项，互相牵制变化。通过使用微信小程序，更加了解Vue的一些思想。
    <h3>个人主页：</h3><a href = "/">就是这里</a> 
    <h4>技术：</h4>vue+es6+less+css3; <h4>总结：</h4>运用vue-cli命令行工具和webpack模板，自动构建了此项目：单页面，切换组件。更加理解模块化开发的思想，里面每个组件都是一个.vue文件，分为template/script/style三部分。还有一个整体的App.vue文件，是整个个人主页页面，通过router-view连接每个组件。思路很清晰，干净，开发简单（我写的也简单）。其中用到es6语法，也是更加快捷简单。less写样式，层级关系更分明，也是省略了很多代码，看得更加清楚。用以前写的css3动画，做了立体照片展示，还是动画炫酷。
    <h3>更多项目</h3><a href="https://github.com/Fatty-Fish">git仓库</a>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
  a {
    text-decoration:none;
    color: chocolate;
  }
</style>
