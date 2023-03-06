import { newSpecPage } from '@stencil/core/testing';
import { EclSpinner } from '../ecl-spinner';

describe('ecl-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclSpinner],
      html: `<ecl-spinner
        variant="primary"
        theme="ec"
        centered
        visible
      >
        Loading...
      </ecl-spinner>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});