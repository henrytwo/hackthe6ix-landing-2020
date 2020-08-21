<template>
  <Container id="home" :block="$style.home" as="section">
    <div :class="$style.home__content">
      <div :class="$style['home__content--left']">
        <div :class="$style['home__sponsor-badge']">
          <img src="@assets/02_Home/Logo_Autocode.svg"> <h4 :class="$style['home__sponsor-badge--and']">+</h4>
          <img src="@assets/02_Home/Logo_Microsoft.svg"  :class="$style['home__sponsor-badge--microsoft']"> <h4 :class="$style['home__sponsor-badge--presents']">PRESENTS</h4>
        </div>
        <h1 :class="$style.home__title">HACK THE 6IX</h1>
        <h3 :class="$style.home__date">August 21 to 23, 2020</h3>
        <h2 :class="$style.home__inspiration">We hack to <ClientOnly><vue-typer :class="$style['home__inspiration--highlight']" :text="this.inspirationWords"   :repeat='Infinity'
                                                                    :shuffle='false'
                                                                    initial-action='erasing'
                                                                    :pre-type-delay='70'
                                                                    :type-delay='70'
                                                                    :pre-erase-delay='2000'
                                                                    :erase-delay='50'
                                                                    erase-style='backspace'
                                                                    :erase-on-complete='false'
                                                                    caret-animation='blink'></vue-typer>
          </ClientOnly>
        </h2>
        <!--
        <Button
          :disabled="disableApply"
          v-on:click.native="apply()"
        >{{applyButtonMessage}}</Button>-->
        <Button
            v-on:click.native="schedule()"
        >View Schedule</Button>
        <h4>*Applications close on July 31 at 11:59PM EST</h4>
      </div>
      <div :class="$style['home__content--right']">
        <img :class="$style.home__streetcar" src="@assets/02_Home/Main_Window_Streetcar.gif">
      </div>
    </div>
  </Container>
</template>

<script>
import {Container} from '@components';
import Button from '@hackthe6ix/vue-ui/Button';
import {INSPIRATION} from "@data";
import {scrollTo} from '@utils';
import { SCHEDULE_PATH } from '@data';

export default {
  components: {
    Container,
    Button,
    VueTyper: () => import('vue-typer').then(m => m.VueTyper).catch()
  },
  methods: {
    apply() {
      window.open(this.applyLink);
    },
    schedule() {
      window.open(SCHEDULE_PATH, '_blank');
      //scrollTo('schedule')
    }
  },
  data() {
    return {
      inspiration: INSPIRATION[0],
      inspirationWords: INSPIRATION,
      inspirationIndex: 1,
      timeBeforeErase: 2000,
      typingTime: 500,
      timer: undefined
    }
  },
  props: {
    disableApply: Boolean,
    applyButtonMessage: String,
    applyLink: String
  }
}
</script>

<style src="./Home.module.scss" lang="scss" module />
