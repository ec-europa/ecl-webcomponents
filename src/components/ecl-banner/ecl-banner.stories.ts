const getArgs = () => ({
  variant: 'plain-background',
  bannerTitle: 'Headline sed elit lorem.',
  description: 'Pellentesque tempor tincidunt quam, finibus vulputate eros iaculis pharetra orci arcu, dictum maximus arcu pellentesque eget. Cras massa nunc.',
  ctaLabel: 'Subscribe',
  ctaLink: '/example.html',
  image: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
  fullWidth: false,
  size: 'm',
  centered: true,
});

const getArgTypes = () => ({
  variant: {
    type: { name: 'select' },
    options: ['plain-background', 'text-box', 'image-overlay', 'text-highlight'],
    description: 'Banner variants',
  },
  size: {
    type: { name: 'select' },
    options: ['s', 'm', 'l'],
    description: 'Banner size', 
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
  title: 'Components/banner',
};

const Template = args =>
  `<ecl-banner
  variant="${args.variant}"
  theme="${args.theme}"
  cta-link="${args.ctaLink}"
  cta-label="${args.ctaLabel}"
  image="${args.image}"
  banner-title="${args.bannerTitle}"
  credit="© Copyright or credit"
  centered=${args.centered}
  size="${args.size}"
>
  ${args.description}
</ecl-banner>`;

export const Banner = Template.bind({});
Banner.storyName = 'default';
Banner.args = getArgs();
Banner.argTypes = getArgTypes();
