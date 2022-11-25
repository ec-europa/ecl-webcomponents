import iconsAllEc from '@ecl/resources-ec-icons/dist/lists/all.json';

const getArgs = () => {
  return {
    label: 'Button label',
    type: 'primary',
    icon: '',
    iconPosition: 'after',
    iconTransform: '',
  };
};

const getArgTypes = () => {
  return {
    type: {
      name: 'button variant',
      type: { name: 'select' },
      options: ['primary', 'secondary', 'ghost', 'call'],
      description: "Button variant"
    },
    label: {
      name: 'button label',
      type: { name: 'string'},
      description: 'The text in the button',
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
      description: 'Before or after the button label',
    },
    iconTransform: {
      name: 'icon transform',
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
};

export default {
  title: 'Components/button',
};

const Template = (args) => 
`<ecl-button
  type="${args.type}"
  data-ecl-button-icon
  theme="${args.theme}"
>
${args.icon && args.iconPosition === 'before' ?
  `<ecl-icon 
    slot="icon-before"
    icon="${args.icon}"
    transform="${args.iconTransform}"
    theme="${args.theme}"
    style-class="ecl-button__icon ecl-button__icon--before"
  >
  </ecl-icon>` : ''}
    ${args.label}
  ${args.icon && args.iconPosition === 'after' ?
    `<ecl-icon 
      slot="icon-after"
      icon="${args.icon}"
      theme="${args.theme}"
      transform="${args.iconTransform}"
      style-class="ecl-button__icon ecl-button__icon--after"
  >
  </ecl-icon>` : ''}
</ecl-button>`;

export const Button = Template.bind({});
Button.storyName = 'default';
Button.args = getArgs();
Button.argTypes = getArgTypes();