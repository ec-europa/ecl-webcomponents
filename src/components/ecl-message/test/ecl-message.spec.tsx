import { newSpecPage } from '@stencil/core/testing';
import { EclMessage } from '../ecl-message';
import { EclButton } from '../../ecl-button/ecl-button';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-message', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclMessage, EclButton, EclIcon],
      html: `<ecl-message
                message-title="Title for a message"
                theme="ec"
                variant="information"
                close-label="Close"
                ecl-script
              >
                Lorem ipsum dolor sit amet
              </ecl-message>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
