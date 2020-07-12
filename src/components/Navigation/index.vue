<template>
  <Container :block="$style.nav" :as="$style.nav" :class="{'nav--show': this.show}">
    <a :class="$style.nav__logo_link" href="#">
      <ul :class="$style.nav__logo_list">
        <li>
          <img src="logo.svg" :class="$style.nav__logo"/>
        </li>
        <li>
          <h1 :class="$style.nav__logo_text">
            HT6 <span :class="$style.nav__digital">DIGITAL</span>
          </h1>
        </li>
      </ul>
    </a>
    <ul :class="$style.nav__items">
      <router-link
          tag="li"
          role="link"
          :class="$style.nav__item"
          active-class="nav__item--active"
          v-for="item in items"
          :to="item.path"
          :key="item.path"
      >{{ item.displayName || item.name }}</router-link
      >
      <li>
        <Button
            :class="$style.nav__button"
            v-on:click.native="apply()"
            :disabled="disableApply"
        >
          {{ applyButtonMessage }}
        </Button>
      </li>
    </ul>
    <!--
    <button :class="$style.nav__menu" v-on:click="() => (this.show = !this.show)">
      <div :class="$style.nav__bar $style.nav__bar--top" />
      <div :class="$style.nav__bar $style.nav__bar--mid" />
      <div :class="$style.nav__bar $style.nav__bar--bot" />
    </button>-->
    <Container as="ul" :block="$style.nav__mobile" :class="$style.nav__mobile">
      <router-link
          tag="li"
          role="link"
          :class="$style.nav__mobile-item"
          active-class="nav__mobile-item--active"
          v-for="item in items"
          v-on:click.native="close"
          :to="item.path"
          :key="item.path"
      >{{ item.displayName || item.name }}</router-link
      >
      <li>
        <Button
            :class="$style.nav__mobile-button"
            v-on:click.native="apply()"
            :disabled="disableApply"
        >{{ applyButtonMessage }}</Button
        >
      </li>
    </Container>
  </Container>
</template>

<script>
  import {Container} from '@components';
  import Button from '@hackthe6ix/vue-ui/Button';

  export default {
    name: 'Navigation',
    components: {
      Container,
      Button
    },
    data() {
      return {
        show: false,
      };
    },
    methods: {
      close() {
        this.show = false;
      },
    },
    props: {
      items: {
        type: Array,
        default: () => [{ displayName: 'wtf', name: 'wtf' }],
      },
      disableApply: Boolean,
      applyButtonMessage: String,
    },
  };
</script>

<style src="./Navigation.module.scss" lang="scss" module />
