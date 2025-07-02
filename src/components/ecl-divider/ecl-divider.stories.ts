const getArgTypes = () => ({
  color_mode: { table: { disable: true } },
});

export default {
  title: 'Components/divider',
};

const Template = args =>
  `<ecl-divider theme="${args.theme}"></ecl-divider>`;

export const divider = Template.bind({});
divider.storyName = 'default';
divider.argTypes = getArgTypes();
