import { newSpecPage } from '@stencil/core/testing';
import { EclFeaturedItem } from '../ecl-featured-item';

describe('ecl-featured-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclFeaturedItem],
      html: `<ecl-featured-item
        variant="extended"
        theme="ec"
        item-title="Title"
        position="left"
        image="https://inno-ecl.s3.amazonaws.com/media/example.htmls/example.html-image.jpg"
        media-caption="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      >
         <p class="ecl-u-type-paragraph-m">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </ecl-featured-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
