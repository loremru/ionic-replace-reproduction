<template>
  <ion-page ref="page">
    <ion-content forceOverscroll="false">
      <ion-tabs>
        <ion-router-outlet :animated="false"></ion-router-outlet>
        <ion-tab-bar
          slot="bottom"
          class=""
        >
          <p @click="$router.push('/tabs/feed')">1</p>
          <p @click="$router.push('/tabs/search')" class="mx-5" style="margin: 0 100px;">2</p>
          <p @click="$router.push('/tabs/garage')">3</p>
        </ion-tab-bar>
      </ion-tabs>

    </ion-content>
  </ion-page>
</template>

<script setup>
import {IonTabBar, IonTabs} from "@ionic/vue";
</script>
