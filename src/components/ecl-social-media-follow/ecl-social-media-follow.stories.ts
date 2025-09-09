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
  parameters: {
    badges: [
      'updated',
    ],  
  },
};

const Template = (args) => 
`<ecl-social-media-follow
  variant="${args.variant}"
  description="Follow us"
  position="${args.position}"
  inline-title="${args.inlineTitle}"
>
  <ecl-social-media-follow-item
    icon="facebook"
    share-path="http://facebook.com"
  >
    Facebook
  </ecl-social-media-follow-item>
  <ecl-social-media-follow-item
    icon="twitter"
    share-path="http://twitter.com"
  >
    Twitter
  </ecl-social-media-follow-item>
  <ecl-social-media-follow-item
    icon="instagram"
    share-path="http://instagram.com"
  >
    Instagram
  </ecl-social-media-follow-item>
  <ecl-social-media-follow-item
    icon="linkedin"
    share-path="http://linkedin.com"
  >
    Linkedin
  </ecl-social-media-follow-item>
  <ecl-social-media-follow-item
    icon="telegram"
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
</ecl-social-media-follow>`;

export const SocialMediaFollow = Template.bind({});
SocialMediaFollow.storyName = 'default';
SocialMediaFollow.args = getArgs();
SocialMediaFollow.argTypes = getArgTypes();
