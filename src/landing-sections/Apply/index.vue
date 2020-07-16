<template>
  <Container id="apply" :block="$style.apply" as="section">
    <img :class="[$style['apply__cloud--1'], $style.apply__cloud]" src="@assets/06_CTA_Apply/Deco_Cloud_01.svg">
    <img :class="[$style['apply__cloud--2'], $style.apply__cloud]" src="@assets/06_CTA_Apply/Deco_Cloud_02.svg">
    <img :class="[$style['apply__cloud--3'], $style.apply__cloud]" src="@assets/06_CTA_Apply/Deco_Cloud_03.svg">
    <img :class="[$style['apply__cloud--4'], $style.apply__cloud]" src="@assets/06_CTA_Apply/Deco_Cloud_04.svg">
    <img :class="[$style['apply__cloud--5'], $style.apply__cloud]" src="@assets/06_CTA_Apply/Deco_Cloud_05.svg">

    <img :class="$style.apply__rocket" src="@assets/06_CTA_Apply/Rocketship.svg">
    <h2>Ready to be a hacker?</h2>
    <Button
        :class="$style.apply__button"
        :disabled="disableApply"
        v-on:click.native="apply()"
    >{{applyButtonMessage}}</Button>
    <p>Got questions? Check out our <a href="#faq">FAQ</a> section.</p>
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

<style src="./Apply.module.scss" lang="scss" module />
