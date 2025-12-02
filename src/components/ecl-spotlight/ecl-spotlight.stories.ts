const getArgs = () => ({
  hasAnchor: true,
  header: 'In focus',
  image: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
  fullWidth: false,
  fontSize: 'm',
  title: 'Proin molestie sapien ut blandit',
  credit: '© Copyright or credit',
});

const getArgTypes = () => ({
  hasAnchor: {
    name: 'with the additional graphic sign',
    type: 'boolean',
  },
  fontSize: {
    name: 'font size',
    type: 'select',
    description: 'Change font size',
    options: ['m', 'l'],
    control: {
      labels: {
        m: 'medium',
        l: 'large',
      },
    },
    mapping: {
      medium: 'm',
      large: 'l',
    },
  },
  title: {
    name: 'title',
    type: { name: 'string' },
    description: 'Title of the spotlight',
  },
  image: {
    type: { name: 'string' },
    description: 'Image path or url',
  },
  credit: {
    type: { name: 'string' },
    description: 'Credit of the image',
  },
  header: {
    type: { name: 'string' },
  },
  path: {
    name: 'link of the spotlight',
    type: { name: 'string' },
    description: 'Link path or url',
  },
  fullWidth: {
    name: 'full width spotlight',
    type: { name: 'boolean' },
    description: 'Extends the spotlight to the viewport size',
  },
});

export default {
  title: 'Components/spotlight',
  decorators: [
    (storyFn) => {
      return `<div style="margin-inline: auto; max-width: 100%; width: 1368px">${storyFn()}</div>`;
    }
  ],
};

const Template = args =>
  `<ecl-spotlight
    path="${args.path}"
    has-anchor="${args.hasAnchor}"
    full-width="${args.fullWidth}"
    image="${args.image}"
    credit="${args.credit}"
    color-mode="${args.color_mode}"
    font-size="${args.fontSize}"
  >
    ${args.title}
  </ecl-spotlight>`;

export const Spotlight = Template.bind({});
Spotlight.storyName = 'default';
Spotlight.args = getArgs();
Spotlight.argTypes = getArgTypes();

