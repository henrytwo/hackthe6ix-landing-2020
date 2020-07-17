<template>
  <Container :block="$style.error404" as="section">
    <h1>
      Error 404
    </h1>
    <h3>
      Sorry, we couldn't find that resource :(
    </h3>
    <Button v-on:click.native="home()">
      Go back home
    </Button>
  </Container>
</template>

<script>
  import {Container} from '@components';
  import Button from "@hackthe6ix/vue-ui/Button/index";

  export default {
    components: {
      Button,
      Container
    },
    methods: {
      home() {
        // Using JS because idk why the <a> tag doesn't result in redirecting
        window.location.href = "/";
      }
    }
  }
</script>

<style src="./Index.module.scss" lang="scss" module />
