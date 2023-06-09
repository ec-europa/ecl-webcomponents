import { randomizedLink } from "../../utils/randomizedLink"; 

const getArgs = () => {
  return {
    variant: 'extended',
    position: 'left',
    itemTitle: 'Title',
    image: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
    description: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <ecl-spacing direction="t" value="s">
      <ecl-link
        variant="standalone"
        style-class="ecl-button sc-ecl-button-ec ecl-button--call"
        href="${randomizedLink('/example.html')}"
      >
        Read more
        <ecl-icon slot="icon-after" icon="corner-arrow" transform="rotate-90" />
      </ecl-link>
    </ecl-spacing>
    `,
    mediaCaption: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  };
};

const getArgTypes = () => {
  return {
    variant: {
      type: { name: 'select' },
      options: ['default', 'extended'],
      description: "Featured item variant"
    },
    position: {
      type: { name: 'select'},
      options: ['left', 'right'],
      description: 'Position of the image',
    },
    itemTitle: {
      type: { name: 'string'},
      description: 'Title of the featured item',
    },
    image: {
      type: { name: 'string'},
      description: 'Image for the media container'
    },
    description: {
      type: { name: 'string'},
      description: 'Content of the ecl-featured-item element',
    },
    mediaCaption: {
      type: { name: 'string' },
      description: 'Caption for the media container'
    }
  };
};

export default {
  title: 'Components/featured-item',
};

const Template = (args) => 
`<ecl-featured-item
  variant="${args.variant}"
  theme="${args.theme}"
  item-title="${args.itemTitle}"
  position="${args.position}"
  image="${args.image}"
  media-caption="${args.mediaCaption}"
>
  ${args.description}
</ecl-featured-item>`;

export const FeaturedItem = Template.bind({});
FeaturedItem.storyName = 'default';
FeaturedItem.args = getArgs();
FeaturedItem.argTypes = getArgTypes();
