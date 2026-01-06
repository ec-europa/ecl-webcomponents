import { newSpecPage } from '@stencil/core/testing';
import { EclButton } from '../ecl-button';
import { EclIcon } from '@ecl/web-components-icon/ecl-icon';

describe('ecl-button', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclButton, EclIcon],
      html: `<ecl-button
              variant="primary"
              data-ecl-button-icon
            >
              <ecl-icon 
                slot="icon-before"
                path="/icons.svg"
                icon="corner-arrow"
                rotate="90"
                style-class="ecl-button__icon ecl-button__icon--before"
              >
              </ecl-icon>
              Button label
            </ecl-button>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
