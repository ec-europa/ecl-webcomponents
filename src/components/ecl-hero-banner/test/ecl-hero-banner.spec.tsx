import { newSpecPage } from '@stencil/core/testing';
import { EclHeroBanner } from '../ecl-hero-banner';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-page-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclHeroBanner, EclLink, EclIcon],
      html: `<ecl-hero-banner
              variant="primary"
              theme="ec"
              cta-link="/example.html"
              cta-label="Subscribe"
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
              banner-title="EU Budget for the future"
            >
              Innovation, economy, environment and geopolitics
            </ecl-hero-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});

