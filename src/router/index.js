import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/home')
const Category = () => import('@/views/category')
const ShopCar = () => import('@/views/shopCar')
const Profile = () => import('@/views/profile')

const routes = [
  {
		path: '/',
		redirect:'/home'
  },
  {
		path:'/home',
		component:Home
  },
  {
		path:'/category',
		component:Category
  },
  {
		path:'/shopCar',
		component:ShopCar
  },
  {
		path:'/profile',
		component:Profile
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
