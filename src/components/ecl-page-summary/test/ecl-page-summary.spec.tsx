import { newSpecPage } from '@stencil/core/testing';
import { EclPageSummary } from '../ecl-page-summary';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-page-summary', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclPageSummary, EclIcon],
      html: `<ecl-page-summary
              item-title="Page summary title"
              icon="book-open"
              icon-family="phosphor"
              el-id="page-summary-demo"
              >
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ecl-page-summary>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
