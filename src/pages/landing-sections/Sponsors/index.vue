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
    <div :class="$style.sponsors__box">
      <!-- Placeholder stuff for spacing -->
      <div :class="$style.sponsors__platinum">
        <img src="@assets/05_Sponsors/Sponsor Logos/Sponsor_Autocode.svg">
      </div>
      <div :class="$style.sponsors__gold">
        <img src="@assets/05_Sponsors/Sponsor Logos/Sponsor_Intact.svg">
        <img src="@assets/05_Sponsors/Sponsor Logos/Sponsor_RBC.svg">
      </div>
      <div :class="$style.sponsors__silver">
        <img src="@assets/05_Sponsors/Sponsor Logos/Sponsor_Capital_One.svg">
        <img src="@assets/05_Sponsors/Sponsor Logos/Sponsor_Accenture.svg">
        <img src="@assets/05_Sponsors/Sponsor Logos/Sponsor_Rotman.svg">
        <img src="@assets/05_Sponsors/Sponsor Logos/Sponsor_Scotiabank.svg">
      </div>
      <div :class="$style.sponsors__bronze">
        <img src="@assets/05_Sponsors/Sponsor Logos/Sponsor_1517.svg">
        <img src="@assets/05_Sponsors/Sponsor Logos/Sponsor_Balsamiq.svg">
        <img src="@assets/05_Sponsors/Sponsor Logos/Sponsor_FDM.svg">
        <img src="@assets/05_Sponsors/Sponsor Logos/Sponsor_Geotab.svg">
        <img src="@assets/05_Sponsors/Sponsor Logos/Sponsor_Rogers.svg">
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

<style src="./Sponsors.module.scss" lang="scss" module />
