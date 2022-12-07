import { newSpecPage } from '@stencil/core/testing';
import { EclSocialMediaShare } from '../ecl-social-media-share';

describe('ecl-social-media-share', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclSocialMediaShare],
      html: `<ecl-social-media-share
        variant="horizontal"
        theme="ec"
        description="Share on social media"
      >
      </ecl-social-media-share>`,
    });
     expect(page.root).toMatchSnapshot();
  });
});
