import { newSpecPage } from '@stencil/core/testing';
import { EclCarousel } from '../ecl-carousel';
import { EclBanner } from '../../ecl-banner/ecl-banner';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclCarousel, EclBanner, EclIcon],
      html: `<ecl-carousel
              carousel-id="ecl-carousel-demo"
              ecl-script
              slides-number="3"
            >
              <ecl-carousel-item
                banner-variant="text-box"
                theme="ec"
                cta-link="/example.html"
                cta-label="Subscribe"
                centered=false
                size="l"
                image="https://inno-ecl.s3.amazonaws.com/media/examples/example.html-image.jpg"
                banner-title="Duis vitae pulvinar turpis"
              >
                Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur
              </ecl-carousel-item>
              <ecl-carousel-item
                banner-variant="text-highlight"
                theme="ec"
                size="l"
                cta-link="/example.html"
                cta-label="Subscribe"
                centered=false
                image="https://inno-ecl.s3.amazonaws.com/media/examples/example.html-image.jpg"
                banner-title="Duis vitae pulvinar turpis"
              >
                Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur
              </ecl-carousel-item>
              <ecl-carousel-item
                banner-variant="image-overlay"
                theme="ec"
                size="l"
                cta-link="/example.html"
                cta-label="Subscribe"
                image="https://inno-ecl.s3.amazonaws.com/media/examples/example.html-image.jpg"
                banner-title="Duis vitae pulvinar turpis"
              >
                Integer quis lorem tellus. Nullam sollicitudin suscipit diam, ac blandit ipsum tempor consectetur
              </ecl-carousel-item>
            </ecl-carousel>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
