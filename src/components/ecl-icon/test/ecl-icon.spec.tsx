import { newSpecPage } from '@stencil/core/testing';
import { EclIcon } from '../ecl-icon';

describe('ecl-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclIcon],
      html: `<ecl-icon
              icon="close-filled"
              color="primary"
              size="l"
              path="/icons.svg"
             ></ecl-icon>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
