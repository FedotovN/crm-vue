import { createRouter, createWebHistory } from "vue-router";
import { auth } from '@/firebase/config'
const routes = [
  {
    path: "/login",
    name: "Login",
    meta: {layout: 'auth'},
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: "/planning",
    name: "Planning",
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/PlanningPage.vue')
  },
  {
    path: '/categories',
    name: "Categories",
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/CategoriesPage.vue')
  },
  {
    path: '/history',
    name: "History",
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/HistoryPage.vue')
  },
  {
    path: '/',
    name: "Home",
    meta: {layout: "main", auth: true},
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/register',
    name: "Register",
    meta: {layout: "auth"},
    component: () => import('@/views/RegisterPage.vue')
  },
  {
    path: '/record/:id',
    name: "DetailRecord",
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/DetailRecordPage.vue')
  },
  {
    path: '/record',
    name: "Record",
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/RecordPage.vue')
  },
  {
    path: '/profile',
    name: "Profile",
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/ProfilePage.vue')
  },
  {
  path: "/planning",
  name: "Planning",
  meta: {layout: "main", auth: true},
  component: () => import('@/views/PlanningPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const currUser = auth.currentUser,
        requireAuth = to.matched.some(record => record.meta.auth)
  if(requireAuth && !currUser)
    next('/login')
  else next()
})

export default router;
