<template>
  <Container block="footer" as="footer">
    <a class="footer__top" href="#">
      <icon icon="arrow-up" /> Back to Top
    </a>
    <div class="footer__content">
      <Logo class="footer__logo" />
      <div class="footer__section footer__section--nav">
        <h2 class="footer__heading">Navigation</h2>
        <ul class="footer__nav">
          <router-link
              tag="li"
              role="link"
              class="footer__item"
              active-class="footer__item--active"
              v-for="item in items"
              :to="item.path"
              :key="item.path"
          >{{ item.displayName || item.name }}</router-link
          >
          <li>
            <Button
                class="footer__button"
                v-on:click.native="apply()"
                :disabled="disableApply"
            >{{ applyButtonMessage }}</Button
            >
          </li>
        </ul>
      </div>
      <div class="footer__section footer__section--contact">
        <h2 class="footer__heading">Contact Us</h2>
        <h3 class="footer__label">Email us</h3>
        <a :href="'mailto:' + email">{{ email }}</a>

        <h3 class="footer__label">Follow us on social media</h3>
        <ul class="footer__media">
          <li v-for="media in social_media" v-bind:key="media.icon">
            <a :href="media.link" target="_blank" class="footer__media-item">
              <icon class="footer__icon" :icon="['fab', media.icon]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__content footer__content--foot">
      <p class="footer__text">
        Copyright © 2020 <strong>Hack the 6ix</strong> | Made with
        <icon icon="heart" /> in Toronto
      </p>
      <div class="footer__legal">
        <router-link to="/privacy" target="_blank">Privacy Policy</router-link>
        {{ ' | ' }}
        <a
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            target="_blank"
        >MLH Code of Conduct</a
        >
      </div>
    </div>
  </Container>
</template>

<script>
  import Button from '@hackthe6ix/vue-ui/Button';
  import {Container} from '.';

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

<style lang="scss">
  @import '~@hackthe6ix/vue-ui/styles/mixins';
  @import '~@hackthe6ix/vue-ui/styles/variables';
  @import '~@hackthe6ix/vue-ui/styles/colors';

  .footer {
    background-color: #efefef;
    position: relative;
    z-index: 100;

    &__container {
      @include flex(column);
    }

    &__top {
      @include transition(color);
      text-decoration: none;
      font-family: $teal;
      font-weight: bold;
      margin-left: auto;
      background: none;
      color: #5d5d5d;
      padding: 15px 0;
      cursor: pointer;
      border: none;

      &:hover {
        color: $teal;
      }
    }

    &__content {
      @include flex;
      flex-wrap: wrap;

      &--foot {
        align-items: center;
        padding: 30px 0 5px;
      }
    }

    &__section {
      &--nav {
        padding-right: 60px;
        margin-bottom: 20px;
      }
    }

    &__logo {
      @include transition(opacity, PAGE);
      filter: grayscale(100%);
      margin-right: 60px;
      opacity: 0.2;
      width: 60px;

      &:hover {
        opacity: 0.3;
      }
    }

    &__heading {
      margin: 0;
    }

    &__nav {
      @include flex;
      flex-wrap: wrap;
      max-width: 400px;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    &__item {
      @include transition(color);
      width: 50%;
      cursor: pointer;
      color: #5d5d5d;
      margin-top: 10px;

      &:hover {
        color: $teal;
      }
    }

    &__label {
      font-size: 1rem;
      margin: 10px 0 -2px;
    }

    &__media {
      @include flex(flex-start, center);
      list-style-type: none;
      font-size: 1.4rem;
      padding: 0;
      margin: 2px 0 0;

      &-item {
        @include transition(color);
        cursor: pointer;
        color: #5d5d5d;
        margin-right: 10px;

        &:hover {
          color: $teal;
        }
      }
    }

    &__legal {
      margin-left: auto;
    }

    &__button {
      margin-top: 15px;
      padding: 8px 20px;
    }
  }

  @include media(tablet) {
    .footer {
      &__logo {
        @include position(absolute, 60px auto auto);
      }

      &__legal,
      &__text {
        width: 100%;
        text-align: center;
      }

      &__legal {
        margin: auto;
        margin-top: -10px;
        padding-bottom: 20px;
      }
    }
  }

  @include media(phone) {
    .footer {
      &__section--nav {
        padding: 0;
      }
    }
  }
</style>
