<template>
  <div class="container" :is="as" :class="block" :id="id">
    <slot name="before" />
    <div class="container__content" :class="elementClass">
      <slot />
    </div>
    <slot name="after" />
  </div>
</template>

<script>
  export default {
    name: 'Container',
    props: {
      as: String,
      block: String,
      id: String,
    },
    computed: {
      elementClass() {
        const suffix = `${this.block.includes('__') ? '-' : '__'}container`;
        return {
          [this.block + suffix]: this.block,
        };
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~@hackthe6ix/vue-ui/styles/mixins';
  @import '~@hackthe6ix/vue-ui/styles/variables';

  .container {
    @include flex(center);
    box-sizing: border-box;

    &__content {
      max-width: 1625px;
      box-sizing: border-box;

      margin: 0 auto;

      width: 85%;
    }
  }

  @include media(TABLET) {
    .container {
      &__content {
        padding-left: 20px;
        padding-right: 20px;
        width: 95%;
      }
    }
  }

  @include media(PHONE) {
    .container {
      &__content {
        width: 100%;
      }
    }
  }
</style>
