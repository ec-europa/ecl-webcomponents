<script setup></script>
<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  type Theme = 'ec' | 'eu';

  const currentTheme = ref<Theme>('ec');

  onMounted(() => {
    const theme = localStorage.getItem('ecl-theme') || document.documentElement.getAttribute('data-ecl-theme');

    if (theme === 'ec' || theme === 'eu') {
      currentTheme.value = theme as Theme;
      document.documentElement.setAttribute('data-ecl-theme', theme);
    }
  });

  const switchTheme = (theme: Theme) => {
    localStorage.setItem('ecl-theme', theme);
    window.location.reload();
  };
</script>
<style>
  body {
    margin: 0;
  }

  .ecl-theme-switcher {
    list-style: none;
    position: absolute;
    display: flex;
    flex-direction: row;
    right: 0;
    top: 0;
    z-index: 53;
    margin: -2px 0 0;
  }

  .ecl-theme-switcher li {
    margin-inline-end: 0.5rem;
  }

  .ecl-theme-switcher li .ecl-button--cta {
    font-size: 0.75rem;
    font-weight: bold;
    min-height: auto;
    min-width: auto;
    padding: 1px 6px;
  }
</style>
<template>
<ul class="ecl-theme-switcher">
  <li>
    <ecl-button variant="primary" button-style="highlight" @click="switchTheme('ec')">EC</ecl-button>
  </li>
  <li>
    <ecl-button variant="primary" button-style="highlight" @click="switchTheme('eu')">EU</ecl-button>
  </li>
</ul>
<ecl-site-header
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
  <ecl-language-item slot="eu-category" path="/example.html" lang-code="bg" language="български"></ecl-language-item>
  <ecl-language-item slot="eu-category" path="/example.html" lang-code="es" language="español"></ecl-language-item>
  <ecl-language-item slot="eu-category" path="/example.html" lang-code="cs" language="čeština"></ecl-language-item>
  <ecl-language-item slot="eu-category" path="/example.html" lang-code="da" language="dansk"></ecl-language-item>
  <ecl-language-item slot="eu-category" path="/example.html" lang-code="de" language="Deutsch"></ecl-language-item>
  <ecl-language-item slot="eu-category" path="/example.html" lang-code="et" language="eesti"></ecl-language-item>
  <ecl-language-item slot="eu-category" path="/example.html" lang-code="el" language="ελληνικά"></ecl-language-item>
  <ecl-language-item slot="eu-category" path="/example.html" lang-code="en" language="English" active></ecl-language-item>
  <ecl-language-item slot="eu-category" path="/example.html" lang-code="fr" language="français"></ecl-language-item>
  <ecl-language-item slot="eu-category" path="/example.html" lang-code="ga" language="Gaeilge"></ecl-language-item>
  <ecl-language-item slot="eu-category" path="/example.html" lang-code="hr" language="hrvatski"></ecl-language-item>
  <ecl-language-item slot="eu-category" path="/example.html" lang-code="it" language="italiano"></ecl-language-item>
  <ecl-language-item slot="non-eu-category" path="/example.html" lang-code="zh" language="中文"></ecl-language-item>
  <ecl-language-item slot="non-eu-category" path="/example.html" lang-code="tr" language="Türk"></ecl-language-item>
  <ecl-mega-menu slot="menu" toggle-label="Close" back-label="Back" menu-id="mega-menu-demo" aria-label="Main navigation">
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
      aria-label="Pages in this section"
    >
      <span slot="info"> Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
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
      <ecl-mega-menu-subitem path="/example.html" label="Item 2.1" has-featured has-children see-all see-all-label="See all pages" aria-label="Sub-pages in this section">
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
      <ecl-mega-menu-subitem path="/example.html" label="Item 2.3" see-all see-all-label="See all pages">
        <ecl-mega-menu-subitem path="/example.html" label="Item 2.3 subitem 1"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="/example.html" label="Item 2.3 subitem 2"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="/example.html" label="Item 2.3 subitem 3"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="/example.html" label="Item 2.3 subitem 4"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="/example.html" label="Item 2.3 subitem 5"></ecl-mega-menu-subitem>
      </ecl-mega-menu-subitem>
    </ecl-mega-menu-item>
    <ecl-mega-menu-item label="About the EU" has-children has-info info-title="About the European Union" has-featured one-level-only aria-label="Pages in this section">
      <span slot="info"> Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
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
      aria-label="Pages in this section"
    >
      <span slot="info"> Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
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
    <ecl-mega-menu-item label="Topics" has-children one-level-only aria-label="Pages in this section">
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
      aria-label="Pages in this section"
    >
      <ecl-mega-menu-featured-list-item has-description slot="featured" image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" path="/example.html">
        Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ecl-mega-menu-featured-list-item>
      <span slot="info"> Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
      <ecl-mega-menu-subitem has-children label="Aid, Development cooperation, Fundamental rights" path="/example.html" aria-label="Sub-pages in this section">
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
        aria-label="Sub-pages in this section"
      >
        <ecl-mega-menu-featured-list-item slot="featured-second" image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"> </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-featured-list-item slot="featured-second" path="/example.html" label="Featured link 1"> </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-featured-list-item slot="featured-second" path="/example.html" label="Featured link 2"> </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-featured-list-item slot="featured-second" path="/example.html" label="Featured link 3"> </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-featured-list-item slot="featured-second" path="/example.html" label="Featured link 4"> </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-featured-list-item slot="featured-second" path="/example.html" label="Featured link 5"> </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-subitem label="How we provide aid" path="/example.html"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem label="Who we work with" path="/example.html"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem label="Get involved in EU humanitarian aid" path="/example.html"></ecl-mega-menu-subitem>
      </ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Food, Farming, Fisheries" path="/example.html"></ecl-mega-menu-subitem>
    </ecl-mega-menu-item>
    <ecl-mega-menu-item label="Engage" is-container>
      <div slot="container">
        <ecl-text tag="h2" type="heading" level="2">Title for the container</ecl-text>
        <ecl-text tag="p">Minimal content for the container</ecl-text>
      </div>
    </ecl-mega-menu-item>
    <ecl-mega-menu-item label="SOTEU" is-promotional path="/example.html"></ecl-mega-menu-item>
  </ecl-mega-menu>
