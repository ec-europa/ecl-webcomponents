import { defineCustomElements } from '../loader';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

defineCustomElements();

export const parameters = {
  docs: {
    source: {
      state: 'open',
    },
  },
  viewMode: 'docs',
  layout: 'padded',
  viewport: {
    defaultViewport: 'responsive',
    viewports: {
      'responsive': {
        name: 'responsive',
        styles: {
          width: '100%',
          height: '100%',
          border: 0,
          margin: 0,
          boxShadow: 'none',
          borderRadius: 0,
          position: 'absolute',
        },
      },
      ...INITIAL_VIEWPORTS,
      '1366x768': {
        name: '1366x768',
        styles: {
          width: '1366px',
          height: '768px',
        },
        type: 'desktop',
      },
      '1920x1080': {
        name: '1920x1080',
        styles: {
          width: '1920px',
          height: '1080px',
        },
        type: 'desktop',
      },
    },
  },
};

export const argTypes = {
  theme: {
    control: 'select',
    options: ['ec', 'eu'],
    description: 'Choose between EC or EU theme',
  },
};

export const args = {
  theme: 'ec',
};
