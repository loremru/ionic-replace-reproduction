<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-back-button default-href="/"/>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen="true" :scrollEvents="true">
      privacy

      <p style="margin-top: 50px" @click="$router.replace('/term  s')">go to terms</p>
      <div class="w-full" style="height: var(--ion-safe-area-bottom, 0)"></div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
</script>
