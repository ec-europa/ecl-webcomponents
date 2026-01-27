import { newSpecPage } from '@stencil/core/testing';
import { EclTabs } from '../ecl-tabs';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclButton } from '../../ecl-button/ecl-button';

describe('ecl-tabs', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclTabs, EclButton, EclLink],
      html: `<ecl-tabs color-mode="purple" without-content>
              <ecl-tabs-item path="#tab-content-1">
                Tab 1
              </ecl-tabs-item>
              <ecl-tabs-item is-current path="#tab-content-2">
                Tab 2
              </ecl-tabs-item>
              <ecl-tabs-item path="#tab-content-3">
                Tab 3
              </ecl-tabs-item>
              <ecl-tabs-item path="#tab-content-4">
                Tab 4
              </ecl-tabs-item>
            </ecl-tabs>`,
    });

   expect(page.root).toMatchSnapshot();
  });
});
