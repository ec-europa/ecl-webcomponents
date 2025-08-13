import { randomizedLink } from '../../utils/randomizedLink';

const getArgs = () => ({
  variant: 'information',
  title: 'Information message',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem, ac mollis lacus tincidunt eu. Duis scelerisque diam eu tempus fringilla.',
  withClose: true,
  closeLabel: 'Close',
});

const getArgTypes = () => ({
  color_mode: {
    table: { disable: true },
  },
  variant: {
    type: { name: 'select' },
    options: ['information', 'success', 'warning', 'error'],
    table: {
      description: 'Message variant',
    },
  },
  withClose: {
    name: 'with-close',
    control: { name: 'boolean' },
    table: {
      description: 'With close button',
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
    name: 'close-label',
    control: { name: 'string' },
    if: { arg: 'withClose', truthy: true },
  },
});

export default {
  title: 'Components/notification',
  parameters: {
    badges: ['updated'],
  },
};

const Template = args =>
  `<ecl-notification
    notification-title="${args.title}"
    theme="${args.theme}"
    variant="${args.variant}"
    close-label="${args.closeLabel}"
    ecl-script
    with-close=${args.withClose}
  >
    ${args.description}

    <ecl-link slot="notification-link" path="${randomizedLink('/example.html')}">Lorem ipsum</ecl-link>
    <ecl-link slot="notification-link" path="${randomizedLink('/example.html')}">Nullam accumsan sempre lorem</ecl-link>
  </ecl-notification>`;

export const Notification = Template.bind({});
Notification.storyName = 'default';
Notification.args = getArgs();
Notification.argTypes = getArgTypes();
