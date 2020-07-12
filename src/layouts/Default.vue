<template>
  <div>
    <Navigation />
    <div :class="$style.layout">
      <slot/>
    </div>
    <!--
    <Footer />
    -->
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
  }
}
</script>

<style src="./Default.module.scss" lang="scss" module />
