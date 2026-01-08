import { newSpecPage } from '@stencil/core/testing';
import { EclPageInformation } from '../ecl-page-information';

describe('ecl-page-information', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclPageInformation],
      html:   `<ecl-page-information>This page was last updated on 00 Month 0000</ecl-page-information>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
