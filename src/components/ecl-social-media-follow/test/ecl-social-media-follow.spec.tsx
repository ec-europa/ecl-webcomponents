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
        icon="mastodon"
        family: 'networks',
        share-path="http://mastodon.com"
      >
        Mastodon
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="linkedin"
        family: 'networks',
        share-path="http://linkedin.com"
      >
        Linkedin
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="bluesky"
        family: 'networks',
        share-path="http://bluesky.com"
      >
        Bluesky
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="facebook"
        family: 'networks',
        share-path="http://facebook.com"
      >
        Facebook
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="youtube"
        family: 'networks',
        share-path="http://youtube.com"
      >
        YouTube
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
