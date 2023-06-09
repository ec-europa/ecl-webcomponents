const getArgs = () => ({
  column: 1,
  zebra: false,
  squareImage: false,
  mediaSize: 'm',
  centered: false,
});

const getArgTypes = () => ({
  column: {
    control: { type: 'range', min: 1, max: 4, step: 1 },
    description: 'The number of column for the list (between 1 and 4)',
  },
  zebra: {
    control: { type: 'boolean' },
    description: 'Zebra styling',
  },
  squareImage: {
    name: 'squared images',
    control: { type: 'boolean' },
    description: 'Squared images',
  },
  mediaSize: {
    name: 'size of the media (for squared images only)',
    control: { type: 'select' },
    options: ['s', 'm', 'l'],
    description: 'Size of the squared images',
  },
  centered: {
    name: 'centered',
    control: { type: 'boolean' },
    description: 'Centered content in multiple columns layout',
  },
});

export default {
  title: 'Components/list with illustration',
};

const Template = (args) => 
  `<ecl-list-illustration
    theme="${args.theme}"
    zebra=${args.zebra}
    column="${args.column}"
    centered=${args.centered}
  >
    <ecl-list-illustration-item
      theme="${args.theme}"
      image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
      item-title="List with illustration item 1"
      media-size="${args.mediaSize}"
      square-image=${args.squareImage}
      item-value="3.2 million"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.
      Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque,
      in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
    </ecl-list-illustration-item>
    <ecl-list-illustration-item
      theme="${args.theme}"
      image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
      item-title="List with illustration item 2"
      media-size="${args.mediaSize}"
      square-image=${args.squareImage}
      item-value="3.2 million"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.
      Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque,
      in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
    </ecl-list-illustration-item>
    <ecl-list-illustration-item
      theme="${args.theme}"
      image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
      item-title="List with illustration item 3"
      media-size="${args.mediaSize}"
      square-image=${args.squareImage}
      item-value="3.2 million"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.
      Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque,
      in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
    </ecl-list-illustration-item>
    <ecl-list-illustration-item
      theme="${args.theme}"
      image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
      item-title="List with illustration item 4"
      media-size="${args.mediaSize}"
      square-image=${args.squareImage}
      item-value="3.2 million"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.
      Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque,
      in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
    </ecl-list-illustration-item>
    <ecl-list-illustration-item
      theme="${args.theme}"
      image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg"
      item-title="List with illustration item 5"
      item-link="/example.html"
      media-size="${args.mediaSize}"
      square-image=${args.squareImage}
      item-value="3.2 million"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.
      Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque,
      in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
    </ecl-list-illustration-item>
  </ecl-list-illustration>`;

export const ListIllustration = Template.bind({});
ListIllustration.storyName = 'default';
ListIllustration.args = getArgs();
ListIllustration.argTypes = getArgTypes();
