const getArgs = () => {
  return {
    variant: 'horizontal',
    position: 'left',
    inlineTitle: false,
  };
};

const getArgTypes = () => {
  return {
    color_mode: {
      table: { disable: true },
    },
    variant: {
      type: { name: 'select' },
      options: ['horizontal', 'vertical'],
      description: "Social media follow variant"
    },
    position: {
      type: { name: 'select' },
      options: [ 'left', 'right' ],
    },
    inlineTitle: {
      name: 'inline-title',
      type: { name: 'boolean'},
    },
  };
};

export default {
  title: 'Components/social media follow',
};

const Template = (args) => 
`<ecl-social-media-follow
  variant="${args.variant}"
  description="Follow us"
  position="${args.position}"
  inline-title="${args.inlineTitle}"
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
</ecl-social-media-follow>`;

export const SocialMediaFollow = Template.bind({});
SocialMediaFollow.storyName = 'default';
SocialMediaFollow.args = getArgs();
SocialMediaFollow.argTypes = getArgTypes();
