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
        <h2 :class="$style.home__inspiration">We hack to <span :class="$style['home__inspiration--highlight']">{{inspiration}}</span></h2>
        <Button
          :disabled="disableApply"
          v-on:click.native="apply()"
        >{{applyButtonMessage}}</Button>
        <h4>*Applications close on July 24 at 11:59PM EST</h4>
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

export default {
  components: {
    Container,
    Button
  },
  methods: {
    apply() {
      window.open(this.applyLink);
    },
    incrementWord() {
      if (this.inspirationIndex === this.inspirationWords.length - 1) {
        this.inspirationIndex = 0;
      } else {
        this.inspirationIndex++;
      }
    },
    eraseWord(callback) {
      const wordLength = this.inspiration.length;
      const charPerSecond = wordLength ? this.typingTime / wordLength : 0;
      let i = wordLength - 1;

      const eraseChar = () => {
        if (i > -1) {
          this.inspiration = this.inspiration.substring(0, i);
          i--;

          setTimeout(eraseChar, charPerSecond);
        } else {
          callback();
        }
      };

      eraseChar()
    },
    type(word, callback) {
      const wordLength = word.length;
      const charPerSecond = this.typingTime / wordLength;
      let i = 0;

      const writeChar = () => {
        if (i < wordLength) {
          this.inspiration += word.charAt(i);
          i++;

          setTimeout(writeChar, charPerSecond);
        } else {
          callback();
        }
      };

      writeChar();
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
  mounted() {
    this.timer = window.setInterval(() => {

      this.eraseWord(() => {
        const currentWord = this.inspirationWords[this.inspirationIndex];

        this.type(currentWord, () => {
          this.incrementWord();
        });
      });

    }, 2 * this.typingTime + this.timeBeforeErase);
  },
  destroyed() {
    clearInterval(this.timer);
  },
  props: {
    disableApply: Boolean,
    applyButtonMessage: String,
    applyLink: String
  }
}
</script>

<style src="./Home.module.scss" lang="scss" module />
