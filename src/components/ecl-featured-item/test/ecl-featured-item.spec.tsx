import { newSpecPage } from '@stencil/core/testing';
import { EclFeaturedItem } from '../ecl-featured-item';
import { EclMediaContainer } from '../../ecl-media-container/ecl-media-container';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-featured-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclFeaturedItem],
      html: `<ecl-featured-item
        variant="highlight"
        item-title="Title"
        position="right"
        link-path="/example.html"
        link-label="Read more"
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
        media-caption="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      >
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </ecl-featured-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
