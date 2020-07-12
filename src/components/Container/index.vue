<template>
  <div :class="[$style.container, block]" :is="as" :id="id">
    <slot name="before" />
    <div :class="[$style.container__content, elementClass]">
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

<style src="./Container.module.scss" lang="scss" module />
