import { randomizedLink } from "../../utils/randomizedLink"; 

const getArgs = () => {
  return {
    variant: '',
    itemTitle: 'Non per curiositatem opinionum',
    microTitle: 'About',
    fullWidth: false,
    hasMedia: true,
    linkPath: randomizedLink('/example.html'),
    linkLabel: '',
    hasDescription: true,
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
    mediaType: 'image',
    mediaPosition: 'right',
    mediaCaption: 'Lorem ipsum dolor sit amet',
    mediaCredit: '',
    image: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
    videoPoster: 'https://vod.prd.commavservices.eu/12/224712/THUMB_I224712EN1W_V_1.jpg',
    videoTitle: 'Visit the European Commission',
  };
};

const getArgTypes = () => {
  return {
    variant: {
      control: { 
        type: 'select',
        labels: {
          '': 'default',
          hightlight: 'primary',
        },
      },
      options: ['', 'primary'],
      description: "Text media variant"
    },
    itemTitle: {
      name: 'item-title',
      type: {
        name: 'string',
      },
    },
    microTitle: {
      name: 'micro-title',
      type: {
        name: 'string',
      },
    },
    fullWidth: {
      name: 'full-width',
      control: {
        type: 'boolean',
      },
    },
    linkLabel: {
      name: 'link-label',
      type: {
        name: 'string',
      },
    },
    linkPath: {
      name: 'link-path',
      type: {
        name: 'string',
      },
    },
    hasDescription: {
      name: 'has-description',
      control: {
        type: 'boolean',
      }
    },
    hasMedia: {
      name: 'has-media',
      control: {
        type: 'boolean',
      },
    },
    mediaType: {
      name: 'media-type',
      control: {
        type: 'select',
      },
      options: [
        'image',
        'video',
      ],
      if: { arg: 'hasMedia', truthy: true }
    },
    videoTitle: {
      name: 'video-title',
      description: 'Title of the video',
      type: {
        name: 'string',
      },
      if: { arg: 'mediaType', eq: 'video' },
    },
    videoPoster: {
      name: 'video-poster',
      description: 'Image to be used as video placeholder',
      type: {
        name: 'string',
      },
      if: { arg: 'mediaType', eq: 'video' },
    },
    description: {
      type: {
        name: 'string',
      },
    },
    mediaPosition: {
      name: 'media-position',
      type: {
        name: 'select',
      },
      options: [
        'left',
        'right',
      ],
    },
    mediaCaption: {
      name: 'media-caption',
      type: {
        name: 'string',
      },
    },
    mediaCredit: {
      name: 'media-credit',
      type: {
        name: 'string',
      },
    },
  };
};

export default {
  title: 'Components/text-media',
};

const Template = (args) =>
`
<ecl-grid container>
  <ecl-text-media
    color-mode="${args.color_mode || ''}"
    el-id="text-media-demo"
    variant="${args.variant}"
    image="${args.mediaType === 'image' ? args.image : ''}"
    micro-title="${args.microTitle}"
    item-title="${args.itemTitle}"
    media-caption="${args.mediaCaption}"
    media-position="${args.mediaPosition}"
    link-label="${args.linkLabel}"
    link-path="${args.linkPath}"
    has-media="${args.hasMedia}"
    has-description="${args.hasDescription}"
    media-credit="${args.mediaCredit}"
    full-width="${args.fullWidth}"
    video-title="${args.videoTitle}"
    poster="${args.videoPoster}"
    sources='${args.mediaType === 'video'
      ? '[{"src":"https://vod.prd.commavservices.eu/01/275521/019813ec-13ce-7136-ac0d-d7e24fec64c0/1080p-qaa.mp4","type":"video/mp4"}]'
      : ''}'
  >
    ${args.description}
  </ecl-text-media>
</ecl-grid>`;

export const TextMedia = Template.bind({});
TextMedia.storyName = 'default';
TextMedia.args = getArgs();
TextMedia.argTypes = getArgTypes();
