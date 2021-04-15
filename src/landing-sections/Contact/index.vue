<template>
  <Container id="contact" :block="$style.contact" as="section">
    <h2>MORE QUESTIONS?</h2>

    <p>Feel free to send us an email at <a href="mailto:hello@hackthe6ix.com">hello@hackthe6ix.com</a></p>
    <!--
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
    <Button :class="$style.contact__field" :disabled="!formValid || loading" v-on:click.native="submit()">
      Submit
    </Button>
      </div>
      <div>
        <img :class="$style.contact__graphic" src="@assets/07_FAQ/FAQ_Illustration.svg">
      </div>
    </div>
    -->
  </Container>
</template>


<script>
  import formProvider from '@hackthe6ix/vue-ui/utils/mixins/formProvider';
  import { Container } from '@components';
  import { validate, query } from '@utils';
  import Button from '@hackthe6ix/vue-ui/Button';
  import Input from '@hackthe6ix/vue-ui/Input';
  import TextArea from '@hackthe6ix/vue-ui/Textarea';
  import { CONTACT } from '@graphql';

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
        loading: false,
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
      async submit() {
        this.loading = true;
        try {
          await query(CONTACT, {
            email: this.form_data.email,
            name: this.form_data.name,
            message: this.form_data.message
          });
          this.message = 'Thank you for sending us a message! We\'ll get back to you ASAP!';
          this.clearForm();
        } catch (err) {
          alert(
              `Sorry, we couldn't process your message! Please email us at hello@hackthe6ix.com ${err}`);
        }
        this.loading = false;
      },
      clearForm() {
        for (let key of this.validateFields) {
          this.form_data[key] = '';
          this.form_errors[key] = undefined;
        }
      }
    },
    computed: {
      formValid: function () {
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

<style src="./Contact.module.scss" lang="scss" module/>
