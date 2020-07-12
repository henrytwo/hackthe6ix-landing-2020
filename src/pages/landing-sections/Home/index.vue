<template>
  <Container :block="$style.home" as="section">
    <div :class="$style.home__content">
      <h1 :class="$style.home__title">HACK THE 6IX</h1>
      <h3 :class="$style.home__date">August 21 to 23, 2020</h3>
      <h2 :class="$style.home__inspiration">We hack to <span :class="$style['home__inspiration-highlight']">Get money.</span></h2>
      <Button>this is a button</Button>
    </div>
  </Container>
</template>


<script>
import {Container} from '@components';
import Button from '@hackthe6ix/vue-ui/Button';

export default {
  components: {
    Container,
    Button
  }
}
</script>

<style src="./Home.module.scss" lang="scss" module />
