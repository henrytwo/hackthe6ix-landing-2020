<template>
  <Layout>
    <Home/>
    <TransitionHome />
  </Layout>
</template>

<script>
import Home from './landing-sections/Home/index.vue';
import TransitionHome from '@components/Transitions/Home/index.vue';

export default {
  metaInfo: {
    title: 'Hack the 6ix'
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
