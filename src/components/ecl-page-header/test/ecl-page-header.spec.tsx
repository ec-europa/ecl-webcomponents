import { newSpecPage } from '@stencil/core/testing';
import { EclPageHeader } from '../ecl-page-header';
import { EclBreadcrumb} from '../../ecl-breadcrumb/ecl-breadcrumb';
import { EclBreadcrumbItem} from '../../ecl-breadcrumb/ecl-breadcrumb-item';

describe('ecl-page-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclPageHeader, EclBreadcrumb, EclBreadcrumbItem],
      html: `<ecl-page-header
        variant="negative"
        theme="ec"
        header-title="Page title"
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example.html-image2.jpg"
        thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example.html-image2.jpg"
        thumbnail-alt="Eu map"
        meta="Meta info | DD Month YYYY"
      >
        <ecl-breadcrumb
          slot="breadcrumb"
          variant="negative"
          theme="ec"
          ecl-script
         >
          <ecl-breadcrumb-item
            path="/example.html"
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
            path="/example.html"
            theme="ec"
          >
            About the European Commission
          </ecl-breadcrumb-item>
          <ecl-breadcrumb-item
            variant="negative"
            path="/example.html"
            theme="ec"
          >
            Organisational structure
          </ecl-breadcrumb-item>
          <ecl-breadcrumb-item
            variant="negative"
            path="/example.html"
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
        </ecl-breadcrumb>
        Lorem ipsum dolor sit amet, <a class="ecl-link" href="/example.html">consectetur adipiscing elit</a>.
        Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus risus,
        <a class="ecl-link" href="/example.html">eget dictum elit</a>. Vestibulum gravida tincidunt venenatis
      </ecl-page-header>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
