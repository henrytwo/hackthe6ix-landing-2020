<template>
  <component
    :class='$style.container'
    :is='as'
  >
    <button :class='$style.button' @click='toggle(name)'>
      <div :class='$style.text'>
        <slot name='label'/>
      </div>
      <Icon name='angle-down' :class='[$style.icon, expanded && $style[`icon--expanded`]]'/>
    </button>
    <div :class='[$style.content, expanded && $style[`content--expanded`]]'>
      <slot name='content'/>
    </div>
  </component>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/angle-down';

export default {
  name: 'AccordionItem',
  components: {
    Icon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    as: {
      type: String | Object,
      default: 'li',
    },
  },
  computed: {
    expanded() {
      return this.isExpanded(this.name);
    }
  },
  inject: [
    'isExpanded',
    'toggle',
  ],
}
</script>

<style src='./AccordionItem.module.scss' lang="scss" module/>