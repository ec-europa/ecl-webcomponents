const getArgs = () => {
  return {
    variant: 'low',
    label: 'Label',
  };
};

const getArgTypes = () => {
  return {
    color_mode: { table: { disable: true } },
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
  >
    ${args.label}
  </ecl-label>`;

export const Label = Template.bind({});
Label.storyName = 'default';
Label.args = getArgs();
Label.argTypes = getArgTypes();
