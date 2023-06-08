import iconsAllEc from '@ecl/resources-ec-icons/dist/lists/all.json';

const getArgs = () => {
  return {
    variant: 'default',
    path: '/example',
    external: false,
    label: 'An ECL link',
    icon: '',
    iconPosition: 'after',
    iconTransform: '',
  };
};

const getArgTypes = () => {
  return {
    variant: {
      type: { name: 'select' },
      options: ['default', 'standalone', 'cta', 'primary', 'secondary', 'negative'],
      description: "Link variant"
    },
    label: {
      type: { name: 'string' },
      description: "Link label"
    },
    external: {
      type: { name: 'boolean' },
      description: "When the link is external"
    },
    path: {
      name: 'path/url',
      type: { name: 'string' },
      description: 'Path or Url to link to',
    },
    icon: {
      name: 'icon',
      type: { name: 'select' },
      options: iconsAllEc,
      description: "Add an icon",
    },
    iconPosition: {
      name: 'icon position',
      type: { name: 'select' },
      options: ['before', 'after'],
      description: 'Before or after the link label',
    },
    iconTransform: {
      name: 'icon transform',
      type: { name: 'select' },
      description: 'Link icon transform',
      options: [
        'rotate-90',
        'rotate-180',
        'rotate-270',
        'flip-horizontal',
        'flip-vertical',
      ],
    },
  };
};

export default {
  title: 'Components/Navigation/link',
};

const Template = (args) => 
  `<ecl-link
    variant="${args.variant}"
    theme="${args.theme}"
    path="${args.path}"
    external="${args.external}"
  >
  ${args.icon && args.iconPosition === 'before' ?
    `<ecl-icon 
      slot="icon-before"
      icon="${args.icon}"
      transform="${args.iconTransform}"
      theme="${args.theme}"
    >
    </ecl-icon>` : '' }
      ${args.label}
  ${args.icon && args.iconPosition === 'after' ?
    `<ecl-icon 
      slot="icon-after"
      icon="${args.icon}"
      theme="${args.theme}"
      transform="${args.iconTransform}"
    >
    </ecl-icon>` : '' }
  </ecl-link>`;

export const Link = Template.bind({});
Link.storyName = 'default';
Link.args = getArgs();
Link.argTypes = getArgTypes();
