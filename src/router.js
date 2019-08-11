import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index.vue'
import MainPage from './views/mainpage/MainPage.vue'
import Exploration from './views/exploration/Exploration.vue'
import ArticleList from './views/exploration/ArticleList.vue'
import Article from './views/exploration/Article.vue'

import Property from  './views/myproperty/Property.vue'
import AssertOverview from './views/myproperty/AssertOverview.vue'

import Ucenter from './views/ucenter/Ucenter.vue'
import Favourites from './views/ucenter/Favourites.vue'

// const Exploration= {
//   template: `
//     <div class="exp">
//     <h1>总资产概况</h1>
//       <router-view/>
//     </div>
//   `
// }


Vue.use(Router)



export default new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:Index
    },
    //主页,暂时把根目录留给索引吧
    {    
      path:'/mainpage',
      name:'mainpage',
      component:MainPage
    },
    //发现
    {
      path:'/exploration',
      name:'exploration',
      component:Exploration,
      children:[
        {
          path:':tag',
          component:ArticleList
        },
        {
          //文章重名
          path:':tag/:name',
          component:Article
        }
      ]
    },
    //我的资产
    {
      path:'/property',
      name:'property',
      component:Property,
      children:[
        {
          path:'overview',
          component:AssertOverview
        }
      ]
    },
    {
      path:'/ucenter',
      name:'ucenter',
      component:Ucenter,
      children:[
        {
          path:'/favourites',
          component:Favourites
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/aboutus/About.vue')
    }
  ]
})
