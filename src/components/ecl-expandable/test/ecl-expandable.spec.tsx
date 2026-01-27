import { newSpecPage } from '@stencil/core/testing';
import { EclExpandable } from '../ecl-expandable';
import { EclButton } from '@ecl/web-components-button/ecl-button';

describe('ecl-expandable', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclExpandable, EclButton],
      html: `<ecl-expandable
              theme="ec"
              el-id="expandable-id"
              icon-path="/icons.svg"
              label-collapsed="Expand"
              label-expanded="Collapse"
            >
              <p class="ecl-u-type-paragraph-m">
                The EU is building an energy union that ensures Europe’s energy supply is safe,
                viable and accessible to all. In doing so, it can boost the economy and attract investments that can create new jobs
                opportunities.
              </p>
            </ecl-expandable>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});