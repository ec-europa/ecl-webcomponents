import { loremIpsum } from 'lorem-ipsum';

const getArgs = () => {
  return {
    variant: 'primary',
    label: 'Loading',
    centered: true,
    visible: true,
    size: 'm',
    overlay: false,
  };
};

const getArgTypes = () => {
  return {
    color_mode: { table: { disable: true } },
    variant: {
      type: { name: 'select' },
      options: ['primary', 'inverted'],
      description: 'Spinner variant',
    },
    label: {
      type: { name: 'string' },
      description: 'Spinner label',
    },
    centered: {
      type: { name: 'boolean' },
      description: 'Centered spinner',
    },
    visible: {
      type: { name: 'boolean' },
      description: 'Visible spinner',
      if: { arg: 'centered', truthy: true },
    },
    size: {
      type: 'select',
      description: "Possible sizes ('small', 'medium' or 'large')",
      options: ['s', 'm', 'l'],
      control: {
        labels: {
          s: 'small',
          m: 'medium',
          l: 'large',
        },
      },
      overlay: {
        type: { name: 'boolean' },
        description: 'with overlay',
      },
    },
  };
};

export default {
  title: 'Components/loading indicator',
};

const Template = args => {
  let story = `<ecl-spinner
    variant="${!args.overlay ? args.variant : 'primary' }"
    theme="${args.theme}"
    centered=${args.centered}
    visible=${args.visible}
    overlay=${args.overlay}
    size="${args.size}"
  >
    ${args.label}
  </ecl-spinner>`;

  if (args.variant === 'inverted' && !args.overlay) {
    story = `<div style="background: #004494; position: relative; height: 150px;">${story}</div>`
  }

  if (args.overlay) {
    story = `${story}<p>${loremIpsum({ count: 25 })}</p><p>${loremIpsum({ count: 25 })}</p>`;
  }

  return story;
}


export const Spinner = Template.bind({});
Spinner.storyName = 'default';
Spinner.args = getArgs();
Spinner.argTypes = getArgTypes();