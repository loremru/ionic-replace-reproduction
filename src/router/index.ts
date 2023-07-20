import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import TabView from '@/views/tabs/TabView.vue'
import Feed from '@/views/tabs/feed/index.vue'
import Garage from '@/views/tabs/garage/index.vue'
import Search from '@/views/tabs/search/index.vue'
import Privacy from '@/views/privacy.vue'
import Terms from '@/views/terms.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/privacy',
    component: Privacy,
  },
  {
    path: '/terms',
    component: Terms,
  },
  {
    path: '/',
    redirect: '/tabs/feed',
  },

  {
    path: '/tabs/',
    component: TabView,
    children: [
      {
        path: '',
        redirect: '/tabs/feed',
      },
      {
        path: 'feed',
        component: Feed,
        beforeEnter: [],
      },
      {
        path: 'search',
        component: Search,
        beforeEnter: [],
      },
      {
        path: 'garage',
        component: Garage,
        beforeEnter: [],
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
