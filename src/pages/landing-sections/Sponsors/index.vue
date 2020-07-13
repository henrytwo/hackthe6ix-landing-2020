<template>
  <Container id="sponsors" :block="$style.sponsors" as="section">
    <img :class="$style.sponsors__leaf" src="@assets/05_Sponsors/Deco_Plants_01.svg">
    <div>
      <h2>MEET OUR SPONSORS</h2>
      <p>
        Connect with our sponsors that made this event possible! We will provide a virtual space for both hackers
        and sponsors to interact and get involved. Stay tuned for future sponsorship additions.
      </p>
      <p>
        Interested in sponsoring our event? Contact us at <a href="mailto:sponsors@hackthe6ix.com">sponsors@hackthe6ix.com</a>
      </p>
      <Button>
        BECOME A SPONSOR
      </Button>
    </div>
    <ul
        :class="$style.sponsor__items"
        v-for="(category, i) in categories"
        v-bind:key="i"
    >
      <li
          :class="$style.sponsor__item"
          :style="
          `max-width: ${100 - 20 * i}%; transition-delay: ${(i + 1) * 200}ms`
        "
          v-for="sponsor in category"
          v-bind:key="sponsor.title"
      >
        <a :class="$style.sponsor__link" :href="sponsor.url" target="_blank">
          <img
              :class="$style.sponsor__image"
              :alt="sponsor.title + ' logo'"
              :src="sponsor.image"
              :width="sponsor.size"
          />
        </a>
        <a :href="sponsor.sublink"
        ><h3 style="margin:0;" :class="$style.sponsor__text">
          {{ sponsor.subtext }}
        </h3></a
        >
      </li>
    </ul>
  </Container>
</template>

<script>
import {Container} from '@components';
import {sponsors} from '@data';
import Button from '@hackthe6ix/vue-ui/Button';

export default {
  components: {
    Container,
    Button
  },
  data() {
    return {
      sponsors
    }
  },
  computed: {
    categories() {
      let prev;
      return this.sponsors.reduce((acc, curr) => {
        if (prev !== curr.size) {
          acc.push([]);
          prev = curr.size;
        }

        const len = acc.length - 1;
        acc[len].push(curr);
        return acc;
      }, []);
    },
  },
}
</script>

<style src="./Sponsors.module.scss" lang="scss" module />
