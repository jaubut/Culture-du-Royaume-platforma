import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2b748b8f = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _f4326e68 = () => interopDefault(import('../pages/center.vue' /* webpackChunkName: "pages/center" */))
const _bf51c3aa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _2b748b8f,
    name: "prismic-preview"
  }, {
    path: "/center",
    component: _f4326e68,
    name: "center"
  }, {
    path: "/",
    component: _bf51c3aa,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
