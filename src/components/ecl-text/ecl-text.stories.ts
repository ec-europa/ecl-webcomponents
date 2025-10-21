const getArgs = () => {
  return {
    tag: undefined,
    weight: undefined,
    alignment: undefined,
    fontStyle: undefined,
    type: undefined,
    level: 2,
    size: undefined,
    highlighted: false,
    enhance: false,
    enhanceType: undefined,
    colorModeTypography: undefined,
    text: 'The European Commission has put forward ambitious yet realistic proposals for a modern EU budget. It is time for an EU budget that reflects rapid developments in innovation, the economy, the environment and geopolitics, amongst others. The Commission is putting forward modern, clearer and simpler EU financial rules that make sure the EU budget delivers on the issues that matter to Europeans.',
  };
};

const getArgTypes = () => {
  const argTypes = {
    tag: {
      type: { name: 'select' },
      options: ['div', 'p', 'h1' ,'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Tag to render',
    },
    type: {
      type: { name: 'select' },
      options: ['display', 'heading', 'paragraph', 'microcopy'],
    },
    level: {
      name: 'heading type',
      type: { name: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      if: { arg: 'type', eq: 'heading' },
    },
    weight: {
      name: 'font weight',
      type: { name: 'select' },
      options: ['thin', 'extra-light', 'light', 'regular', 'medium', 'semi-bold', 'bold', 'extra-bold', 'black'],
      description: 'from thin to extra bold',
    },
    fontStyle: {
      name: 'text style',
      type: { name: 'select' },
      options: ['italic', 'lowercase', 'uppercase', 'capitalize', 'overline', 'underline', 'strike'],
    },
    alignment: {
      name: 'text alignment',
      type: { name: 'select' },
      options: ['left', 'center', 'right'],
    },
    size: {
      type: { name: 'select' },
      options: ['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl', '10xl' ],
      description: 'Shortcut to set font size (only for paragraphs)',
      table: {
        defaultValue: { summary: 'm' },
      }
    },
    color: {
      type: { name: 'select' },
      options: ['primary', 'secondary', 'white', 'success', 'error'],
      description: 'Shortcut to set font size (only for paragraphs)',
      table: {
        defaultValue: { summary: 'm' },
      }
    },
    colorModeTypography: {
      name: 'color mode typography',
      type: 'select',
      description: 'Select a color mode typography',
      options: [
        'on-surface',
        'on-surface-1',
        'on-surface-2',
        'on-surface-3',
        'on-surface-highlight',
        'on-surface-swap-0',
        'on-surface-swap-1',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      mapping: {
        'on-surface': 'on-surface',
        'on-surface-1': 'on-surface-variant-1',
        'on-surface-2': 'on-surface-variant-2',
        'on-surface-3': 'on-surface-variant-3',
        'on-surface-highlight': 'on-surface-highlight',
        'on-surface-swap-0': 'on-surface-swap-1',
        'on-surface-swap-1': 'on-surface-swap-2',
      },
      if: { arg: 'color_mode', neq: 'default' },
    },
    highlighted: {
      type: { name: 'boolean' },
    },
    enhance: {
      name: 'enhanced',
      type: { name: 'boolean' },
    },
    enhanceType: {
      name: 'enhanced type',
      type: { name: 'select' },
      options: ['enhanced', 'strong', 'light'],
      if: { arg: 'enhance', truthy: true },
    },
    text: {
      type: { name: 'string' },
      description: 'The visible text',
    },
  };

  return argTypes;
};

export default {
  title: 'Components/text',
};

const Template = args => {
  const attrs = [];

  if (args.tag) attrs.push(`tag="${args.tag}"`);
  if (args.weight) attrs.push(`weight="${args.weight}"`);
  if (args.fontStyle) attrs.push(`font-style="${args.fontStyle}"`);
  if (args.alignment) attrs.push(`alignment="${args.alignment}"`);
  if (args.size) attrs.push(`size="${args.size}"`);
  if (args.type) attrs.push(`type="${args.type}"`);
  if (args.level) attrs.push(`level="${args.level}"`);
  if (args.color) attrs.push(`color="${args.color}"`);
  if (args.color_mode) attrs.push(`color-mode="${args.color_mode}"`);
  if (args.colorModeTypography) attrs.push(`color-mode-typography="${args.colorModeTypography}"`);
  if (args.enhance) attrs.push(`enhance="${args.enhance}"`);
  if (args.highlighted) attrs.push(`highlighted="${args.highlighted}"`);
  if (args.enhanceType) attrs.push(`enhance-type="${args.enhanceType}"`);

  return `<ecl-text ${attrs.join(' ')}>
    ${args.text}
  </ecl-text>`;
}


export const Text = Template.bind({});
Text.storyName = 'default';
Text.args = getArgs();
Text.argTypes = getArgTypes();