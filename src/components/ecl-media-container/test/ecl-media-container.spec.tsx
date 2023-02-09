import { newSpecPage } from '@stencil/core/testing';
import { EclMediaContainer } from '../ecl-media-container';

describe('ecl-media-container', () => {
  it('renders correctly with an image', async () => {
    const page = await newSpecPage({
      components: [EclMediaContainer],
      html: `<ecl-media-container
              ratio="16-9"
              theme="ec"
              description="caption for the media container"
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
            >
            </ecl-media-container>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly with an html5 video', async () => {
    const page = await newSpecPage({
      components: [EclMediaContainer],
      html: `<ecl-media-container
              ratio="16-9"
              theme="ec"
              sources='[{"src": "https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.mp4", "type": "video/mp4"}, {"src": "https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.webm", "type": "video/webm"}]'
              tracks='[{"src": "/captions/bunny-en.vtt", "kind": "captions", "src_lang": "en", "label": "English"}, {"src": "/captions/bunny-fr.vtt", "kind": "captions", "src_lang": "fr", "label": "français"}]'
            >
              caption for the media container
            </ecl-media-container>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly with an embedded video', async () => {
    const page = await newSpecPage({
      components: [EclMediaContainer],
      html: `<ecl-media-container
              ratio="16-9"
              theme="ec"
              ecl-script
              with-utils
              data-ecl-media-container
            >
              caption for the media container
              <div class="ecl-media-container__media" slot="embedded-media"><iframe title="New digital strategy" width="350" height="197" src="https://www.youtube.com/embed/fgi-GSCB6ho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            </ecl-media-container>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
