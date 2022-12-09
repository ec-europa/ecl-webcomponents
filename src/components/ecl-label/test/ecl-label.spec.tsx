import { newSpecPage } from '@stencil/core/testing';
import { EclLabel } from '../ecl-label';

describe('ecl-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclLabel],
      html: `<ecl-label
              variant="low"
              theme="ec"
            >
              Label
            </ecl-label>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
