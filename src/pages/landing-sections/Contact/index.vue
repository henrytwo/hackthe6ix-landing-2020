<template>
  <Container id="contact" :block="$style.contact" as="section">
    <h2>MORE QUESTIONS?</h2>
    <div :class="$style.contact__content">
      <div>
        <Input :class="$style.contact__field" label="Name" name="name" required />
        <Input :class="$style.contact__field" label="Email" name="email" required />
        <TextArea :class="$style.contact__field" rows="12" label="Message" name="message" required />
        <Button :class="$style.contact__field">
          Submit
        </Button>
      </div>
      <div>
        <img :class="$style.contact__graphic" src="@assets/07_FAQ/FAQ_Illustration.svg">
      </div>
    </div>
  </Container>
</template>


<script>
import {Container} from '@components';
import Button from '@hackthe6ix/vue-ui/Button';
import Input from '@hackthe6ix/vue-ui/Input';
import TextArea from '@hackthe6ix/vue-ui/Textarea';

export default {
  components: {
    Container,
    Button,
    Input,
    TextArea
  },
};
</script>

<style src="./Contact.module.scss" lang="scss" module />
