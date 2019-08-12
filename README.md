# Fin-mily
##  0.写在前面
这个就是我们前端的仓库啦，以后大家的代码往里面push就行。github有很多神秘操作，之后有缘安利给大家。

### 关于git
建议先看一遍廖雪峰老师的git教程，跟着做一遍，用时大概是2h左右～防止懵逼操作和merge别人代码。

推荐的可视化工具有：github桌面版/TortoiseGit/git kraken
git使用守则：（请务必记住）
1. push之前先pull一下。和远端保持同步，不然conflict（冲突）会很头痛。
2. 确认自己写的东西能跑再push。
3. 遇事不决，量子力学（划掉），去群里问问看。

### 技术栈说明
vue
element组件库
vuex 管理数据流
vue-cli的脚手架
……
以上均有中文官方文档，先看文档再百度（csdn有时候是坑你的）






## 1.项目说明

### 开始你的项目
1. git clone 之后进入根目录（就是readme在的目录）
```npm install```
2. 跑项目预览效果
```npm run serve```

### 简单的结构说明
可搜索“vue”项目结构，简书里有一篇讲的很清楚。

我们要修改的代码全部放在src文件夹下。

components：放组件，一个.vue是一个组件
view：放页面，页面文件已经建好了，<template>标签里是html的部分
assets：放静态资源（图片、css文件……）

其他文件暂时不需要修改～
