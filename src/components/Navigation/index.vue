<template>
  <div :class='$style.container'>
    <Container :class='$style.nav' as='nav'>
      <Logo :items="items" />
      <TextComponent
        :class='$style.apply'
        transform='uppercase'
        target='_blank'
        :href='applyLink'
        rel='noopener noreferrer'
        as='a'
        v-if="!disableApply"
      >
        Apply
      </TextComponent>
      <ul :class='[$style.items, show && $style[`items--show`], disableApply && $style.right]'>
        <li v-for='(item, i) in items' @click='handleClick(i, item)' :key='i'>
          <TextComponent
            transform='uppercase'
            :class='$style.item'
            type='body2'
            as='g-link'
          >
            {{ item.displayName }}
          </TextComponent>
        </li>
      </ul>
      <Button
        :class='[$style.menu, disableApply && $style.right]'
        @click='show = !show'
        color='teal'
        size='small'
        variant='outline'
      >
        <Icon
          name="bars"
        />
      </Button>

      <div :class="$style['mlh-placeholder']" />
      <a id="mlh-trust-badge" :class="$style.mlh" href="https://mlh.io/seasons/2021/events" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-yellow.svg" alt="Major League Hacking 2021 Hackathon Season" style="width:100%; max-width: 86px"></a>
    </Container>
    <Container :class='$style.disclaimer' as='div' v-if="SHOW_DISCLAIMER && !disclaimerDismissed" v-on:click.native="disclaimerDismissed = true">
      <Disclaimer />
    </Container>
  </div>
</template>

<script>
import {Disclaimer, SHOW_DISCLAIMER} from '@data';
import TextComponent from '@hackthe6ix/vue-ui/Text';
import Button from '@hackthe6ix/vue-ui/Button';
import Stack from '@hackthe6ix/vue-ui/Stack';
import {Container} from '@components';
import 'vue-awesome/icons/bars';
import {scrollTo} from '@utils';
import Logo from './Logo';
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/bars';

export default {
  name: 'Navigation',
  components: {
    TextComponent,
    Disclaimer,
    Container,
    Button,
    Stack,
    Logo,
    Icon
  },
  data() {
    return {
      scrollTo,
      show: false,
      disclaimerDismissed: false,
      SHOW_DISCLAIMER: SHOW_DISCLAIMER,
    };
  },
  methods: {
    handleClick(key, data) {
      if (data.url) {
        window.location.href = data.url;
      } else {
        scrollTo(key, data.scrollOffset)
      }

      this.show = false;
    }
  },
  props: {
    items: Object,
    disableApply: Boolean,
    applyLink: String
  },
};
</script>

<style src="./Navigation.module.scss" lang="scss" module />
