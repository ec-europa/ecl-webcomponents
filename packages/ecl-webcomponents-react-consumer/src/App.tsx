import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EclSiteHeader, EclFeaturedItem, EclFactFigures, EclFactFiguresItem, EclListIllustration, EclInpageNavigation, EclInpageNavigationItem, EclListIllustrationItem, EclPageHeader, EclGrid, EclBreadcrumb, EclBreadcrumbItem, EclFooter, EclFooterItem, EclLanguageItem, EclMenu, EclMenuItem, defineCustomElements } from '@ecl/ecl-webcomponents-react';

defineCustomElements();

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <EclSiteHeader
        ecl-script
        theme="eu"
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
        site-name="ECL Webcomponents in an angular app"
      >
        <EclLanguageItem theme="eu" slot="eu-category" path="/example.html" lang-code="bg" language="български"></EclLanguageItem>
        <EclLanguageItem theme="eu" slot="eu-category" path="/example.html" lang-code="es" language="español"></EclLanguageItem>
        <EclLanguageItem theme="eu" slot="eu-category" path="/example.html" lang-code="cs" language="čeština"></EclLanguageItem>
        <EclLanguageItem theme="eu" slot="eu-category" path="/example.html" lang-code="da" language="dansk"></EclLanguageItem>
        <EclLanguageItem theme="eu" slot="eu-category" path="/example.html" lang-code="de" language="Deutsch"></EclLanguageItem>
        <EclLanguageItem theme="eu" slot="eu-category" path="/example.html" lang-code="et" language="eesti"></EclLanguageItem>
        <EclLanguageItem theme="eu" slot="eu-category" path="/example.html" lang-code="el" language="ελληνικά"></EclLanguageItem>
        <EclLanguageItem theme="eu" slot="eu-category" path="/example.html" lang-code="en" language="English" active></EclLanguageItem>
        <EclLanguageItem theme="eu" slot="eu-category" path="/example.html" lang-code="fr" language="français"></EclLanguageItem>
        <EclLanguageItem theme="eu" slot="eu-category" path="/example.html" lang-code="ga" language="Gaeilge"></EclLanguageItem>
        <EclLanguageItem theme="eu" slot="eu-category" path="/example.html" lang-code="hr" language="hrvatski"></EclLanguageItem>
        <EclLanguageItem theme="eu" slot="eu-category" path="/example.html" lang-code="it" language="italiano"></EclLanguageItem>
        <EclLanguageItem theme="eu" slot="non-eu-category" path="/example.html" lang-code="zh" language="中文"></EclLanguageItem>
        <EclLanguageItem theme="eu" slot="non-eu-category" path="/example.html" lang-code="tr" language="Türk"></EclLanguageItem>
        <EclMenu slot="menu" theme="eu" close-label="Close" back-label="Back" menu-link="/example.html" ecl-script menu-title="Menu">
          <EclMenuItem link="/example.html" theme="eu"> Home </EclMenuItem>
          <EclMenuItem theme="eu" link="/example.html" has-children trigger-aria-label="Access item's children" current>
            Item 2 label
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 2.1 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 2.2 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child current slot="sublist"> Item 2.3 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist" external> Item 2.4 </EclMenuItem>
          </EclMenuItem>
          <EclMenuItem theme="eu" has-children trigger-aria-label="Access item's children" link="/example.html">
            Item 3 with a very long label
            <EclMenuItem theme="eu" child link="/example.html" slot="sublist"> Item 3.1 </EclMenuItem>
            <EclMenuItem theme="eu" child link="/example.html" slot="sublist"> Item 3.2 </EclMenuItem>
            <EclMenuItem theme="eu" child link="/example.html" slot="sublist"> Item 3.3 </EclMenuItem>
          </EclMenuItem>
          <EclMenuItem theme="eu" link="/example.html"> Item 4 label </EclMenuItem>
          <EclMenuItem theme="eu" link="/example.html" has-children trigger-aria-label="Access item's children">
            Item 5 label
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 5.1 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 5.2 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 5.3 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 5.4 </EclMenuItem>
          </EclMenuItem>
          <EclMenuItem theme="eu" link="/example.html" has-children trigger-aria-label="Access item's children">
            Item 6
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.1 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.2 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.3 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.4 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.5 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.6 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.7 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.8 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.9 with a very long label </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.10 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.11 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.12 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.13 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.14 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.15 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.16 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.17 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 6.18 </EclMenuItem>
          </EclMenuItem>
          <EclMenuItem theme="eu" has-children link="/example.html" trigger-aria-label="Access item's children">
            Item 7 label
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 7.1 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 7.2 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 7.3 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 7.4 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 7.5 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 7.6 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 7.7 </EclMenuItem>
            <EclMenuItem theme="eu" link="/example.html" child slot="sublist"> Item 7.8 </EclMenuItem>
          </EclMenuItem>
        </EclMenu>
      </EclSiteHeader>
      <EclPageHeader variant="core" theme="eu" header-title="Page title" meta="Meta info | DD Month YYYY" image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg">
        <EclBreadcrumb slot="breadcrumb" variant="default" theme="eu" ecl-script>
          <EclBreadcrumbItem path="/example.html" theme="eu"> Home </EclBreadcrumbItem>
          <EclBreadcrumbItem theme="eu" ellipsis button-aria-label="Click to expand"> </EclBreadcrumbItem>
          <EclBreadcrumbItem path="/example.html" theme="eu"> About the European Commission </EclBreadcrumbItem>
          <EclBreadcrumbItem path="/example.html" theme="eu"> Organisational structure </EclBreadcrumbItem>
          <EclBreadcrumbItem path="/example.html" theme="eu"> How the Commission is organised </EclBreadcrumbItem>
          <EclBreadcrumbItem current-page theme="eu"> News </EclBreadcrumbItem>
        </EclBreadcrumb>
          Lorem ipsum dolor sit amet, <a className="ecl-link" href="/example.html">consectetur adipiscing elit</a>. Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus
          risus, <a className="ecl-link" href="/example.html">eget dictum elit</a>. Vestibulum gravida tincidunt venenatis.
      </EclPageHeader>
      <div className="ecl-container">
        <div className="ecl-row">
          <EclGrid columns={3} breakpoint="l" styleClass="ecl-sidebar">
            <EclInpageNavigation inpage-title="Page contents" inpage-id="inpage-id" theme="eu" ecl-script with-utils>
              <EclInpageNavigationItem path="#inline-nav-1" theme="eu"> Heading 1 </EclInpageNavigationItem>
              <EclInpageNavigationItem path="#inline-nav-2" theme="eu"> Heading 2 with a long title going on several lines </EclInpageNavigationItem>
              <EclInpageNavigationItem path="#inline-nav-3" theme="eu"> Heading 3 </EclInpageNavigationItem>
            </EclInpageNavigation>
          </EclGrid>
          <EclGrid columns={9} breakpoint="l" styleClass="ecl-main">
            <EclFeaturedItem
              variant="extended"
              theme="eu"
              item-title="Featured item"
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
              media-caption="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              id="inline-nav-1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </EclFeaturedItem>
            <div style={{marginTop: '2rem'}}></div>
            <EclListIllustration theme="eu" column={3} id="inline-nav-2">
              <EclListIllustrationItem theme="eu" image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" item-title="List with illustration item 1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae. Nullam id felis eu lorem condimentum rutrum vitae ut
                felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque, in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
              </EclListIllustrationItem>
              <EclListIllustrationItem theme="eu" image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" item-title="List with illustration item 2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae. Nullam id felis eu lorem condimentum rutrum vitae ut
                felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque, in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
              </EclListIllustrationItem>
              <EclListIllustrationItem theme="eu" image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" item-title="List with illustration item 3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae. Nullam id felis eu lorem condimentum rutrum vitae ut
                felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque, in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
              </EclListIllustrationItem>
            </EclListIllustration>
            <div style={{marginTop: '2rem'}}></div>
            <EclFactFigures columns={3} theme="eu" id="inline-nav-3">
              <EclFactFiguresItem item-title="Lorem ipsum" value="00.0 million" icon="infographic" theme="eu">
                Nunc condimentum sapien ut nibh finibus suscipit vitae at justo. Morbi quis odio faucibus, commodo tortor id, elementum libero.
              </EclFactFiguresItem>

              <EclFactFiguresItem item-title="Sed hendrerit" value="00.0 million" icon="spreadsheet" theme="eu">
                Turpis varius congue venenatis, erat dui feugiat felis.
              </EclFactFiguresItem>

              <EclFactFiguresItem item-title="Donec suscipit interdum augue, ac dapibus eros finibus a." value="00.0 million" icon="growth" theme="eu">
                Cras vestibulum efficitur mi, quis porta tellus rutrum ut. Quisque at pulvinar sem.
              </EclFactFiguresItem>

              <EclFactFiguresItem item-title="Aenean dapibus" value="00.0 million" icon="digital" theme="eu">
                Aliquam lacinia diam eu sem malesuada, in interdum ante bibendum.
              </EclFactFiguresItem>

              <EclFactFiguresItem item-title="Aliquam faucibus nulla eget eleifend" value="00.0 million" icon="regulation" theme="eu">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec lectus tortor.
              </EclFactFiguresItem>

              <EclFactFiguresItem item-title="Aliquam faucibus nulla eget eleifend" value="00.0 million" icon="image" theme="eu">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec lectus tortor.
              </EclFactFiguresItem>
            </EclFactFigures>
          </EclGrid>
        </div>
        <div style={{marginTop: '2rem'}}></div>
        <EclFooter
          theme="eu"
          logo-alt="European Commission"
          logo-title="European commission"
          logo-lang-code="en"
          description="This site is managed by the Directorate-General for Communication"
        >
          <h2 slot="ecl-footer-list-main" className="ecl-site-footer__title ecl-site-footer__title--separator">Contact the EU</h2>
          <EclFooterItem theme="eu" link="tel:0080067891011" slot="ecl-footer-list-main">
            <span slot="ecl-footer-item-desc">Call us</span>
            00 800 6 7 8 9 10 11
          </EclFooterItem>
          <EclFooterItem link="https://european-union.europa.eu/contact-eu/call-us_en" theme="eu" slot="ecl-footer-list-main">
            <span slot="ecl-footer-item-desc">Use other</span>
            telephone options
          </EclFooterItem>
          <EclFooterItem link="https://european-union.europa.eu/contact-eu/write-us_en" theme="eu" slot="ecl-footer-list-main">
            <span slot="ecl-footer-item-desc">Write us via</span>
            contact form
          </EclFooterItem>
          <EclFooterItem link="https://european-union.europa.eu/contact-eu/meet-us_en" theme="eu" slot="ecl-footer-list-main">
            <span slot="ecl-footer-item-desc">Meet us at one of the</span>
            EU centres
          </EclFooterItem>
          <h2 slot="ecl-footer-list-bottom-left" className="ecl-site-footer__title ecl-site-footer__title--separator">Social Media</h2>
          <EclFooterItem link="https://european-union.europa.eu/contact-eu/social-media-channels_en" theme="eu" slot="ecl-footer-list-bottom-left">
            <span slot="ecl-footer-item-desc">Search for</span>
            EU social media channels
          </EclFooterItem>
          <h2 className="ecl-site-footer__title ecl-site-footer__title--separator" slot="ecl-footer-list-bottom-right">Legal</h2>
          <EclFooterItem link="https://european-union.europa.eu/languages-our-websites_en" theme="eu" slot="ecl-footer-list-bottom-right"> Languages on our websites </EclFooterItem>
          <EclFooterItem link="https://european-union.europa.eu/privacy-policy_en" theme="eu" slot="ecl-footer-list-bottom-right"> Privacy policy </EclFooterItem>
          <EclFooterItem link="https://european-union.europa.eu/privacy-policy_en" theme="eu" slot="ecl-footer-list-bottom-right"> Legal notice </EclFooterItem>
          <EclFooterItem link="https://european-union.europa.eu/cookies_en" theme="eu" slot="ecl-footer-list-bottom-right"> Cookies </EclFooterItem>
          <EclFooterItem link="https://european-union.europa.eu/web-accessibility-policy_en" theme="eu" slot="ecl-footer-list-bottom-right"> Accessibility </EclFooterItem>
          <h2 className="ecl-site-footer__title ecl-site-footer__title--separator" slot="ecl-footer-list-right">EU institutions</h2>
          <EclFooterItem link="http://www.europarl.europa.eu/portal/" theme="eu" slot="ecl-footer-list-right"> European Parliament </EclFooterItem>
          <EclFooterItem link="https://www.ombudsman.europa.eu/en/home" theme="eu" slot="ecl-footer-list-right"> European Ombudsman </EclFooterItem>
          <EclFooterItem link="https://secure.edps.europa.eu/EDPSWEB/edps/EDPS?lang=ene" theme="eu" slot="ecl-footer-list-right">
            European Data Protection Supervisor (EDPS)
          </EclFooterItem>
          <EclFooterItem link="https://edpb.europa.eu/edpb_en" theme="eu" slot="ecl-footer-list-right"> The European Data Protection Board </EclFooterItem>
          <EclFooterItem link="https://epso.europa.eu/en" theme="eu" slot="ecl-footer-list-right"> European Personnel Selection Office </EclFooterItem>
          <EclFooterItem link="https://op.europa.eu/en/home" theme="eu" slot="ecl-footer-list-right"> Publications Office of the European Union </EclFooterItem>
          <EclFooterItem
            link="https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies/institutions-and-bodies-profiles_en?f%5B0%5D=oe_organisation_eu_type%3Ahttp%3A//publications.europa.eu/resource/authority/corporate-body-classification/AGENCY_DEC&f%5B1%5D=oe_organisation_eu_type%3Ahttp%3A//publications.europa.eu/resource/authority/corporate-body-classification/AGENCY_EXEC&f%5B2%5D=oe_organisation_eu_type%3Ahttp%3A//publications.europa.eu/resource/authority/corporate-body-classification/EU_JU"
            theme="eu"
            slot="ecl-footer-list-right"
          >
            Agencies
          </EclFooterItem>
        </EclFooter>
      </div>
    </div>
  )
}

export default App
