import { newSpecPage } from '@stencil/core/testing';
import { EclBanner } from '../ecl-banner';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclBanner, EclLink, EclIcon],
      html: `<ecl-banner
              variant="primary"
              theme="ec"
              cta-link="/example.html"
              cta-label="Subscribe"
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example.html-image.jpg"
              banner-title="EU Budget for the future"
              credit="© Copyright or credit"
              centered
            >
              Innovation, economy, environment and geopolitics
            </ecl-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
