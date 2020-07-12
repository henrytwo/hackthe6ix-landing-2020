<template>
  <Layout :disableApply="disableApply" :applyButtonMessage="applyButtonMessage" :applyLink="applyLink">
    <Home :disableApply="disableApply" :applyButtonMessage="applyButtonMessage" :applyLink="applyLink" />
    <TransitionHome />
  </Layout>
</template>

<script>
import Home from './landing-sections/Home/index.vue';
import TransitionHome from '@components/Transitions/Home/index.vue';
import {
  applyButtonMessages,
  overrideApplicationState,
  APPS_OPEN_TIME,
  APPLY_LINK
} from '@data';

export default {
  metaInfo: {
    title: 'Hack the 6ix'
  },
  data() {
    return {
      applicationStage: 0,
      disableApply: true,
      applyButtonMessage: 'APPLY NOW',
      refreshTimer: null,
      applyLink: APPLY_LINK
    };
  },
  mounted() {
    if (overrideApplicationState !== -1) {
      this.applicationStage = overrideApplicationState;
    } else {
      let diff = APPS_OPEN_TIME - new Date();
      // If the app open date is in the future
      this.applicationStage = diff > 0 ? 0 : 1;

      if (diff > 0) {
        this.refreshTimer = setTimeout(() => {
          location.reload();
        }, diff);
      }
    }

    // 0 = Applications not open yet
    // 1 = Applications open
    // 2 = Applications closed

    this.applyButtonMessage = applyButtonMessages[this.applicationStage];
    this.disableApply =
        this.applicationStage === 0 || this.applicationStage === 2;
  },
  components: {
    Home,
    TransitionHome
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<style src="./Index.module.scss" lang="scss" module />
