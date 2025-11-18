import { newSpecPage } from '@stencil/core/testing';
import { EclSpotlight } from '../ecl-spotlight';

describe('ecl-spotlight', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclSpotlight],
      html: `<ecl-spotlight
        color-mode="blue-electric"
        path="/example"
        header="In focus"
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
        credit="credit"
        font-size="l"
        has-anchor
      >
        Proin molestie sapien ut blandit
      </ecl-spotlight>`,
    });

   expect(page.root).toMatchSnapshot();
  });
});
