import { defineCustomElements } from '@ecl/ecl-webcomponents/loader';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';

defineCustomElements();

export const parameters = {
  docs: {
    codePanel: true,
    canvas: { sourceState: 'shown' },
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
  color_mode: {
    name: 'color mode',
    description: 'Choose color mode',
    type: { name: 'select' },
    options: [
      'default',
      'blue',
      'green dark',
      'orange',
      'green',
      'purple',
      'blue navy',
      'blue electric',
      'blue ocean',
      'green lemon',
      'green pine',
      'warm grey',
      'red crayola',
      'yellow gold',
      'purple violet',
      'red tomato',
    ],
    mapping: {
      'default': '',
      'blue': 'blue',
      'green dark': 'green-dark',
      'orange': 'orange',
      'green': 'green',
      'purple': 'purple',
      'blue navy': 'blue-navy',
      'blue electric': 'blue-electric',
      'blue ocean': 'blue-ocean',
      'green lemon': 'green-lemon',
      'green pine': 'green-pine',
      'warm grey': 'warm-grey',
      'red crayola': 'red-crayola',
      'yellow gold': 'yellow-gold',
      'purple violet': 'purple-violet',
      'red tomato': 'red-tomato',
    },
    if: { arg: 'theme', eq: 'ec' },
  },
};

export const args = {
  theme: 'ec',
  color_mode: 'default',
};
