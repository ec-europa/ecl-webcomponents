import { randomizedLink } from "../../utils/randomizedLink"; 

const getArgTypes = () => {
  return {
    image: {
      type: { name: 'string' },
      description: 'Main page header image',
    },
    imageAlt: {
      name: 'image-alt',
      type: { name: 'string' },
      description: 'Image alt attribute',
    },
    title: {
      type: { name: 'string' },
      description: 'Title of the header',
    },
    description: {
      type: { name: 'string' },
      description: 'Description',
    },
    meta: {
      type: { name: 'string' },
      description: 'Meta',
    },
    thumbnail: {
      type: { name: 'string' },
      description: 'for the harm',
    },
    thumbnailAlt: {
      name: 'thumbnail-alt',
      type: { name: 'string' },
      description: 'Alt attribute for the thumbnail',
    },
  };
};

export default {
  title: 'Components/Site-wide/page-header',
};

const Template = args =>
  `<ecl-page-header
    header-title="${args.title}"
    image="${args.image || ''}"
    thumbnail="${args.thumbnail}"
    thumbnail-alt="${args.thumbnailAlt}"
    meta="${args.meta}"
    image-alt="${args.imageAlt}"
  >
    <ecl-breadcrumb
      slot="breadcrumb"
      ecl-script
     >
      <ecl-breadcrumb-item
        path="${randomizedLink('/example.html')}"
      >
        Home
      </ecl-breadcrumb-item>
      <ecl-breadcrumb-item
        ellipsis
        button-aria-label="Click to expand"
       >
       </ecl-breadcrumb-item>
      <ecl-breadcrumb-item
        path="${randomizedLink('/example.html')}"
      >
        About the European Commission
      </ecl-breadcrumb-item>
      <ecl-breadcrumb-item
        path="${randomizedLink('/example.html')}"
      >
        Organisational structure
      </ecl-breadcrumb-item>
      <ecl-breadcrumb-item
        path="${randomizedLink('/example.html')}"
      >
        How the Commission is organised
      </ecl-breadcrumb-item>
      <ecl-breadcrumb-item
        current-page
      >
        News
      </ecl-breadcrumb-item>
    </ecl-breadcrumb>
    ${args.description}
  </ecl-page-header>`;

export const PageHeaderCore = Template.bind({});
PageHeaderCore.storyName = 'default';
PageHeaderCore.args = {
  title: 'Page title',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus risus,
                Vestibulum gravida tincidunt venenatis.`,
  image: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
  thumbnail: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
  imageAlt: 'image alternative text',
  meta: 'Meta info | DD Month YYYY',
  thumbnailAlt: 'Europe map',
};
PageHeaderCore.argTypes = {
   color_mode: { table: { disable: true }},
  ...getArgTypes(),
};
