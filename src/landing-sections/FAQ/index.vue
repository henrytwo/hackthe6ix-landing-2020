<template>
  <Container id="faq" as="section">
    <TextComponent
      transform='uppercase'
      type='heading2'
    >
      {{$static.data.edges[0].node.title}}
    </TextComponent>
    <Accordion :class='$style.questions'>
      <AccordionItem
        v-for='item in $static.data.edges[0].node.faqs'
        :name='item.slug'
        :key='item.slug'
      >
        <template v-slot:label>
          <TextComponent
            type='heading3'
            color='black'
          >
            {{ item.question }}
          </TextComponent>
        </template>
        <template v-slot:content>
          <Renderer :data='item.answer'/>
        </template>
      </AccordionItem>
    </Accordion>
  </Container>
</template>

<script>
import {Container, Accordion, AccordionItem} from '@components';
import TextComponent from '@hackthe6ix/vue-ui/Text';

export default {
  components: {
    AccordionItem,
    TextComponent,
    Accordion,
    Container,
    Renderer: {
      functional: true,
      render: (h, ctx) => {
        const links = [];
        const text = ctx.props.data
          .replace(/\[.*\]\(.*\)/g, i => {
            links.push(i.slice(1, -1).split(']('));
            return '%LINK%';
          })
          .split('%LINK%');

        return h(TextComponent, { props: { type: 'body1' } },
          text.map((t, i) => i ? [
            h('span', t),
            h('a', { attrs: { href: links[i-1][1] } }, links[i-1][0]),
          ] : h('span', t)).flat(),
        );
      },
    }
  },
};
</script>

<static-query>
  {
    data: allContentfulFrequentlyAskedQuestions(
      filter: { slug: { eq: "faq" } }
    ) {
      edges {
        node {
          title
          slug
          faqs {
            question
            answer
            slug
          }
        }
      }
    }
  }
</static-query>

<style src="./FAQ.module.scss" lang="scss" module />
