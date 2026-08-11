const getArgs = () => ({
    title: 'Page summary title',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    icon: 'book-open',
    iconFamily: 'phosphor',
  });
  
  const getArgTypes = () => ({
    title: {
      control: 'text',
      description: 'Page summary title',
    },
  
    description: {
      control: 'text',
      description: 'Page summary description',
    },
  
    icon: {
      control: 'text',
      description: 'Icon name (phosphor icon)',
    },

    iconFamily: {
      name: 'icon-family',
      control: 'text',
      description: 'Icon family (phosphor, ecl, etc.)',
    },
  });
  
  export default {
    title: 'Components/page-summary',
  };
  
  const Template = (args) => `
    <ecl-page-summary
      item-title="${args.title}"
      icon="${args.icon}"
      icon-family="${args.iconFamily}"
    >
      ${args.description}
      </ecl-page-summary>
  `;
  
  export const PageSummary = Template.bind({});
  PageSummary.storyName = 'default';
  PageSummary.args = getArgs();
  PageSummary.argTypes = getArgTypes();