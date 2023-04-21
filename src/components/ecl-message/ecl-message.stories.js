const getArgs = () => ({
  variant: 'information',
  title: 'Information message',
  closeLabel: 'Close',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem, ac mollis lacus tincidunt eu. Duis scelerisque diam eu tempus fringilla.',
  withClose: true,
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
  withClose: {
    name: 'with the close button',
    control: { name: 'boolean' },
    table: {
      description: 'With close button',
    },
  },
  closeLabel: {
    name: 'label of the close button',
    control: { name: 'string' },
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
    close-label="${args.closeLabel}"
    ecl-script
    with-close=${args.withClose}
  >
    ${args.description}
  </ecl-message>`;

export const Message = Template.bind({});
Message.storyName = 'default';
Message.args = getArgs();
Message.argTypes = getArgTypes();
