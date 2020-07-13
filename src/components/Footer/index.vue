<template>
  <Container :block="$style.footer" :as="$style.footer">
    <div class="footer__content">
      <a :class="$style.footer__top" href="#">
        <icon icon="arrow-up" /> Back to Top
      </a>

      <h3 :class="$style.footer__label">Follow us on social media</h3>
      <ul :class="$style.footer__media">
        <li v-for="media in social_media" v-bind:key="media.icon">
          <a :href="media.link" target="_blank" :class="$style.footer__media-item">
            <icon class="footer__icon" :icon="['fab', media.icon]" />
          </a>
        </li>
      </ul>

      <div :class="[$style.footer__content, $style['footer__content--foot']]">
        <p :class="$style.footer__text">
          Copyright © 2020 <strong>Hack the 6ix</strong> | Made with
          <icon icon="heart" /> in Toronto
        </p>
        <div class="footer__legal">
          <a href="/privacy" target="_blank">Privacy Policy</a>
          {{ ' | ' }}
          <a
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              target="_blank"
          >MLH Code of Conduct</a
          >
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
  import Button from '@hackthe6ix/vue-ui/Button';
  import {Container} from '../index';

  export default {
    name: 'Footer',
    components: {
      Container,
      Button,
    },
    data() {
      return {
        social_media: [],
        email: "wow@coolbeans.damn",
      };
    },
    methods: {
      apply() {
        this.$router.push('/apply');
      },
    },
    props: {
      items: {
        type: Array,
        default: () => [],
      },
      disableApply: Boolean,
      applyButtonMessage: String,
    },
  };
</script>

<style src="./Footer.module.scss" lang="scss" module />
