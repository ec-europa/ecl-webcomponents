import { randomizedLink } from "../../utils/randomizedLink"; 

export default {
  title: 'Components/gallery',
};

const Template = (args) => 
`<ecl-gallery
  theme="${args.theme}"
  ecl-script
  counter-label="Media files in this gallery"
  view-all-label="See all"
  view-all-expanded-label="Back"
  counter-separator="of"
  next-label="Next"
  prev-label="Previous"
  close-label="Close"
  full-screen-label="View original"
  share-label="Share"
  visible-items=8
  footer-link-path="${randomizedLink('/example.html')}"
  footer-link-label="further media items"
  expandable
  aria-label="Gallery overlay"
>
  <ecl-gallery-item
    theme="${args.theme}"
    meta="Copyright, Author, Licence for image 1"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
    image-alt="Image 1"
  >    
    The EU in brief, institutions and bodies, countries, symbols, history, facts and figures
  </ecl-gallery-item>
  <ecl-gallery-item
    theme="${args.theme}"
    type="video"
    meta="Copyright, Author, Licence for embedded media"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-external-video.jpg"
    image-alt="New digital strategy"
    media-iframe-href="https://www.youtube.com/embed/fgi-GSCB6ho"
  >
    New digital strategy
  </ecl-gallery-item>
  <ecl-gallery-item
    theme="${args.theme}"
    meta="Copyright, Author, Licence for image 2"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
    image-alt="Image 2"
  >
    Information on agriculture, business, culture, health, etc.
  </ecl-gallery-item>
  <ecl-gallery-item
    theme="${args.theme}"
    meta="Copyright, Author, Licence for image 3"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
    image-alt="Image 3"
  >
    Living, working, travelling in the EU
  </ecl-gallery-item>
  <ecl-gallery-item
    theme="${args.theme}"
    meta="Copyright, Author, Licence for image 4"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
    image-alt="Image 3"
  >
    Information on taxes, customs, importing and exporting goods, financial support for businesses
  </ecl-gallery-item>
  <ecl-gallery-item
    theme="${args.theme}"
    media-share-path="${randomizedLink('/example.html')}"
    meta="Copyright, Author, Licence for video"
    type="html-video"
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
    theme="${args.theme}"
    meta="Copyright, Author, Licence for image 6"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg"
    image-alt="Image 6"
  >
    Find official documents, publications, statistics, open data and more resources
  </ecl-gallery-item>
  <ecl-gallery-item
    theme="${args.theme}"
    meta="Copyright, Author, Licence for image 7"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg"
    image-alt="Image 7"
  >
    Teaching material about the EU, including books and maps
  </ecl-gallery-item>
  <ecl-gallery-item
    theme="${args.theme}"
    meta="Copyright, Author, Licence for image 8"
    media-share-path="${randomizedLink('/example.html')}"
    media-iframe-href="https://audiovisual.ec.europa.eu/embed/index.html?ref=I-223223&lg=EN"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg"
    image-alt="Image 8"
  >
    Teaching material about the EU, including books and maps
  </ecl-gallery-item>
  <ecl-gallery-item
    theme="${args.theme}"
    meta="Copyright, Author, Licence for image 9"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg"
    image-alt="Image 9"
  >
    About the EU
  </ecl-gallery-item>
  <ecl-gallery-item
    theme="${args.theme}"
    meta="Copyright, Author, Licence for image 10"
    media-share-path="${randomizedLink('/example.html')}"
    media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg"
    image-alt="Image 10"
  >
    EU by topic
  </ecl-gallery-item>
</ecl-gallery>`;

export const Gallery = Template.bind({});
Gallery.storyName = 'default';
