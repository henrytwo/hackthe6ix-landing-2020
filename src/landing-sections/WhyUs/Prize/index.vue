<template>
  <div class="$style.prize">
    <img :class="$style.prize__medal" :src="graphic">
    <img :class="$style.prize__list" src="/04_d_Why_Us_Win_Prizes/Container_Prize_List.svg">
    <TextComponent
        color='white'
        transform='uppercase'
        tag='p'
        :class="$style.prize__title"
    >
      {{placeName}}
    </TextComponent>
    <ul :class="$style.prize__items">
      <li v-for="item in prizes">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import TextComponent from '@hackthe6ix/vue-ui/Text';
import Stack from '@hackthe6ix/vue-ui/Stack';

export default {
  components: {
    TextComponent,
    Stack,
  },
  props: {
    placeName: String,
    graphic: String,
    prizes: Array
  }
}
</script>

<style src='./Prize.module.scss' lang="scss" module/>
