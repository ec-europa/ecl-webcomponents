import { newSpecPage } from '@stencil/core/testing';
import { EclCarousel } from '../ecl-carousel';

describe('ecl-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclCarousel],
      html: `<ecl-carousel
              carousel-id="ecl-carousel-demo"
              ecl-script
              slides-number="3"
            >
              <ecl-carousel-item
                banner-variant="image"
                theme="ec"
                cta-link="/example.html"
                cta-label="Subscribe"
                centered=false
                image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
                banner-title="Duis vitae pulvinar turpis"
              >
                Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur
              </ecl-carousel-item>
              <ecl-carousel-item
                banner-variant="image-shade"
                theme="ec"
                cta-link="/example.html"
                cta-label="Subscribe"
                centered=false
                image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
                banner-title="Duis vitae pulvinar turpis"
              >
                Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur
              </ecl-carousel-item>
              <ecl-carousel-item
                banner-variant="image-gradient"
                theme="ec"
                cta-link="/example.html"
                cta-label="Subscribe"
                image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
                banner-title="Duis vitae pulvinar turpis"
              >
                Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur
              </ecl-carousel-item>
            </ecl-carousel>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
