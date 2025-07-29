import { newSpecPage } from '@stencil/core/testing';
import { EclVideo } from '../ecl-video';

describe('ecl-video', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclVideo],
      html:   `<ecl-video
        muted
        loop
        sr-video-player="Video"
        autoplay
        poster="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
        video-title="Big Buck Bunny"
      >
        <source type="video/mp4" src="https://vod.prd.commavservices.eu/12/224712/LR_I224712EN1W.mp4">
      </ecl-video>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly with zoom', async () => {
    const page = await newSpecPage({
      components: [EclVideo],
      html:   `<ecl-video
        zoom
        sr-video-player="Video"
        autoplay
        poster="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
        video-title="Big Buck Bunny"
      >
        <source type="video/mp4" src="https://vod.prd.commavservices.eu/12/224712/LR_I224712EN1W.mp4">
      </ecl-video>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
