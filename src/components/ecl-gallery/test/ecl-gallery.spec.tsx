import { newSpecPage } from '@stencil/core/testing';
import { EclGallery } from '../ecl-gallery';
import { EclGalleryItem } from '../ecl-gallery-item';
import { EclButton } from '../../ecl-button/ecl-button';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-gallery', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclGallery, EclGalleryItem, EclButton, EclIcon],
      html: `<ecl-gallery
        ecl-script
        counter-label="Media files in this gallery"
        view-all-label="View all"
        counter-separator="of"
        next-label="Next"
        prev-label="Previous"
        close-label="Close"
        download-label="Download"
        share-label="Share"
      >
        <ecl-gallery-item
          theme="ec"
          description="The EU in brief, institutions and bodies, countries, symbols, history, facts and figures"
          meta="Copyright, Author, Licence for image 1"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
          image-alt="Image 1"
        >    
        </ecl-gallery-item>
        <ecl-gallery-item
          theme="ec"
          type="video"
          description="New digital strategy"
          meta="Copyright, Author, Licence for embedded media"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-external-video.jpg"
          image-alt="New digital strategy"
          media-iframe-href="https://www.youtube.com/embed/fgi-GSCB6ho"
        >    
        </ecl-gallery-item>
        <ecl-gallery-item
          theme="ec"
          description="Information on agriculture, business, culture, health, etc."
          meta="Copyright, Author, Licence for image 2"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
          image-alt="Image 2"
        ></ecl-gallery-item>
        <ecl-gallery-item
          theme="ec"
          description="Living, working, travelling in the EU"
          meta="Copyright, Author, Licence for image 3"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
          image-alt="Image 3"
        ></ecl-gallery-item>
        <ecl-gallery-item
          theme="ec"
          description="Information on taxes, customs, importing and exporting goods, financial support for businesses"
          meta="Copyright, Author, Licence for image 4"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
          image-alt="Image 3"
        ></ecl-gallery-item>
        <ecl-gallery-item
          theme="ec"
          media-share-path="/example.html"
          meta="Copyright, Author, Licence for video"
          description="EU law"
          type="html-video"
        >
          <video
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
          theme="ec"
          meta="Copyright, Author, Licence for image 6"
          description="Find official documents, publications, statistics, open data and more resources"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg"
          image-alt="Image 6"
        ></ecl-gallery-item>
        <ecl-gallery-item
          theme="ec"
          meta="Copyright, Author, Licence for image 7"
          description="Teaching material about the EU, including books and maps"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg"
          image-alt="Image 7"
        ></ecl-gallery-item>
        <ecl-gallery-item
          theme="ec"
          meta="Copyright, Author, Licence for image 8"
          description="Teaching material about the EU, including books and maps"
          media-share-path="/example.html"
          media-iframe-href="https://audiovisual.ec.europa.eu/embed/index.html?ref=I-223223&lg=EN"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg"
          image-alt="Image 8"
        ></ecl-gallery-item>
        <ecl-gallery-item
          theme="ec"
          meta="Copyright, Author, Licence for image 9"
          description="About the EU"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg"
          image-alt="Image 9"
        ></ecl-gallery-item>
        <ecl-gallery-item
          theme="ec"
          meta="Copyright, Author, Licence for image 10"
          description="EU by topic"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg"
          image-alt="Image 10"
        ></ecl-gallery-item>
      </ecl-gallery>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
