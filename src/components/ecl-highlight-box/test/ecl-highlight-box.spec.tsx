import { newSpecPage } from '@stencil/core/testing';
import { EclHighlightBox } from '../ecl-highlight-box';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-highlight-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclHighlightBox, EclIcon, EclLink],
      html: `<ecl-highlight-box
                item-title="Highlighted information"
                item-id="highlighted-box-demo"
                title-icon="arrow-right"
                color-mode="orange"
                has-description="true"
                link-label="Read more"
                link-path="/example.html"
                link-icon="arrow-right"
                >
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Ut enim ad minim veniam</strong>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </ecl-highlight-box>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
