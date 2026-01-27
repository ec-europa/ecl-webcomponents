import { newSpecPage } from '@stencil/core/testing';
import { EclGallery } from '../ecl-gallery';
import { EclGalleryItem } from '../ecl-gallery-item';
import { EclButton } from '../../ecl-button/ecl-button';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-gallery', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclGallery, EclGalleryItem, EclButton, EclIcon],
      html: `<ecl-gallery
        el-id="ecl-gallery-demo-test"
        ecl-script
        grid
        grid-template="2"
        counter-label="Media files in this gallery"
        view-all-label="View all"
        view-all-expanded-label="Show less"
        counter-separator="of"
        next-label="Next"
        prev-label="Previous"
        close-label="Close"
        download-label="Download"
        share-label="Share"
        visible-items="9"
      >
        <ecl-gallery-item
          el-id="ecl-gallery-demo-test-item-1"
          meta="Copyright, Author, Licence for image 1"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
          image-alt="Image 1"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg"
        >    
          The EU in brief, institutions and bodies, countries, symbols, history, facts and figures
        </ecl-gallery-item>
        <ecl-gallery-item
          el-id="ecl-gallery-demo-test-item-2"
          type="video"
          meta="Copyright, Author, Licence for embedded media"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example.html-external-video.jpg"
          image-alt="New digital strategy"
          media-iframe-href="https://www.youtube.com/embed/fgi-GSCB6ho"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg"
        >
          New digital strategy
        </ecl-gallery-item>
        <ecl-gallery-item
          el-id="ecl-gallery-demo-test-item-3"
          meta="Copyright, Author, Licence for image 2"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
          image-alt="Image 2"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image11.jpg"
        >
          Information on agriculture, business, culture, health, etc.
        </ecl-gallery-item>
        <ecl-gallery-item
          el-id="ecl-gallery-demo-test-item-4"
          meta="Copyright, Author, Licence for image 3"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
          image-alt="Image 3"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg"
        >
          Living, working, travelling in the EU
        </ecl-gallery-item>
        <ecl-gallery-item
          el-id="ecl-gallery-demo-test-item-5"
          meta="Copyright, Author, Licence for image 4"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
          image-alt="Image 3"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg"
        >
          Information on taxes, customs, importing and exporting goods, financial support for businesses
        </ecl-gallery-item>
        <ecl-gallery-item
          el-id="ecl-gallery-demo-test-item-6"
          media-share-path="/example.html"
          meta="Copyright, Author, Licence for video"
          type="html-video"
        >
          EU law
          <video
            slot="video"
            class="ecl-gallery__image sc-ecl-gallery-ec"
            poster="https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg"
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
          el-id="ecl-gallery-demo-test-item-7"
          meta="Copyright, Author, Licence for image 6"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg"
          image-alt="Image 6"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg"
        >
          Find official documents, publications, statistics, open data and more resources
        </ecl-gallery-item>
        <ecl-gallery-item
          el-id="ecl-gallery-demo-test-item-8"
          meta="Copyright, Author, Licence for image 7"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg"
          image-alt="Image 7"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
        >
          Teaching material about the EU, including books and maps
        </ecl-gallery-item>
        <ecl-gallery-item
          el-id="ecl-gallery-demo-test-item-9"
          meta="Copyright, Author, Licence for image 8"
          media-share-path="/example.html"
          media-iframe-href="https://audiovisual.ec.europa.eu/embed/index.html?ref=I-223223&lg=EN"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg"
          image-alt="Image 8"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg"
        >
          Teaching material about the EU, including books and maps
        </ecl-gallery-item>
        <ecl-gallery-item
          el-id="ecl-gallery-demo-test-item-10"
          meta="Copyright, Author, Licence for image 9"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
          image-alt="Image 9"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image1.jpg"
        >
          About the EU
        </ecl-gallery-item>
        <ecl-gallery-item
          el-id="ecl-gallery-demo-test-item-10"
          meta="Copyright, Author, Licence for image 10"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg"
          image-alt="Image 10"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
        >
          EU by topic
        </ecl-gallery-item>
      </ecl-gallery>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
