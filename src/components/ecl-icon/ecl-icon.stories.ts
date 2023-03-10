import iconsAllEc from '@ecl/resources-ec-icons/dist/lists/all.json';

export default {
  title: 'Components/icon',
};

const Template = (args) => `<ecl-icon 
                              icon="${args.icon}"
                              color="${args.color}"
                              size="${args.size}"
                              transform="${args.transform}"
                              theme="${args.theme}"
                            ></ecl-icon>`;

export const Icon = Template.bind({});
Icon.storyName = 'default';
Icon.args = {
  icon: 'close',
  transform: '',
  color: 'default',
  size: '2xl',
};
Icon.argTypes = {
  icon: {
    type: { name: 'select' },
    options: iconsAllEc,
    description: "Add an icon",
  },
  size: {
    type: { name: 'select' },
    options: ['2xs','xs', 's', 'm', 'l', 'xl', '2xl'],
    description: "icon size",
  },
  color: {
    type: { name: 'select' },
    options: ['default', 'primary', 'inverted'],
    description: "icon color",
  },
  transform: {
    type: { name: 'select' },
    description: 'Button icon transform',
    options: [
      'rotate-90',
      'rotate-180',
      'rotate-270',
      'flip-horizontal',
      'flip-vertical',
    ],
  },
};