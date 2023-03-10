import { newSpecPage } from '@stencil/core/testing';
import { EclSocialMediaFollow } from '../ecl-social-media-follow';
import { EclSocialMediaFollowItem } from '../ecl-social-media-follow-item';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';
import { EclPopover } from '../../ecl-popover/ecl-popover';

describe('ecl-social-media-follow', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclSocialMediaFollow, EclSocialMediaFollowItem, EclLink, EclIcon, EclPopover],
      html: `<ecl-social-media-follow
        variant="horizontal"
        theme="ec"
        description="Follow on social media"
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
        <ecl-popover
          ecl-script
          theme="ec"
          toggle-label="Popover"
          list
          icon="share"
          icon-size="s"
          item-id="popover-example"
        >
          <ecl-popover-item
            path="/example.html"
            icon="pinterest-color"
            icon-sprite="icons-social-media"
            icon-size="s"
          >
            Pinterest
          </ecl-popover-item>
          <ecl-popover-item
            path="/example.html"
            icon="mastodon-color"
            icon-sprite="icons-social-media"
            icon-size="s"
          >
            Mastodon
          </ecl-popover-item>
          <ecl-popover-item
            path="/example.html"
            icon="reddit-color"
            icon-sprite="icons-social-media"
            icon-size="s"
          >
            Reddit
          </ecl-popover-item>
          <ecl-popover-item
            path="/example.html"
            icon="youtube-color"
            icon-sprite="icons-social-media"
            icon-size="s"
          >
            Youtube
          </ecl-popover-item>
          <ecl-popover-item
            path="/example.html"
            icon="flickr-color"
            icon-sprite="icons-social-media"
            icon-size="s"
          >
            Flickr
          </ecl-popover-item>
          <ecl-popover-item
            path="/example.html"
            icon="skype-color"
            icon-sprite="icons-social-media"
            icon-size="s"
          >
            Skype
          </ecl-popover-item>
        </ecl-popover>
      </ecl-social-media-follow>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
