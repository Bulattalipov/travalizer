import {
  createRouter,
  createWebHistory
} from "vue-router";
import SignUp from "../views/Signup.vue";
import SignIn from "../views/Signin.vue";
import Rokets from "../views/Rokets.vue";
import RoketsItem from "../views/RoketsItem.vue";


const routes = [{
    path: '/',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/rokets',
    name: 'rokets',
    component: Rokets,
    meta: {
      auth: true
    },
  },
  {
    path: '/rokets/:slug',
    name: 'roketsItem',
    component: RoketsItem,
    meta: {
      auth: true
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes
})


router.beforeEach((to, from, next) => {
  const authToken = Boolean(JSON.parse(localStorage.getItem('authToken')));
  const requireAuth = to.matched.some(record => record.meta.auth)
  // console.log("authToken", authToken);
  // console.log("requireAuth", requireAuth);
  if (!authToken && requireAuth) {
    next("/");
  } else {
    next()
  }
})

export default router;