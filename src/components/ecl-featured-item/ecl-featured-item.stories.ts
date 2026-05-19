import { randomizedLink } from "../../utils/randomizedLink"; 

const getArgs = () => {
  return {
    variant: '',
    position: 'left',
    itemTitle: 'Ut enim ad minim veniam quis nostrud exercitation',
    description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    `,
    verticalAlignment: 'top',
    mediaCaption: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    mediaBehavior: 'static',
    mediaAnchor: 'center',
    mediaCredit: '@Copyright',
    link: true,
    linkType: 'default',
    media: true,
  };
};

const getArgTypes = () => {
  return {
    variant: {
      control: { 
        type: 'select',
        labels: {
          '': 'default',
          hightlight: 'highlight',
        },
      },
      options: ['', 'highlight'],
      description: "Featured item variant"
    },
    position: {
      type: { name: 'select'},
      options: ['left', 'right'],
      description: 'Position of the image',
    },
    verticalAlignment: {
      name: 'vertical-alignment',
      type: { name: 'select'},
      options: ['top', 'center'],
      description: 'Vertical alignmnent of the text content',
    },
    itemTitle: {
      name: 'item-title',
      type: { name: 'string'},
      description: 'Title of the featured item',
    },
    media: {
      control: { type: 'boolean'},
      description: 'Show/hide the media',
    },
    description: {
      type: { name: 'string'},
      description: 'Content of the ecl-featured-item element',
    },
    mediaCaption: {
      name: 'media-caption',
      type: { name: 'string' },
      description: 'Caption for the media container',
      if: { arg: 'media', truthy: true },
    },
    mediaCredit: {
      name: 'media-credit',       
      type: { name: 'string' },
      description: 'Credit for the media',
      if: { arg: 'media', truthy: true }, 
    },
    mediaBehavior: {
      name: 'media-behavior',
      control: { type: 'select' },
      options: [
        'static',
        'dynamic',
      ],
      if: { arg: 'media' }
    },
    mediaAnchor: {
      name: 'media-anchor',
      control: { type: 'select' },
      options: [
        'center',
        'left',
        'right',
        '20% 40%',
      ],
      if: { arg: 'media' },
    },
    link: {
      control: { type: 'boolean' },
      description: ' Show/hide the link',
    },
    linkType: {
      name: 'link-type',
      control: { type: 'select' },
      options: [
        'default',
        'button',
        'highlighted',
      ],
      if: { arg: 'link' }
    }
  };
};

export default {
  title: 'Components/featured-item',
};

const Template = (args) => 
`<ecl-featured-item
  color-mode="${args.color_mode || ''}"
  el-id="featured-item-demo"
  variant="${args.variant }"
  theme="${args.theme}"
  item-title="${args.itemTitle}"
  position="${args.position}"
  image="${args.media ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg' : '' }"
  link-path="${args.link ? randomizedLink('/example.html') : '' }"
  link-label="${args.link ? 'Read more' : '' }"
  link-type="${args.linkType}"
  media-caption="${args.mediaCaption}"
  media-credit="${args.mediaCredit}"
  media-behavior="${args.mediaBehavior}"
  vertical-alignment="${args.verticalAlignment}"
  media-anchor="${args.mediaAnchor}"
>
  ${args.description}
</ecl-featured-item>`;

export const FeaturedItem = Template.bind({});
FeaturedItem.storyName = 'default';
FeaturedItem.args = getArgs();
FeaturedItem.argTypes = getArgTypes();
