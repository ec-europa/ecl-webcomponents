const getArgs = () => ({
  bannerTitle: 'Headline sed elit lorem.',
  description: 'Pellentesque tempor tincidunt quam, finibus vulputate eros iaculis pharetra orci arcu, dictum maximus arcu pellentesque eget. Cras massa nunc.',
  ctaLabel: "",
  ctaLink: "/example.html",
  image: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
  fullWidth: false,
  horizontal: 'left',
  vertical: 'center',
  fontSize: 'm',
  fontColor: 'dark',
  boxBackground: 'light',
  credit: '© Copyright or credit',
  size: 'm',
});

const getArgTypes = () => ({
  size: {
    name: 'banner size',
    type: 'select',
    description: 'Change banner size',
    options: ['xs', 's', 'm', 'l'],
    control: {
      labels: {
        xs: 'extra small',
        s: 'small',
        m: 'medium',
        l: 'large',
      },
    },
    mapping: {
      'extra small': 'xs',
      small: 's',
      medium: 'm',
      large: 'l',
    },
  },
  bannerTitle: {
    name: 'title',
    type: { name: 'string' },
    description: 'Title of the banner',
  },
  horizontal: {
    name: 'horizontal',
    type: 'select',
    description: 'Horizontal alignment',
    options: ['left', 'center', 'right'],
    control: {
      labels: {
        left: 'left',
        center: 'center',
        right: 'right',
      },
    },
    mapping: {
      left: 'left',
      center: 'center',
      right: 'right',
    },
  },
  vertical: {
    name: 'vertical',
    type: 'select',
    description: 'Vertical alignment',
    options: ['top', 'center', 'bottom'],
    control: {
      labels: {
        top: 'top',
        center: 'center',
        bottom: 'bottom',
      },
    },
    mapping: {
      top: 'top',
      center: 'center',
      bottom: 'bottom',
    },
  },
  description: {
    type: { name: 'string' },
    description: 'Banner description',
  },
  image: {
    type: { name: 'string' },
    description: 'Image path or url',
  },
  credit: {
    type: { name: 'string' },
    description: 'Credit of the image',
  },
  ctaLabel: {
    name: 'label of the CTA link',
    type: { name: 'string' },
    description: 'CTA Link label',
  },
  ctaLink: {
    name: 'link of the CTA link',
    type: { name: 'string' },
    description: 'Link path or url',
    if: { arg: 'ctaLabel' },
  },
  fullWidth: {
    name: 'full width banner',
    type: { name: 'boolean' },
    description: 'Extends the banner to the viewport size',
  },
  fontSize: {
    name: 'font size',
    type: 'select',
    description: 'Change font size',
    options: ['s', 'm', 'l'],
    control: {
      labels: {
        s: 'small',
        m: 'medium',
        l: 'large',
      },
    },
    mapping: {
      small: 's',
      medium: 'm',
      large: 'l',
    },
  },
  fontColor: {
    name: 'font color',
    type: 'select',
    description: 'Change font color',
    options: ['dark', 'light'],
    control: {
      labels: {
        dark: 'dark',
        light: 'light',
      },
    },
    mapping: {
      dark: 'dark',
      light: 'light',
    },
    if: { arg: 'boxBackground', eq: 'none' },
  },
  boxBackground: {
    name: 'box background',
    type: 'select',
    description: 'Change box background',
    options: ['none', 'dark', 'light'],
    control: {
      labels: {
        none: 'none',
        dark: 'dark',
        light: 'light',
      },
    },
    mapping: {
      none: 'none',
      dark: 'dark',
      light: 'light',
    },
  },
});

export default {
  title: 'Components/banner',
  decorators: [
    (storyFn) => {
      return `<div style="margin-inline: auto; max-width: 100%; width: 1368px">${storyFn()}</div>`;
    }
  ],
};

const Template = args =>
  `<ecl-banner
    color-mode="${args.color_mode}"
    theme="${args.theme}"
    cta-link="${args.ctaLink}"
    cta-label="${args.ctaLabel}"
    full-width="${args.fullWidth}"
    image="${args.image}"
    banner-title="${args.bannerTitle}"
    credit="${args.credit}"
    horizontal="${args.horizontal}"
    vertical="${args.vertical}"
    font-size="${args.fontSize}"
    ${args.fontColor ? `font-color="${args.fontColor}"` : '' }
    box-background="${args.boxBackground}"
    size="${args.size}"
    ecl-script
  >
    ${args.description}
  </ecl-banner>`;

export const Banner = Template.bind({});
Banner.storyName = 'image';
Banner.args = getArgs();
Banner.argTypes = getArgTypes();


const VideoTemplate = args =>
  `<ecl-banner
    color-mode="${args.color_mode}"
    theme="${args.theme}"
    cta-link="${args.ctaLink}"
    cta-label="${args.ctaLabel}"
    full-width="${args.fullWidth}"
    sources='[{"src": "https://vod.prd.commavservices.eu/12/224712/LR_I224712EN1W.mp4", "type": "video/mp4"}]'
    image="https://vod.prd.commavservices.eu/12/224712/THUMB_I224712EN1W_V_1.jpg"
    banner-title="${args.bannerTitle}"
    credit="${args.credit}"
    size="${args.size}"
    horizontal="${args.horizontal}"
    vertical="${args.vertical}"
    ${args.fontColor ? `font-color="${args.fontColor}"` : '' }
    font-size="${args.fontSize}"
    box-background="${args.boxBackground}"
    ecl-script
  >
    ${args.description}
  </ecl-banner>`;

export const VideoBanner = VideoTemplate.bind({});
VideoBanner.storyName = 'video';
VideoBanner.args = getArgs();
VideoBanner.argTypes = getArgTypes();

const NomediaTemplate = args =>
  `<ecl-banner
    color-mode="${args.color_mode}"
    theme="${args.theme}"
    cta-link="${args.ctaLink}"
    cta-label="${args.ctaLabel}"
    full-width="${args.fullWidth}"
    banner-title="${args.bannerTitle}"
    size="${args.size}"
    horizontal="${args.horizontal}"
    vertical="${args.vertical}"
    font-size="${args.fontSize}"
    ecl-script
  >
    ${args.description}
  </ecl-banner>`;

export const NomediaBanner = NomediaTemplate.bind({});
NomediaBanner.storyName = 'without media';
NomediaBanner.args = getArgs();
NomediaBanner.argTypes = getArgTypes();
