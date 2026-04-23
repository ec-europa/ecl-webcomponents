import { randomizedLink } from "../../utils/randomizedLink"; 

const getArgs = () => {
  return {
    fullWidth: false,
    expandable: true,
    thumbZoom: false,
    grid: false,
    gridTemplate: 1,
    ratio: '3-2',
    visibleItems: 8,
    disableOverlay: false,
  };
};

const getArgTypes = () => {
  return {
    color_mode: { table: { disable: true } },
    fullWidth: {
      name: 'full-width',
      type: { name: 'boolean' },
      description: "Make the gallery use the full available width",
    },
    expandable: {
      type: { name: 'boolean' },
      description: 'Make the gallery expandable',
    },
    thumbZoom: {
      name: 'thumb-zoom',
      type: { name: 'boolean' },
      description: 'Animate the thumbnails'
    },
    grid: {
      type: { name: 'boolean' },
      description: 'Use a grid display',
    },
    gridTemplate: {
      name: 'grid-template',
      type: { name: 'select' },
      options: [1, 2, 3, 4],
      description: 'Choose the template to use in the grid display',
      if: { arg: 'grid' },
    },
    ratio: {
      name: 'Image ratio',
      type: { name: 'select' },
      description: 'Image ratio, for grid display',
      options: ['3-1', '3-2'],
      mapping: {
        '3-1': '3-1',
        '3-2': '3-2',
      },
      if: { arg: 'grid' },
    },
    disableOverlay: {
      name: 'disable-overlay',
      control: { type: 'boolean' },
      description: 'Disable the overlay when clicking on the thumbnails'
    },
    visibleItems: {
      name: 'visible-items',
      control: {
        type: 'range',
        step: 1,
        min: 1,
        max: 11,
      },
      description: 'Only relevant when the gallery is set to be expandable',
      if: { arg: 'expandable' },
    },
  };
};


export default {
  title: 'Components/gallery',
};

const Template = (args) =>
`<ecl-grid container>
<ecl-gallery
  el-id="ecl-gallery-demo"
  counter-label="Media files in this gallery"
  view-all-label="Show more items"
  view-all-expanded-label="Show less"
  counter-separator="of"
  next-label="Next"
  prev-label="Previous"
  full-width="${args.fullWidth}"
  grid="${args.grid}"
  grid-template="${args.gridTemplate}"
  ratio="${args.ratio}"
  close-label="Close"
  full-screen-label="View original"
  share-label="Share"
  footer-link-path="${randomizedLink('/example.html')}"
  footer-link-label="further media items"
  expandable=${args.expandable}
  aria-label="Gallery overlay"
  disable-overlay="${args.disableOverlay}"
  visible-items=${args.visibleItems}
>
  <ecl-gallery-item
    el-id="ecl-gallery-demo-item-1"
    meta="Copyright, Author, Licence for image 1"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
    image-alt="Image 1"
    thumb-zoom="${args.thumbZoom}"
    thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
  >    
    The EU in brief, institutions and bodies, countries, symbols, history, facts and figures
  </ecl-gallery-item>
  <ecl-gallery-item
    type="video"
    thumb-zoom="${args.thumbZoom}"
    meta="Copyright, Author, Licence for embedded media"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-external-video.jpg"
    image-alt="New digital strategy"
    media-iframe-href="https://www.youtube.com/embed/fgi-GSCB6ho"
    thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
  >
    New digital strategy
  </ecl-gallery-item>
  <ecl-gallery-item
    meta="Copyright, Author, Licence for image 2"
    thumb-zoom="${args.thumbZoom}"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
    thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
    image-alt="Image 2"
  >
    Information on agriculture, business, culture, health, etc.
  </ecl-gallery-item>
  <ecl-gallery-item
    meta="Copyright, Author, Licence for image 3"
    thumb-zoom="${args.thumbZoom}"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
    thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg"
    image-alt="Image 3"
  >
    Living, working, travelling in the EU
  </ecl-gallery-item>
  <ecl-gallery-item
    meta="Copyright, Author, Licence for image 4"
    thumb-zoom="${args.thumbZoom}"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
    image-alt="Image 3"
    thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg"
  >
    Information on taxes, customs, importing and exporting goods, financial support for businesses
  </ecl-gallery-item>
  <ecl-gallery-item
    media-share-path="${randomizedLink('/example.html')}"
    thumb-zoom="${args.thumbZoom}"
    meta="Copyright, Author, Licence for video"
    type="html-video"
    thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg"
  >
    EU law
    <video
      slot="video"
      class="ecl-gallery__image sc-ecl-gallery-ec"
      poster="https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg"
    >
      <source
        src="https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.mp4"
        type="video/mp4"
      />
      <source
        src="https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.webm"
        type="video/webm"
      />
      <track
        kind="captions"
        label="English"
        src="/captions/bunny-en.vtt"
        srclang="en"
      />
      <track
        kind="captions"
        label="français"
        src="/captions/bunny-fr.vtt"
        srclang="fr"
      />
    </video>
  </ecl-gallery-item>
  <ecl-gallery-item
    meta="Copyright, Author, Licence for image 6"
    thumb-zoom="${args.thumbZoom}"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg"
    image-alt="Image 6"
    thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image11.jpg"
  >
    Find official documents, publications, statistics, open data and more resources
  </ecl-gallery-item>
  <ecl-gallery-item
    meta="Copyright, Author, Licence for image 7"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg"
    image-alt="Image 7"
    thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
  >
    Teaching material about the EU, including books and maps
  </ecl-gallery-item>
  <ecl-gallery-item
    meta="Copyright, Author, Licence for image 8"
    thumb-zoom="${args.thumbZoom}"
    media-share-path="${randomizedLink('/example.html')}"
    media-iframe-href="https://audiovisual.ec.europa.eu/embed/index.html?ref=I-223223&lg=EN"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg"
    image-alt="Image 8"
    thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg"
  >
    Teaching material about the EU, including books and maps
  </ecl-gallery-item>
  <ecl-gallery-item
    meta="Copyright, Author, Licence for image 9"
    thumb-zoom="${args.thumbZoom}"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg"
    image-alt="Image 9"
    thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
  >
    About the EU
  </ecl-gallery-item>
  <ecl-gallery-item
    meta="Copyright, Author, Licence for image 10"
    thumb-zoom="${args.thumbZoom}"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg"
    image-alt="Image 10"
    thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image11.jpg"
  >
    EU by topic
  </ecl-gallery-item>
</ecl-gallery></ecl-grid>`;

export const Gallery = Template.bind({});
Gallery.storyName = 'default';
Gallery.args = getArgs();
Gallery.argTypes = getArgTypes();
