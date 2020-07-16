<template>
  <Container id="contact" :block="$style.contact" as="section">
    <h2>MORE QUESTIONS?</h2>
    <div :class="$style.contact__content">
      <div>
        <Input
          :class="$style.contact__field"
          label="Name"
          name="name"
          :validate="val => val.length === 0 && 'Name is required'"
          required />
        <Input
          :class="$style.contact__field"
          label="Email"
          name="email"
          :validate="val => (val.length === 0 && 'Email is required') || (!validate(val, 'email') && 'Invalid email')"
          required />
        <TextArea
          :class="$style.contact__field"
          :rows="12"
          label="Message"
          name="message"
          :validate="val => val.length === 0 && 'Message is required'"
          required />
        <p>{{message}}</p>
        <Button :class="$style.contact__field" :disabled="!formValid" v-on:click.native="submit()">
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
import formProvider from '@hackthe6ix/vue-ui/utils/mixins/formProvider';
import {Container} from '@components';
import {validate} from '@utils/validate';
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
  data() {
    return {
      message: '',
      validate,
      validateFields: [
          'name',
          'email',
          'message'
      ]
    }
  },
  mixins: [
    formProvider({
      'name': '',
      'email': '',
      'message': ''
    })
  ],
  methods: {
    submit() {
      this.message = 'Thank you for sending us a message! We\'ll get back to you ASAP!';
      this.clearForm();
      alert('wow you submitted!')
    },
    clearForm() {
      for (let key of this.validateFields) {
        this.form_data[key] = '';
      }
    }
  },
  computed: {
    formValid: function() {
      for (let key of this.validateFields) {
        if (this.form_errors[key] !== false) {
          return false;
        }
      }

      return true;
    }
  }
};
</script>

<style src="./Contact.module.scss" lang="scss" module />
