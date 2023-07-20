<template>
  <ion-page>
    <ion-content fullscreen="true" :scrollEvents="true">
      test1
      <div class="w-full" style="height: var(--ion-safe-area-bottom, 0)"></div>


      <p style="margin-top: 50px" @click="goToPrivacy">go to privacy</p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {Animation} from '@ionic/core'
import {useIonRouter} from "@ionic/vue";
import { createAnimation } from '@ionic/vue';

const router = useIonRouter()
const iosLeaveAnimation = (baseEl: HTMLElement): Animation => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();

  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')!).fromTo('opacity', 'var(--backdrop-opacity)', 0);

  wrapperAnimation.addElement(baseEl.querySelector('.alert-wrapper')!).keyframes([
    { offset: 0, opacity: 0.99, transform: 'scale(1)' },
    { offset: 1, opacity: 0, transform: 'scale(0.9)' },
  ]);

  return baseAnimation
      .addElement(baseEl)
      .easing('ease-in-out')
      .duration(1000)
      .fromTo('opacity', '1', '0.5')
      .addAnimation([backdropAnimation, wrapperAnimation]);
}
function goToPrivacy() {
  router.replace('/privacy')
}
</script>
