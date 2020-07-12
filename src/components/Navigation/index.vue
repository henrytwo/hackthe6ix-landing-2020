<template>
  <Container :block="$style.nav" :as="$style.nav" :class="{'nav--show': this.show}">
    <div :class="$style.nav__justify">

      <!-- Logo -->
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

      <!-- Right side buttons -->
      <ul :class="$style.nav__items">
        <li>
          <Button
              :class="$style.nav__button"
              v-on:click.native="apply()"
              :disabled="disableApply"
          >
            {{ applyButtonMessage || "Apply" }}
          </Button>
        </li>
        <li>
          <a
              :class="$style.nav__item"
              active-class="nav__item--active"
              v-for="item in items"
              :href="item.path"
              :key="item.path"
          >{{ item.displayName || item.name }}</a>
        </li>

        <!-- MLH banner -->
        <!--
        <a id="mlh-trust-badge" style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000" href="https://mlh.io/seasons/na-2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=yellow" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-yellow.svg" alt="Major League Hacking 2021 Hackathon Season" style="width:100%"></a>
        -->
      </ul>


      <!-- Hamburger -->
      <button :class="$style.nav__menu" v-on:click="() => (this.show = !this.show)">
        <div :class="[$style.nav__bar, $style['nav__bar--top']]" />
        <div :class="[$style.nav__bar, $style['nav__bar--mid']]" />
        <div :class="[$style.nav__bar, $style['nav__bar--bot']]" />
      </button>

      <!-- Mobile menu -->
      <Container as="ul" :block="$style.nav__mobile" :class="$style.nav__mobile">
        <li>
          <a
              :class="$style.nav__mobile-item"
              active-class="nav__mobile-item--active"
              v-for="item in items"
              v-on:click.native="close"
              :href="item.path"
              :key="item.path"
          >{{ item.displayName || item.name }}</a>
        </li>
        <li>
          <Button
              :class="$style.nav__mobile-button"
              v-on:click.native="apply()"
              :disabled="disableApply"
          >{{ applyButtonMessage }}</Button
          >
        </li>
      </Container>
    </div>
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
