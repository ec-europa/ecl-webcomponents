const getArgTypes = () => {
  return {
    variant: {
      type: { name: 'select' },
      options: ['default', 'negative'],
      description: 'Page header variant',
    },
    image: {
      type: { name: 'string' },
      description: 'Main page header image',
    },
    imageAlt: {
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
    variant="${args.variant}"
    theme="${args.theme}"
    header-title="${args.title}"
    image="${args.image || ''}"
    thumbnail="${args.thumbnail}"
    thumbnail-alt="${args.thumbnailAlt}"
    meta="${args.meta}"
    image-alt="${args.imageAlt}"
  >
    <ecl-breadcrumb
      slot="breadcrumb"
      variant="${args.theme === 'ec' ? args.breadcrumbVariant : 'default'}"
      theme="${args.theme}"
      ecl-script
     >
      <ecl-breadcrumb-item
        path="/example.html"
        theme="${args.theme}"
      >
        Home
      </ecl-breadcrumb-item>
      <ecl-breadcrumb-item
        theme="${args.theme}"
        ellipsis
        button-aria-label="Click to expand"
       >
       </ecl-breadcrumb-item>
      <ecl-breadcrumb-item
        path="/example.html"
        theme="${args.theme}"
      >
        About the European Commission
      </ecl-breadcrumb-item>
      <ecl-breadcrumb-item
        path="/example.html"
        theme="${args.theme}"
      >
        Organisational structure
      </ecl-breadcrumb-item>
      <ecl-breadcrumb-item
        path="/example.html"
        theme="${args.theme}"
      >
        How the Commission is organised
      </ecl-breadcrumb-item>
      <ecl-breadcrumb-item
        current-page
        theme="${args.theme}"
      >
        News
      </ecl-breadcrumb-item>
    </ecl-breadcrumb>
    ${args.description}
  </ecl-page-header>`;

export const PageHeaderCore = Template.bind({});
PageHeaderCore.storyName = 'core';
PageHeaderCore.args = {
  variant: 'negative',
  title: 'Page title',
  description: `Lorem ipsum dolor sit amet, <a class="ecl-link" href="/example.html">consectetur adipiscing elit</a>.
                Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus risus,
                <a class="ecl-link" href="/example.html">eget dictum elit</a>. Vestibulum gravida tincidunt venenatis.`,
  image: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
  thumbnail: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
  imageAlt: 'image alternative text',
  meta: 'Meta info | DD Month YYYY',
  thumbnailAlt: 'Europe map',
  breadcrumbVariant: 'negative',
};
PageHeaderCore.argTypes = getArgTypes();

export const PageHeaderHarmonised = Template.bind({});
PageHeaderHarmonised.storyName = 'harmonised';
PageHeaderHarmonised.args = {
  title: 'Page title',
  description: `Lorem ipsum dolor sit amet, <ecl-link path="/example.html">consectetur adipiscing elit</ecl-link>.
                Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus risus,
                <ecl-link path="/example.html">eget dictum elit</ecl-link>. Vestibulum gravida tincidunt venenatis.`,
  thumbnail: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
  meta: 'Meta info | DD Month YYYY',
  breadcrumbVariant: 'default',
}
PageHeaderHarmonised.argTypes = getArgTypes();

export const PageHeaderStandardised = Template.bind({});
PageHeaderStandardised.storyName = 'standardised';
PageHeaderStandardised.args = {
  title: 'Page title',
  description: `Lorem ipsum dolor sit amet, <a class="ecl-link" href="/example.html">consectetur adipiscing elit</a>.
                Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus risus,
                <a class="ecl-link" href="/example.html">eget dictum elit</a>. Vestibulum gravida tincidunt venenatis.`,
  thumbnail: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
  meta: 'Meta info | DD Month YYYY',
  image: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg',
  imageAlt: 'Alternative text for the image',
  breadcrumbVariant: 'default',
  thumbnailAlt: 'Thumbnail alt attribute',
}
PageHeaderStandardised.argTypes = getArgTypes();
