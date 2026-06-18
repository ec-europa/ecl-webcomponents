const getArgs = () => ({
  items: JSON.stringify([
    'GENERATE YOUR OWN ENERGY',
    'SAVE TOGETHER',
    'LOWER YOUR BILLS',
    'Sustainability and inclusion',
    'Creating opportunities'
  ]),
});

const getArgTypes = () => ({
  items: {
    name: 'items',
    type: { name: 'string' },
    description: 'JSON array of items to show: ["one","two"]',
    control: { type: 'text' },
  },
});

export default {
  title: 'Components/slogan ticker',
  argTypes: getArgTypes(),
  args: getArgs(),
};

const Template = (args) => {
  return `<ecl-slogan-ticker
            items='${args.items}'
            color-mode="${args.color_mode}"
          ></ecl-slogan-ticker>`;
};

export const Default = Template.bind({});
Default.args = getArgs();
Default.storyName = 'Default';
