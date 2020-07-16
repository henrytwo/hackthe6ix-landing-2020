<template>
  <Container id="about" :block="$style.about" as="section">
    <img :class="[$style.about__cloud, $style['about__cloud--1']]" src="@assets/03_About/Deco_Right_Cloud_01.svg">
    <img :class="[$style.about__cloud, $style['about__cloud--2']]" src="@assets/03_About/Deco_Right_Cloud_02.svg">
    <div :class="$style.about__content">
      <div :class="$style.about__top">
        <div :class="$style['about__top--left']">
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
        <div :class="$style['about__top--right']">
          <img :class="$style['about__video-frame']" src="@assets/03_About/Overlay_Past_Events_Video.svg">

          <iframe :class="$style['about__video-embed']" src="https://www.youtube.com/embed/lWoENI9-Bl4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div>
      <h3 :class="$style.about__serious">We're serious about making great events.</h3>
      <h4 :class="$style.about__attracted">LAST YEAR WE ATTRACTED</h4>
    </div>
    <div :class="$style.about__stats">
      <div :class="$style['about__stats--left']">
        <img src="@assets/03_About/Container_400_Hackers.svg">
      </div>
      <div :class="$style['about__stats--right']">
        <img src="@assets/03_About/Container_1k_Applicants.svg">
      </div>
      <div :class="$style['about__stats--left']">
        <img src="@assets/03_About/Container_80_Projects.svg">
      </div>
      <div :class="$style['about__stats--right']">
        <img src="@assets/03_About/Container_30k_Prizes.svg">
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
  }
}
</script>

<style src="./About.module.scss" lang="scss" module />
