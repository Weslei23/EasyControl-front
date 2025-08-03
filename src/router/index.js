import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'

const routes = [
  { path: '/',  name: 'home', component: () => import('../views/homeView.vue')  },
  { path: '/employee', name: 'employee', component: () => import('../views/EmployeeView.vue') },
  { path: '/maintenance', name: 'maintenance', component: () => import('../views/MaintenanceView.vue')},
  { path: '/customer', name: 'customer', component: () => import('../views/CustomerView.vue') },
  { path: '/login', name: 'login', component: () => import('../views/LoginView.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router