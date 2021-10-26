import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SingUp.vue'
import Home from './components/Home.vue'
import Enrollment from './components/Enrollment.vue'
import CourseDetail  from './components/courseDetail.vue'
import Courses  from './components/courses.vue'


const routes = [{
    path: '/',
    name: 'root',
    component: App
},
{
  path: '/user/logIn',
  name: 'logIn',
  component: LogIn

},
{
  path: '/user/signUp',
  name: 'signUp',
  component: SignUp
},
{
  path: '/user/home',
  name: 'home',
  component: Home
},
{
  path: '/user/enrollment',
  name: 'enrollment',
  component: Enrollment
},
{
  path: '/courseDetail/:id',
  name: 'courseDetail',
  component: CourseDetail
},
{
  path: '/courses',
  name: 'courses',
  component: Courses
},
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
