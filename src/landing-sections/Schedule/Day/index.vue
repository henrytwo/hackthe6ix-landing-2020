<template>
  <div :class="$style.container">
    <TextComponent type="heading3">{{ `Day ${index} - ` + label }}</TextComponent>
    <ul :class="$style.list">
      <li
        :class="[
          $style[`item--color-${eventTypes[item.category.slug]}`],
          isDisabled(item.end) && $style[`item--disabled`],
          $style.item,
        ]"
        v-for="(item, i) in data"
        :key="i"
      >
        <TextComponent
          :color="eventTypes[item.category.slug]"
          :class="$style.label"
          type="heading4"
        >
          {{ item.label }}
        </TextComponent>
        <TextComponent
          :color="eventTypes[item.category.slug]"
          type="body2"
        >
          {{ timeFormat(item.start) }} - {{ timeFormat(item.end) }}
        </TextComponent>
        <TextComponent
          :color="eventTypes[item.category.slug]"
          type="body2"
        >
          {{ item.category.label }}
        </TextComponent>
      </li>
    </ul>
  </div>
</template>

<script>
import TextComponent from "@hackthe6ix/vue-ui/Text";
const timeFormat = (date) =>
  new Intl.DateTimeFormat(`en-US`, {
    hour: `numeric`,
    minute: `2-digit`,
    hour12: true,
  }).format(new Date(date));

export default {
  name: `Day`,
  props: {
    data: Array,
    index: Number,
    eventTypes: Object,
  },
  components: {
    TextComponent,
  },
  methods: {
    isDisabled(date) {
      return new Date(date) <= new Date();
    },
    timeFormat,
  },
  computed: {
    label() {
      return new Intl.DateTimeFormat(`en-US`, {
        year: `numeric`,
        day: `numeric`,
        month: `long`,
      }).format(new Date(this.data[0].start));
    },
  },
};
</script>

<style src="./Day.module.scss" lang="scss" module/>