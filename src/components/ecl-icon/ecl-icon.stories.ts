import iconsAllEc from '@ecl/resources-icons/list-phosphor.json';

export default {
  title: 'Components/icon',
};

const Template = (args) => {
  let iconHtml = `<ecl-icon 
      icon="${args.icon}"
      color="${args.color}"
      size="${args.size}"
      flip="${args.flip}"
      family="phosphor"
      rotate="${args.rotate}"
      title="${args.title}"
    ></ecl-icon>`;

    if (args.color === 'inverted') {
      iconHtml = `<div style="background-color: black; padding: 1rem; display: inline-block;">${iconHtml}</div>`;
    }

    return iconHtml;
}

export const Icon = Template.bind({});
Icon.storyName = 'default';
Icon.args = {
  icon: 'x',
  rotate: '',
  flip: '',
  color: 'default',
  size: '2xl',
  title: '',
};
Icon.argTypes = {
  color_mode: { table: { disable: true }},
  icon: {
    type: { name: 'select' },
    options: iconsAllEc,
    description: "Add an icon",
  },
  size: {
    type: { name: 'select' },
    options: ['2xs','xs', 's', 'm', 'l', 'xl', '2xl', 'fluid'],
    description: "icon size",
  },
  color: {
    type: 'select',
    options: ['default', 'primary', 'inverted', 'monochrome'],
    control: {
      labels: {
        '' : 'default',
        primary: 'primary',
        inverted: 'inverted',
        monochrome: 'monochrome',
      },
    },
    mapping: {
      default: '',
      primary: 'primary',
      inverted: 'inverted',
      monochrome: 'monochrome',
    },
    description: "icon color",
  },
  flip: {
    type: { name: 'select' },
    options: [ 'horizontal', 'vertical' ],
  },
  rotate: {
    type: { name: 'select' },
    description: 'Button icon transform',
    options: [
      'none',
      '90',
      '180',
      '270',
    ],
    labels: {
      '': 'none',
      90: '90',
      180: '180',
      270: '270',
    },
  },
  title: {
    name: 'icon title (accessibility)',
    type: { name: 'string' },
  },
};