<template>
  <Container :block="$style.error404" as="section">
    <h1>
      Error 404
    </h1>
    <h3>
      Sorry, we couldn't find that resource :(
    </h3>
    <a href="/">
      <Button>
        Go back home
      </Button>
    </a>
  </Container>
</template>

<script>
  import {Container} from '@components';
  import Button from "@hackthe6ix/vue-ui/Button/index";

  export default {
    components: {
      Button,
      Container
    }
  }
</script>

<style src="./Index.module.scss" lang="scss" module />
