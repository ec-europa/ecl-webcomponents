const getArgs = () => ({
  title: 'Highlighted information',
  titleIcon: 'arrow-right',
  description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  hasDescription: true,
  linkLabel: 'Read more',
  linkPath: '/example.html',
  linkIcon: 'arrow-right',
});

const getArgTypes = () => ({
  title: {
    type: { name: 'string' },
    description: 'Optional box heading',
    control: { type: 'text' },
  },
  titleIcon: {
    name: 'Icon for the title',
    type: { name: 'string' },
    description: 'Optional title icon',
    control: { type: 'text' },
  },
  description: {
    name: 'description',
    type: { name: 'string' },
    description: 'Optional box body',
    control: { type: 'text' },
    if: { arg: 'hasDescription', truthy: true },
  },
  hasDescription: {
    name: 'has-description',
    type: { name: 'boolean' },
    description: 'With descripotion',
    control: { type: 'boolean' },
  },
  linkPath: {
    name: 'Path of the link',
    type: { name: 'string' },
    description: 'Optional link path',
    control: { type: 'text' },
  },
  linkLabel: {
    name: 'Label of the link',
    type: { name: 'string' },
    description: 'Optional link label',
    control: { type: 'text' },
  },
  linkIcon: {
    name: 'Icon for the link',
    type: { name: 'string' },
    description: 'Optional link icon',
    control: { type: 'text' },
  },
});

export default {
  title: 'Components/highlight box',
  argTypes: getArgTypes(),
  args: getArgs(),
};

const Template = (args) => {
  return `<ecl-highlight-box
            item-title="${args.title}"
            title-icon="${args.titleIcon}"
            color-mode="${args.color_mode}"
            has-description="${args.hasDescription}"
            link-label="${args.linkLabel}"
            link-path="${args.linkPath}"
            link-icon="${args.linkIcon}"
            icon="${args.icon}"
            link-icon="${args.linkIcon}"
          >
            ${args.description}
          </ecl-highlight-box>`;
};

export const Default = Template.bind({});
Default.args = getArgs();
Default.storyName = 'Default';
