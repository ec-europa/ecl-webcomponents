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
    disabled: false,
    indicatorValue: 3,
  };
};

const getArgTypes = () => {
  return {
    color_mode: { table: { disable: true } },
    variant: {
      name: 'button variant',
      type: { name: 'select' },
      options: ['primary', 'secondary', 'ghost', 'cta', 'tertiary', 'ghost-inverted'],
      control: {
        labels: {
          primary: 'Primary',
          secondary: 'Secondary',
          ghost: 'Ghost',
          cta: 'Call to action',
          tertiary: 'Tertiary',
          'ghost-inverted': 'Ghost inverted',
        },
      },
      description: "Button variant"
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean' },
      description: 'Disables the button',
    },
    type: {
      name: 'button type',
      type: { name: 'select' },
      options: ['button', 'submit', 'reset'],
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
      if: { arg: 'icon', truthy: true },
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
      if: { arg: 'icon', truthy: true },
    },
    indicator: {
      name: 'indicator',
      type: { name: 'boolean' },
      description: 'Show an indicator (only visible when label is hidden and icon exists)',
      if: { arg: 'hideLabel', truthy: true },
    },
    indicatorValue: {
      name: 'indicator value',
      type: { name: 'number' },
      description: 'Value of the indicator (only visible when showIndicator is true)',
      if: { arg: 'indicator', truthy: true },
    },
  };
};

export default {
  title: 'Components/button',
};

const Template = (args) => {
  const buttonHtml = `<ecl-button
    type="${args.type}"
    theme="${args.theme}"
    variant="${args.variant}"
    ${args.disabled ? 'disabled' : ''}
    hide-label="${!!args.hideLabel}"
    ${args.indicator && args.hideLabel ? `indicator indicator-value="${args.indicatorValue}"` : ''}
  >
    ${args.icon && args.iconPosition === 'before' ?
      `<ecl-icon 
        slot="icon-before"
        icon="${args.icon}"
        transform="${args.iconTransform}"
        theme="${args.theme}"
      ></ecl-icon>` : ''}
    ${args.label}
    ${args.icon && args.iconPosition === 'after' ?
      `<ecl-icon 
        slot="icon-after"
        icon="${args.icon}"
        theme="${args.theme}"
        transform="${args.iconTransform}"
      ></ecl-icon>` : ''}
  </ecl-button>`;

  if (args.variant === 'ghost-inverted') {
    return `<div style="background-color: black; padding: 1rem; display: inline-block;">${buttonHtml}</div>`;
  }

  return buttonHtml;
}

export const Button = Template.bind({});
Button.storyName = 'default';
Button.args = getArgs();
Button.argTypes = getArgTypes();
