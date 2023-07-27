const getArgs = () => {
  return {
    ratio: '16-9',
    fullWidth: false,
    description: 'The European Commission has put forward ambitious yet realistic proposals for a modern EU budget. It is time for an EU budget that reflects rapid developments in innovation, the economy, the environment and geopolitics, amongst others.',
    hasCaption: true,
  };
};

const getArgTypes = () => {
  return {
    ratio: {
      control: { name: 'select' },
	    options: {
	      auto: '',
	      '16/9': '16-9',
	      '4/3': '4-3',
	      '3/2': '3-2',
	      '1/1': '1-1',
	    },
	    table: {
	      description: "Ratio of the media"
	    },
	  },
    fullWidth: {
    	control: { name: 'boolean'},
    	table: {
    		description: 'Makes the component render in full width',
    	},
    },
    hasCaption: {
      name: 'with caption',
      control: { name: 'boolean'},
      table: {
        description: 'Renders the caption',
      },
    },
    description: {
    	control: { name: 'string' },
    	table: {
    		description: 'Text to be used as a caption',
    	},
    },
  };
};

export default {
  title: 'Components/media container',
};

const TemplateImg = (args) => 
  `<ecl-media-container
    ratio="${args.ratio}"
    theme="${args.theme}"
    has-caption=${args.hasCaption}
  	image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
    image-alt="Alternative text for the image"
  >
     ${args.hasCaption ? args.description : ''}
  </ecl-media-container>`;

export const MediaContainerImage = TemplateImg.bind({});
MediaContainerImage.storyName = 'image';
MediaContainerImage.args = getArgs();
MediaContainerImage.argTypes = getArgTypes();

const TemplateVideo = (args) => 
  `<ecl-media-container
    ratio="${args.ratio}"
    theme="${args.theme}"
    has-caption=${args.hasCaption}
  	sources='[{"src": "https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.mp4", "type": "video/mp4"}, {"src": "https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.webm", "type": "video/webm"}]'
  	tracks='[{"src": "/captions/bunny-en.vtt", "kind": "captions", "src_lang": "en", "label": "English"}, {"src": "/captions/bunny-fr.vtt", "kind": "captions", "src_lang": "fr", "label": "français"}]'
  >
     ${args.hasCaption ? args.description : ''}
  </ecl-media-container>`;

export const MediaContainerVideo = TemplateVideo.bind({});
MediaContainerVideo.storyName = 'video';
MediaContainerVideo.args = getArgs();
MediaContainerVideo.argTypes = getArgTypes();

const TemplateIframe = (args) => 
  `<ecl-media-container
    ratio="${args.ratio}"
    theme="${args.theme}"
    has-caption=${args.hasCaption}
    data-ecl-media-container
  >
    ${args.hasCaption ? args.description : ''}
  	<div class="ecl-media-container__media" slot="embedded-media"><iframe title="New digital strategy" width="350" height="197" src="https://www.youtube.com/embed/fgi-GSCB6ho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
  </ecl-media-container>`;

export const MediaContainerIframe = TemplateIframe.bind({});
MediaContainerIframe.storyName = 'embedded media';
MediaContainerIframe.args = getArgs();
MediaContainerIframe.argTypes = getArgTypes();

const TemplateInfographic = (args) =>
  `<ecl-media-container
    ratio="${args.ratio}"
    theme="${args.theme}"
    has-caption=${args.hasCaption}
    image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
  >
    ${args.hasCaption ? 'Infographic title and copyright' : ''}
    <ecl-expandable
      theme="${args.theme}"
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
    </ecl-expandable>
  </ecl-media-container>`;

export const MediaContainerInfographic = TemplateInfographic.bind({});

MediaContainerInfographic.storyName = 'infographic';
MediaContainerInfographic.args = getArgs();
MediaContainerInfographic.argTypes = getArgTypes();







