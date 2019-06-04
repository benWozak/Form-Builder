import Vue from 'vue'
import Router from 'vue-router'
import Forms from './views/Forms.vue'
// import FormPreview from './views/FormPreview.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Forms',
      component: Forms
    },
    {
      path: '/Preview',
      name: 'Form Preview',
      component: () => import('./views/FormPreview.vue'),
      beforeRouteEnter (to, from, next) {
        const answer = window.confirm('Are you sure you want to leave?')
        if (answer) {
          next('/Preview')
        } else {
          next(false)
        }
      }
    },
    {
      path: '/NewForm',
      name: 'NewForm',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/FormCreator.vue')
    }
  ]
})
