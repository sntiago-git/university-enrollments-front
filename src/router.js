import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SingUp.vue'
import CourseDetail from './components/courseDetail.vue'
import MyCourses from './components/MyCourses.vue'

import Auth from './views/Auth'
import Home from './views/Home'
import Enrollment from './views/Enrollment.vue'
import Account from './views/Account.vue'

const routes = [{
  path: '/',
  name: 'root',
  component: App
},
{
  path: '/auth',
  name: 'auth',
  component: Auth,
  meta: {

  },
  children: [
    {
      path: '/logIn',
      name: 'logIn',
      component: LogIn
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },

  ]
},
{
  path: '/home',
  name: 'home',
  component: Home,
  meta: {
    requiresAuth: true
  },
  children: [
    {
      path: '/mycourses',
      name: 'mycourses',
      component: MyCourses,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/courseDetail/:id',
      name: 'courseDetail',
      component: CourseDetail,
      meta: {
        requiresAuth: true
      }
    },
   
  ]
},
{
  path: '/enrollment',
  name: 'enrollment',
  component: Enrollment,
  meta: {
    requiresAuth: true
  }
},
{
  path: '/account',
  name: 'account',
  component: Account,
  meta: {
    requiresAuth: true
  }
},
];


const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach((to, from, next) => {

  var isAuthlocal = localStorage.getItem('access');

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuthlocal == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()

      /*let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next()
        } else {
          next({ name: 'userboard' })
        }
      } else {
        next()
      }*/
    }
  }
  else if (to.path == "/") {

    if (isAuthlocal == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next({
        path: '/home',
        params: { nextUrl: to.fullPath }
      })
    }
  } else if (to.path == "/login") {

    if (isAuthlocal == null) {
      next()
    } else {
      next({
        path: '/home',
        params: { nextUrl: to.fullPath }
      })
    }
  } else {
    next()
  }

})


export default router