</ecl-site-header>
<ecl-page-header with-meta header-title="Page title" image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg">
  <ecl-page-header-meta-item slot="meta"> News article </ecl-page-header-meta-item>
  <ecl-page-header-meta-item slot="meta"> 10 March 2025 </ecl-page-header-meta-item>
  <ecl-page-header-meta-item icon="location" slot="meta"> Brussels </ecl-page-header-meta-item>
  <ecl-page-header-meta-item icon="clock" slot="meta"> 1 minute read </ecl-page-header-meta-item>
  <ecl-page-header-meta-item slot="meta"> Research center </ecl-page-header-meta-item>
  <ecl-breadcrumb slot="breadcrumb">
    <ecl-breadcrumb-item path="/example.html"> Home </ecl-breadcrumb-item>
    <ecl-breadcrumb-item ellipsis button-aria-label="Click to expand"> </ecl-breadcrumb-item>
    <ecl-breadcrumb-item path="/example.html"> About the European Commission </ecl-breadcrumb-item>
    <ecl-breadcrumb-item path="/example.html"> Organisational structure </ecl-breadcrumb-item>
    <ecl-breadcrumb-item path="/example.html"> How the Commission is organised </ecl-breadcrumb-item>
    <ecl-breadcrumb-item current-page> News </ecl-breadcrumb-item>
  </ecl-breadcrumb>
  Lorem ipsum dolor sit amet, <a class="ecl-link" href="/example.html">consectetur adipiscing elit</a>. Quisque nec ullamcorper mi. Morbi interdum fermentum tempus. Nam nec rhoncus
  risus, <a class="ecl-link" href="/example.html">eget dictum elit</a>. Vestibulum gravida tincidunt venenatis.
