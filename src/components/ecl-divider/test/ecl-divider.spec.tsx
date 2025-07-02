import { newSpecPage } from '@stencil/core/testing';
import { EclDivider } from '../ecl-divider';

describe('ecl-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclDivider],
      html: `<ecl-divider theme="ec"></ecl-divider>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});

