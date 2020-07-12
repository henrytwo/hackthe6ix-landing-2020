<template>
  <div>
    <Navigation :disableApply="disableApply" :applyButtonMessage="applyButtonMessage" :applyLink="applyLink" />
    <div :class="$style.layout">
      <slot/>
    </div>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import {Navigation, Footer} from '@components';

export default {
  components: {
    Navigation,
    Footer
  },
  props: {
    disableApply: Boolean,
    applyButtonMessage: String,
    applyLink: String
  }
}
</script>

<style src="./Default.module.scss" lang="scss" module />
