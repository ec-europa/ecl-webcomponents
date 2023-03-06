import { newSpecPage } from '@stencil/core/testing';
import { EclPagination } from '../ecl-pagination';
import { EclPaginationItem } from '../ecl-pagination-item';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclPagination, EclPaginationItem, EclLink, EclIcon],
      html: `<ecl-pagination
        theme="ec"
      >
        <ecl-pagination-item
          path="/example.html"
          theme="ec"
          aria-label="Previous page"
          previous
        >
          Previous
        </ecl-pagination-item>
        <ecl-pagination-item
          theme="ec"
          path="/example.html"
          aria-label="Page 24"
         >
          24
         </ecl-pagination-item>
        <ecl-pagination-item
          path="/example.html"
          theme="ec"
          aria-label="Page 25"
        >
          25
        </ecl-pagination-item>
        <ecl-pagination-item
          path="/example.html"
          theme="ec"
          aria-label="Page 26"
          current
        >
          26
        </ecl-pagination-item>
        <ecl-pagination-item
          path="/example.html"
          theme="ec"
          aria-label="Page 27"
        >
          27
        </ecl-pagination-item>
        <ecl-pagination-item
          current-page
          theme="ec"
          aria-label="Page 28"
        >
          28
        </ecl-pagination-item>
        <ecl-pagination-item
          theme="ec"
          next
          aria-label="Next page"
        >
          Next
        </ecl-pagination-item>
      </ecl-pagination>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
