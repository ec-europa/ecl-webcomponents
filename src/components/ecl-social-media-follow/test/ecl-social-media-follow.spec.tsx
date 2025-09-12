import { newSpecPage } from '@stencil/core/testing';
import { EclSocialMediaFollow } from '../ecl-social-media-follow';
import { EclSocialMediaFollowItem } from '../ecl-social-media-follow-item';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-social-media-follow', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclSocialMediaFollow, EclSocialMediaFollowItem, EclLink, EclIcon],
      html: `<ecl-social-media-follow
        variant="horizontal"
        description="Follow on social media"
        position="right"
      >
        <ecl-social-media-follow-item
          icon="facebook-color"
          share-path="http://facebook.com"
        >
          Facebook
        </ecl-social-media-follow-item>
        <ecl-social-media-follow-item
          icon="twitter-color"
          share-path="http://twitter.com"
        >
          Twitter
        </ecl-social-media-follow-item>
        <ecl-social-media-follow-item
          icon="instagram-color"
          share-path="http://instagram.com"
        >
          Instagram
        </ecl-social-media-follow-item>
        <ecl-social-media-follow-item
          icon="linkedin-color"
          share-path="http://linkedin.com"
        >
          Linkedin
        </ecl-social-media-follow-item>
        <ecl-social-media-follow-item
          icon="telegram-color"
          share-path="http://telegram.com"
        >
          Telegram
        </ecl-social-media-follow-item>
        <ecl-social-media-follow-item
          icon="chain"
          share-path="http://example.html"
        >
          Other
        </ecl-social-media-follow-item>
      </ecl-social-media-follow>`,
    });
  
    expect(page.root).toMatchSnapshot();
  });
});
