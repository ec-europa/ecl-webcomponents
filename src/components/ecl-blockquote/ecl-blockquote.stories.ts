const getArgs = () => {
  return {
    author: 'President Juncker',
    quote: `An interconnected grid will help deliver the ultimate goal of the Energy Union, 
      to make sure affordable, secure and sustainable energy, and also growth across the EU.`,
    language: 'en',
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
    quote: {
      type: { name: 'string' },
      description: "Text of the quote"
    },
    language: {
      type: 'select',
      options: [
        'bg',
        'cs',
        'da',
        'de',
        'el',
        'en',
        'es',
        'et',
        'fi',
        'fr',
        'ga',
        'hr',
        'hu',
        'it',
        'lt',
        'lv',
        'mt',
        'nl',
        'pl',
        'pt',
        'ro',
        'sk',
        'sl',
        'sv',
      ],
      control: {
        labels: {
          bg: 'bulgarian',
          cs: 'czech',
          da: 'danish',
          de: 'german',
          el: 'greek',
          en: 'english',
          es: 'spanish',
          et: 'estonian',
          fi: 'finnish',
          fr: 'french',
          ga: 'gaelic',
          hr: 'croatian',
          hu: 'hungarian',
          it: 'italian',
          lt: 'lituanian',
          lv: 'latvian',
          mt: 'maltese',
          nl: 'dutch',
          pl: 'polish',
          pt: 'portuguese',
          ro: 'romanian',
          sk: 'slovak',
          sl: 'slovenian',
          sv: 'swedish',
        },
      },
      mapping: {
        english: 'en',
        bulgarian: 'bg',
        czech: 'cs',
        danish: 'da',
        german: 'de',
        greek: 'el',
        spanish: 'es',
        estonian: 'et',
        finnish: 'fi',
        french: 'fr',
        gaelic: 'ga',
        croatian: 'hr',
        hungarian: 'hu',
        italian: 'it',
        lituanian: 'lt',
        latvian: 'lv',
        maltese: 'mt',
        dutch: 'nl',
        polish: 'pl',
        portuguese: 'pt',
        romanian: 'ro',
        slovak: 'sk',
        slovenian: 'sl',
        swedish: 'sv',
      },
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
  color-mode="${args.color_mode}"
  image="${args.image ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg' : ''}"
  image-alt="${args.imageAlt}"
  language="${args.language}"
>
  ${args.quote}
</ecl-blockquote>`;

export const Blockquote = Template.bind({});
Blockquote.storyName = 'default';
Blockquote.args = getArgs();
Blockquote.argTypes = getArgTypes();