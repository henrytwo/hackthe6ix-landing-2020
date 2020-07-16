<template>
  <Stack align='center' as='g-link' v-on:click.native="scrollTo('home', items['home'].scrollOffset)">
    <img src='@assets/logo.svg' width='16'/>
    <TextComponent
      type='heading3'
      color='teal'
      as='span'
    >
      HT6 <TextComponent
        transform='uppercase'
        type='heading3'
        color='yellow'
        as='span'
      >
        Digital
      </TextComponent>
    </TextComponent>
  </Stack>
</template>

<script>
import TextComponent from '@hackthe6ix/vue-ui/Text';
import Stack from '@hackthe6ix/vue-ui/Stack';
import {scrollTo} from '@utils/scroll';

export default {
  name: 'Logo',
  components: {
    TextComponent,
    Stack,
  },
  data() {
    return {
      scrollTo
    }
  },
  props: {
    items: Object
  }
}
</script>
