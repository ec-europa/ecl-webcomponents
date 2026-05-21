import { newSpecPage } from '@stencil/core/testing';
import { EclFeaturedItem } from '../ecl-featured-item';
import { EclMediaContainer } from '../../ecl-media-container/ecl-media-container';
import { EclPicture } from '../../ecl-picture/ecl-picture';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-featured-item', () => {
  it('renders correctly', async () => {
    const page = await newSpecPage({
      components: [EclFeaturedItem, EclLink, EclIcon, EclPicture, EclMediaContainer],
      html: `<ecl-featured-item
        item-title="Title"
        el-id="featured-item-demo"
        link-path="/example.html"
        micro-title="About"
        link-label="Read more"
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
        media-caption="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        media-credit="@Copyright"
      >
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </ecl-featured-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly with all the options specified', async () => {
    const page = await newSpecPage({
      components: [EclFeaturedItem, EclLink, EclPicture, EclIcon, EclMediaContainer],
      html: `<ecl-featured-item
        el-id="featured-item-demo-with-options"
        variant="highlight"
        item-title="Title"
        position="right"
        micro-title="About"
        variant="highlight"
        vertical-alignment="center"
        media-anchor="left"
        media-behavior="dynamic"
        link-type="highlighted"
        el-id="featured-item-demo"
        link-path="/example.html"
        link-label="Read more"
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
        media-caption="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        media-credit="@Copyright"
      >
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </ecl-featured-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
