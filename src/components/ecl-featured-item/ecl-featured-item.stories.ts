import { randomizedLink } from "../../utils/randomizedLink"; 

const getArgs = () => {
  return {
    variant: '',
    position: 'left',
    itemTitle: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    `,
    mediaCaption: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    link: true,
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
    link: {
      control: { type: 'boolean' },
      description: ' Show/hide the link',
    },
  };
};

export default {
  title: 'Components/featured-item',
  parameters: {
    badges: [
      'updated',
    ],  
  },
};

const Template = (args) => 
`<ecl-featured-item
  color-mode="${args.color_mode}"
  variant="${args.variant }"
  theme="${args.theme}"
  item-title="${args.itemTitle}"
  color-mode="${args.color_mode}"
  position="${args.position}"
  image="${args.media ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg' : '' }"
  link-path="${args.link ? randomizedLink('/example.html') : '' }"
  link-label="${args.link ? 'Read more' : '' }"
  media-caption="${args.mediaCaption}"
>
  ${args.description}
</ecl-featured-item>`;

export const FeaturedItem = Template.bind({});
FeaturedItem.storyName = 'default';
FeaturedItem.args = getArgs();
FeaturedItem.argTypes = getArgTypes();
