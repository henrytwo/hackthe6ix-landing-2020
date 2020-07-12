<template>
  <div>
    <Navigation />
    <div class="layout">
      <slot/>
    </div>
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
import Navigation from './Navigation';

export default {
  components: {
    Navigation
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
