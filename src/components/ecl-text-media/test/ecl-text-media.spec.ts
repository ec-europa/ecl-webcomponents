import { newSpecPage } from '@stencil/core/testing';
import { EclMediaContainer } from '../../ecl-media-container';
import { EclTextMedia} from '../ecl-text-media';
import { EclLink } from '../../ecl-link';
import { EclPicture } from '../../ecl-picture';

describe('ecl-text-media', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });
  
  it('with image renders correctly', async () => {
    const page = await newSpecPage({
      components: [EclTextMedia, EclLink, EclPicture, EclMediaContainer],
      html: `<ecl-text-media
        el-id="text-media-demo"
        variant="primary"
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg"
        micro-title="About"
        item-title="Non per curiositatem opinionum"
        media-caption="Lorem ipsum dolor sit amet"
        media-position="left"
        link-label="a link in text and media"
        link-path="/example.com"
        has-media
        has-description
        media-credit="Copyright
      >
        Lorem ipsum dolor sit amet consectetur adipiscing.
      </ecl-text-media>`,
    });

   expect(page.root).toMatchSnapshot();
  });

  it('with video renders correctly', async () => {
    const pageVideo = await newSpecPage({
      components: [EclTextMedia, EclLink, EclPicture, EclMediaContainer],
      html: `<ecl-text-media
        color-mode="blue-electric"
        el-id="text-media-demo-video"
        micro-title="About"
        item-title="Non per curiositatem opinionum"
        media-position="right"
        link-label="a link in text and media"
        link-path="/example.com"
        has-media
        has-description
        video-title="European Commission"
        poster="https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg"
        sources='[{"src":"https://vod.prd.commavservices.eu/01/275521/019813ec-13ce-7136-ac0d-d7e24fec64c0/1080p-qaa.mp4","type":"video/mp4"}]'
      >
        Lorem ipsum dolor sit amet consectetur adipiscing.
      </ecl-text-media>`,
    });

   expect(pageVideo.root).toMatchSnapshot();
  });
});



