import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Search = () => import('views/search/Search')
const Order = () => import('views/order/Order')
const Profile = () => import('@/views/profile/Profile')

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
		path:'/search',
		component:Search
  },
  {
		path:'/order',
		component:Order
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
