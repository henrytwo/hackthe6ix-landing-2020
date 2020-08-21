<template>
  <div>
    <div :class="$style.reason" v-if="imageX === 'right'">
      <div :class="[$style.reason__text, $style[`reason__text--${vjustify}`]]">
        <h2>{{title}}</h2>
        <p>
          {{text}}
        </p>
      </div>
      <div :class="[$style.reason__graphic, $style['reason__graphic--right']]">
        <img :class="[$style.reason__img, $style[`reason__img--${vjustify}`]]" :src="image" v-on:click="onclick">
      </div>
    </div>
    <div :class="[$style.reason, $style['reason--left']]" v-if="imageX === 'left'">
      <div :class="[$style.reason__graphic, $style['reason__graphic--left']]">
        <img :class="$style.reason__img" :src="image" v-on:click="onclick">
      </div>
      <div :class="[$style.reason__text, $style['reason__text--left'], $style[`reason__text--${vjustify}`]]">
        <h2>{{title}}</h2>
        <p>
          {{text}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      image: String,
      title: String,
      text: String,
      imageX: String,
      vjustify: String,
      onclick: Function
    }
  }
</script>

<style src="./Reason.module.scss" lang="scss" module />
