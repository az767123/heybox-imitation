import Vue from "vue"
import Router from "vue-router"

const Home = () => import("views/home/home")
const homeFollow = () => import("views/home/homeFollow")
const Games = () => import("views/games/games")
const Community = () => import("views/community/community")
const Profile = () => import("views/profile/profile")

Vue.use(Router)

const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home,
    meta:{
      title:"首页"
    },
    children:[
      {
        path:"follow",
        component:homeFollow
      }
    ]

  },
  {
    path:"/games",
    component:Games,
    meta:{
      title:"游戏"
    }
  },
  {
    path:"/community",
    component:Community,
    meta:{
      title:"社区"
    }
  },
  {
    path:"/profile",
    component:Profile,
    meta:{
      title:"我的"
    }
  },
]

const router = new Router({
  routes,
  mode:"history"

})
  //全局导航守卫 使标题的名字等于底部导航栏对应
router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router