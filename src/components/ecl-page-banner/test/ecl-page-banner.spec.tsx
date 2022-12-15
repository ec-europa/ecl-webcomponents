import { newSpecPage } from '@stencil/core/testing';
import { EclPageBanner } from '../ecl-page-banner';

describe('ecl-page-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclPageBanner],
      html: `<ecl-page-banner
              variant="primary"
              theme="ec"
              cta-link="/example.html"
              cta-label="Subscribe"
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
              banner-title="EU Budget for the future"
            >
              Innovation, economy, environment and geopolitics
            </ecl-page-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
