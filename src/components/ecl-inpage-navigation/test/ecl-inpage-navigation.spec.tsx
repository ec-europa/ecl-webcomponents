import { newSpecPage } from '@stencil/core/testing';
import { EclInpageNavigation } from '../ecl-inpage-navigation';
import { EclInpageNavigationItem } from '../ecl-inpage-navigation-item';

describe('ecl-inpage-navigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclInpageNavigation, EclInpageNavigationItem],
      html: `<ecl-inpage-navigation
              inpage-title="Page contents"
              inpage-id="inpage-id"
              theme="ec"
              ecl-script
              with-utils
            >
              <ecl-inpage-navigation-item
                path="#inline-nav-1"
              >
                Heading 1
              </ecl-inpage-navigation-item>
              <ecl-inpage-navigation-item
                path="#inline-nav-2"
              >
                Heading 2 with a long title going on several lines
              </ecl-inpage-navigation-item>
              <ecl-inpage-navigation-item
                path="#inline-nav-3"
              >
                Heading 3
              </ecl-inpage-navigation-item>
              <ecl-inpage-navigation-item
                path="inline-nav-4"
              >
                Heading 4
              </ecl-inpage-navigation-item>
            </ecl-inpage-navigation>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
