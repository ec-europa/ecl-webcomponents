import { randomizedLink } from "../../utils/randomizedLink"; 

const getArgTypes = () => {
  return {

    withBackground: {
      name: 'with-background',
      type: { name: 'boolean' },
    },
    withMeta: {
      name: 'with-meta',
      type: { name: 'boolean' },
      description: 'Meta',
    },
    withDescription: {
      name: 'with-description',
      type: { name: 'boolean' },
    },
    expandable: {
      type: { name: 'boolean' },
    },
    expandableContent: {
      name: 'expandable-content',
      type: { name: 'boolean' },
      if: { arg: 'expandable' },
    },
    image: {
      type: { name: 'string' },
      description: 'Main page header image',
    },
    imagePosition: {
      name: 'image-position',
      type: 'select',
      description: 'Change image position',
      options: ['top', 'bottom', 'beside'],
      control: {
        labels: {
          top: 'top',
          bottom: 'bottom',
          beside: 'beside',
        },
      },
      mapping: {
        top: 'top',
        bottom: 'bottom',
        beside: 'beside',
      },
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
    descriptionPosition: {
      name: 'description-position',
      type: 'select',
      description: 'Change description position',
      options: ['top', 'bottom'],
      control: {
        labels: {
          top: 'top',
          bottom: 'bottom',
        },
      },
      mapping: {
        top: 'top',
        bottom: 'bottom',
      },
    },
    thumbnail: {
      type: { name: 'boolean' },
    },
    thumbnailAlt: {
      name: 'thumbnail-alt',
      type: { name: 'string' },
      description: 'Alt attribute for the thumbnail',
      if: { arg: 'thumbnail' }
    },
  }
};

export default {
  title: 'Components/Site-wide/page-header',
};

const Template = args =>
  `<ecl-page-header
    color-mode="${args.color_mode}"
    header-title="${args.title}"
    with-description="${args.withDescription}"
    with-background="${args.withBackground}"
    image="${args.image || ''}"
    image-position="${args.imagePosition}"
    thumbnail="${args.thumbnail ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg' : '' }"
    thumbnail-alt="${args.thumbnailAlt}"
    ${args.withMeta ? 'with-meta' : ''}
    expandable="${args.expandable}"
    expandable-content="${args.expandableContent}"
    description-position="${args.descriptionPosition}"
    image-alt="${args.imageAlt}"
  >
  ${args.expandable ? `            
    <div slot="expandable-header"><strong>LOREM IPSUM</strong> - dolor sit amet, consectetur <a class="ecl-link ${`sc-ecl-page-header-${args.theme}`}" href="/example">adipiscing</a> elit.
    </div>` : ''}
  ${(args.expandable && args.expandableContent) ? ` 
    <div slot="expandable-content"><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Morbi faucibus justo eget ante hendrerit sagittis
      <ul><li>consectetur adipiscing</li><li>Maecenas non convallis dolor</li></ul></li><li>Integer dignissim imperdiet</li></ul>
    </div>` : '' }
    <ecl-page-header-meta-item
      slot="meta"
    >
      News article
    </ecl-page-header-meta-item>
    <ecl-page-header-meta-item
      slot="meta"
    >
      10 March 2025
    </ecl-page-header-meta-item>             
    <ecl-page-header-meta-item
      icon="location"
      slot="meta"
    >
      Brussels
    </ecl-page-header-meta-item>
    <ecl-page-header-meta-item
      icon="clock"
      slot="meta"
    >
      1 minute read
    </ecl-page-header-meta-item>
    <ecl-page-header-meta-item
      slot="meta"
    >
      Research center
    </ecl-page-header-meta-item>
    <ecl-breadcrumb
      slot="breadcrumb"
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
  withBackground: false,
  withDescription: true,
  withMeta: true,
  expandable: false,
  expandableContent: false,
  title: 'Page title',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus risus, eget dictum elit. Vestibulum gravida tincidunt venenatis`,
  descriptionPosition: 'top',
  image: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
  imagePosition: 'top',
  imageAlt: 'image alternative text',
  thumbnail: false,
  thumbnailAlt: 'Europe map',
};
PageHeaderCore.argTypes = {
  ...getArgTypes(),
};
