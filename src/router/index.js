import Vue from 'vue'
import Router from 'vue-router'
import LiveTicker from '@/components/liveticker/Index.vue'
import NotFound from '@/components/static/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/live',
      name: 'LiveTicker',
      component: LiveTicker
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
