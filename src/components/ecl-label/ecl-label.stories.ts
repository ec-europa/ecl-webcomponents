const getArgs = () => {
  return {
    variant: 'low',
    label: 'Label',
  };
};

const getArgTypes = () => {
  return {
    variant: {
      type: { name: 'select' },
      options: ['low', 'medium', 'high', 'highlight'],
      description: 'Label variant',
    },
    label: {
      type: { name: 'string' },
      description: 'Label to be shown',
    },
  };
};

export default {
  title: 'Components/label',
};

const Template = args =>
`<ecl-label
  variant="${args.variant}"
  theme="${args.theme}"
>
  ${args.label}
</ecl-label>`;

export const Label = Template.bind({});
Label.storyName = 'default';
Label.args = getArgs();
Label.argTypes = getArgTypes();
