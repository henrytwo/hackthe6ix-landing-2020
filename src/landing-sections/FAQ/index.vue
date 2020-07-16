<template>
  <Container id="faq" :block="$style.faq" as="section">
    <h2>Frequently Asked Questions</h2>
    <div :class="$style.faq__content" v-for="section in faq" v-bind:key="section.title">
      <h3 :class="$style.faq__content-title">{{ section.title }}</h3>
      <div :class="$style.faq__questions">
        <ul :class="[$style.faq__items, $style['faq__items--first']]">
          <li
              :class="$style.faq__item"
              v-for="(q, i) in first(section.items)"
              :style="`transition-delay: ${(i + 1) * 100}ms`"
              v-bind:key="q.title"
          >
            <h4 :class="$style['faq__item-title']">{{ q.title }}</h4>
            <p class="$style['faq__item-content']" v-html="q.content" />
          </li>
        </ul>
        <ul :class="[$style.faq__items, $style['faq__items--second']]">
          <li
              :class="$style.faq__item"
              v-for="(q, i) in second(section.items)"
              :style="`transition-delay: ${(i + 1) * 200}ms`"
              v-bind:key="q.title"
          >
            <h4 :class="$style['faq__item-title']">{{ q.title }}</h4>
            <p class="$style['faq__item-content']" v-html="q.content" />
          </li>
        </ul>
      </div>
    </div>
  </Container>
</template>


<script>
import {Container} from '@components';
import {faq} from '@data';

export default {
  components: {
    Container,
  },
  data() {
    return {
      faq
    };
  },
  methods: {
    first(list) {
      return list.slice(0, Math.ceil(list.length / 2));
    },
    second(list) {
      return list.slice(Math.ceil(list.length / 2));
    },
  },
};
</script>

<style src="./FAQ.module.scss" lang="scss" module />
