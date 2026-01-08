export default {
  title: 'Components/page information',
};

const Template = () => 
  `<ecl-page-information>This page was last updated on 00 Month 0000</ecl-page-information>`;

export const PageInfo = Template.bind({});
PageInfo.storyName = 'default';
PageInfo.argTypes = {
  color_mode: {
    table: { disable: true },
  },
};