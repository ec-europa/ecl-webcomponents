import { newSpecPage } from '@stencil/core/testing';
import { EclGrid } from '../ecl-grid';

describe('ecl-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclGrid],
      html: `<div class="ecl-container">
              <ecl-grid columns="6">Content in 6 columns</ecl-grid>
              <ecl-grid columns="4">Content in 4 columns</ecl-grid>
              <ecl-grid columns="2">Content in 2 columns</ecl-grid>
            </div>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
