<template>
  <Container id="home" :block="$style.home" as="section">
    <div :class="$style.home__content">
      <div :class="$style['home__content--left']">
        <div :class="$style['home__sponsor-badge']">
          <img src="@assets/02_Home/Logo_Autocode.svg"> <h4>PRESENTS</h4>
        </div>
        <h1 :class="$style.home__title">HACK THE 6IX</h1>
        <h3 :class="$style.home__date">August 21 to 23, 2020</h3>
        <h2 :class="$style.home__inspiration">We hack to <span :class="$style['home__inspiration--highlight']">collaborate.</span></h2>
        <Button
          :disabled="disableApply"
          v-on:click.native="apply()"
        >{{applyButtonMessage}}</Button>
        <h4>*Applications close on July 24 at 11:59PM EST</h4>
      </div>
      <div :class="$style['home__content--right']">
        <img :class="$style.home__streetcar" src="@assets/02_Home/Main_Window_Streetcar.gif">
      </div>
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
  },
  methods: {
    apply() {
      document.location.href = this.applyLink;
    }
  },
  props: {
    disableApply: Boolean,
    applyButtonMessage: String,
    applyLink: String
  }
}
</script>

<style src="./Home.module.scss" lang="scss" module />
