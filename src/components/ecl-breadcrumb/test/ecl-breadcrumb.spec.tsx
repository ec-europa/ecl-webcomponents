import { newSpecPage } from '@stencil/core/testing';
import { EclBreadcrumb } from '../ecl-breadcrumb';
import { EclBreadcrumbItem } from '../ecl-breadcrumb-item';

describe('ecl-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclBreadcrumb, EclBreadcrumbItem],
      html: `<ecl-breadcrumb
        variant="negative"
        theme="ec"
        ecl-script
       >
        <ecl-breadcrumb-item
          path="/example"
          variant="negative"
          theme="ec"
        >
          Home
        </ecl-breadcrumb-item>
        <ecl-breadcrumb-item
          style-class="ecl-breadcrumb__segment--ellipsis"
          ellipsis
          button-aria-label="Click to expand"
         >
         </ecl-breadcrumb-item>
        <ecl-breadcrumb-item
          variant="negative"
          path="/example"
          theme="ec"
        >
          About the European Commission
        </ecl-breadcrumb-item>
        <ecl-breadcrumb-item
          variant="negative"
          path="/example"
          theme="ec"
        >
          Organisational structure
        </ecl-breadcrumb-item>
        <ecl-breadcrumb-item
          variant="negative"
          path="/example"
          theme="ec"
        >
          How the Commission is organised
        </ecl-breadcrumb-item>
        <ecl-breadcrumb-item
          variant="negative"
          current-page
          style-class="ecl-breadcrumb__current-page"
          theme="ec"
        >
          News
        </ecl-breadcrumb-item>
      </ecl-breadcrumb>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
