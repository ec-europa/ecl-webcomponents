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
  description="Share on social media"
  items='[{"name": "facebook", "url": "http://facebook.com"}, {"name": "twitter", "url": "https://twiiter.com"}, {"name": "instagram", "url": "https://instagram.com"}, {"name": "linkedin", "url": "https://linkedin.com"}, {"name": "telegram", "url": "https://telegram.com"}]'
  others='{"name": "Other social media", "url": "https://google.com"}'
>
</ecl-social-media-share>`;

export const SocialMediaShare = Template.bind({});
SocialMediaShare.storyName = 'default';
SocialMediaShare.args = getArgs();
SocialMediaShare.argTypes = getArgTypes();