</ecl-page-header>
<ecl-spacing direction="t" value="2xl" outer></ecl-spacing>
<ecl-grid container>
  <ecl-grid row>
    <ecl-grid columns="3" breakpoint="l" styleClass="ecl-sidebar">
      <ecl-inpage-navigation
        inpage-title="Page contents"
        inpage-id="inpage-id"
        items='[
          { "path": "#inline-nav-1", "label": "Heading 1" },
          { "path": "#inline-nav-2", "label": "Heading 2 with a long title going on several lines" },
          { "path": "#inline-nav-3", "label": "Heading 3" },
          { "path": "#inline-nav-4", "label": "Heading 4" }
        ]'
      >
      </ecl-inpage-navigation>
    </ecl-grid>
    <ecl-grid columns="9" breakpoint="l" styleClass="ecl-main">
      <ecl-spacing direction="t" outer value="xl"></ecl-spacing>
      <ecl-text tag="div" type="heading" level="2" weight="semi-bold" id="inline-nav-1">Featured</ecl-text>
      <ecl-spacing direction="b" outer value="s"></ecl-spacing>
      <ecl-divider></ecl-divider>
      <ecl-spacing value="l" direction="t"></ecl-spacing>
      <ecl-featured-item
        variant="extended"
        item-title="Featured item"
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
        media-caption="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </ecl-featured-item>
      <ecl-spacing value="l" direction="b"></ecl-spacing>
      <ecl-text tag="div" type="heading" level="2" id="inline-nav-2" weight="semi-bold">News</ecl-text>
      <ecl-spacing direction="b" outer value="s"></ecl-spacing>
      <ecl-divider></ecl-divider>
      <ecl-spacing value="l" direction="t"></ecl-spacing>
      <ecl-list-illustration column="3">
        <ecl-list-illustration-item has-columns image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" item-title="List with illustration item 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae. Nullam id felis eu lorem condimentum rutrum vitae ut
          felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque, in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
        </ecl-list-illustration-item>
        <ecl-list-illustration-item has-columns image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" item-title="List with illustration item 2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae. Nullam id felis eu lorem condimentum rutrum vitae ut
          felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque, in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
        </ecl-list-illustration-item>
        <ecl-list-illustration-item has-columns image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" item-title="List with illustration item 3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend quam leo, at malesuada ex viverra vitae. Nullam id felis eu lorem condimentum rutrum vitae ut
          felis. Nam ultricies, metus vel aliquam euismod, lacus dolor sodales neque, in laoreet tellus erat posuere purus. Fusce sit amet sem dui. In nec lacinia eros.
        </ecl-list-illustration-item>
      </ecl-list-illustration>
      <ecl-spacing direction="t" value="xl" outer></ecl-spacing>
      <ecl-text tag="div" type="heading" weight="semi-bold" level="2" id="inline-nav-3">Gallery</ecl-text>
      <ecl-spacing direction="b" outer value="s"></ecl-spacing>
      <ecl-divider></ecl-divider>
      <ecl-spacing value="l" direction="t"></ecl-spacing>
      <ecl-gallery
        el-id="ecl-gallery-demo"
        counter-label="Media files in this gallery"
        view-all-label="Show more items"
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
        <ecl-gallery-item
          el-id="ecl-gallery-demo-item-1"
          meta="Copyright, Author, Licence for image 1"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
          image-alt="Image 1"
          thumb-zoom
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
        >
          The EU in brief, institutions and bodies, countries, symbols, history, facts and figures
        </ecl-gallery-item>
        <ecl-gallery-item
          type="video"
          thumb-zoom
          meta="Copyright, Author, Licence for embedded media"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-external-video.jpg"
          image-alt="New digital strategy"
          media-iframe-href="https://www.youtube.com/embed/fgi-GSCB6ho"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
        >
          New digital strategy
        </ecl-gallery-item>
        <ecl-gallery-item
          meta="Copyright, Author, Licence for image 2"
          thumb-zoom
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
          image-alt="Image 2"
        >
          Information on agriculture, business, culture, health, etc.
        </ecl-gallery-item>
        <ecl-gallery-item
          meta="Copyright, Author, Licence for image 3"
          thumb-zoom
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg"
          image-alt="Image 3"
        >
          Living, working, travelling in the EU
        </ecl-gallery-item>
        <ecl-gallery-item
          meta="Copyright, Author, Licence for image 4"
          thumb-zoom
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
          image-alt="Image 3"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg"
        >
          Information on taxes, customs, importing and exporting goods, financial support for businesses
        </ecl-gallery-item>
        <ecl-gallery-item
          media-share-path="/example.html"
          thumb-zoom
          meta="Copyright, Author, Licence for video"
          type="html-video"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg"
        >
          EU law
          <video slot="video" class="ecl-gallery__image sc-ecl-gallery-ec" poster="https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg">
            <source src="https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.mp4" type="video/mp4" />
            <source src="https://inno-ecl.s3.amazonaws.com/media/videos/big_buck_bunny.webm" type="video/webm" />
            <track kind="captions" label="English" src="/captions/bunny-en.vtt" srclang="en" />
            <track kind="captions" label="français" src="/captions/bunny-fr.vtt" srclang="fr" />
          </video>
        </ecl-gallery-item>
        <ecl-gallery-item
          meta="Copyright, Author, Licence for image 6"
          thumb-zoom
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg"
          image-alt="Image 6"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg"
        >
          Find official documents, publications, statistics, open data and more resources
        </ecl-gallery-item>
        <ecl-gallery-item
          thumb-zoom
          meta="Copyright, Author, Licence for image 7"
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg"
          image-alt="Image 7"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
        >
          Teaching material about the EU, including books and maps
        </ecl-gallery-item>
        <ecl-gallery-item
          meta="Copyright, Author, Licence for image 8"
          thumb-zoom
          media-share-path="/example.html"
          media-iframe-href="https://audiovisual.ec.europa.eu/embed/index.html?ref=I-223223&lg=EN"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg"
          image-alt="Image 8"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg"
        >
          Teaching material about the EU, including books and maps
        </ecl-gallery-item>
        <ecl-gallery-item
          meta="Copyright, Author, Licence for image 9"
          thumb-zoom
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg"
          image-alt="Image 9"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
        >
          About the EU
        </ecl-gallery-item>
        <ecl-gallery-item
          meta="Copyright, Author, Licence for image 10"
          thumb-zoom
          media-share-path="/example.html"
          media-href="https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg"
          image-alt="Image 10"
          thumbnail="https://inno-ecl.s3.amazonaws.com/media/examples/example-image11.jpg"
        >
          EU by topic
        </ecl-gallery-item>
      </ecl-gallery>
      <ecl-spacing outer vertical value="l"></ecl-spacing>
      <ecl-spacing direction="t" value="xl" outer></ecl-spacing>
      <ecl-text tag="div" type="heading" level="2" weight="semi-bold" id="inline-nav-4">Facts and figures</ecl-text>
      <ecl-spacing direction="b" outer value="s"></ecl-spacing>
      <ecl-divider></ecl-divider>
      <ecl-spacing value="l" direction="t"></ecl-spacing>
      <ecl-fact-figures columns="3" id="inline-nav-3">
        <ecl-fact-figures-item item-title="Lorem ipsum" value="00.0 million" icon="infographic">
          Nunc condimentum sapien ut nibh finibus suscipit vitae at justo. Morbi quis odio faucibus, commodo tortor id, elementum libero.
        </ecl-fact-figures-item>

        <ecl-fact-figures-item item-title="Sed hendrerit" value="00.0 million" icon="spreadsheet"> Turpis varius congue venenatis, erat dui feugiat felis. </ecl-fact-figures-item>

        <ecl-fact-figures-item item-title="Donec suscipit interdum augue, ac dapibus eros finibus a." value="00.0 million" icon="growth">
          Cras vestibulum efficitur mi, quis porta tellus rutrum ut. Quisque at pulvinar sem.
        </ecl-fact-figures-item>

        <ecl-fact-figures-item item-title="Aenean dapibus" value="00.0 million" icon="digital">
          Aliquam lacinia diam eu sem malesuada, in interdum ante bibendum.
        </ecl-fact-figures-item>

        <ecl-fact-figures-item item-title="Aliquam faucibus nulla eget eleifend" value="00.0 million" icon="regulation">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec lectus tortor.
        </ecl-fact-figures-item>

        <ecl-fact-figures-item item-title="Aliquam faucibus nulla eget eleifend" value="00.0 million" icon="image">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec lectus tortor.
        </ecl-fact-figures-item>
      </ecl-fact-figures>
      <ecl-spacing direction="t" outer value="2xl"></ecl-spacing>
      <ecl-carousel carousel-id="ecl-carousel-demo" slides-number="3">
        <ecl-carousel-item
          cta-link="/example.html"
          cta-label="Subscribe"
          size="s"
          image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
          banner-title="Duis vitae pulvinar turpis"
          credit="© Copyright or credit"
        >
          Integer quis lorem tellus. Nullam sollicitudin suscipit diam.
        </ecl-carousel-item>
        <ecl-carousel-item
          cta-link="/example.html"
          cta-label="Subscribe"
          size="s"
          image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
          banner-title="Duis vitae pulvinar turpis"
        >
          Integer quis lorem tellus.
        </ecl-carousel-item>
        <ecl-carousel-item
          cta-link="/example.html"
          size="s"
          cta-label="Subscribe"
          image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
          banner-title="Duis vitae pulvinar turpis"
          credit="© Copyright or credit"
        >
        </ecl-carousel-item>
      </ecl-carousel>
    </ecl-grid>
  </ecl-grid>
