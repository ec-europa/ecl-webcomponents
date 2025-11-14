const getArgs = (storyName = '') => {
  const args = {
    fullWidth: false,
    caption: 'The European Commission has put forward ambitious yet realistic proposals for a modern EU budget. It is time for an EU budget that reflects rapid developments in innovation, the economy, the environment and geopolitics, amongst others.',
    hasCaption: true,
    hasExpandable: false,
  };
  if (storyName === 'video' || storyName === 'iframe') {
    args['ratio'] = '';
    args['eclScript'] = true;
  }

  if (storyName === 'video') {
    args['autoplay'] = true;
  }

  return args;
};

const getArgTypes = (storyName = '') => {
  const argTypes = {
    color_mode: { table: { disable: true } },
    fullWidth: {
      name: 'full-width',
    	control: { name: 'boolean'},
    	table: {
    		description: 'Makes the component render in full width',
    	},
    },
    hasCaption: {
      name: 'has-caption',
      control: { name: 'boolean'},
      table: {
        description: 'Renders the caption',
      },
    },
    hasExpandable: {
      name: 'has-expandable',
      control: { type: 'boolean' },
      description: 'Toggle expandable',
    },
    caption: {
    	control: { name: 'string' },
    	table: {
    		description: 'Text to be used as a caption',
    	},
      if: { arg: 'hasCaption', truthy: true },
    },
  };

  if (storyName === 'iframe') {
    argTypes['ratio'] = {
      type: { name: 'select' },
      description: 'Media ratio (if empty the ratio will be set by the js)',
      options: {
        auto: '',
        '16/9': '16-9',
        '4/3': '4-3',
        '3/2': '3-2',
        '1/1': '1-1',
      },
      mapping: {
        auto: '',
        '16/9': '16-9',
        '4/3': '4-3',
        '3/2': '3-2',
        '1/1': '1-1',
      },
    };
  }

  if (storyName === 'video' || storyName === 'iframe') {
    argTypes['eclScript'] = {
      name: 'ecl-script',
      control: { type: 'boolean' },
      description: 'Use the vanilla js from ECL',
    };
  }

  if (storyName === 'video') {
    argTypes['autoplay'] = {
      control: { type: 'boolean' },
      description: 'Start the video automatically, muted and without controls',
    };
  }

  return argTypes;
};

export default {
  title: 'Components/media container',
  globals: {
    viewport: { value: 'tablet' },
  },
};

const TemplateImg = (args) => 
  `<ecl-media-container
    has-caption=${args.hasCaption}
  	image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
    image-alt="Alternative text for the image"
    ratio="${args.ratio}"
    full-width=${args.fullWidth}
  >
    ${args.hasCaption ? args.caption : ''}
    ${args.hasExpandable ?
    `<ecl-expandable
      ecl-script
      slot="expandable"
      label-collapsed="collapsed"
      label-expanded="expanded"
      id="mediaContainerExpandable"
    >
      <ecl-text tag="p" size="m">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et varius est. Sed elementum rutrum libero,
        at vulputate nisl posuere et. Morbi dui sem, rhoncus non fermentum eget, finibus non purus.
      </ecl-text>
    </ecl-expandable>` : '' }
  </ecl-media-container>`;

export const MediaContainerImage = TemplateImg.bind({});
MediaContainerImage.storyName = 'image';
MediaContainerImage.args = getArgs();
MediaContainerImage.argTypes = getArgTypes();

const TemplateVideo = (args) => 
  `<ecl-media-container
    has-caption=${args.hasCaption}
    autoplay=${args.autoplay}
    ecl-script=${args.eclScript}
    sr-play="play"
    full-width=${args.fullWidth}
    sr-pause="pause"
  	sources='[{"src": "https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.mp4", "type": "video/mp4"}, {"src": "https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.webm", "type": "video/webm"}]'
  	tracks='[{"src": "/captions/bunny-en.vtt", "kind": "captions", "src_lang": "en", "label": "English"}, {"src": "/captions/bunny-fr.vtt", "kind": "captions", "src_lang": "fr", "label": "français"}]'
  >
     ${args.hasCaption ? args.caption : ''}
    ${args.hasExpandable ?
    `<ecl-expandable
      ecl-script
      slot="expandable"
      label-collapsed="collapsed"
      label-expanded="expanded"
      id="mediaContainerExpandable"
      full-width=${args.fullWidth}
    >
      <ecl-text tag="p" size="m">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et varius est. Sed elementum rutrum libero,
        at vulputate nisl posuere et. Morbi dui sem, rhoncus non fermentum eget, finibus non purus.
      </ecl-text>
    </ecl-expandable>` : '' }
  </ecl-media-container>`;

export const MediaContainerVideo = TemplateVideo.bind({});
MediaContainerVideo.storyName = 'video';
MediaContainerVideo.args = getArgs('video');
MediaContainerVideo.argTypes = getArgTypes('video');

const TemplateIframe = (args) =>
  `<ecl-media-container
      ratio="${args.ratio}"
      theme="${args.theme}"
      has-caption=${args.hasCaption}
      ecl-script=${args.eclScript}
      full-width=${args.fullWidth}
      embedded-media
    >
      ${args.hasCaption ? args.caption : ''}
    	<iframe slot="embedded-media" width="350" height="197" title="New digital strategy" src="https://www.youtube.com/embed/fgi-GSCB6ho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      ${args.hasExpandable ?
      `<ecl-expandable
        ecl-script
        slot="expandable"
        label-collapsed="collapsed"
        label-expanded="expanded"
        id="mediaContainerExpandable"
      >
        <ecl-text tag="p" size="m">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et varius est. Sed elementum rutrum libero,
          at vulputate nisl posuere et. Morbi dui sem, rhoncus non fermentum eget, finibus non purus.
        </ecl-text>
      </ecl-expandable>` : '' }
    </ecl-media-container>`;

export const MediaContainerIframe = TemplateIframe.bind({});
MediaContainerIframe.storyName = 'embedded media';
MediaContainerIframe.args = getArgs('iframe');
MediaContainerIframe.argTypes = getArgTypes('iframe');

const TemplateInfographic = (args) =>
  `<ecl-media-container
      has-caption=${args.hasCaption}
      image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
      full-width=${args.fullWidth}
    >
      ${args.hasCaption ? 'Infographic title and copyright' : ''}
      ${args.hasExpandable ?
      `<ecl-expandable
        ecl-script
        slot="expandable"
        label-collapsed="collapsed"
        label-expanded="expanded"
        id="mediaContainerExpandable"
      >
        <ecl-text tag="p" size="m">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et varius est. Sed elementum rutrum libero,
          at vulputate nisl posuere et. Morbi dui sem, rhoncus non fermentum eget, finibus non purus.
        </ecl-text>
      </ecl-expandable>` : '' }
    </ecl-media-container>`;

export const MediaContainerInfographic = TemplateInfographic.bind({});

MediaContainerInfographic.storyName = 'infographic';
MediaContainerInfographic.args = getArgs();
MediaContainerInfographic.argTypes = getArgTypes();







