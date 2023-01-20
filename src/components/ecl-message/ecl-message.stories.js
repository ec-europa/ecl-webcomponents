const getArgs = () => ({
  variant: 'information',
  title: 'Information message',
  closeLabel: 'Close',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem, ac mollis lacus tincidunt eu. Duis scelerisque diam eu tempus fringilla.',
  withUtils: true,
  eclScript: true,
});

const getArgTypes = () => ({
  variant: {
    type: { name: 'select' },
    options: ['information', 'success', 'warning', 'error'],
    table: {
      description: 'Message variant',
    },
  },
  title: {
    control: { name: 'string' },
    table: {
      description: 'Title of the message',
    },
  },
  description: {
    control: { name: 'string' },
    table: {
      description: 'Text of the message',
    },
  },
  closeLabel: {
    control: { name: 'string' },
    table: {
      description: 'Label of the close button',
    },
  },
});

export default {
  title: 'Components/message',
};

const Template = args =>
  `<ecl-message
    message-title="${args.title}"
    theme="${args.theme}"
    variant="${args.variant}"
    description="${args.description}"
    close-label="${args.closeLabel}"
    ecl-script
  >
    ${args.description}
  </ecl-message>`;

export const Message = Template.bind({});
Message.storyName = 'default';
Message.args = getArgs();
Message.argTypes = getArgTypes();
