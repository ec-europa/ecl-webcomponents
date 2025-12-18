import { randomizedLink } from "../../utils/randomizedLink"; 

const getArgTypes = () => {
  return {
    variant: {
      type: { name: 'select' },
      options: ['', 'news', '50-50'],
      labels: {
        '': 'default',
        news: 'news',
        '50-50': '50-50',
      },
      description: 'Variant (news or 50-50)',
    },
    withMeta: {
      name: 'with meta',
      type: { name: 'boolean' },
      description: 'Meta',
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
      if: { arg: 'variant', eq: '50-50' },
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
    fontSize: {
      name: 'font size',
      type: 'select',
      description: 'Change title font size',
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
  }
};

export default {
  title: 'Components/Site-wide/page-header',
};

const Template = args =>
  `<ecl-page-header
    ecl-script
    variant="${args.variant}"
    header-title="${args.title}"
    image="${args.image || ''}"
    thumbnail="${!args.variant && args.thumbnail ? 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg': '' }"
    thumbnail-alt="${args.thumbnailAlt}"
    with-meta="${args.meta}"
    font-size="${args.fontSize}"
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
  variant: '',
  withMeta: true,
  expandable: false,
  expandableContent: false,
  title: 'Page title',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus risus, <a class="ecl-link" href="${randomizedLink('/example.html')}">eget dictum elit</a>. Vestibulum gravida tincidunt venenatis`,
  descriptionPosition: 'top',
  image: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
  imageAlt: 'image alternative text',
  thumbnail: false,
  thumbnailAlt: 'Europe map',
  fontSize: 'm',
};
PageHeaderCore.argTypes = {
   color_mode: { table: { disable: true }},
  ...getArgTypes(),
};
