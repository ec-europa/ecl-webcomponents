import { newSpecPage } from '@stencil/core/testing';
import { EclBreadcrumb } from '../ecl-breadcrumb';
import { EclBreadcrumbItem } from '../ecl-breadcrumb-item';

describe('ecl-breadcrumb', () => {
  it('renders with ellipsis and current page', async () => {
    const page = await newSpecPage({
      components: [EclBreadcrumb, EclBreadcrumbItem],
      html: `<ecl-breadcrumb
        min-items-left="1"
        min-items-right="2"
        ecl-script="true"
        navigation-text="Breadcrumb"
        ellipsis-label="Expand breadcrumb"
      >
        <ecl-breadcrumb-item path="/example.html">
          Home
        </ecl-breadcrumb-item>
        <ecl-breadcrumb-item
          path="/example.html"
        >
          About the European Commission
        </ecl-breadcrumb-item>
        <ecl-breadcrumb-item
          path="/example.html"
        >
          Organisational structure
        </ecl-breadcrumb-item>
        <ecl-breadcrumb-item
          path="/example.html"
        >
          How the Commission is organised
        </ecl-breadcrumb-item>
        <ecl-breadcrumb-item
          current-page
        >
          News
        </ecl-breadcrumb-item>
      </ecl-breadcrumb>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
