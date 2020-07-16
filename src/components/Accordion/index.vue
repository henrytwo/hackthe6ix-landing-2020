<template>
  <component
    :class='$style.container'
    :is='as'
  >
    <slot/>
  </component>
</template>

<script>
export default {
  name: 'Accordion',
  data() {
    return {
      state: this.multiple ? {} : undefined,
    };
  },
  methods: {
    toggle(name) {
      if (this.multiple) {
        this.$set(this.state, name, !this.state[name]);
      } else {
        this.state = this.state === name ? undefined : name;
      }
    },
    isExpanded(name) {
      if (this.multiple) {
        return this.state[name];
      } else {
        return this.state === name;
      }
    }
  },
  props: {
    as: {
      type: String | Object,
      default: 'ul',
    },
    multiple: {
      type: Boolean,
      default: true,
    },
  },
  provide() {
    return {
      isExpanded: this.isExpanded,
      toggle: this.toggle,
    };
  },
}
</script>

<style src='./Accordion.module.scss' lang="scss" module/>