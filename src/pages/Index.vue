<template>
  <Layout>
    <Home/>
  </Layout>
</template>

<script>
import Home from './landing-sections/Home.vue';

export default {
  metaInfo: {
    title: 'Hack the 6ix'
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

<style src="./Index.module.scss" lang="scss" module />
