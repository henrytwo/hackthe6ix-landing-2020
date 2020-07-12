<template>
  <div>
    <Navigation />
    <div class="layout">
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
  }
}
</script>

<style>
body {
  margin:0;
  padding:0;
}

.layout {
  margin: 100px auto;
}
</style>
