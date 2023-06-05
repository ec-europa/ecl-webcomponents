const getArgs = () => {
  return {
    tag: 'div',
    level: 5,
    isBold: false,
    size: 'm',
    text: 'The quick brown fox jumps over the lazy dog',
  };
};

const getArgTypes = () => {
  return {
    tag: {
      type: { name: 'select' },
      options: ['div', 'p', 'h1' ,'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Tag to render',
    },
    level: {
      type: { name: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Font size (not for paragraphs)',
    },
    isBold: {
      type: { name: 'boolean' },
      description: 'Higher font weight',
    },
    size: {
      type: { name: 'select' },
      options: ['xs', 's', 'm', 'l'],
      description: 'Shortcut to set font size (only for paragraphs)',
      table: {
        defaultValue: { summary: 'm' },
      }
    },
    text: {
      type: { name: 'string' },
      description: 'The visible text',
    },
  };
};

export default {
  title: 'Components/text',
};

const Template = args => {
  let story = `<ecl-text
    tag="${args.tag}"
    theme="${args.theme}"
    level="${args.level}"
    isBold=${args.isBold}
    size="${args.size}"
  >
    ${args.text}
  </ecl-text>`;

  return story;
}


export const Text = Template.bind({});
Text.storyName = 'default';
Text.args = getArgs();
Text.argTypes = getArgTypes();