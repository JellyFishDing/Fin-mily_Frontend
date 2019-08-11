<template>
<div id='indexList'>
    <router-link to="/mainpage">主页</router-link>
    <h3>发现</h3>
        <router-link to="/exploration/finance">金融知识文章列表</router-link>
        <router-link to="/exploration/finance/notname">金融知识文章1</router-link>
     <h3>我的资产</h3>
        <router-link to="/property/overview">总资产概况</router-link>
    <h3>个人中心</h3>
        <router-link to="/ucenter/favourites">收藏</router-link>
</div>
</template>

<script>
export default {
      name:'Index'
}
</script>