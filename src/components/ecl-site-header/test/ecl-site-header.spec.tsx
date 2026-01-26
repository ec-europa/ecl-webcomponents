import { newSpecPage } from '@stencil/core/testing';
import { EclSearchForm } from '../../ecl-search-form/ecl-search-form';
import { EclSiteHeader } from '../ecl-site-header';
import { EclButton } from '../../ecl-button/ecl-button';
import { EclLanguageItem } from '../ecl-language-item';
import { EclFormGroup } from '../../ecl-form-group/ecl-form-group';
import { EclMegaMenu } from '../../ecl-mega-menu/ecl-mega-menu';
import { EclMegaMenuItem } from '../../ecl-mega-menu/ecl-mega-menu-item';
import { EclText } from '../../ecl-text/ecl-text';
import { EclMegaMenuSubitem } from '../../ecl-mega-menu/ecl-mega-menu-subitem';
import { EclMegaMenuFeaturedListItem } from '../../ecl-mega-menu/ecl-mega-menu-featured-list-item';

describe('ecl-site-header', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclSearchForm, EclButton, EclText, EclSiteHeader, EclLanguageItem, EclFormGroup, EclMegaMenu, EclMegaMenuItem, EclMegaMenuSubitem, EclMegaMenuFeaturedListItem],
      html: `<ecl-site-header
        theme="ec"
        login-block
        language-block
        search-block
        search-text="search"
        search-placeholder="Placeholder text"
        language="english"
        lang-code="en"
        login-text="Log in"
        eu-label="Official EU languages:"
        non-eu-label="Other languages:"
        language-title="Choose your language"
        login-link="/example.html"
        language-id="language-switcher"
        logo-alt="European Commission"
        logo-title="European commission"
        language-aria-label="Choose language"
        search-form-id="ecl-site-header-search-form"
      >
      <ecl-language-item
        slot="eu-category"
        path="/example.html"
        lang-code="bg"
        language="български"
      ></ecl-language-item>
      <ecl-language-item
        slot="eu-category"
        path="/example.html"
        lang-code="es"
        language="español"
      ></ecl-language-item>
      <ecl-language-item
        slot="eu-category"
        path="/example.html"
        lang-code="cs"
        language="čeština"
      ></ecl-language-item>
      <ecl-language-item
        slot="eu-category"
        path="/example.html"
        lang-code="da"
        language="dansk"
      ></ecl-language-item>
      <ecl-language-item
        slot="eu-category"
        path="/example.html"
        lang-code="de"
        language="Deutsch"
      ></ecl-language-item>
      <ecl-language-item
        slot="eu-category"
        path="/example.html"
        lang-code="et"
        language="eesti"
      ></ecl-language-item>
      <ecl-language-item
        slot="eu-category"
        path="/example.html"
        lang-code="el"
        language="ελληνικά"
      ></ecl-language-item>
      <ecl-language-item
        slot="eu-category"
        path="/example.html"
        lang-code="en"
        language="English"
        active
      ></ecl-language-item>
      <ecl-language-item
        slot="eu-category"
        path="/example.html"
        lang-code="fr"
        language="français"
      ></ecl-language-item>
      <ecl-language-item
        slot="eu-category"
        path="/example.html"
        lang-code="ga"
        language="Gaeilge"
      ></ecl-language-item>
      <ecl-language-item
        slot="eu-category"
        path="/example.html"
        lang-code="hr"
        language="hrvatski"
      ></ecl-language-item>
      <ecl-language-item
        slot="eu-category"
        path="/example.html"
        lang-code="it"
        language="italiano"
      ></ecl-language-item>
      <ecl-language-item
        slot="non-eu-category"
        path="/example.html"
        lang-code="zh"
        language="中文"
      ></ecl-language-item>
      <ecl-language-item
        slot="non-eu-category"
        path="/example.html"
        lang-code="tr"
        language="Türk"
      ></ecl-language-item>
      <ecl-mega-menu
        slot="menu"
        toggle-label="Close"
        back-label="Back"
        menu-id="mega-menu-demo"
        aria-label="Main navigation"
      >
        <ecl-mega-menu-item label="Home" path="/example.html"></ecl-mega-menu-item>
        <ecl-mega-menu-item
          label="News and media"
          has-children
          has-info 
          has-featured
          see-all
          see-all-label="Discover more"
          info-title="About the news and media"
          featured-image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
        >
          <span slot="info">
            Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
          <ecl-mega-menu-featured-list-item 
            slot="featured"
            has-description
            path="/example.html"
            label="Featured link 1"
            external
            image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
          >
            Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ecl-mega-menu-featured-list-item>
          <ecl-mega-menu-subitem
            path="/example.html"
            label="Item 2.1"
            has-featured
            has-children
            see-all
            see-all-label="See all pages"
          >
            <ecl-mega-menu-subitem path="/example.html" label="Item 2.1 subitem 1"></ecl-mega-menu-subitem>
            <ecl-mega-menu-subitem path="/example.html" label="Item 2.1 subitem 2"></ecl-mega-menu-subitem>
            <ecl-mega-menu-subitem path="/example.html" label="Item 2.1 subitem 3"></ecl-mega-menu-subitem>
            <ecl-mega-menu-subitem path="/example.html" label="Item 2.1 subitem 4"></ecl-mega-menu-subitem>
            <ecl-mega-menu-subitem path="/example.html" label="Item 2.1 subitem 5"></ecl-mega-menu-subitem>
            <ecl-mega-menu-subitem path="/example.html" label="Item 2.1 subitem 6"></ecl-mega-menu-subitem>
            <ecl-mega-menu-subitem path="/example.html" label="Item 2.1 subitem 7"></ecl-mega-menu-subitem>
            <ecl-mega-menu-subitem path="/example.html" label="Item 2.1 subitem 8"></ecl-mega-menu-subitem>
            <ecl-mega-menu-featured-list-item 
              slot="featured-second"
              has-description
              path="/example.html"
              label="Featured link 1"
              external
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
            >
              I belong to the sub item
            </ecl-mega-menu-featured-list-item>
          </ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem path="/example.html" label="Item 2.2"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem
            path="/example.html"
            label="Item 2.3"
            see-all
            see-all-label="See all pages"
          >
            <ecl-mega-menu-subitem path="/example.html" label="Item 2.3 subitem 1"></ecl-mega-menu-subitem>
            <ecl-mega-menu-subitem path="/example.html" label="Item 2.3 subitem 2"></ecl-mega-menu-subitem>
            <ecl-mega-menu-subitem path="/example.html" label="Item 2.3 subitem 3"></ecl-mega-menu-subitem>
            <ecl-mega-menu-subitem path="/example.html" label="Item 2.3 subitem 4"></ecl-mega-menu-subitem>
            <ecl-mega-menu-subitem path="/example.html" label="Item 2.3 subitem 5"></ecl-mega-menu-subitem>
          </ecl-mega-menu-subitem>
        </ecl-mega-menu-item>
        <ecl-mega-menu-item
          label="About the EU"
          has-children
          has-info
          info-title="About the European Union"
          has-featured
          one-level-only
        >
          <span slot="info">
            Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
          <ecl-mega-menu-featured-list-item 
            slot="featured"
            has-description
            path="/example.html"
            label="Featured link 1"
            external
            image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
          >
            I belong to the sub item
          </ecl-mega-menu-featured-list-item>
          <ecl-mega-menu-subitem label="Item 3.1" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 3.2" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 3.3" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 3.4" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 3.5" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 3.6" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 3.7" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 3.8" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 3.9" path="/example.html"></ecl-mega-menu-subitem>
        </ecl-mega-menu-item>
        <ecl-mega-menu-item
          label="About the EC"
          has-children
          info-title="About the European Commission"  
          has-info
          one-level-only
          see-all
          see-all-label="Discover more"
        >
          <span slot="info">
            Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
          <ecl-mega-menu-subitem label="Item 4.1" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 4.2" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 4.3" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 4.4" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 4.5" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 4.6" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 4.7" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 4.8" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 4.9" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 4.10" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 4.11" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 4.12" path="/example.html"></ecl-mega-menu-subitem>
        </ecl-mega-menu-item>
        <ecl-mega-menu-item
          label="Topics"
          has-children
          one-level-only
        >
          <ecl-mega-menu-subitem label="Item 5.1" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.2" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.3" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.4" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.5" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.6" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.7" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.8" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.9" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.10" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.11" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.12" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.13" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.14" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.15" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.16" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.17" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.18" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.19" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.20" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.21" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.22" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.23" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Item 5.24" path="/example.html"></ecl-mega-menu-subitem>
        </ecl-mega-menu-item>
        <ecl-mega-menu-item
          label="Key priorities"
          path="/example.html"
          has-children
          has-info
          has-featured
          info-title="About key priorities"
          featured-title="Featured items"
        >
          <ecl-mega-menu-featured-list-item
            has-description
            slot="featured"
            image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
            path="/example.html"
          >
            Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ecl-mega-menu-featured-list-item>
          <span slot="info">
            Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
          <ecl-mega-menu-subitem
            has-children
            label="Aid, Development cooperation, Fundamental rights"
            path="/example.html"
          >
            <ecl-mega-menu-subitem label="A lonely item" path="/example.html"></ecl-mega-menu-subitem>
          </ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Energy, Climate change, Environment" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Law" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="EU regional and urban development" path="/example.html"></ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem
            label="Research and innovation"
            path="/example.html"
            has-children
            has-featured
            see-all
            see-all-label="see all pages"
          >
            <ecl-mega-menu-featured-list-item 
              slot="featured-second"
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
            >
            </ecl-mega-menu-featured-list-item>
            <ecl-mega-menu-featured-list-item 
              slot="featured-second"
              path="/example.html"
              label="Featured link 1"
            >
            </ecl-mega-menu-featured-list-item>
            <ecl-mega-menu-featured-list-item 
              slot="featured-second"
              path="/example.html"
              label="Featured link 2"
            >
            </ecl-mega-menu-featured-list-item>
            <ecl-mega-menu-featured-list-item 
              slot="featured-second"
              path="/example.html"
              label="Featured link 3"
            >
            </ecl-mega-menu-featured-list-item>
            <ecl-mega-menu-featured-list-item 
              slot="featured-second"
              path="/example.html"
              label="Featured link 4"
            >
            </ecl-mega-menu-featured-list-item>
            <ecl-mega-menu-featured-list-item 
              slot="featured-second"
              path="/example.html"
              label="Featured link 5"
            >
            </ecl-mega-menu-featured-list-item>
            <ecl-mega-menu-subitem label="How we provide aid" path="/example.html"></ecl-mega-menu-subitem>
            <ecl-mega-menu-subitem label="Who we work with" path="/example.html"></ecl-mega-menu-subitem>
            <ecl-mega-menu-subitem label="Get involved in EU humanitarian aid" path="/example.html"></ecl-mega-menu-subitem>
          </ecl-mega-menu-subitem>
          <ecl-mega-menu-subitem label="Food, Farming, Fisheries" path="/example.html"></ecl-mega-menu-subitem>
        </ecl-mega-menu-item>
        <ecl-mega-menu-item
          label="Engage"
          is-container
        >
          <div slot="container">
            <ecl-text tag="h2" type="heading" level="2">Title for the container</ecl-text>
            <ecl-text tag="p">Minimal content for the container</ecl-text>
          </div>
        </ecl-mega-menu-item>
        <ecl-mega-menu-item
          label="SOTEU"
          is-promotional
          path="/example.html"
        ></ecl-mega-menu-item>
      </ecl-mega-menu>
      </ecl-site-header>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});