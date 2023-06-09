import { newSpecPage } from '@stencil/core/testing';
import { EclSocialMediaShare } from '../ecl-social-media-share';
import { EclSocialMediaShareItem } from '../ecl-social-media-share-item';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';
import { EclPopover } from '../../ecl-popover/ecl-popover';

describe('ecl-social-media-share', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclSocialMediaShare, EclSocialMediaShareItem, EclLink, EclIcon, EclPopover],
      html: `<ecl-social-media-share
        variant="horizontal"
        theme="ec"
        description="Share on social media"
      >
        <ecl-social-media-share-item
          icon="facebook-color"
          share-path="http://facebook.com"
        >
          Facebook
        </ecl-social-media-share-item>
        <ecl-social-media-share-item
          icon="twitter-color"
          share-path="http://twitter.com"
        >
          Twitter
        </ecl-social-media-share-item>
        <ecl-social-media-share-item
          icon="instagram-color"
          share-path="http://instagram.com"
        >
          Instagram
        </ecl-social-media-share-item>
        <ecl-social-media-share-item
          icon="linkedin-color"
          share-path="http://linkedin.com"
        >
          Linkedin
        </ecl-social-media-share-item>
        <ecl-social-media-share-item
          icon="telegram-color"
          share-path="http://telegram.com"
        >
          Telegram
        </ecl-social-media-share-item>
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
      </ecl-social-media-share>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
