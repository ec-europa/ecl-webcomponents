import { newSpecPage } from '@stencil/core/testing';
import { EclBanner } from '../ecl-banner';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclPicture } from '../../ecl-picture/ecl-picture';
import { EclIcon } from '../../ecl-icon/ecl-icon';
import { EclVideo } from '../../ecl-video/ecl-video';
import { EclButton } from '../../ecl-button/ecl-button';

describe('ecl-banner', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });

  it('renders correctly with an image', async () => {
    const page = await newSpecPage({
      components: [EclBanner, EclLink, EclIcon, EclPicture],
      html: `<ecl-banner
              cta-link="/example.html"
              cta-label="Subscribe"
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
              banner-title="EU Budget for the future"
              banner-title-link="/example.html"
              credit="© Copyright or credit"
            >
              Innovation, economy, environment and geopolitics
            </ecl-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly with a video', async () => {
    const page = await newSpecPage({
      components: [EclBanner, EclVideo, EclIcon, EclLink, EclButton, EclPicture],
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
      components: [EclBanner, EclLink, EclIcon, EclButton, EclPicture],
      html: `<ecl-banner
              banner-title="EU Budget for the future"
              credit="© Copyright or credit"
              banner-title-link="/example.html"
            >
              Innovation, economy, environment and geopolitics
            </ecl-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly in full width, with large size, text on the right and at the bottom, with small font size', async () => {
    const page = await newSpecPage({
      components: [EclBanner, EclLink, EclIcon, EclButton, EclPicture],
      html: `<ecl-banner
              banner-title="EU Budget for the future"
              credit="© Copyright or credit"
              font-size="s"
              horizontal="right"
              vertical="botttom"
              full-width="true"
              size="l"
              description-link="/example.html"
            >
              Innovation, economy, environment and geopolitics
            </ecl-banner>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