</ecl-grid>
<ecl-spacing direction="b" outer value="3xl"></ecl-spacing>
<ecl-footer-eu
  v-if="currentTheme === 'eu'"
  logo-alt="European Union"
  logo-title="European Union"
  logo-lang-code="en"
  site-name="Site name"
  description="This site is managed by the Directorate-General for Communication"
  variant="harmonised"
  logo-link="/example.html"
>
  <ecl-text size="l" tag="div" style-class="ecl-site-footer__title ecl-site-footer__title--separator" slot="ecl-footer-list-top-middle"> Contact site name </ecl-text>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-top-middle"> Link </ecl-footer-item>
  <ecl-text style-class="ecl-site-footer__title ecl-site-footer__title--separator" slot="ecl-footer-list-top-middle-bottom" size="l" tag="div"> Follow us </ecl-text>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-top-middle-bottom"> Social 1 </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-top-middle-bottom"> Social 2 </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-top-middle-bottom"> Social 3 </ecl-footer-item>
  <ecl-text size="l" tag="div" style-class="ecl-site-footer__title ecl-site-footer__title--separator" slot="ecl-footer-list-top-right"> Optional links </ecl-text>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-top-right"> Link 1 </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-top-right"> Link 2 </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-top-right"> Link 3 </ecl-footer-item>
  <ecl-text tag="div" size="l" slot="ecl-footer-list-main" style-class="ecl-site-footer__title ecl-site-footer__title--separator"> Contact the EU </ecl-text>
  <ecl-footer-item link="tel:0080067891011" slot="ecl-footer-list-main"> Call us 00 800 6 7 8 9 10 11 </ecl-footer-item>
  <ecl-footer-item link="https://european-union.europa.eu/contact-eu/call-us_en" slot="ecl-footer-list-main"> Use other telephone options </ecl-footer-item>
  <ecl-footer-item link="https://european-union.europa.eu/contact-eu/write-us_en" slot="ecl-footer-list-main"> Write us via our contact form </ecl-footer-item>
  <ecl-footer-item link="https://european-union.europa.eu/contact-eu/meet-us_en" slot="ecl-footer-list-main">
    <span slot="ecl-footer-item-desc">Meet us at one of the</span>
    EU centres
  </ecl-footer-item>
  <ecl-text tag="div" size="l" slot="ecl-footer-list-bottom-left" style-class="ecl-site-footer__title ecl-site-footer__title--separator"> Social Media </ecl-text>
  <ecl-footer-item link="https://european-union.europa.eu/contact-eu/social-media-channels_en" slot="ecl-footer-list-bottom-left">
    Search for EU social media channels
  </ecl-footer-item>
  <ecl-text size="l" tag="div" style-class="ecl-site-footer__title ecl-site-footer__title--separator" slot="ecl-footer-list-right-top"> Legal </ecl-text>
  <ecl-footer-item link="https://european-union.europa.eu/languages-our-websites_en" slot="ecl-footer-list-right-top"> Languages on our websites </ecl-footer-item>
  <ecl-footer-item link="https://european-union.europa.eu/privacy-policy_en" slot="ecl-footer-list-right-top"> Privacy policy </ecl-footer-item>
  <ecl-footer-item link="https://european-union.europa.eu/legal-notice_en" slot="ecl-footer-list-right-top"> Legal notice </ecl-footer-item>
  <ecl-footer-item link="https://european-union.europa.eu/cookies_en" slot="ecl-footer-list-right-top"> Cookies </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-info"> Accessibility statement </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-logo-info"> Discover more on europa.eu </ecl-footer-item>
  <ecl-footer-item link="https://european-union.europa.eu/web-accessibility-policy_en" slot="ecl-footer-list-right-top"> Accessibility </ecl-footer-item>
  <ecl-text size="l" tag="div" style-class="ecl-site-footer__title ecl-site-footer__title--separator" slot="ecl-footer-list-right"> EU institutions and bodies </ecl-text>
  <ecl-footer-item link="http://www.europarl.europa.eu/portal/" slot="ecl-footer-list-right"> Search all EU institutions and bodies </ecl-footer-item>
