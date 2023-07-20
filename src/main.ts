import { createApp } from 'vue'
import App from './App.vue'
import { IonicVue } from '@ionic/vue'
import 'virtual:windi.css'
import router from './router'
import '@ionic/vue/css/ionic.bundle.css'
import 'virtual:windi.css'

/* Ionic Components */
import {
  IonToolbar,
  IonHeader,
  IonPage,
  IonContent,
    IonRouterOutlet,
  IonButtons,
  IonBackButton,
  IonButton,
  IonRefresher,
  IonRefresherContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/vue'

const app = createApp(App)
  .use(IonicVue)
  .use(router)

app.component('ion-toolbar', IonToolbar)
app.component('ion-header', IonHeader)
app.component('ion-page', IonPage)
app.component('ion-content', IonContent)
app.component('ion-buttons', IonButtons)
app.component('ion-back-button', IonBackButton)
app.component('ion-button', IonButton)
app.component('ion-refresher', IonRefresher)
app.component('ion-refresher-content', IonRefresherContent)
app.component('ion-infinite-scroll', IonInfiniteScroll)
app.component('ion-infinite-scroll-content', IonInfiniteScrollContent)
app.component('ion-router-outlet', IonRouterOutlet)

router.isReady().then(() => {
  app.mount('#app')
})
