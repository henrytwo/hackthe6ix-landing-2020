<template>
  <Container id="about" :block="$style.about" as="section">
    <div :class="$style.about__content">
      <h2>ABOUT</h2>
      <p>
        Hack the 6ix is the largest summer student run, not for profit hackathon
        located in the heart of Toronto. Every year, we select 400+ participants from
        a pool of over 1500 remarkable developers, designers, and innovators. We
        believe the diversity and talent of our hackers contribute greatly to the
        success of our event. Now in its sixth iteration, Hack the 6ix has established
        itself as a key player in the Toronto tech ecosystem and provides a platform
        for students to present their ideas of the future.
      </p>
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

<style src="./About.module.scss" lang="scss" module />
