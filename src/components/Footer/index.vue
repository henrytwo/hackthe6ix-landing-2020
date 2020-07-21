<template>
  <div>
    <img :class="$style.wave" src="@assets/07_FAQ/Transition_04_End.svg">
    <div :class="$style.solid"></div>
    <Container :block="$style.footer" :as="$style.footer">
      <div :class="$style.footer__content">
        <div>
          <h3 :class="$style.footer__label">Follow us on social media</h3>

          <ul :class="$style.footer__media">
            <li v-for="media in social_media" v-bind:key="media.icon">
              <a :href="media.link" target="_blank" :class="$style['footer__media-item']">
                <Icon :class="$style.footer__icon" :name="`brands/${media.icon}`"/>
              </a>
            </li>
          </ul>
        </div>

        <div :class="$style['footer__top-container']">
          <h4>
            <a :class="$style.footer__top" v-on:click="toTop">
              <Icon name="arrow-up"/>
              Back to Top
            </a>
          </h4>
        </div>

        <div>
          <p :class="$style.footer__text">
            Copyright © 2020 <strong>Hack the 6ix</strong> | Made with
            <Icon name="heart"/>
            in Toronto
          </p>
        </div>

        <div :class="$style.footer__legal">
          <p>
            <a href="privacy-policy.pdf" target="_blank">
              Privacy Policy
            </a>
          </p>

          <p>
            <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">
              MLH Code of Conduct
            </a>
          </p>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
  import Button from '@hackthe6ix/vue-ui/Button';
  import { Container } from '../index';
  import { email, social_media } from '@data';
  import Icon from 'vue-awesome/components/Icon';

  import 'vue-awesome/icons/brands/facebook';
  import 'vue-awesome/icons/brands/instagram';
  import 'vue-awesome/icons/brands/linkedin';
  import 'vue-awesome/icons/brands/twitter';
  import 'vue-awesome/icons/heart';
  import 'vue-awesome/icons/arrow-up';

  export default {
    name: 'Footer',
    components: {
      Container,
      Button,
      Icon
    },
    data() {
      return {
        social_media,
        email,
      };
    },
    methods: {
      toTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
      },
    },
    props: {
      items: Object,
      disableApply: Boolean,
      applyButtonMessage: String,
    },
  };
</script>

<style src="./Footer.module.scss" lang="scss" module/>
