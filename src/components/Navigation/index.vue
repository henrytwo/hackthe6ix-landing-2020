<template>
  <div>
    <div :class="$style.nav__spacer"/>
    <div :class="[{'$style.nav--show': show}, $style.nav]">
      <div :class="$style.nav__justify">

        <!-- Logo -->
        <a :class="$style.nav__logo_link" v-on:click="scrollTo('home', items['home'].scrollOffset)">
          <ul :class="$style.nav__logo_list">
            <li>
              <img src="@assets/logo.svg" :class="$style.nav__logo"/>
            </li>
            <li>
              <h3 :class="$style.nav__logo_text">
                HT6 <span :class="$style.nav__digital">DIGITAL</span>
              </h3>
            </li>
          </ul>
        </a>

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
                :active-class="$style['nav__item--active']"
                v-for="(item, key) in items"
                v-on:click="scrollTo(key, item.scrollOffset)"
                :key="key"
            >{{ item.displayName || item.name }}</a>
          </li>
        </ul>

        <!-- Hamburger -->
        <button :class="$style.nav__menu" v-on:click="() => (this.show = !this.show)">
          <div :class="[$style.nav__bar, $style['nav__bar--top']]" />
          <div :class="[$style.nav__bar, $style['nav__bar--mid']]" />
          <div :class="[$style.nav__bar, $style['nav__bar--bot']]" />
        </button>

        <!-- MLH banner -->
        <a id="mlh-trust-badge" :class="$style.nav__mlh" href="https://mlh.io/seasons/na-2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=yellow" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-yellow.svg" alt="Major League Hacking 2021 Hackathon Season" style="width:100%"></a>

        <!-- Mobile menu -->
        <Container as="ul" :block="$style.nav__mobile" :class="$style.nav__mobile">
          <li>
            <a
                :class="$style['nav__mobile-item']"
                :active-class="$style['nav__mobile-item--active']"
                v-for="item in items"
                onclick.native="close"
                :href="item.id"
                :key="item.id"
            >{{ item.displayName || item.name }}</a>
          </li>
          <li>
            <Button
              :class="$style['nav__mobile-button']"
              v-on:click.native="apply()"
              :disabled="disableApply"
            >{{ applyButtonMessage }}</Button
            >
          </li>
        </Container>
      </div>
    </div>
    <div :class="$style.nav__disclaimer" v-if="SHOW_DISCLAIMER && !disclaimerDismissed">
      <Button :class="$style['nav__disclaimer--dismiss']" v-on:click.native="disclaimerDismissed = true" variant="ghost">
        <Icon name="times" />
      </Button>
      <Disclaimer :class="$style['nav__disclaimer--message']"/>
    </div>
  </div>
</template>

<script>
  import {Container} from '@components';
  import {scrollTo} from './utils';
  import Button from '@hackthe6ix/vue-ui/Button';
  import {Disclaimer, SHOW_DISCLAIMER} from '@data';

  import Icon from 'vue-awesome/components/Icon';
  import 'vue-awesome/icons/times';

  export default {
    name: 'Navigation',
    components: {
      Container,
      Button,
      Disclaimer,
      Icon
    },
    data() {
      return {
        scrollTo,
        show: false,
        disclaimerDismissed: false,
        SHOW_DISCLAIMER: SHOW_DISCLAIMER
      };
    },
    methods: {
      close() {
        this.show = false;
      },
      apply() {
        document.location.href = this.applyLink;
      }
    },
    props: {
      items: {
        type: Array,
        default: () => [],
      },
      disableApply: Boolean,
      applyButtonMessage: String,
      applyLink: String
    },
  };
</script>

<style src="./Navigation.module.scss" lang="scss" module />
