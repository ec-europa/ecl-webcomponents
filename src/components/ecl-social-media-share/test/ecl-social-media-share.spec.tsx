import { newSpecPage } from '@stencil/core/testing';
import { EclSocialMediaShare } from '../ecl-social-media-share';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-social-media-share', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclSocialMediaShare, EclLink, EclIcon],
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
