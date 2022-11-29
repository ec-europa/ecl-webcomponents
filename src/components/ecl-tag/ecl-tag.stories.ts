const getArgs = () => {
  return {
    variant: 'display',
    url: '',
    external: '',
    ariaLabel: 'aria label',
  };
};

const getArgTypes = () => {
  return {
    variant: {
      type: { name: 'select' },
      options: ['link', 'removable', 'display'],
      description: "Tag variant"
    },
    external: {
      name: 'external',
      type: { name: 'boolean' },
      description: "When the link is external"
    },
    ariaLabel: {
      name: 'aria label',
      type: { name: 'string' },
      description: 'To improve accessibility',
    }
  };
};

export default {
  title: 'Components/tag',
};

const Template = (args) => 
`<ecl-tag
  variant="${args.variant}"
  theme="${args.theme}"
  url="${args.url}"
  aria-label="${args.ariaLabel}"
  external="${args.external}"
>
  An ECL tag
</ecl-tag>`;

export const Tag = Template.bind({});
Tag.storyName = 'default';
Tag.args = getArgs();
Tag.argTypes = getArgTypes();