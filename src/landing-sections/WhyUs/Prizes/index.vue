<template>
  <Stack direction='column'>
    <TextComponent
      transform='uppercase'
      type='heading2'
      tag='h2'
    >
      Win prizes
    </TextComponent>
    <TextComponent
      color='yellow'
      type='heading3'
      tag='p'
    >
      There’s something for everyone.
    </TextComponent>
    <Stack>
    </Stack>
  </Stack>
</template>

<script>
import TextComponent from '@hackthe6ix/vue-ui/Text';
import Stack from '@hackthe6ix/vue-ui/Stack';



export default {
  components: {
    TextComponent,
    Stack,
  },
}
</script>

<style src='./Prizes.module.scss' lang="scss" module/>