<template>
  <Container id="schedule" :block="$style.schedule" as="section">
    <div :class="$style.header">
      <div :class="$style.heading">
        <TextComponent type="heading2" transform="uppercase">Schedule</TextComponent>
        <Stack :class="$style.items">
          <li v-for="item in $static.types.edges" :key="item.node.slug" :class="$style.item">
            <span :class="[$style.dot, $style[`dot--color-${eventTypes[item.node.slug]}`]]" />
            <TextComponent type="heading4" as="span">{{ item.node.label }}</TextComponent>
          </li>
        </Stack>
      </div>
      <div :class="$style.text">
        <TextComponent type="body2">* The schedule is in Eastern Time</TextComponent>
        <a
          href="https://calendar.google.com/calendar?cid=dDgyZjc2MHRmdXU1c2JiODI2ZGFyZDZrcDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
          target="_blank"
          rel="noreferrer noopener"
        >
          Add to your calendar
        </a>
      </div>
    </div>
    <div :class="$style.window">
      <div :class="$style.bar">
        <div :class="$style.dots">
          <div :class="[$style.dot, $style[`dot--small`], $style[`dot--color-pink`]]" />
          <div :class="[$style.dot, $style[`dot--small`], $style[`dot--color-yellow`]]" />
          <div :class="[$style.dot, $style[`dot--small`], $style[`dot--color-light`]]" />
        </div>
        <TextComponent type="body2" color="white" as="span">
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
        <Events :eventTypes="eventTypes" :data="eventByDate[selected]" />
      </div>
    </div>
  </Container>
</template>

<script>
import TextComponent from "@hackthe6ix/vue-ui/Text";
import Button from "@hackthe6ix/vue-ui/Button";
import Stack from "@hackthe6ix/vue-ui/Stack";
import { Container } from "@components";
import { SCHEDULE_PATH } from "@data";
import Events from "./Events";

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
      window.open(SCHEDULE_PATH, "_blank");
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
