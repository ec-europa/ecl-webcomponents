import { newSpecPage } from '@stencil/core/testing';
import { EclNotification } from '../ecl-notification';
import { EclButton } from '../../ecl-button/ecl-button';
import { EclIcon } from '../../ecl-icon/ecl-icon';
import { EclLink } from '../../ecl-link/ecl-link';

describe('ecl-notification', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });
  
  it('renders correctly in the information variant', async () => {
    const page = await newSpecPage({
      components: [EclNotification, EclButton, EclIcon, EclLink],
      html: `<ecl-notification
                message-title="Title for a message"
                variant="information"
                close-label="Close"
                ecl-script
              >
                Lorem ipsum dolor sit amet
                <ecl-link slot="notification-link" path="/example.html">Lorem ipsum</ecl-link>
              </ecl-notification>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly in the success variant', async () => {
    const page = await newSpecPage({
      components: [EclNotification, EclButton, EclIcon, EclLink],
      html: `<ecl-notification
                message-title="Title for a message"
                variant="success"
                close-label="Close"
                ecl-script
              >
                Lorem ipsum dolor sit amet
                <ecl-link slot="notification-link" path="/example.html">Lorem ipsum</ecl-link>
              </ecl-notification>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly without the close button', async () => {
    const page = await newSpecPage({
      components: [EclNotification, EclButton, EclIcon, EclLink],
      html: `<ecl-notification
                message-title="Title for a message"
                variant="information"
                with-close=false
              >
                Lorem ipsum dolor sit amet
                <ecl-link slot="notification-link" path="/example.html">Lorem ipsum</ecl-link>
              </ecl-notification>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
