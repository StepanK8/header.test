import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/advantages',
    name: 'advantages',
    meta: {
        title: 'Преимущества Tele2',
    },  
    component: () =>
      import(/* webpackChunkName: "form" */ '@/views/MainView.vue'),
  },
  {
    path: '/tariffs',
    name: 'tariffs',
    meta: {
        title: 'Тарифы',
    },  
    component: () =>
      import(/* webpackChunkName: "form" */ '@/views/MainView.vue'),
  },
  {
    path: '/promotions',
    name: 'promotions',
    meta: {
        title: 'Акции и спецпредложения',
    },  
    component: () =>
      import(/* webpackChunkName: "form" */ '@/views/MainView.vue'),
  },
  {
    path: '/prom',
    name: 'prom',
    meta: {
        title: 'Промотариф Tele2',
    },  
    component: () =>
      import(/* webpackChunkName: "form" */ '@/views/MainView.vue'),
  },
  {
    path: '/eSIM',
    name: 'eSIM',
    meta: {
        title: 'Технология eSIM',
    },  
    component: () =>
      import(/* webpackChunkName: "form" */ '@/views/MainView.vue'),
  },
  {
    path: '/new-subscriber',
    name: 'home',
    meta: {
        title: 'Подключение нового абонента',
    },  
    component: () =>
      import(/* webpackChunkName: "form" */ '@/views/MainView.vue'),
  },
]




export default createRouter({
  history: createWebHistory(),
  routes: routes,
})
