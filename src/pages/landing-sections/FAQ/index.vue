<template>
  <Container id="faq" :block="faq" as="section" :class="{'faq--show': animate}">
    <h2 class="faq__title">Frequently Asked Questions</h2>
    <div class="faq__content" v-for="section in faq" v-bind:key="section.title">
      <h3 class="faq__content-title">{{ section.title }}</h3>
      <div class="faq__questions">
        <ul class="faq__items faq__items--first">
          <li
              class="faq__item"
              v-for="(q, i) in first(section.items)"
              :style="`transition-delay: ${(i + 1) * 100}ms`"
              v-bind:key="q.title"
          >
            <h4 class="faq__item-title">{{ q.title }}</h4>
            <p class="faq__item-content" v-html="q.content" />
          </li>
        </ul>
        <ul class="faq__items faq__items--second">
          <li
              class="faq__item"
              v-for="(q, i) in second(section.items)"
              :style="`transition-delay: ${(i + 1) * 200}ms`"
              v-bind:key="q.title"
          >
            <h4 class="faq__item-title">{{ q.title }}</h4>
            <p class="faq__item-content" v-html="q.content" />
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
      faq,
      animate: false,
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
