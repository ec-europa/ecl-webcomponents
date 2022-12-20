const getArgs = () => {
  return {
    author: 'President Juncker',
    image: false,
    imageAlt: 'Image alternative text',
  };
};

const getArgTypes = () => {
  return {
    author: {
      type: { name: 'string' },
      description: "Author of the quote"
    },
    image: {
      name: ' with image',
      type: { name: 'boolean'},
      description: 'Add an image',
    },
    imageAlt: {
      name: 'alternative text for the image',
      type: { name: 'string' },
      description: "To increase accessibility",
    },
  };
};

export default {
  title: 'Components/blockquote',
};

const Template = (args) => 
`<ecl-blockquote
  author="${args.author}"
  theme="${args.theme}"
  image="${args.image ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg' : ''}"
  image-alt="${args.imageAlt}"
>
  An interconnected grid will help deliver the ultimate goal of the Energy Union, 
  to make sure affordable, secure and sustainable energy, and also growth across the EU.
</ecl-blockquote>`;

export const Blockquote = Template.bind({});
Blockquote.storyName = 'default';
Blockquote.args = getArgs();
Blockquote.argTypes = getArgTypes();