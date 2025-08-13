import { newSpecPage } from '@stencil/core/testing';
import { EclBanner } from '../ecl-banner';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';
import { EclVideo } from '../../ecl-video/ecl-video';
import { EclButton } from '../../ecl-button/ecl-button';

describe('ecl-banner', () => {
  it('renders correctly with an image', async () => {
    const page = await newSpecPage({
      components: [EclBanner, EclLink, EclIcon],
      html: `<ecl-banner
              cta-link="/example.html"
              cta-label="Subscribe"
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
              banner-title="EU Budget for the future"
              credit="© Copyright or credit"
            >
              Innovation, economy, environment and geopolitics
            </ecl-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly with a video', async () => {
    const page = await newSpecPage({
      components: [EclBanner, EclVideo, EclIcon, EclButton],
      html: `<ecl-banner
              sources='[{"src": "https://vod.prd.commavservices.eu/12/224712/LR_I224712EN1W.mp", "type": "video/mp4"}]'
              poster="https://vod.prd.commavservices.eu/12/224712/THUMB_I224712EN1W_V_1.jpg"
              banner-title="EU Budget for the future"
              credit="© Copyright or credit"
            >
              Innovation, economy, environment and geopolitics
            </ecl-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly without a media', async () => {
    const page = await newSpecPage({
      components: [EclBanner],
      html: `<ecl-banner
              banner-title="EU Budget for the future"
              credit="© Copyright or credit"
            >
              Innovation, economy, environment and geopolitics
            </ecl-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly in full width, with large size, text on the right and at the bottom, with small font size', async () => {
    const page = await newSpecPage({
      components: [EclBanner],
      html: `<ecl-banner
              banner-title="EU Budget for the future"
              credit="© Copyright or credit"
              font-size="s"
              horizontal="right"
              vertical="botttom"
              full-width="true"
              size="l"
            >
              Innovation, economy, environment and geopolitics
            </ecl-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
