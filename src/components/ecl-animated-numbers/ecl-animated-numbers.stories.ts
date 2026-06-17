const getArgs = () => {
  return {
    numberOfItems: 4,
    border: false,
    counterColor: true,
    withBackground: false,
    fullWidth: false,
  };
};

const getArgTypes = () => {
  return {
    color_mode: { table: { disable: true } },
    numberOfItems: {
      name: 'number of items',
      control: { type: 'range', min: 1, max: 8, step: 1 },
      description: 'Number of items to display',
    },
    border: {
      type: { name: 'boolean' },
      description: "Items with border left",
    },
    counterColor: {
      name: 'counter-color',
      type: { name: 'boolean' },
      description: 'Coloured elements',
      if: { arg: 'fullWidth', truthy: false },
    },
    withBackground: {
      name: 'with-background',
      type: { name: 'boolean' },
      description: 'With a dark background',
      if: { arg: 'fullWidth', truthy: false },
    },
    fullWidth: {
      name: 'full-width',
      type: { name: 'boolean' },
      description: 'Full width of the viewport, with background',
    },
  };
};

const items = [
  {
    icon: 'users',
    itemPrefix: '',
    value: '213',
    itemSuffix: '€',
    itemSuffixLabel: 'euro',
    category: 'Revenue',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    icon: 'currency-eur',
    itemPrefix: 'billion',
    value: '888.2',
    itemSuffix: '€',
    itemSuffixLabel: 'euro',
    category: 'Revenue',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: 'trend-up',
    itemPrefix: 'million',
    value: '975',
    itemSuffix: '<',
    itemSuffixLabel: 'less than',
    category: 'Revenue',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    icon: 'pulse',
    itemPrefix: '€',
    itemPrefixLabel: 'euro',
    value: '1250',
    itemSuffix: 'billions',
    category: 'Revenue',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
  {
    icon: 'atom',
    itemPrefix: '€',
    itemPrefixLabel: 'euro',
    value: '4350',
    itemSuffix: 'millions',
    category: 'Revenue',
    description: 'Curabitur ut mauris quam. Fusce non consequat ipsum',
  },
  {
    icon: 'bell-simple',
    itemPrefix: '€',
    itemPrefixLabel: 'euro',
    value: '125',
    itemSuffix: 'billions',
    category: 'Revenue',
    description: 'Curabitur ut mauris quam. Fusce non consequat ipsum',
  },
  {
    icon: 'boat',
    itemPrefix: '€',
    itemPrefixLabel: 'euro',
    value: '8765',
    itemSuffix: 'billions',
    category: 'Revenue',
    description: 'Integer pharetra lacinia tristique',
  },
];

export default {
  title: 'Components/animated-numbers',
};

const Template = (args) => {
  const selectedItems = items.slice(0, args.numberOfItems);
  const itemMarkup = selectedItems
    .map((item) => `
      <ecl-animated-numbers-item
        counter-color="${args.counterColor}"
        icon="${item.icon}"
        item-prefix="${item.itemPrefix}"
        ${item.itemPrefixLabel ? `item-prefix-label="${item.itemPrefixLabel}"` : ''}
        value="${item.value}"
        item-suffix="${item.itemSuffix}"
        item-suffix-label="${item.itemSuffixLabel}"
        category="${item.category}"
        description="${item.description}"
      ></ecl-animated-numbers-item>`)
    .join('');

  return `<ecl-grid container>
    <ecl-animated-numbers
      with-background="${args.withBackground}"
      border="${args.border}"
      counter-color="${args.counterColor}"
      full-width="${args.fullWidth}"
      sources-label="Sources:"
      sources='[
        { "label": "Eurostat", "path": "/example.html" },
        { "label": "DG CNECT", "path": "/example.html" }
      ]'  
    >${itemMarkup}
    </ecl-animated-numbers>
  </ecl-grid>`;
};

export const AnimatedNumbers = Template.bind({});
AnimatedNumbers.storyName = 'default';
AnimatedNumbers.args = getArgs();
AnimatedNumbers.argTypes = getArgTypes();
