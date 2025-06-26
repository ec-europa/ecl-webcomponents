import iconsAllEc from '@ecl/resources-ec-icons/dist/lists/all.json';

const getArgs = () => {
  return {
    label: 'Button label',
    type: 'button',
    variant: 'primary',
    icon: '',
    iconPosition: 'after',
    iconTransform: '',
    hideLabel: false,
    indicator: false,
    indicatorValue: 3,
  };
};

const getArgTypes = () => {
  return {
    color_mode: { table: { disable: true } },
    variant: {
      name: 'button variant',
      type: { name: 'select' },
      options: ['primary', 'secondary', 'ghost', 'call'],
      description: "Button variant"
    },
    type: {
      name: 'button type',
      type: { name: 'select' },
      options: ['button', 'submit'],
      description: "Button type"
    },
    label: {
      name: 'button label',
      type: { name: 'string'},
      description: 'The text in the button',
    },
    hideLabel: {
      name: 'Icon only',
      type: { name: 'boolean'},
      description: 'Hides the label (not for screen-readers)',
      if: { arg: 'icon', truthy: true },
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
    indicator: {
      name: 'indicator',
      type: { name: 'boolean' },
      description: 'Show an indicator (only visible when label is hidden and icon exists)',
      if: { arg: 'icon', truthy: true },
    },
    indicatorValue: {
      name: 'indicator value',
      type: { name: 'number' },
      description: 'Value of the indicator (only visible when showIndicator is true)',
      if: { arg: 'showIndicator', truthy: false },
    },
  };
};

export default {
  title: 'Components/button',
};

const Template = (args) => {
  return `<ecl-button
    type="${args.type}"
    data-ecl-button-icon
    theme="${args.theme}"
    variant="${args.variant}"
    ${args.hideLabel ? 'hide-label="true"' : ''}s
    ${args.indicator && args.hideLabel ? `indicator indicator-value="${args.indicatorValue}"` : ''}
  >
    ${args.icon && args.iconPosition === 'before' ?
      `<ecl-icon 
        slot="icon-before"
        icon="${args.icon}"
        transform="${args.iconTransform}"
        theme="${args.theme}"
      >
      </ecl-icon>` : ''}
    ${args.label}
    ${args.icon && args.iconPosition === 'after' ?
      `<ecl-icon 
        slot="icon-after"
        icon="${args.icon}"
        theme="${args.theme}"
        transform="${args.iconTransform}"
      >
      </ecl-icon>` : ''}
  </ecl-button>`;
}

export const Button = Template.bind({});
Button.storyName = 'default';
Button.args = getArgs();
Button.argTypes = getArgTypes();
