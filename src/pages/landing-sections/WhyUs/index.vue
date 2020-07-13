<template>
  <Container id="whyus" :block="$style.whyus" as="section">
    <div :class="$style.whyus__content">

      <!-- Should make a component here -->

      <!-- Meet meet new friends -->
      <Reason
          title="MEET NEW FRIENDS"
          text="Physical distancing is serious, but meeting new people doesn't have to stop.
            Get geared up in your pajamas and chat away behind the safety of your digital
            screen. The only things we'll spread are heart reacts and lols."
          image="04_a_Why_Us_Meet_People/GuyDiscord.svg"
          image-x="right"
          />

      <!-- Find a team -->
      <Reason
          title="FIND A TEAM"
          text="The most memorable part of a hackathon are the people we work with. Create
            your own team or find new people to work with. Don't know who to work with?
            We can help with that."
          image="04_a_Why_Us_Meet_People/Container_Find_A_Team.svg"
          image-x="left"
          vjustify="bottom"
      />

    </div>
  </Container>
</template>

<script>
import {Container} from '@components';
import Reason from './Reason/index';
import Button from '@hackthe6ix/vue-ui/Button';

export default {
  components: {
    Container,
    Button,
    Reason
  }
}
</script>

<style src="./WhyUs.module.scss" lang="scss" module />
