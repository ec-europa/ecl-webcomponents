const getArgs = () => ({
  variant: 'primary',
  bannerTitle: 'EU Budget for the future',
  description: 'Innovation, economy, environment and geopolitics',
  ctaLabel: 'Subscribe',
  ctaLink: '/example.html',
  image: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
  fullWidth: false,
  centered: true,
});

const getArgTypes = () => ({
  variant: {
    type: { name: 'select' },
    options: ['primary', 'secondary', 'white', 'image', 'image-gradient', 'image-shade'],
    description: 'Page banner variants',
  },
  bannerTitle: {
    name: 'title',
    type: { name: 'string' },
    description: 'Title of the banner',
  },
  description: {
    type: { name: 'string' },
    description: 'Banner description',
  },
  image: {
    type: { name: 'string' },
    description: 'Image path or url',
  },
  ctaLabel: {
    name: 'label of the CTA button',
    type: { name: 'string' },
    description: 'CTA Link label',
  },
  ctaLink: {
    name: 'link of the CTA link',
    type: { name: 'string' },
    description: 'Link path or url',
  },
  fullWidth: {
    name: 'full width banner',
    type: { name: 'boolean' },
    description: 'Extends the banner to the viewport size',
  },
  centered: {
    type: { name: 'boolean' },
    description: 'Centered banner content',
  },
});

export default {
  title: 'Deprecated/hero banner',
};

const Template = args =>
  `<ecl-hero-banner
  variant="${args.variant}"
  theme="${args.theme}"
  cta-link="${args.ctaLink}"
  cta-label="${args.ctaLabel}"
  image="${args.image}"
  banner-title="${args.bannerTitle}"
  credit="© Copyright or credit"
>
  ${args.description}
</ecl-hero-banner>`;

export const HeroBanner = Template.bind({});
HeroBanner.storyName = 'default';
HeroBanner.args = getArgs();
HeroBanner.argTypes = getArgTypes();
