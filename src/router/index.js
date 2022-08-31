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
      },
      //基础配置下用户管理页面
      {
        path: '/user',
        name: 'user',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/BasicConfiguration/UserView.vue'
          )
      },
			{
        path: '/roles',
        name: 'roles',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/BasicConfiguration/RolesView.vue'
          )
      }
			,
			{
        path: '/authority',//权限管理
        name: 'authority',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/BasicConfiguration/AuthorityView.vue'
          )
      }
			,
			{
        path: '/menus',//
        name: 'menus',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/BasicConfiguration/MenusView.vue'
          )
      }
			,
			{
        path: '/rank',//
        name: 'rank',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/BasicConfiguration/RankView.vue'
          )
      }
			,
			{
        path: '/job',//岗位管理
        name: 'job',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/BasicConfiguration/JobView.vue'
          )
      }
			,
			{
        path: '/oper',//操作日志
        name: 'oper',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/BasicConfiguration/OperView.vue'
          )
      }
			,
			{
        path: '/login-oper',//操作日志
        name: '/login-oper',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/BasicConfiguration/LoginOperView.vue'
          )
      }
			,
			{
        path: '/divisional',//操作日志
        name: '/divisional',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/BasicConfiguration/DivisionalView.vue'
          )
      },

			//配置工作流
			{
        path: '/approval',//操作日志
        name: '/approval',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/ConfiguringTheWorkflow/ApprovalView.vue'
          )
      },
			{
        path: '/approval-types',//操作日志
        name: '/approval-types',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/ConfiguringTheWorkflow/ApprovalTypesView.vue'
          )
      },


			//材料管理
			{
        path: '/material-ment',//操作日志
        name: '/material-ment',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/MaterialManagement/MaterialMentView.vue'
          )
      },



			//企业通讯
			{
        path: '/firm-comm',//
        name: '/firm-comm',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/CorporateCommunications/FirmCommView.vue'
          )
      },
			{
        path: '/lary-sheet',//
        name: '/lary-sheet',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/CorporateCommunications/LarySheetView.vue'
          )
      },


			//OA审批
			{
        path: '/backlog',//
        name: '/backlog',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/OAapproval/BacklogView.vue'
          )
      },
			{
        path: '/finished',//
        name: '/finished',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/OAapproval/FinishedView.vue'
          )
      },
			{
        path: '/started',//
        name: '/started',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/OAapproval/StartedView.vue'
          )
      },
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
