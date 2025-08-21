import { randomizedLink } from "../../utils/randomizedLink"; 

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
      description: "Social media follow variant"
    },
  };
};

export default {
  title: 'Components/social media follow',
};

const Template = (args) => 
`<ecl-social-media-follow
  variant="${args.variant}"
  theme="${args.theme}"
  description="Follow the latest progress and learn more about getting involved"
>
  <ecl-social-media-follow-item
    theme="${args.theme}"
    icon="facebook"
    share-path="http://facebook.com"
  >
    Facebook
  </ecl-social-media-follow-item>
  <ecl-social-media-follow-item
    theme="${args.theme}"
    icon="twitter"
    share-path="http://twitter.com"
  >
    Twitter
  </ecl-social-media-follow-item>
  <ecl-social-media-follow-item
    theme="${args.theme}"
    icon="instagram"
    share-path="http://instagram.com"
  >
    Instagram
  </ecl-social-media-follow-item>
  <ecl-social-media-follow-item
    theme="${args.theme}"
    icon="linkedin"
    share-path="http://linkedin.com"
  >
    Linkedin
  </ecl-social-media-follow-item>
  <ecl-social-media-follow-item
    theme="${args.theme}"
    icon="telegram"
    share-path="http://telegram.com"
  >
    Telegram
  </ecl-social-media-follow-item>
  <ecl-popover
    ecl-script
    theme="${args.theme}"
    toggle-label="Other social networks"
    family=""
    icon="chain"
    icon-size="s"
    item-id="popover-example"
  >
    <ecl-popover-item
      theme="${args.theme}"
      path="${randomizedLink('/example.html')}"
      icon="pinteres"
      icon-size="s"
    >
      Pinterest
    </ecl-popover-item>
    <ecl-popover-item
      theme="${args.theme}"
      path="${randomizedLink('/example.html')}"
      icon="mastodon"
      icon-size="s"
    >
      Mastodon
    </ecl-popover-item>
    <ecl-popover-item
      theme="${args.theme}"
      path="${randomizedLink('/example.html')}"
      icon="reddit"
      icon-size="s"
    >
      Reddit
    </ecl-popover-item>
    <ecl-popover-item
      theme="${args.theme}"
      path="${randomizedLink('/example.html')}"
      icon="youtube"
      icon-size="s"
    >
      Youtube
    </ecl-popover-item>
    <ecl-popover-item
      theme="${args.theme}"
      path="${randomizedLink('/example.html')}"
      icon="flickr-color"
      icon-size="s"
    >
      Flickr
    </ecl-popover-item>
    <ecl-popover-item
      theme="${args.theme}"
      path="${randomizedLink('/example.html')}"
      icon="skype-color"
      icon-size="s"
    >
      Skype
    </ecl-popover-item>
  </ecl-popover>
</ecl-social-media-follow>`;

export const SocialMediaFollow = Template.bind({});
SocialMediaFollow.storyName = 'default';
SocialMediaFollow.args = getArgs();
SocialMediaFollow.argTypes = getArgTypes();
