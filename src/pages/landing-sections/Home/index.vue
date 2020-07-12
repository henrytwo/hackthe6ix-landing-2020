<template>
  <Container :block="$style.home" as="section">
    <div :class="$style.home__content">
      <div :class="$style['home__content--left']">
        <div :class="$style['home__sponsor-badge']">
          <img src="@assets/02_Home/Logo_Autocode.svg"> <h4>PRESENTS</h4>
        </div>
        <h1 :class="$style.home__title">HACK THE 6IX</h1>
        <h3 :class="$style.home__date">August 21 to 23, 2020</h3>
        <h2 :class="$style.home__inspiration">We hack to <span :class="$style['home__inspiration--highlight']">profit.</span></h2>
        <Button>PLZ PRESS ME</Button>
        <h4>*Applications close on July 24 at 11:59PM EST</h4>
      </div>
      <div :class="$style['home__content--right']">
        <img :class="$style.home__streetcar" src="@assets/02_Home/Main_Window_Streetcar.gif">
      </div>
    </div>
    <img :class="$style.home__person" src="@assets/02_Home/Main_Person_Laptop.svg">
    <img :class="$style['home__left-leaf']" src="@assets/02_Home/Foreground_Left_Plants.svg">
    <img :class="$style['home__right-leaf']" src="@assets/02_Home/Foreground_Right_Plants.svg">
    <img :class="$style['home__right-leaf']" src="@assets/02_Home/Monstera Plant 1.svg">
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

<style src="./Home.module.scss" lang="scss" module />
