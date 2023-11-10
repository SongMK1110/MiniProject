import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      component: () => import(/* webpackChunkName: "product" */ '../views/ProductView.vue')
    },
    {
      path: '/loginForm',
      name: 'loginForm',
      component: () => import(/* webpackChunkName: "loginForm" */ '../views/LoginView.vue')
    },
    {
      path: '/signForm',
      name: 'signForm',
      component: () => import(/* webpackChunkName: "signForm" */ '../views/SignView.vue')
    },
    {
      path: '/productDetail',
      name: 'productDetailView',
      component: () =>
        import(/* webpackChunkName: "productDetailView" */ '../views/ProductDetailView.vue')
    },
    {
      path: '/cartForm',
      name: 'CartView',
      component: () => import(/* webpackChunkName: "CartForm" */ '../views/CartView.vue')
    },
    {
      path: '/likeForm',
      name: 'LikeView',
      component: () => import(/* webpackChunkName: "LikeView" */ '../views/LikeView.vue')
    },
    {
      path: '/orderForm',
      name: 'OrderView',
      component: () => import(/* webpackChunkName: "OrderView" */ '../views/OrderView.vue')
    },
    {
      path: '/orderList',
      name: 'OrderListView',
      component: () => import(/* webpackChunkName: "OrderListView" */ '../views/OrderListView.vue')
    },
    {
      path: '/reviewForm',
      name: 'ReviewView',
      component: () => import(/* webpackChunkName: "ReviewView" */ '../views/ReviewView.vue')
    },
    {
      path: '/orderDetail',
      name: 'OrderDetailView',
      component: () =>
        import(/* webpackChunkName: "OrderDetailView" */ '../views/OrderDetailView.vue')
    },
    {
      path: '/mypage',
      name: 'MyPageView',
      component: () => import(/* webpackChunkName: "MyPageView" */ '../views/MyPageView.vue')
    },
    {
      path: '/searchForm',
      name: 'SearchView',
      component: () => import(/* webpackChunkName: "SearchView" */ '../views/SearchView.vue')
    },
    {
      path: '/errorForm',
      name: 'ErrorView',
      component: () => import(/* webpackChunkName: "ErrorView" */ '../views/ErrorView.vue')
    }

    // {
    //   path: '/logout',
    //   name: 'logout',
    //   component: {
    //     beforeRouteEnter(to, from, next) {
    //       // 로그아웃 처리 로직을 작성합니다.
    //       // 예를 들어, 로컬 스토리지에서 토큰을 삭제하고 로그인 페이지로 리다이렉트하는 코드
    //       localStorage.removeItem('token') // 토큰 삭제
    //       next('/loginForm') // 로그인 페이지로 리다이렉트
    //     }
    //   }
    // }
  ]
})

export default router
