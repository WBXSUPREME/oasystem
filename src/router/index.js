import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/home', //首页
        name: 'home',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/HomePageContent/HomePageContentView.vue'
          )
      },
      {
        path: '/contract', //合同管理
        name: 'contract',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/HomePageContent/ContractView.vue'
          )
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login/LoginView.vue')
  },
  {
    path: '/changepassword',
    name: 'changepassword',
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/Login/ChangePassword.vue'
      )
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
