import { randomizedLink } from "../../utils/randomizedLink"; 
import iconsAllEc from '@ecl/resources-icons/list.json';

const getArgs = () => {
  return {
    variant: '',
    path: randomizedLink('/example.html'),
    external: false,
    inverted: false,
    label: 'An ECL link',
    icon: '',
    iconPosition: 'after',
    iconRotate: '',
    iconFlip: '',
    hideLabel: false,
    indicator: false,
    indicatorValue: 2,
  };
};

const getArgTypes = () => {
  return {
    color_mode: { table: { disable: true } },
    variant: {
      type: { name: 'select' },
      options: ['standalone', 'cta', 'primary', 'secondary'],
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
    inverted: {
      type: { name: 'boolean' },
      description: 'Inverted link',
    },
    path: {
      name: 'path',
      type: { name: 'string' },
      description: 'Path or Url to link to',
    },
    icon: {
      name: 'icon',
      type: { name: 'select' },
      options: iconsAllEc,
      description: "Add an icon",
      if: { arg: 'external', truthy: false },
    },
    iconPosition: {
      name: 'icon position',
      type: { name: 'select' },
      options: ['before', 'after'],
      description: 'Before or after the link label',
      if: { arg: 'icon', truthy: true },
    },
    iconRotate: {
      name: 'icon rotate',
      type: { name: 'select' },
      description: 'Link icon rotate',
      options: [
        '90',
        '180',
        '270',
      ],
      if: { arg: 'icon', truthy: true },
    },
    iconFlip: {
      name: 'icon flip',
      type: { name: 'select' },
      description: 'Link icon flip',
      options: [
        'horizontal',
        'vertical',
      ],
      if: { arg: 'icon', truthy: true },
    },
    hideLabel: {
      name: 'hide-label',
      type: { name: 'boolean' },
      description: 'hide-label',
      if: { arg: 'icon', neq: undefined },
    },
    indicator: {
      name: 'indicator',
      type: { name: 'boolean' },
      description: 'Show an indicator (only visible when label is hidden and icon exists)',
      if: { arg: 'icon', neq: undefined },
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
  title: 'Components/Navigation/link',
};

const Template = (args) => {
  const link = `
    <ecl-link
      variant="${args.variant}"
      path="${args.path}"
      inverted="${args.inverted}"
      external="${args.external}"
      aria-label="Accessibility enhancer"
      indicator="${args.indicator}"
      indicator-value="${args.indicatorValue}"
      ${args.hideLabel ? 'hide-label' : ''}
    >
    ${args.icon && args.iconPosition === 'before' ?
      `<ecl-icon 
        slot="icon-before"
        icon="${args.icon}"
        rotate="${args.iconRotate}"
        flip="${args.iconFlip}"
      >
      </ecl-icon>` : '' }
        ${args.label}
    ${args.icon && args.iconPosition === 'after' ?
      `<ecl-icon 
        slot="icon-after"
        icon="${args.icon}"
        rotate="${args.iconRotate}"
        flip="${args.iconFlip}"
      >
      </ecl-icon>` : '' }
    </ecl-link>`;

  if (args.inverted) {
    return `<div style="padding: var(--s-s); background: var(--ecl-color-neutral-dark, var(--ecl-color-dark))">${link}</div>`;
  }

  return link;
}

export const Link = Template.bind({});
Link.storyName = 'default';
Link.args = getArgs();
Link.argTypes = getArgTypes();
