import { newSpecPage } from '@stencil/core/testing';
import { EclPageHeader } from '../ecl-page-header';
import { EclBreadcrumb} from '../../ecl-breadcrumb/ecl-breadcrumb';
import { EclBreadcrumbItem} from '../../ecl-breadcrumb/ecl-breadcrumb-item';
import { EclLink } from '../../ecl-link/ecl-link';

describe('ecl-page-header', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });

  it('renders correctly with image on top', async () => {
    const page = await newSpecPage({
      components: [EclPageHeader, EclBreadcrumb, EclBreadcrumbItem, EclLink],
      html: `<ecl-page-header
        header-title="Page title"
        with-description
        description-position="top"
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
        image-position="top"
        thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
        thumbnail-alt="Eu map"
        meta="Meta info | DD Month YYYY"
        expandable-header="this is the page header expandable header"
        expandable-content="this is the page header expandable panel's content"
        expandable-panel-id="panel-id-test"
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
        </ecl-breadcrumb>
        Lorem ipsum dolor sit amet, <a class="ecl-link" href="/example.html">consectetur adipiscing elit</a>.
        Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus risus,
        <a class="ecl-link" href="/example.html">eget dictum elit</a>. Vestibulum gravida tincidunt venenatis
      </ecl-page-header>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly with image beside', async () => {
    const page = await newSpecPage({
      components: [EclPageHeader, EclBreadcrumb, EclBreadcrumbItem, EclLink],
      html: `<ecl-page-header
        header-title="Page title"
        with-description
        description-position="top"
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
        image-position="beside"
        thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
        thumbnail-alt="Eu map"
        meta="Meta info | DD Month YYYY"
        expandable-header="this is the page header expandable header"
        expandable-content="this is the page header expandable panel's content"
        expandable-panel-id="panel-id-test"
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
        </ecl-breadcrumb>
        Lorem ipsum dolor sit amet, <a class="ecl-link" href="/example.html">consectetur adipiscing elit</a>.
        Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus risus,
        <a class="ecl-link" href="/example.html">eget dictum elit</a>. Vestibulum gravida tincidunt venenatis
      </ecl-page-header>`,
    });

    expect(page.root).toMatchSnapshot();
  });

    it('renders correctly with image at the bottom', async () => {
    const page = await newSpecPage({
      components: [EclPageHeader, EclBreadcrumb, EclBreadcrumbItem, EclLink],
      html: `<ecl-page-header
        header-title="Page title"
        with-description
        description-position="top"
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
        image-position="bottom"
        thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
        thumbnail-alt="Eu map"
        meta="Meta info | DD Month YYYY"
        expandable-header="this is the page header expandable header"
        expandable-content="this is the page header expandable panel's content"
        expandable-panel-id="panel-id-test"
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
        </ecl-breadcrumb>
        Lorem ipsum dolor sit amet, <a class="ecl-link" href="/example.html">consectetur adipiscing elit</a>.
        Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus risus,
        <a class="ecl-link" href="/example.html">eget dictum elit</a>. Vestibulum gravida tincidunt venenatis
      </ecl-page-header>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly with description at the bottom', async () => {
    const page = await newSpecPage({
      components: [EclPageHeader, EclBreadcrumb, EclBreadcrumbItem, EclLink],
      html: `<ecl-page-header
        header-title="Page title"
        with-description
        description-position="bottom"
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
        image-position="top"
        thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
        thumbnail-alt="Eu map"
        meta="Meta info | DD Month YYYY"
        expandable-header="this is the page header expandable header"
        expandable-content="this is the page header expandable panel's content"
        expandable-panel-id="panel-id-test"
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
        </ecl-breadcrumb>
        Lorem ipsum dolor sit amet, <a class="ecl-link" href="/example.html">consectetur adipiscing elit</a>.
        Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus risus,
        <a class="ecl-link" href="/example.html">eget dictum elit</a>. Vestibulum gravida tincidunt venenatis
      </ecl-page-header>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
