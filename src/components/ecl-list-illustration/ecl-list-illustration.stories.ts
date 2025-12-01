const getArgs = () => ({
  column: 1,
  zebra: false,
  squareImage: false,
  icon: false,
  iconSize: '2xl',
  mediaSize: 'm',
  fontSize: 'l',
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
    if: { arg: 'icon', truthy: false },
  },
  icon: {
    control: { type: 'boolean' },
    description: 'Use an icon as illustration',
  },
  iconSize: {
    name: 'icon-size',
    control: {
      type: 'select',
      labels: {
        l: 'medium',
        '2xl': 'large', 
      },
    },
    description: 'Size of the icon',
    options: [
      'l',
      '2xl',
    ],
    if: { arg: 'icon', truthy: true },
  },
  fontSize: {
    name: 'font-size',
    control: { 
      type: 'select',
      labels: {
        m: 'medium',
        l: 'large' 
      },
    },
    options: [
      'm',
      'l'
    ],
    description: 'Size of the fonts used',
  },
  mediaSize: {
    name: 'size of the media (for squared images only)',
    control: {
      type: 'select',
      labels: {
        s: 'small',
        m: 'medium',
        l: 'large',
      },
    },
    options: ['s', 'm', 'l'],
    description: 'Size of the squared images',
    if: { arg: 'squareImage', truthy: true },
  },
  centered: {
    name: 'centered',
    control: { type: 'boolean' },
    description: 'Centered content in multiple columns layout',
  },
});

const getVariantArgs = () => ({
  itemTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.
        Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque,
        in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.`,
  divider: false,
  column: 1,
});

const getVariantArgTypes = () => {
  return {
    description: {
      control: { type: 'text' },
    },
    itemTitle: {
      name: 'item-title',
      control: { type: 'text' },
    },
    divider: {
      control: { type: 'boolean' },
    },
    column: {
      name: 'number of columns',
      control: { type: 'range', min: 1, max: 2, step: 1 },
    },
  };
};

export default {
  title: 'Components/list with illustration',
};

const Template = (args) => 
  `<ecl-list-illustration
    zebra=${args.zebra}
    column="${args.column}"
    centered=${args.centered}
    font-size="${args.fontSize}"
    color-mode="${args.color_mode}"
  >
    <ecl-list-illustration-item
      image="${!args.icon ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg' : ''}"
      item-title="List with illustration item 1"
      media-size="${args.mediaSize}"
      icon="${args.icon ? "regulation" : ''}"
      icon-size="${args.iconSize}"
      square-image=${args.squareImage}
      item-value="3.2 million"
      ${args.column > 1 ? 'has-columns': ''}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.
      Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque,
      in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
    </ecl-list-illustration-item>
    <ecl-list-illustration-item
      image="${!args.icon ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg' : ''}"
      icon="${args.icon ? "regulation" : ''}"
      icon-size="${args.iconSize}"
      item-title="List with illustration item 2"
      media-size="${args.mediaSize}"
      square-image=${args.squareImage}
      item-value="3.2 million"
      ${args.column > 1 ? 'has-columns': ''}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.
      Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque,
      in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
    </ecl-list-illustration-item>
    <ecl-list-illustration-item
      image="${!args.icon ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg' : ''}"
      icon="${args.icon ? "regulation" : ''}"
      icon-size="${args.iconSize}"
      item-title="List with illustration item 3"
      media-size="${args.mediaSize}"
      square-image=${args.squareImage}
      item-value="3.2 million"
      ${args.column > 1 ? 'has-columns': ''}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.
      Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque,
      in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
    </ecl-list-illustration-item>
    <ecl-list-illustration-item
      image="${!args.icon ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg' : ''}"
      icon="${args.icon ? "regulation" : ''}"
      icon-size="${args.iconSize}"
      item-title="List with illustration item 4"
      media-size="${args.mediaSize}"
      square-image=${args.squareImage}
      item-value="3.2 million"
      ${args.column > 1 ? 'has-columns': ''}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae.
      Nullam id felis eu lorem condimentum rutrum vitae ut felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque,
      in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
    </ecl-list-illustration-item>
    <ecl-list-illustration-item
      image="${!args.icon ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg' : ''}"
      icon="${args.icon ? "regulation" : ''}"
      icon-size="${args.iconSize}"
      item-title="List with illustration item 5"
      item-link="/example.html"
      media-size="${args.mediaSize}"
      square-image=${args.squareImage}
      item-value="3.2 million"
      ${args.column > 1 ? 'has-columns': ''}
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

const IconListTemplate = (args) => 
  `<ecl-list-illustration
    icon-list
    color-mode="${args.color_mode}"
    column="${args.column}"
   >
    <ecl-list-illustration-item
      icon=${args.icon}
      ${args.divider ? 'divider' : ''}
      item-title="${args.itemTitle}"
    >
      ${args.description}
    </ecl-list-illustration-item>
    <ecl-list-illustration-item
      icon=${args.icon}
      ${args.divider ? 'divider' : ''}
      item-title="${args.itemTitle}"
    >
      ${args.description}
    </ecl-list-illustration-item>
    <ecl-list-illustration-item
      icon=${args.icon}
      ${args.divider && args.column === 1 ? 'divider' : ''}
      item-title="${args.itemTitle}"
    >
      ${args.description}
    </ecl-list-illustration-item>
    <ecl-list-illustration-item
      icon=${args.icon}
      item-title="${args.itemTitle}"
    >
      ${args.description}
    </ecl-list-illustration-item>
   </ecl-list-illustration>`;

export const IconList = IconListTemplate.bind({});
IconList.storyName = 'icon list';
IconList.args = {
  ...getVariantArgs(),
  icon: 'check-bold',
  column: 1,
};
IconList.argTypes = {
  ...getVariantArgTypes(),
  icon: {
    control: {
      type: 'select',
    },
    options: ['check-bold', 'arrow-right-bold', 'close-bold'],
  },
};

const NumberListTemplate = (args) => 
  `<ecl-list-illustration
     number-list
     counter-start=${args.counter_start}
     color-mode="${args.color_mode}"
   >
    <ecl-list-illustration-item
      ${args.divider ? 'divider' : ''}
      item-title="${args.itemTitle}""
    >
      ${args.description}
    </ecl-list-illustration-item>
    <ecl-list-illustration-item
      ${args.divider ? 'divider' : ''}
      item-title="${args.itemTitle}""
    >
      ${args.description}
    </ecl-list-illustration-item>
    <ecl-list-illustration-item
      ${args.divider && args.column === 1 ? 'divider' : ''}
      item-title="${args.itemTitle}""
    >
      ${args.description}
    </ecl-list-illustration-item>
    <ecl-list-illustration-item
      item-title="${args.itemTitle}""
    >
      ${args.description}
    </ecl-list-illustration-item>
   </ecl-list-illustration>`;

export const NumberList = NumberListTemplate.bind({});
NumberList.storyName = 'number list';
NumberList.args = {
  ...getVariantArgs(),
  counter_start: 0,
};
NumberList.argTypes = {
  ...getVariantArgTypes(),
  counter_start: {
    name: 'counter start',
    control: { type: 'range', min: 0, max: 20, step: 1 },
  },
};