import { defineCustomElements } from '../loader';

defineCustomElements();

export const parameters = {
  docs: {
    source: {
      state: 'open',
    },
  },
  viewMode: 'docs',
};

export const argTypes = {
  theme: {
    control: 'select',
    options: ['ec', 'eu'],
    description: 'Choose between EC or EU theme',
  },
  withUtils: {
    name: 'with-utils',
    control: 'boolean',
    description: 'Load the utilities css code',
  },
};

export const args = {
  theme: 'ec',
  withUtils: false,
};
