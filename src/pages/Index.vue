<template>
  <Layout :disableApply="disableApply" :applyLink="applyLink" :items="items">
    <Home :disableApply="disableApply" :applyButtonMessage="applyButtonMessage" :applyLink="applyLink" />
    <TransitionHome />
    <About />
    <TransitionAbout />
    <Schedule />
    <WhyUs />
    <TransitionWhyUs />
    <Sponsors />
    <Apply :disableApply="disableApply" :applyButtonMessage="applyButtonMessage" :applyLink="applyLink" />
    <FAQ />
    <Contact />
  </Layout>
</template>

<script>
import Home from '../landing-sections/Home/index.vue';
import About from '../landing-sections/About/index.vue';
import WhyUs from '../landing-sections/WhyUs/index.vue';
import Schedule from '../landing-sections/Schedule/index.vue';
import Sponsors from '../landing-sections/Sponsors/index.vue';
import Apply from '../landing-sections/Apply/index.vue';
import FAQ from '../landing-sections/FAQ/index.vue';
import Contact from '../landing-sections/Contact/index.vue';

import TransitionHome from '@components/Transitions/Home/index.vue';
import TransitionAbout from '@components/Transitions/About/index.vue';
import TransitionWhyUs from '@components/Transitions/WhyUs/index.vue';

import {
  applyButtonMessages,
  overrideApplicationState,
  APPS_OPEN_TIME,
  APPS_CLOSE_TIME,
  APPLY_LINK,
  NAVBAR_ITEMS
} from '@data';

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Home,
    About,
    WhyUs,
    Sponsors,
    Schedule,
    Apply,
    FAQ,
    Contact,
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
      let diff = 0;
      let diffOpen = APPS_OPEN_TIME - new Date();
      let diffClosed = APPS_CLOSE_TIME - new Date();

      if (diffOpen > 0) { // Apps not open yet
        diff = diffOpen;

        this.applicationStage = 0;

      } else if (diffClosed < 0) { // Apps closed
        diff = -1; // No automatic refresh needed

        this.applicationStage = 2;

      } else { // Apps are open
        diff = diffClosed;

        this.applicationStage = 1;
      }

      if (diff > 0) {
        this.refreshTimer = setTimeout(() => {
          location.reload();
        }, diff);
      }
    }

    // 0 = Applications not open yet
    // 1 = Applications open
    // 2 = Applications closed

    // Note: The apply btn message in the navbar is hardcoded to APPLY since it needs
    // to be one word to avoid overflowing

    this.applyButtonMessage = applyButtonMessages[this.applicationStage];
    this.disableApply =
        this.applicationStage === 0 || this.applicationStage === 2;
  }
}
</script>

<style src="./Index.module.scss" lang="scss" module />
