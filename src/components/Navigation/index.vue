<template>
  <div :class='$style.container'>
    <Container :class='$style.nav' as='nav'>
      <Logo/>
      <TextComponent
        :class='$style.apply'
        transform='uppercase'
        target='_blank'
        :href='applyLink'
        rel='noopener noreferrer'
        as='a'
      >
        {{ applyButtonMessage }}
      </TextComponent>
      <ul :class='[$style.items, show && $style[`items--show`]]'>
        <li v-for='(item, i) in items' @click='show = false' :key='i'>
          <TextComponent
            transform='uppercase'
            :class='$style.item'
            v-on:click="scrollTo(i, item.scrollOffset); close();"
            type='body2'
            as='g-link'
          >
            {{ item.displayName }}
          </TextComponent>
        </li>
      </ul>
      <Button
        :class='$style.menu'
        @click='show = !show'
        :icon='{ left: `bars` }'
        color='teal'
        size='small'
        variant='outline'
      >
        Menu
      </Button>
    </Container>
    <Container :class='$style.disclaimer' as='div'>
      <Disclaimer v-if="SHOW_DISCLAIMER"/>
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
import {scrollTo} from '@utils/scroll';
import Logo from './Logo';

export default {
  name: 'Navigation',
  components: {
    TextComponent,
    Disclaimer,
    Container,
    Button,
    Stack,
    Logo,
  },
  data() {
    return {
      scrollTo,
      show: false,
      SHOW_DISCLAIMER: SHOW_DISCLAIMER,
    };
  },
  props: {
    items: Object,
    disableApply: Boolean,
    applyButtonMessage: String,
    applyLink: String
  },
};
</script>

<style src="./Navigation.module.scss" lang="scss" module />