</ecl-footer-eu>

<ecl-footer-ec
  v-if="currentTheme === 'ec'"
  logo-alt="European Commission"
  logo-title="European Commission"
  logo-lang-code="en"
  site-name="Site name"
  variant="standardised"
  description="This site is managed by:"
  logo-link="/example.html"
>
  <ecl-social-media-follow variant="horizontal" position="left" style-class="ecl-site-footer__social-media sc-ecl-footer-ec-ec" slot="ecl-footer-social-follow-info">
    <ecl-social-media-follow-item icon="x" color="inverted" hide-label share-path="http://example.html"> X </ecl-social-media-follow-item>
    <ecl-social-media-follow-item icon="instagram" color="inverted" hide-label share-path="http://instagram.com"> Instagram </ecl-social-media-follow-item>
    <ecl-social-media-follow-item icon="linkedin" color="inverted" hide-label share-path="http://linkedin.com"> Linkedin </ecl-social-media-follow-item>
    <ecl-social-media-follow-item icon="telegram" color="inverted" hide-label share-path="http://telegram.com"> Telegram </ecl-social-media-follow-item>
    <ecl-social-media-follow-item icon="chain" color="inverted" hide-label share-path="http://example.html"> Other </ecl-social-media-follow-item>
  </ecl-social-media-follow>
  <ecl-text size="m" is-bold tag="div" slot="ecl-footer-list-contact" style-class="ecl-site-footer__title"> Contact us </ecl-text>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-contact"> Contact information of the DG </ecl-footer-item>
  <ecl-text size="m" is-bold tag="div" slot="ecl-footer-list-about" style-class="ecl-site-footer__title"> About us </ecl-text>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-about"> Information about the DG </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-about"> Information about the DG </ecl-footer-item>
  <ecl-text size="m" is-bold tag="div" slot="ecl-footer-list-more" style-class="ecl-site-footer__title"> More information on </ecl-text>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-more"> Class name 1 </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-more"> Class name 2 </ecl-footer-item>
  <ecl-text size="m" tag="div" is-bold slot="ecl-footer-list-related" style-class="ecl-site-footer__title"> Related links </ecl-text>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-related"> Related link 1 </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-related"> Related link 2 </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-related"> Related link 3 </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-related"> Related link 4 </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-related"> Related link 5 </ecl-footer-item>
  <ecl-social-media-follow
    variant="horizontal"
    description="Follow the European Commission"
    position="left"
    style-class="ecl-site-footer__social-media sc-ecl-footer-ec-ec"
    inline-title="Follow us"
    slot="ecl-footer-social-follow"
  >
    <ecl-social-media-follow-item icon="x" color="inverted" hide-label share-path="http://example.html"> X </ecl-social-media-follow-item>
    <ecl-social-media-follow-item icon="instagram" color="inverted" hide-label share-path="http://instagram.com"> Instagram </ecl-social-media-follow-item>
    <ecl-social-media-follow-item icon="linkedin" color="inverted" hide-label share-path="http://linkedin.com"> Linkedin </ecl-social-media-follow-item>
    <ecl-social-media-follow-item icon="telegram" color="inverted" hide-label share-path="http://telegram.com"> Telegram </ecl-social-media-follow-item>
    <ecl-social-media-follow-item icon="chain" color="inverted" hide-label share-path="http://example.html"> Other </ecl-social-media-follow-item>
  </ecl-social-media-follow>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-bottom-left"> Languages on our websites </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-bottom-left"> Cookies </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-bottom-left"> Privacy policy </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-bottom-left"> Legal notice </ecl-footer-item>
  <ecl-footer-item link="/example.html" slot="ecl-footer-list-bottom-left"> Accessibility </ecl-footer-item>
</ecl-footer-ec>
</template>

<style scoped></style>
