import { newSpecPage } from '@stencil/core/testing';
import { EclSloganTicker } from '../ecl-slogan-ticker';

describe('ecl-slogan-ticker', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });
  
  it('renders', async () => {
    const getItems = () => ({
      items: JSON.stringify([
        'GENERATE YOUR OWN ENERGY',
        'SAVE TOGETHER',
        'LOWER YOUR BILLS',
        'Sustainability and inclusion',
        'Creating opportunities'
      ]),
    });

    const page = await newSpecPage({
      components: [EclSloganTicker],
      html: `<ecl-slogan-ticker
                items='${getItems().items}'
                color-mode="green"
              ></ecl-slogan-ticker>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
