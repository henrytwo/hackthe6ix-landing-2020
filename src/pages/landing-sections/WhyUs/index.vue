<template>
  <Container id="whyus" :block="$style.whyus" as="section">
    <div :class="$style.whyus__content">
      <div :class="$style.whyus__group">
        <div :class="$style['whyus__leftimg--left']">
          <h2>MEET NEW FRIENDS</h2>
          <p>
            Physical distancing is serious, but meeting new people doesn t have to stop.
            Get geared up in your pajamas and chat away behind the safety of your digital
            screen. The only things we ll spread are heart reacts and lols.
          </p>
        </div>
        <div :class="$style['whyus__leftimg--right']">
          <img src="@assets/04_a_Why_Us_Meet_People/Guy 1.svg">
          <img :class="$style.whyus__discord" src="@assets/04_a_Why_Us_Meet_People/Container_Meet_New_Friends.svg">
          <img :class="$style.whyus__arm" src="@assets/04_a_Why_Us_Meet_People/Arm (Guy).svg">
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import {Container} from '@components';
import Button from '@hackthe6ix/vue-ui/Button';

export default {
  components: {
    Container,
    Button
  },
  methods: {
    apply() {
      document.location.href = this.applyLink;
    }
  },
  props: {
    disableApply: Boolean,
    applyButtonMessage: String,
    applyLink: String
  }
}
</script>

<style src="./WhyUs.module.scss" lang="scss" module />
