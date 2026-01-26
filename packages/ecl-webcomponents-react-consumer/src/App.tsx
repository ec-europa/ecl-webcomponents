import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EclButton, EclSiteHeader, EclDivider, EclMegaMenu, EclMegaMenuItem, EclMegaMenuSubitem, EclMegaMenuFeaturedListItem, EclText, EclSocialMediaFollow, EclPageHeaderMetaItem, EclSocialMediaFollowItem, EclSpacing, EclFooterEc, EclGallery, EclGalleryItem, EclFeaturedItem, EclFactFigures, EclFactFiguresItem, EclListIllustration, EclInpageNavigation, EclInpageNavigationItem, EclListIllustrationItem, EclPageHeader, EclGrid, EclBreadcrumb, EclBreadcrumbItem, EclFooterEu, EclFooterItem, EclLanguageItem, EclMenu, EclMenuItem, defineCustomElements } from '@ecl/ecl-webcomponents-react';

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
        site-name="ECL Webcomponents in a react app"
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
        <EclMegaMenu
          slot="menu"
          style-class={`sc-ecl-site-header-${currentTheme}`}
          toggle-label="Close"
          back-label="Back"
          menu-id="mega-menu-demo"
          aria-label="Main navigation"
        >
          <EclMegaMenuItem label="Home" path="/example.html"></EclMegaMenuItem>
          <EclMegaMenuItem
            label="News and media"
            has-children
            has-info 
            has-featured
            see-all
            see-all-label="Discover more"
            info-title="About the news and media"
            featured-image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
            aria-label="Pages in this section"
          >
            <span slot="info">
              Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <EclMegaMenuFeaturedListItem
              slot="featured"
              has-description
              path="/example.html"
              label="Featured link 1"
              external
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
            >
              Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </EclMegaMenuFeaturedListItem>
            <EclMegaMenuSubitem
              path="/example.html"
              label="Item 2.1"
              has-featured
              has-children
              see-all
              see-all-label="See all pages"
              aria-label="Sub-pages in this section"
            >
              <EclMegaMenuSubitem path="/example.html" label="Item 2.1 subitem 1"></EclMegaMenuSubitem>
              <EclMegaMenuSubitem path="/example.html" label="Item 2.1 subitem 2"></EclMegaMenuSubitem>
              <EclMegaMenuSubitem path="/example.html" label="Item 2.1 subitem 3"></EclMegaMenuSubitem>
              <EclMegaMenuSubitem path="/example.html" label="Item 2.1 subitem 4"></EclMegaMenuSubitem>
              <EclMegaMenuSubitem path="/example.html" label="Item 2.1 subitem 5"></EclMegaMenuSubitem>
              <EclMegaMenuSubitem path="/example.html" label="Item 2.1 subitem 6"></EclMegaMenuSubitem>
              <EclMegaMenuSubitem path="/example.html" label="Item 2.1 subitem 7"></EclMegaMenuSubitem>
              <EclMegaMenuSubitem path="/example.html" label="Item 2.1 subitem 8"></EclMegaMenuSubitem>
              <EclMegaMenuFeaturedListItem
                slot="featured-second"
                has-description
                path="/example.html"
                label="Featured link 1"
                external
                image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
              >
                I belong to the sub item
              </EclMegaMenuFeaturedListItem>
            </EclMegaMenuSubitem>
            <EclMegaMenuSubitem path="/example.html" label="Item 2.2"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem
              path="/example.html"
              label="Item 2.3"
              see-all
              see-all-label="See all pages"
            >
              <EclMegaMenuSubitem path="/example.html" label="Item 2.3 subitem 1"></EclMegaMenuSubitem>
              <EclMegaMenuSubitem path="/example.html" label="Item 2.3 subitem 2"></EclMegaMenuSubitem>
              <EclMegaMenuSubitem path="/example.html" label="Item 2.3 subitem 3"></EclMegaMenuSubitem>
              <EclMegaMenuSubitem path="/example.html" label="Item 2.3 subitem 4"></EclMegaMenuSubitem>
              <EclMegaMenuSubitem path="/example.html" label="Item 2.3 subitem 5"></EclMegaMenuSubitem>
            </EclMegaMenuSubitem>
          </EclMegaMenuItem>
          <EclMegaMenuItem
            label="About the EU"
            has-children
            has-info
            info-title="About the European Union"
            has-featured
            one-level-only
            aria-label="Pages in this section"
          >
            <span slot="info">
              Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <EclMegaMenuFeaturedListItem
              slot="featured"
              has-description
              path="/example.html"
              label="Featured link 1"
              external
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
            >
              I belong to the sub item
            </EclMegaMenuFeaturedListItem>
            <EclMegaMenuSubitem label="Item 3.1" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 3.2" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 3.3" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 3.4" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 3.5" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 3.6" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 3.7" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 3.8" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 3.9" path="/example.html"></EclMegaMenuSubitem>
          </EclMegaMenuItem>
          <EclMegaMenuItem
            label="About the EC"
            has-children
            info-title="About the European Commission"  
            has-info
            one-level-only
            see-all
            see-all-label="Discover more"
            aria-label="Pages in this section"
          >
            <span slot="info">
              Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <EclMegaMenuSubitem label="Item 4.1" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 4.2" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 4.3" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 4.4" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 4.5" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 4.6" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 4.7" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 4.8" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 4.9" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 4.10" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 4.11" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 4.12" path="/example.html"></EclMegaMenuSubitem>
          </EclMegaMenuItem>
          <EclMegaMenuItem
            label="Topics"
            has-children
            one-level-only
            aria-label="Pages in this section"
          >
            <EclMegaMenuSubitem label="Item 5.1" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.2" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.3" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.4" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.5" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.6" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.7" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.8" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.9" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.10" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.11" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.12" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.13" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.14" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.15" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.16" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.17" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.18" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.19" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.20" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.21" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.22" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.23" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Item 5.24" path="/example.html"></EclMegaMenuSubitem>
          </EclMegaMenuItem>
          <EclMegaMenuItem
            label="Key priorities"
            path="/example.html"
            has-children
            has-info
            has-featured
            info-title="About key priorities"
            featured-title="Featured items"
            aria-label="Pages in this section"
          >
            <EclMegaMenuFeaturedListItem
              has-description
              slot="featured"
              image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
              path="/example.html"
            >
              Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </EclMegaMenuFeaturedListItem>
            <span slot="info">
              Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <EclMegaMenuSubitem
              has-children
              label="Aid, Development cooperation, Fundamental rights"
              path="/example.html"
              aria-label="Sub-pages in this section"
            >
              <EclMegaMenuSubitem label="A lonely item" path="/example.html"></EclMegaMenuSubitem>
            </EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Energy, Climate change, Environment" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Law" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="EU regional and urban development" path="/example.html"></EclMegaMenuSubitem>
            <EclMegaMenuSubitem
              label="Research and innovation"
              path="/example.html"
              has-children
              has-featured
              see-all
              see-all-label="see all pages"
              aria-label="Sub-pages in this section"
            >
              <EclMegaMenuFeaturedListItem
                slot="featured-second"
                image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
              >
              </EclMegaMenuFeaturedListItem>
              <EclMegaMenuFeaturedListItem
                slot="featured-second"
                path="/example.html"
                label="Featured link 1"
              >
              </EclMegaMenuFeaturedListItem>
              <EclMegaMenuFeaturedListItem
                slot="featured-second"
                path="/example.html"
                label="Featured link 2"
              >
              </EclMegaMenuFeaturedListItem>
              <EclMegaMenuFeaturedListItem
                slot="featured-second"
                path="/example.html"
                label="Featured link 3"
              >
              </EclMegaMenuFeaturedListItem>
              <EclMegaMenuFeaturedListItem
                slot="featured-second"
                path="/example.html"
                label="Featured link 4"
              >
              </EclMegaMenuFeaturedListItem>
              <EclMegaMenuFeaturedListItem
                slot="featured-second"
                path="/example.html"
                label="Featured link 5"
              >
              </EclMegaMenuFeaturedListItem>
              <EclMegaMenuSubitem label="How we provide aid" path="/example.html"></EclMegaMenuSubitem>
              <EclMegaMenuSubitem label="Who we work with" path="/example.html"></EclMegaMenuSubitem>
              <EclMegaMenuSubitem label="Get involved in EU humanitarian aid" path="/example.html"></EclMegaMenuSubitem>
            </EclMegaMenuSubitem>
            <EclMegaMenuSubitem label="Food, Farming, Fisheries" path="/example.html"></EclMegaMenuSubitem>
          </EclMegaMenuItem>
          <EclMegaMenuItem
            label="Engage"
            is-container
          >
            <div slot="container">
              <ecl-text tag="h2" type="heading" level="2">Title for the container</ecl-text>
              <ecl-text tag="p">Minimal content for the container</ecl-text>
            </div>
          </EclMegaMenuItem>
          <EclMegaMenuItem
            label="SOTEU"
            is-promotional
            path="/example.html"
          ></EclMegaMenuItem>
        </EclMegaMenu>
      </EclSiteHeader>
      <EclPageHeader with-meta header-title="Page title" image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg">
        <EclBreadcrumb slot="breadcrumb" ecl-script>
          <EclBreadcrumbItem path="/example.html"> Home </EclBreadcrumbItem>
          <EclBreadcrumbItem ellipsis button-aria-label="Click to expand"> </EclBreadcrumbItem>
          <EclBreadcrumbItem path="/example.html"> About the European Commission </EclBreadcrumbItem>
          <EclBreadcrumbItem path="/example.html"> Organisational structure </EclBreadcrumbItem>
          <EclBreadcrumbItem path="/example.html"> How the Commission is organised </EclBreadcrumbItem>
          <EclBreadcrumbItem current-page> News </EclBreadcrumbItem>
        </EclBreadcrumb>
        <EclPageHeaderMetaItem
          slot="meta"
        >
          News article
        </EclPageHeaderMetaItem>
        <EclPageHeaderMetaItem
          slot="meta"
        >
          10 March 2025
        </EclPageHeaderMetaItem>             
        <EclPageHeaderMetaItem
          icon="location"
          slot="meta"
        >
          Brussels
        </EclPageHeaderMetaItem>
        <EclPageHeaderMetaItem
          icon="clock"
          slot="meta"
        >
          1 minute read
        </EclPageHeaderMetaItem>
        <EclPageHeaderMetaItem
          slot="meta"
        >
          Research center
        </EclPageHeaderMetaItem>
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
