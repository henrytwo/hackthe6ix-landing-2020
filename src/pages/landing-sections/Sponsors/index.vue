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

<style src="./Sponsors.module.scss" lang="scss" module />
