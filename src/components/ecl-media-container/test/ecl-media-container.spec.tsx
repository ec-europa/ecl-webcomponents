import { newSpecPage } from '@stencil/core/testing';
import { EclMediaContainer } from '../ecl-media-container';
import { EclVideo } from '../../ecl-video/ecl-video';
import { EclButton } from '../../ecl-button/ecl-button';
import { EclIcon } from '../../ecl-icon/ecl-icon';
import { EclPicture } from '../../ecl-picture/ecl-picture';

describe('ecl-media-container', () => {
  beforeEach(() => {
    // create a global ECL object so your components can attach classes
    (global as any).ECL = {};
  });

  it('renders correctly with an image', async () => {
    const page = await newSpecPage({
      components: [EclMediaContainer, EclVideo, EclButton, EclIcon, EclPicture],
      html: `<ecl-media-container
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
              image-alt="Alternative text"
              credit="@Copyright"
            >
              caption for the media container
            </ecl-media-container>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly in full width', async () => {
    const page = await newSpecPage({
      components: [EclMediaContainer, EclVideo, EclButton, EclIcon, EclPicture],
      html: `<ecl-media-container
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
              image-alt="Alternative text"
              full-width
            >
              caption for the media container
            </ecl-media-container>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly with an html5 video', async () => {
    const page = await newSpecPage({
      components: [EclMediaContainer, EclVideo, EclButton, EclIcon, EclPicture],
      html: `<ecl-media-container
              ratio="16-9"
              sources='[{"src": "https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.mp4", "type": "video/mp4"}, {"src": "https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.webm", "type": "video/webm"}]'
              tracks='[{"src": "/captions/bunny-en.vtt", "kind": "captions", "src_lang": "en", "label": "English"}, {"src": "/captions/bunny-fr.vtt", "kind": "captions", "src_lang": "fr", "label": "français"}]'
              autoplay
            >
              caption for the media container
            </ecl-media-container>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly with an embedded video', async () => {
    const page = await newSpecPage({
      components: [EclMediaContainer, EclVideo, EclButton, EclIcon, EclPicture],
      html: `<ecl-media-container
              ratio="16-9"
              credit="@Copyright"
            >
              caption for the media container
              <iframe slot="embedded-media" title="New digital strategy" width="350" height="197" src="https://www.youtube.com/embed/fgi-GSCB6ho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            </ecl-media-container>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
