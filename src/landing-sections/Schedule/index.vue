<template>
  <Container id="schedule" :block="$style.schedule" as="section">
    <TextComponent type="heading2" transform="uppercase">Schedule</TextComponent>

    <!-- Temp until we fix the schedule
    <TextComponent type="heading4" as="span">Note: We are currently investigating issues with our interactive schedule on Safari and iOS devices. Here is a link to a pdf version of our schedule:</TextComponent><br><br>
    <div style="width: 100%; text-align: center;">
      <Button
          :class="$style.download__button"
          :disabled="disableApply"
          v-on:click.native="scheduleMe()"
      >Download Schedule</Button>
    </div>-->
    <Stack :class="$style.items">
      <li v-for="item in $static.types.edges" :key="item.node.slug" :class="$style.item">
        <span :class="[$style.dot, $style[`dot--color-${eventTypes[item.node.slug]}`]]" />
        <TextComponent type="heading4" as="span">{{ item.node.label }}</TextComponent>
      </li>
    </Stack>
    <TextComponent type="heading4" as="span">Note: We are currently investigating issues with the schedule on Safari and iOS devices. Opening ceremonies will begin at 6pm EST.</TextComponent><br><br>
    <div :class="$style.window">
      <div :class="$style.bar">
        <div :class="$style.dots">
          <div :class="[$style.dot, $style[`dot--small`], $style[`dot--color-pink`]]"/>
          <div :class="[$style.dot, $style[`dot--small`], $style[`dot--color-yellow`]]"/>
          <div :class="[$style.dot, $style[`dot--small`], $style[`dot--color-light`]]"/>
        </div>
        <TextComponent type='body2' color='white' as='span'>
          <strong>event_schedule.xls</strong>
        </TextComponent>
      </div>
      <div :class="$style.frame">
        <div :class="$style.tabs">
          <TextComponent
            v-for="date in Object.keys(eventByDate)"
            type="body1"
            :class="[$style.tab, date === selected && $style[`tab--active`]]"
            @click="selectDate(date)"
            :key="date"
            as="button"
          >{{ formatDate(eventByDate[date]) }}</TextComponent>
        </div>
        <Events :eventTypes="eventTypes" :data="eventByDate[selected]"/>
      </div>
    </div>
  </Container>
</template>

<script>
import TextComponent from "@hackthe6ix/vue-ui/Text";
import Stack from "@hackthe6ix/vue-ui/Stack";
import Button from "@hackthe6ix/vue-ui/Button";
import { Container } from "@components";
import Events from "./Events";
import { SCHEDULE_PATH  } from '@data';

const formatDate = new Intl.DateTimeFormat(`en-US`, {
  weekday: "long",
  month: "short",
  day: "numeric",
}).format;

export default {
  name: `Schedule`,
  computed: {
    eventByDate() {
      return this.$static.events.edges.reduce((acc, { node }) => {
        const k = new Date(node.start).toLocaleDateString();
        if (!acc[k]) acc[k] = [];
        acc[k].push(node);
        return acc;
      }, {});
    },
    selected() {
      return this.eventByDate[this.date]
        ? this.date
        : Object.keys(this.eventByDate)[0];
    },
  },
  methods: {
    formatDate([date]) {
      return formatDate(new Date(date.start));
    },
    selectDate(date) {
      this.date = date;
    },
    scheduleMe() {
      window.open(SCHEDULE_PATH, '_blank');
    },
  },
  data() {
    return {
      date: new Date().toLocaleDateString(),
      eventTypes: {
        "workshop-event": `light`,
        activities: `magenta`,
        networking: `pink`,
        ht6: `yellow`,
      },
    };
  },
  components: {
    Container,
    TextComponent,
    Stack,
    Events,
    Button,
  },
};
</script>

<static-query>
  query {
    types: allContentfulEventType {
      edges {
        node {
          label
          slug
        }
      }
    }
    events: allContentfulEvent(sortBy: "start", order: ASC) {
      edges {
        node {
          label
          category {
            label
            slug
          }
          speakers {
            name
            contact
            organization
            title
          }
          start
          end
          description
          nonRange
        }
      }
    }
  }
</static-query>

<style src='./Schedule.module.scss' module lang="scss"/>
