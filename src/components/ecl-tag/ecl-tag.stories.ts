import { randomizedLink } from "../../utils/randomizedLink"; 

const getArgs = () => {
  return {
    variant: 'link',
    noWrap: false,
    url: randomizedLink('/example.html'),
    external: false,
    ariaLabel: 'aria label',
  };
};

const getArgTypes = () => {
  return {
    variant: {
      type: { name: 'select' },
      options: ['link', 'removable'],
      description: "Tag variant"
    },
    noWrap: {
      name: 'no-wrap',
      type: { name: 'boolean' },
      description: "Keep the tag in one line",
    },
    url: {
      type: { name: 'string' },
      description: "Link url",
      if: { arg: 'variant', eq: 'link' },
    },
    external: {
      name: 'external',
      type: { name: 'boolean' },
      description: "When the link is external",
      if: { arg: 'variant', eq: 'link' },
    },
    ariaLabel: {
      name: 'aria label',
      type: { name: 'string' },
      description: 'To improve accessibility',
      if: { arg: 'variant', eq: 'removable' },
    }
  };
};

export default {
  title: 'Components/tag',
  parameters: {
    badges: [
      'updated',
    ],  
  },
};

const Template = (args) => 
`<ecl-tag
  variant="${args.variant}"
  url="${args.url}"
  color-mode="${args.color_mode}"
  aria-label="${args.ariaLabel}"
  external=${args.external}
  no-wrap="${args.noWrap}"
>
  An ECL tag
</ecl-tag>`;

export const Tag = Template.bind({});
Tag.storyName = 'default';
Tag.args = getArgs();
Tag.argTypes = getArgTypes();

const TagSetTemplate = (args) => 
`<ecl-tag-set color-mode="${args.color_mode}">
  <ecl-tag
    variant="link"
    url="/example.html"
  >
    An ECL tag
  </ecl-tag>
  <ecl-tag
    variant="removable"
  >
    ECL tag removable
  </ecl-tag>
  <ecl-tag
    variant="removable"
  >
    One more ECL tag
  </ecl-tag>
  <ecl-tag
    variant="link"
    url="/example.html"
  >
    An ECL link tag
  </ecl-tag>
</ecl-tag-set>`;

export const TagSet = TagSetTemplate.bind({});
TagSet.storyName = 'tag set';
