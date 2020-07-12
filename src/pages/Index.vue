<template>
  <Layout>
    <Home/>
  </Layout>
</template>

<script>
import Home from './landing-sections/Home.vue';

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Home
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<style lang="scss">
  @import '~@styles/index.scss';
</style>
