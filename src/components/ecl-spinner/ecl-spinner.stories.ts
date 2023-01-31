const getArgs = () => {
  return {
    variant: 'primary',
    label: 'Loading...',
    centered: true,
    visible: true,
    overlay: false,
  };
};

const getArgTypes = () => {
  return {
    variant: {
      type: { name: 'select' },
      options: ['primary', 'negative'],
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
    },
    overlay: {
      type: { name: 'boolean' },
      description: 'with overlay',
    },
  };
};

export default {
  title: 'Components/spinner',
};

const Template = args => {
  let story = `<ecl-spinner
    variant="${args.variant}"
    theme="${args.theme}"
    centered=${args.centered}
    visible=${args.visible}
    overlay=${args.overlay}
  >
    ${args.label}
  </ecl-spinner>`;

  if (args.variant === 'negative') {
    story = `<div style="background: #004494; position: relative; height: 150px;">${story}</div>`
  }

  return story;
}


export const Spinner = Template.bind({});
Spinner.storyName = 'default';
Spinner.args = getArgs();
Spinner.argTypes = getArgTypes();