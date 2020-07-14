<template>
  <Layout :disableApply="disableApply" :applyButtonMessage="applyButtonMessage" :applyLink="applyLink" :items="items">
    <Home :disableApply="disableApply" :applyButtonMessage="applyButtonMessage" :applyLink="applyLink" />
    <TransitionHome />
    <About />
    <TransitionAbout />
    <WhyUs />
    <TransitionWhyUs />
    <Sponsors />
    <Apply :disableApply="disableApply" :applyButtonMessage="applyButtonMessage" :applyLink="applyLink" />
    <FAQ />
  </Layout>
</template>

<script>
import Home from './landing-sections/Home/index.vue';
import About from './landing-sections/About/index.vue';
import WhyUs from './landing-sections/WhyUs/index.vue';
import Sponsors from './landing-sections/Sponsors/index.vue';
import Apply from './landing-sections/Apply/index.vue';
import FAQ from './landing-sections/FAQ/index.vue';

import TransitionHome from '@components/Transitions/Home/index.vue';
import TransitionAbout from '@components/Transitions/About/index.vue';
import TransitionWhyUs from '@components/Transitions/WhyUs/index.vue';

import {
  applyButtonMessages,
  overrideApplicationState,
  APPS_OPEN_TIME,
  APPLY_LINK,
  NAVBAR_ITEMS
} from '@data';
export default {
  metaInfo: {
    title: 'Hack the 6ix'
  },
  components: {
    Home,
    About,
    WhyUs,
    Sponsors,
    Apply,
    FAQ,
    TransitionHome,
    TransitionAbout,
    TransitionWhyUs
  },
  data() {
    return {
      applicationStage: 0,
      disableApply: true,
      applyButtonMessage: 'APPLY NOW',
      refreshTimer: null,
      applyLink: APPLY_LINK,
      items: NAVBAR_ITEMS
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
  }
}
</script>

<style src="./Index.module.scss" lang="scss" module />
