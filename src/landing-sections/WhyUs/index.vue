<template>
  <Container id="whyus" :block="$style.whyus" as="section">
    <div :class="$style.whyus__content">
      <ReasonGroup>
        <Reason
            title="MEET NEW FRIENDS"
            text="Physical distancing is serious, but meeting new people doesn't have to stop.
            Get geared up in your pajamas and chat away behind the safety of your digital
            screen. The only things we'll spread are heart reacts and lols."
            image="04_a_Why_Us_Meet_People/GuyDiscord.svg"
            image-x="right"
        />
        <img :class="[$style['whyus__cloud--1'], $style.whyus__cloud]" src="@assets/04_a_Why_Us_Meet_People/Deco_Right_Sun_Cloud_01.svg">
        <Reason
            title="FIND A TEAM"
            text="The most memorable part of a hackathon are the people we work with. Create
            your own team or find new people to work with. Don't know who to work with?
            We can help with that."
            image="04_a_Why_Us_Meet_People/Container_Find_A_Team.svg"
            image-x="left"
            vjustify="bottom"
        />
        <img :class="[$style['whyus__cloud--2'], $style.whyus__cloud]" src="@assets/04_a_Why_Us_Meet_People/Deco_Left_Cloud_01.svg">
        <img :class="[$style['whyus__cloud--3'], $style.whyus__cloud]" src="@assets/04_a_Why_Us_Meet_People/Deco_Left_Cloud_02.svg">
      </ReasonGroup>
      <ReasonGroup>
        <Reason
            title="MAKE MEMORIES"
            text="Work hard, play hard. Share a few laughs with your teammates throughout the
            weekend. We guarantee it ll increase your synergy +10."
            image="04_b_Why_Us-Make_Connections/Container_Make_Memories.svg"
            image-x="right"
        />
        <img :class="[$style['whyus__cloud--4'], $style.whyus__cloud]" src="@assets/04_b_Why_Us-Make_Connections/Deco_Right_Cloud_03.svg">
        <Reason
            title="BUILD CONNECTIONS"
            text="Hackathons are an amazing place to meet mentors and industry professionals
            in the tech community. A pandemic won t stop us from fostering important
            conversations."
            image="04_b_Why_Us-Make_Connections/Container_Build_Connections.svg"
            image-x="left"
            vjustify="bottom"
        />
        <img :class="[$style['whyus__cloud--5'], $style.whyus__cloud]" src="@assets/04_b_Why_Us-Make_Connections/Deco_Right_Cloud_04.svg">
      </ReasonGroup>
      <ReasonGroup>
        <Reason
            title="LEARN, PRACTICE, CREATE"
            text="We value sharing knowledge and applying the things we learned. We'll be
            hosting live workshops all weekend to give you the inspiration you need to get
            your project off the ground."
            image="04_c_Why_Us_Learn_Create/Container_Attend_live_workshops.svg"
            image-x="right"
        />
        <img :class="[$style['whyus__cloud--6'], $style.whyus__cloud]" src="@assets/04_c_Why_Us_Learn_Create/Deco_Right_Cloud_05.svg">
        <img :class="[$style['whyus__cloud--7'], $style.whyus__cloud]" src="@assets/04_c_Why_Us_Learn_Create/Deco_Left_Cloud_03.svg">
        <Reason
            title="COMPLETE A PROJECT"
            text="Show us. Show the world. We want to see what you're capable of and so does
            everyone else!"
            image="04_c_Why_Us_Learn_Create/Container_Complete_a_project.svg"
            image-x="left"
            vjustify="bottom"
        />
      </ReasonGroup>

      <img :class="[$style['whyus__cloud--8'], $style.whyus__cloud]" src="@assets/04_d_Why_Us_Win_Prizes/Deco_Left_Cloud_04.svg">
      <img :class="[$style['whyus__cloud--9'], $style.whyus__cloud]" src="@assets/04_d_Why_Us_Win_Prizes/Deco_Right_Cloud_06.svg">
      <img :class="[$style['whyus__cloud--10'], $style.whyus__cloud]" src="@assets/04_d_Why_Us_Win_Prizes/Deco_Right_Cloud_07.svg">
      <Prizes />
    </div>
  </Container>
</template>

<script>
import {Container} from '@components';
import Reason from './Reason/index.vue';
import Prizes from './Prizes/index.vue';
import ReasonGroup from './ReasonGroup/index.vue';
import Button from '@hackthe6ix/vue-ui/Button';

export default {
  components: {
    Container,
    Button,
    Reason,
    ReasonGroup,
    Prizes
  }
}
</script>

<style src="./WhyUs.module.scss" lang="scss" module />
