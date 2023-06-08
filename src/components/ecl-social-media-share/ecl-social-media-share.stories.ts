const getArgs = () => {
  return {
    variant: 'horizontal',
  };
};

const getArgTypes = () => {
  return {
    variant: {
      type: { name: 'select' },
      options: ['horizontal', 'vertical'],
      description: "Social Media Share variant"
    },
  };
};

export default {
  title: 'Components/social media share',
};

const Template = (args) => 
`<ecl-social-media-share
  variant="${args.variant}"
  theme="${args.theme}"
  description="Share this page"
>
  <ecl-social-media-share-item
    theme="${args.theme}"
    icon="facebook-color"
    share-path="http://facebook.com"
  >
    Facebook
  </ecl-social-media-share-item>
  <ecl-social-media-share-item
    theme="${args.theme}"
    icon="twitter-color"
    share-path="http://twitter.com"
  >
    Twitter
  </ecl-social-media-share-item>
  <ecl-social-media-share-item
    theme="${args.theme}"
    icon="instagram-color"
    share-path="http://instagram.com"
  >
    Instagram
  </ecl-social-media-share-item>
  <ecl-social-media-share-item
    theme="${args.theme}"
    icon="linkedin-color"
    share-path="http://linkedin.com"
  >
    Linkedin
  </ecl-social-media-share-item>
  <ecl-social-media-share-item
    theme="${args.theme}"
    icon="telegram-color"
    share-path="http://telegram.com"
  >
    Telegram
  </ecl-social-media-share-item>
  <ecl-popover
    ecl-script
    theme="${args.theme}"
    toggle-label="Other social networks"
    list
    icon="share"
    icon-size="s"
    item-id="popover-example"
  >
    <ecl-popover-item
      theme="${args.theme}"
      path="/example"
      icon="pinterest-color"
      icon-sprite="icons-social-media"
      icon-size="s"
    >
      Pinterest
    </ecl-popover-item>
    <ecl-popover-item
      theme="${args.theme}"
      path="/example"
      icon="mastodon-color"
      icon-sprite="icons-social-media"
      icon-size="s"
    >
      Mastodon
    </ecl-popover-item>
    <ecl-popover-item
      theme="${args.theme}"
      path="/example"
      icon="reddit-color"
      icon-sprite="icons-social-media"
      icon-size="s"
    >
      Reddit
    </ecl-popover-item>
    <ecl-popover-item
      theme="${args.theme}"
      path="/example"
      icon="youtube-color"
      icon-sprite="icons-social-media"
      icon-size="s"
    >
      Youtube
    </ecl-popover-item>
    <ecl-popover-item
      theme="${args.theme}"
      path="/example"
      icon="flickr-color"
      icon-sprite="icons-social-media"
      icon-size="s"
    >
      Flickr
    </ecl-popover-item>
    <ecl-popover-item
      theme="${args.theme}"
      path="/example"
      icon="skype-color"
      icon-sprite="icons-social-media"
      icon-size="s"
    >
      Skype
    </ecl-popover-item>
  </ecl-popover>
</ecl-social-media-share>`;

export const SocialMediaShare = Template.bind({});
SocialMediaShare.storyName = 'default';
SocialMediaShare.args = getArgs();
SocialMediaShare.argTypes = getArgTypes();
