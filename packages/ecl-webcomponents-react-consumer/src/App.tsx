import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EclSiteHeader, EclDivider, EclButton, EclText, EclSocialMediaFollow, EclSocialMediaFollowItem, EclSpacing, EclFooterEc, EclGallery, EclGalleryItem, EclFeaturedItem, EclFactFigures, EclFactFiguresItem, EclListIllustration, EclInpageNavigation, EclInpageNavigationItem, EclListIllustrationItem, EclPageHeader, EclGrid, EclBreadcrumb, EclBreadcrumbItem, EclFooterEu, EclFooterItem, EclLanguageItem, EclMenu, EclMenuItem, defineCustomElements } from '@ecl/ecl-webcomponents-react';

defineCustomElements();

function App() {
    const [currentTheme, setCurrentTheme] = useState<'ec' | 'eu'>('eu');

  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-ecl-theme');
    if (theme === 'ec' || theme === 'eu') {
      setCurrentTheme(theme);
    }
  }, []);

 const switchTheme = (theme: 'ec' | 'eu') => {
    localStorage.setItem('ecl-theme', theme);
    window.location.reload();
  };

  return (
    <div className="App">
      <ul className="ecl-theme-switcher">
        <li>
          <EclButton variant="cta" onClick={() => switchTheme('ec')}>
            EC
          </EclButton>
        </li>
        <li>
          <EclButton variant="cta" onClick={() => switchTheme('eu')}>
            EU
          </EclButton>
        </li>
      </ul>
      <EclSiteHeader
        ecl-script
        login-block
        language-block
        search-block
        search-text="search"
        search-placeholder="Placeholder text"
        language="EN"
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
        <EclLanguageItem slot="eu-category" path="/example.html" lang-code="bg" language="български"></EclLanguageItem>
        <EclLanguageItem slot="eu-category" path="/example.html" lang-code="es" language="español"></EclLanguageItem>
        <EclLanguageItem slot="eu-category" path="/example.html" lang-code="cs" language="čeština"></EclLanguageItem>
        <EclLanguageItem slot="eu-category" path="/example.html" lang-code="da" language="dansk"></EclLanguageItem>
        <EclLanguageItem slot="eu-category" path="/example.html" lang-code="de" language="Deutsch"></EclLanguageItem>
        <EclLanguageItem slot="eu-category" path="/example.html" lang-code="et" language="eesti"></EclLanguageItem>
        <EclLanguageItem slot="eu-category" path="/example.html" lang-code="el" language="ελληνικά"></EclLanguageItem>
        <EclLanguageItem slot="eu-category" path="/example.html" lang-code="en" language="English" active></EclLanguageItem>
        <EclLanguageItem slot="eu-category" path="/example.html" lang-code="fr" language="français"></EclLanguageItem>
        <EclLanguageItem slot="eu-category" path="/example.html" lang-code="ga" language="Gaeilge"></EclLanguageItem>
        <EclLanguageItem slot="eu-category" path="/example.html" lang-code="hr" language="hrvatski"></EclLanguageItem>
        <EclLanguageItem slot="eu-category" path="/example.html" lang-code="it" language="italiano"></EclLanguageItem>
        <EclLanguageItem slot="non-eu-category" path="/example.html" lang-code="zh" language="中文"></EclLanguageItem>
        <EclLanguageItem slot="non-eu-category" path="/example.html" lang-code="tr" language="Türk"></EclLanguageItem>
        <EclMenu slot="menu" close-label="Close" back-label="Back" menu-link="/example.html" ecl-script menu-title="Menu">
          <EclMenuItem link="/example.html"> Home </EclMenuItem>
          <EclMenuItem link="/example.html" has-children trigger-aria-label="Access item's children" current>
            Item 2 label
            <EclMenuItem link="/example.html" child slot="sublist"> Item 2.1 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 2.2 </EclMenuItem>
            <EclMenuItem link="/example.html" child current slot="sublist"> Item 2.3 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist" external> Item 2.4 </EclMenuItem>
          </EclMenuItem>
          <EclMenuItem has-children trigger-aria-label="Access item's children" link="/example.html">
            Item 3 with a very long label
            <EclMenuItem child link="/example.html" slot="sublist"> Item 3.1 </EclMenuItem>
            <EclMenuItem child link="/example.html" slot="sublist"> Item 3.2 </EclMenuItem>
            <EclMenuItem child link="/example.html" slot="sublist"> Item 3.3 </EclMenuItem>
          </EclMenuItem>
          <EclMenuItem link="/example.html"> Item 4 label </EclMenuItem>
          <EclMenuItem link="/example.html" has-children trigger-aria-label="Access item's children">
            Item 5 label
            <EclMenuItem link="/example.html" child slot="sublist"> Item 5.1 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 5.2 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 5.3 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 5.4 </EclMenuItem>
          </EclMenuItem>
          <EclMenuItem link="/example.html" has-children trigger-aria-label="Access item's children">
            Item 6
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.1 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.2 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.3 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.4 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.5 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.6 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.7 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.8 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.9 with a very long label </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.10 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.11 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.12 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.13 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.14 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.15 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.16 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.17 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 6.18 </EclMenuItem>
          </EclMenuItem>
          <EclMenuItem has-children link="/example.html" trigger-aria-label="Access item's children">
            Item 7 label
            <EclMenuItem link="/example.html" child slot="sublist"> Item 7.1 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 7.2 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 7.3 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 7.4 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 7.5 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 7.6 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 7.7 </EclMenuItem>
            <EclMenuItem link="/example.html" child slot="sublist"> Item 7.8 </EclMenuItem>
          </EclMenuItem>
        </EclMenu>
      </EclSiteHeader>
      <EclPageHeader header-title="Page title" meta="Meta info | DD Month YYYY" image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg">
        <EclBreadcrumb slot="breadcrumb" ecl-script>
          <EclBreadcrumbItem path="/example.html"> Home </EclBreadcrumbItem>
          <EclBreadcrumbItem ellipsis button-aria-label="Click to expand"> </EclBreadcrumbItem>
          <EclBreadcrumbItem path="/example.html"> About the European Commission </EclBreadcrumbItem>
          <EclBreadcrumbItem path="/example.html"> Organisational structure </EclBreadcrumbItem>
          <EclBreadcrumbItem path="/example.html"> How the Commission is organised </EclBreadcrumbItem>
          <EclBreadcrumbItem current-page> News </EclBreadcrumbItem>
        </EclBreadcrumb>
        Lorem ipsum dolor sit amet, <a className="ecl-link" href="/example.html">consectetur adipiscing elit</a>. Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus
        risus, <a className="ecl-link" href="/example.html">eget dictum elit</a>. Vestibulum gravida tincidunt venenatis.
      </EclPageHeader>
      <EclSpacing direction="t" value="2xl" outer></EclSpacing>
      <EclGrid container>
        <EclGrid row>
          <EclGrid columns={3} breakpoint="l" styleClass="ecl-sidebar">
            <EclInpageNavigation inpage-title="Page contents" inpage-id="inpage-id" ecl-script with-utils>
              <EclInpageNavigationItem path="#inline-nav-1">Heading 1</EclInpageNavigationItem>
              <EclInpageNavigationItem path="#inline-nav-2">Heading 2 with a long title going on several lines</EclInpageNavigationItem>
              <EclInpageNavigationItem path="#inline-nav-3">Heading 3</EclInpageNavigationItem>
              <EclInpageNavigationItem path="#inline-nav-4">Heading 4</EclInpageNavigationItem>
            </EclInpageNavigation>
          </EclGrid>
          <EclGrid columns={9} breakpoint="l" styleClass="ecl-main">
            <EclSpacing direction="t" outer value="xl"></EclSpacing>
            <EclText tag="h2" type="heading" level={2} id="inline-nav-1">Featured</EclText>
            <EclSpacing direction="b" outer value="s"></EclSpacing>
            <EclDivider></EclDivider>
            <EclSpacing value="l" direction="t"></EclSpacing>
            <EclFeaturedItem
              variant="extended"
              item-title="Featured item"
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
              media-caption="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </EclFeaturedItem>
            <EclSpacing value="l" direction="b"></EclSpacing>
            <EclText tag="h2" type="heading" level={2} id="inline-nav-2">News</EclText>
            <EclSpacing direction="b" outer value="s"></EclSpacing>
            <EclDivider></EclDivider>
            <EclSpacing value="l" direction="t"></EclSpacing>
            <EclListIllustration column={3}>
              <EclListIllustrationItem  has-columns image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" item-title="List with illustration item 1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae. Nullam id felis eu lorem condimentum rutrum vitae ut
                felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque, in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
              </EclListIllustrationItem>
              <EclListIllustrationItem has-columns image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" item-title="List with illustration item 2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae. Nullam id felis eu lorem condimentum rutrum vitae ut
                felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque, in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
              </EclListIllustrationItem>
              <EclListIllustrationItem has-columns image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" item-title="List with illustration item 3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae. Nullam id felis eu lorem condimentum rutrum vitae ut
                felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque, in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
              </EclListIllustrationItem>
            </EclListIllustration>
            <EclSpacing direction="t" value="xl" outer></EclSpacing>
            <EclText tag="h2" level={2} type="heading" id="inline-nav-3">Gallery</EclText>
            <EclSpacing direction="b" outer value="s"></EclSpacing>
            <EclDivider></EclDivider>
            <EclSpacing value="l" direction="t"></EclSpacing>
            <EclGallery
              ecl-script
              el-id="ecl-gallery-demo"
              counter-label="Media files in this gallery"
              view-all-label="See all"
              view-all-expanded-label="Back"
              counter-separator="of"
              next-label="Next"
              prev-label="Previous"
              close-label="Close"
              full-screen-label="View original"
              share-label="Share"
              footer-link-path="/example.html"
              footer-link-label="further media items"
              expandable
              aria-label="Gallery overlay"
              visible-items="9"
            >
              <EclGalleryItem
                el-id="ecl-gallery-demo-item-1"
                meta="Copyright, Author, Licence for image 1"
                media-share-path="/example.html"
                media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
                image-alt="Image 1"
                thumb-zoom
                thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
              >
                The EU in brief, institutions and bodies, countries, symbols, history, facts and figures
              </EclGalleryItem>
              <EclGalleryItem
                type="video"
                thumb-zoom
                meta="Copyright, Author, Licence for embedded media"
                media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-external-video.jpg"
                image-alt="New digital strategy"
                media-iframe-href="https://www.youtube.com/embed/fgi-GSCB6ho"
                thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
              >
                New digital strategy
              </EclGalleryItem>
              <EclGalleryItem
                meta="Copyright, Author, Licence for image 2"
                thumb-zoom
                media-share-path="/example.html"
                media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
                thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
                image-alt="Image 2"
              >
                Information on agriculture, business, culture, health, etc.
              </EclGalleryItem>
              <EclGalleryItem
                meta="Copyright, Author, Licence for image 3"
                thumb-zoom
                media-share-path="/example.html"
                media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
                thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg"
                image-alt="Image 3"
              >
                Living, working, travelling in the EU
              </EclGalleryItem>
              <EclGalleryItem
                meta="Copyright, Author, Licence for image 4"
                thumb-zoom
                media-share-path="/example.html"
                media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
                image-alt="Image 3"
                thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg"
              >
                Information on taxes, customs, importing and exporting goods, financial support for businesses
              </EclGalleryItem>
              <EclGalleryItem
                media-share-path="/example.html"
                thumb-zoom
                meta="Copyright, Author, Licence for video"
                type="html-video"
                thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg"
              >
                EU law
                <video slot="video" className="ecl-gallery__image sc-ecl-gallery-ec" poster="https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg">
                  <source src="https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.mp4" type="video/mp4" />
                  <source src="https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.webm" type="video/webm" />
                  <track kind="captions" label="English" src="/captions/bunny-en.vtt" srcLang="en" />
                  <track kind="captions" label="français" src="/captions/bunny-fr.vtt" srcLang="fr" />
                </video>
              </EclGalleryItem>
              <EclGalleryItem
                meta="Copyright, Author, Licence for image 6"
                thumb-zoom
                media-share-path="/example.html"
                media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg"
                image-alt="Image 6"
                thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg"
              >
                Find official documents, publications, statistics, open data and more resources
              </EclGalleryItem>
              <EclGalleryItem
                thumb-zoom
                meta="Copyright, Author, Licence for image 7"
                media-share-path="/example.html"
                media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg"
                image-alt="Image 7"
                thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
              >
                Teaching material about the EU, including books and maps
              </EclGalleryItem>
              <EclGalleryItem
                meta="Copyright, Author, Licence for image 8"
                thumb-zoom
                media-share-path="/example.html"
                media-iframe-href="https://audiovisual.ec.europa.eu/embed/index.html?ref=I-223223&lg=EN"
                media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg"
                image-alt="Image 8"
                thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg"
              >
                Teaching material about the EU, including books and maps
              </EclGalleryItem>
              <EclGalleryItem
                meta="Copyright, Author, Licence for image 9"
                thumb-zoom
                media-share-path="/example.html"
                media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg"
                image-alt="Image 9"
                thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
              >
                About the EU
              </EclGalleryItem>
              <EclGalleryItem
                meta="Copyright, Author, Licence for image 10"
                thumb-zoom
                media-share-path="/example.html"
                media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg"
                image-alt="Image 10"
                thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image11.jpg"
              >
                EU by topic
              </EclGalleryItem>
            </EclGallery>
            <EclSpacing outer vertical value="l"></EclSpacing>
            <EclSpacing direction="t" value="xl" outer></EclSpacing>
            <EclText tag="h2" level={2} type="heading" id="inline-nav-4">Facts and figures</EclText>
            <EclSpacing direction="b" outer value="s"></EclSpacing>
            <EclDivider></EclDivider>
            <EclSpacing value="l" direction="t"></EclSpacing>
            <EclFactFigures columns={3} id="inline-nav-3">
              <EclFactFiguresItem item-title="Lorem ipsum" value="00.0 million" icon="infographic">
                Nunc condimentum sapien ut nibh finibus suscipit vitae at justo. Morbi quis odio faucibus, commodo tortor id, elementum libero.
              </EclFactFiguresItem>

              <EclFactFiguresItem item-title="Sed hendrerit" value="00.0 million" icon="spreadsheet"> Turpis varius congue venenatis, erat dui feugiat felis. </EclFactFiguresItem>

              <EclFactFiguresItem item-title="Donec suscipit interdum augue, ac dapibus eros finibus a." value="00.0 million" icon="growth">
                Cras vestibulum efficitur mi, quis porta tellus rutrum ut. Quisque at pulvinar sem.
              </EclFactFiguresItem>

              <EclFactFiguresItem item-title="Aenean dapibus" value="00.0 million" icon="digital">
                Aliquam lacinia diam eu sem malesuada, in interdum ante bibendum.
              </EclFactFiguresItem>

              <EclFactFiguresItem item-title="Aliquam faucibus nulla eget eleifend" value="00.0 million" icon="regulation">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec lectus tortor.
              </EclFactFiguresItem>

              <EclFactFiguresItem item-title="Aliquam faucibus nulla eget eleifend" value="00.0 million" icon="image">
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec lectus tortor.
              </EclFactFiguresItem>
            </EclFactFigures>
          </EclGrid>
        </EclGrid>
      </EclGrid>
      <EclSpacing direction="b" outer value="3xl"></EclSpacing>
    {currentTheme === 'eu' ? 
      <EclFooterEu
        logo-alt="European Union"
        logo-title="European Union"
        logo-lang-code="en"
        site-name="Site name"
        description="This site is managed by the Directorate-General for Communication"
        variant="harmonised"
        logo-link="/example.html"
      >
        <EclText size="l" tag="div" style-class="ecl-site-footer__title ecl-site-footer__title--separator" slot="ecl-footer-list-top-middle"> Contact site name </EclText>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-top-middle"> Link </EclFooterItem>
        <EclText style-class="ecl-site-footer__title ecl-site-footer__title--separator" slot="ecl-footer-list-top-middle-bottom" size="l" tag="div"> Follow us </EclText>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-top-middle-bottom"> Social 1 </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-top-middle-bottom"> Social 2 </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-top-middle-bottom"> Social 3 </EclFooterItem>
        <EclText size="l" tag="div" style-class="ecl-site-footer__title ecl-site-footer__title--separator" slot="ecl-footer-list-top-right"> Optional links </EclText>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-top-right"> Link 1 </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-top-right"> Link 2 </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-top-right"> Link 3 </EclFooterItem>
        <EclText tag="div" size="l" slot="ecl-footer-list-main" style-class="ecl-site-footer__title ecl-site-footer__title--separator"> Contact the EU </EclText>
        <EclFooterItem link="tel:0080067891011" slot="ecl-footer-list-main"> Call us 00 800 6 7 8 9 10 11 </EclFooterItem>
        <EclFooterItem link="https://european-union.europa.eu/contact-eu/call-us_en" slot="ecl-footer-list-main"> Use other telephone options </EclFooterItem>
        <EclFooterItem link="https://european-union.europa.eu/contact-eu/write-us_en" slot="ecl-footer-list-main"> Write us via our contact form </EclFooterItem>
        <EclFooterItem link="https://european-union.europa.eu/contact-eu/meet-us_en" slot="ecl-footer-list-main">
          <span slot="ecl-footer-item-desc">Meet us at one of the</span>
          EU centres
        </EclFooterItem>
        <EclText tag="div" size="l" slot="ecl-footer-list-bottom-left" style-class="ecl-site-footer__title ecl-site-footer__title--separator"> Social Media </EclText>
        <EclFooterItem link="https://european-union.europa.eu/contact-eu/social-media-channels_en" slot="ecl-footer-list-bottom-left">
          Search for EU social media channels
        </EclFooterItem>
        <EclText size="l" tag="div" style-class="ecl-site-footer__title ecl-site-footer__title--separator" slot="ecl-footer-list-right-top"> Legal </EclText>
        <EclFooterItem link="https://european-union.europa.eu/languages-our-websites_en" slot="ecl-footer-list-right-top"> Languages on our websites </EclFooterItem>
        <EclFooterItem link="https://european-union.europa.eu/privacy-policy_en" slot="ecl-footer-list-right-top"> Privacy policy </EclFooterItem>
        <EclFooterItem link="https://european-union.europa.eu/legal-notice_en" slot="ecl-footer-list-right-top"> Legal notice </EclFooterItem>
        <EclFooterItem link="https://european-union.europa.eu/cookies_en" slot="ecl-footer-list-right-top"> Cookies </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-info"> Accessibility statement </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-logo-info"> Discover more on europa.eu </EclFooterItem>
        <EclFooterItem link="https://european-union.europa.eu/web-accessibility-policy_en" slot="ecl-footer-list-right-top"> Accessibility </EclFooterItem>
        <EclText size="l" tag="div" style-class="ecl-site-footer__title ecl-site-footer__title--separator" slot="ecl-footer-list-right"> EU institutions and bodies </EclText>
        <EclFooterItem link="http://www.europarl.europa.eu/portal/" slot="ecl-footer-list-right"> Search all EU institutions and bodies </EclFooterItem>
      </EclFooterEu>
    :
      <EclFooterEc
        logo-alt="European Commission"
        logo-title="European Commission"
        logo-lang-code="en"
        site-name="Site name"
        variant="standardised"
        description="This site is managed by:"
        logo-link="/example.html"
      >
        <EclSocialMediaFollow variant="horizontal" position="left" style-class="ecl-site-footer__social-media sc-ecl-footer-ec" slot="ecl-footer-social-follow-info">
          <EclSocialMediaFollowItem icon="x" color="inverted" hide-label share-path="http://example.html"> X </EclSocialMediaFollowItem>
          <EclSocialMediaFollowItem icon="instagram" color="inverted" hide-label share-path="http://instagram.com"> Instagram </EclSocialMediaFollowItem>
          <EclSocialMediaFollowItem icon="linkedin" color="inverted" hide-label share-path="http://linkedin.com"> Linkedin </EclSocialMediaFollowItem>
          <EclSocialMediaFollowItem icon="telegram" color="inverted" hide-label share-path="http://telegram.com"> Telegram </EclSocialMediaFollowItem>
          <EclSocialMediaFollowItem icon="chain" color="inverted" hide-label share-path="http://example.html"> Other </EclSocialMediaFollowItem>
        </EclSocialMediaFollow>
        <EclText size="m" is-bold tag="div" slot="ecl-footer-list-contact" style-class="ecl-site-footer__title"> Contact us </EclText>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-contact"> Contact information of the DG </EclFooterItem>
        <EclText size="m" is-bold tag="div" slot="ecl-footer-list-about" style-class="ecl-site-footer__title"> About us </EclText>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-about"> Information about the DG </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-about"> Information about the DG </EclFooterItem>
        <EclText size="m" is-bold tag="div" slot="ecl-footer-list-more" style-class="ecl-site-footer__title"> More information on </EclText>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-more"> Class name 1 </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-more"> Class name 2 </EclFooterItem>
        <EclText size="m" tag="div" is-bold slot="ecl-footer-list-related" style-class="ecl-site-footer__title"> Related links </EclText>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-related"> Related link 1 </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-related"> Related link 2 </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-related"> Related link 3 </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-related"> Related link 4 </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-related"> Related link 5 </EclFooterItem>
        <EclSocialMediaFollow
          variant="horizontal"
          description="Follow the European Commission"
          position="left"
          style-class="ecl-site-footer__social-media sc-ecl-footer-ec"
          inline-title="Follow us"
          slot="ecl-footer-social-follow"
        >
          <EclSocialMediaFollowItem icon="x" color="inverted" hide-label share-path="http://example.html"> X </EclSocialMediaFollowItem>
          <EclSocialMediaFollowItem icon="instagram" color="inverted" hide-label share-path="http://instagram.com"> Instagram </EclSocialMediaFollowItem>
          <EclSocialMediaFollowItem icon="linkedin" color="inverted" hide-label share-path="http://linkedin.com"> Linkedin </EclSocialMediaFollowItem>
          <EclSocialMediaFollowItem icon="telegram" color="inverted" hide-label share-path="http://telegram.com"> Telegram </EclSocialMediaFollowItem>
          <EclSocialMediaFollowItem icon="chain" color="inverted" hide-label share-path="http://example.html"> Other </EclSocialMediaFollowItem>
        </EclSocialMediaFollow>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-bottom-left"> Languages on our websites </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-bottom-left"> Cookies </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-bottom-left"> Privacy policy </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-bottom-left"> Legal notice </EclFooterItem>
        <EclFooterItem link="/example.html" slot="ecl-footer-list-bottom-left"> Accessibility </EclFooterItem>
      </EclFooterEc>
    }
    </div>
  )
}

export default App
