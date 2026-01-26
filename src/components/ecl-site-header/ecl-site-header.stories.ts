import { randomizedLink } from "../../utils/randomizedLink"; 

export default {
  title: 'Components/Site-wide/site header',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    logo_size: 'l',
    menu: 'mega-menu',
  },
  argTypes: {
    color_mode: { table: { disable: true } },
    menu: {
      control: { type: 'radio'},
      options: [
        'menu',
        'mega-menu'
      ],
    },
    logo_size: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
    }
  },
};

const languageItems = () => `<ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="bg"
    language="български"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="es"
    language="español"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="cs"
    language="čeština"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="da"
    language="dansk"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="de"
    language="Deutsch"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="et"
    language="eesti"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="el"
    language="ελληνικά"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="en"
    language="English"
    active
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="fr"
    language="français"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ga"
    language="Gaeilge"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="hr"
    language="hrvatski"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="it"
    language="italiano"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="lv"
    language="latviešu"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="lt"
    language="lietuvių"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="hu"
    language="magyar"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="mt"
    language="Malti"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="nl"
    language="Nederlands"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="pl"
    language="polski"
  ></ecl-language-item>
  <ecl-language-item

    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="pt"
    language="português"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ro"
    language="română'"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="sk"
    language="slovenčina"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="fi"
    language="suomi"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="sv"
    language="svenska"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ar"
    language="عَرَبِيّ"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ca"
    language="Català"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="is"
    language="Íslenska"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="lb"
    language="Lëtzebuergesch"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ja"
    language="日本語"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="nb"
    language="Norsk bokmål"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ru"
    language="русский язык"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="tr"
    language="Türk"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="uk"
    language="українська мова"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="zh"
    language="中文"
  ></ecl-language-item>`;

const menu = (args) => ` <ecl-menu
    slot="menu"
    menu-id="site-header-menu"
    close-label="Close"
    back-label="Back"
    style-class="${`sc-ecl-site-header-${args.theme}`}"
    menu-link="${randomizedLink('/example.html')}"
    menu-title="Menu"
    aria-label="Main navigation"
  >
    <ecl-menu-item
      link="${randomizedLink('/example.html')}"
    >
      Home
    </ecl-menu-item>
    <ecl-menu-item
      link="${randomizedLink('/example.html')}"
      has-children
      trigger-aria-label="Access item's children"
      current
    >
      News and media
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 2.1
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 2.2
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        current
        slot="sublist"
      >
        Item 2.3
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
        external
      >
        Item 2.4
      </ecl-menu-item>
    </ecl-menu-item>
    <ecl-menu-item
      has-children
      trigger-aria-label="Access item's children"
      link="${randomizedLink('/example.html')}"
    >
      About the EU
      <ecl-menu-item
        child
        link="${randomizedLink('/example.html')}"
        slot="sublist"
      >
        Item 3.1
      </ecl-menu-item>
      <ecl-menu-item
        child
        link="${randomizedLink('/example.html')}"
        slot="sublist"
      >
        Item 3.2
      </ecl-menu-item>
      <ecl-menu-item
        child
        link="${randomizedLink('/example.html')}"
        slot="sublist"
      >
        Item 3.3
      </ecl-menu-item>
    </ecl-menu-item>
    <ecl-menu-item
      link="${randomizedLink('/example.html')}"
    >
      About the EC
    </ecl-menu-item>
    <ecl-menu-item
      link="${randomizedLink('/example.html')}"
      has-children
      trigger-aria-label="Access item's children"
    >
      Item 5 label
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 5.1
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 5.2
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 5.3
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 5.4
      </ecl-menu-item>
    </ecl-menu-item>
    <ecl-menu-item
      link="${randomizedLink('/example.html')}"
      has-children
      trigger-aria-label="Access item's children"
    >
      Topics
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.1
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.2
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.3
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.4
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.5
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.6
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.7
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.8
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.9 with a very long label
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.10
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.11
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.12
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}""
        child
        slot="sublist"
      >
        Item 6.13
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.14
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.15
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}""
        child
        slot="sublist"
      >
        Item 6.16
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.17
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.18
      </ecl-menu-item>
    </ecl-menu-item>
    <ecl-menu-item
      has-children
      link="${randomizedLink('/example.html')}"
      trigger-aria-label="Access item's children"
    >
      Key priorities
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.1
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.2
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.3
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.4
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.5
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.6
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.7
      </ecl-menu-item>
      <ecl-menu-item
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.8
      </ecl-menu-item>
    </ecl-menu-item>
  </ecl-menu>`;

const megaMenu = (args) => `
  <ecl-mega-menu
    slot="menu"
    style-class="${`sc-ecl-site-header-${args.theme}`}"
    toggle-label="Close"
    back-label="Back"
    menu-id="mega-menu-demo"
    aria-label="Main navigation"
  >
    <ecl-mega-menu-item label="Home" path="${randomizedLink('/example.html')}"></ecl-mega-menu-item>
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
        path="${randomizedLink('/example.html')}"
        label="Featured link 1"
        external
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
      >
        Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ecl-mega-menu-featured-list-item>
      <ecl-mega-menu-subitem
        path="${randomizedLink('/example.html')}"
        label="Item 2.1"
        has-featured
        has-children
        see-all
        see-all-label="See all pages"
      >
        <ecl-mega-menu-subitem path="${randomizedLink('/example.html')}" label="Item 2.1 subitem 1"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="${randomizedLink('/example.html')}" label="Item 2.1 subitem 2"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="${randomizedLink('/example.html')}" label="Item 2.1 subitem 3"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="${randomizedLink('/example.html')}" label="Item 2.1 subitem 4"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="${randomizedLink('/example.html')}" label="Item 2.1 subitem 5"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="${randomizedLink('/example.html')}" label="Item 2.1 subitem 6"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="${randomizedLink('/example.html')}" label="Item 2.1 subitem 7"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="${randomizedLink('/example.html')}" label="Item 2.1 subitem 8"></ecl-mega-menu-subitem>
        <ecl-mega-menu-featured-list-item 
          slot="featured-second"
          has-description
          path="${randomizedLink('/example.html')}"
          label="Featured link 1"
          external
          image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
        >
          I belong to the sub item
        </ecl-mega-menu-featured-list-item>
      </ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem path="${randomizedLink('/example.html')}" label="Item 2.2"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem
        path="${randomizedLink('/example.html')}"
        label="Item 2.3"
        see-all
        see-all-label="See all pages"
      >
        <ecl-mega-menu-subitem path="${randomizedLink('/example.html')}" label="Item 2.3 subitem 1"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="${randomizedLink('/example.html')}" label="Item 2.3 subitem 2"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="${randomizedLink('/example.html')}" label="Item 2.3 subitem 3"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="${randomizedLink('/example.html')}" label="Item 2.3 subitem 4"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="${randomizedLink('/example.html')}" label="Item 2.3 subitem 5"></ecl-mega-menu-subitem>
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
        path="${randomizedLink('/example.html')}"
        label="Featured link 1"
        external
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
      >
        I belong to the sub item
      </ecl-mega-menu-featured-list-item>
      <ecl-mega-menu-subitem label="Item 3.1" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.2" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.3" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.4" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.5" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.6" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.7" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.8" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.9" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
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
      <ecl-mega-menu-subitem label="Item 4.1" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.2" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.3" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.4" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.5" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.6" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.7" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.8" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.9" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.10" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.11" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.12" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
    </ecl-mega-menu-item>
    <ecl-mega-menu-item
      label="Topics"
      has-children
      one-level-only
    >
      <ecl-mega-menu-subitem label="Item 5.1" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.2" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.3" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.4" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.5" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.6" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.7" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.8" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.9" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.10" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.11" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.12" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.13" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.14" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.15" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.16" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.17" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.18" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.19" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.20" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.21" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.22" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.23" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.24" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
    </ecl-mega-menu-item>
    <ecl-mega-menu-item
      label="Key priorities"
      path="${randomizedLink('/example.html')}"
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
        path="${randomizedLink('/example.html')}"
      >
        Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ecl-mega-menu-featured-list-item>
      <span slot="info">
        Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>
      <ecl-mega-menu-subitem
        has-children
        label="Aid, Development cooperation, Fundamental rights"
        path="${randomizedLink('/example.html')}"
      >
        <ecl-mega-menu-subitem label="A lonely item" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      </ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Energy, Climate change, Environment" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Law" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="EU regional and urban development" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem
        label="Research and innovation"
        path="${randomizedLink('/example.html')}"
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
          path="${randomizedLink('/example.html')}"
          label="Featured link 1"
        >
        </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-featured-list-item 
          slot="featured-second"
          path="${randomizedLink('/example.html')}"
          label="Featured link 2"
        >
        </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-featured-list-item 
          slot="featured-second"
          path="${randomizedLink('/example.html')}"
          label="Featured link 3"
        >
        </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-featured-list-item 
          slot="featured-second"
          path="${randomizedLink('/example.html')}"
          label="Featured link 4"
        >
        </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-featured-list-item 
          slot="featured-second"
          path="${randomizedLink('/example.html')}"
          label="Featured link 5"
        >
        </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-subitem label="How we provide aid" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem label="Who we work with" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem label="Get involved in EU humanitarian aid" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
      </ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Food, Farming, Fisheries" path="${randomizedLink('/example.html')}"></ecl-mega-menu-subitem>
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
      path="${randomizedLink('/example.html')}"
    ></ecl-mega-menu-item>
  </ecl-mega-menu>`

const Template = (args) => 
  `<ecl-site-header
    login-block
    language-block
    search-text="search"
    search-placeholder="Placeholder text"
    language="EN"
    lang-code="en"
    search-form-id="ecl-site-header-search-form"
    login-text="Log in"
    eu-label="Official EU languages:"
    non-eu-label="Other languages:"
    language-title="Choose your language"
    login-link="/example.html"
    language-id="language-switcher"
    logo-alt="European Commission"
    logo-size="${args.logo_size}"
    logo-title="European commission"
    language-aria-label="Choose language"
  >
  ${languageItems()}
  ${args.menu === 'menu' ? menu(args) : megaMenu(args)}
  </ecl-site-header>`;

const TemplateStandardised = (args) => 
  `<ecl-site-header
    language-block
    search-block
    search-text="search"
    search-placeholder="Placeholder text"
    language="EN"
    lang-code="en"
    eu-label="Official EU languages:"
    non-eu-label="Other languages:"
    language-title="Choose your language"
    login-link="${randomizedLink('/example.html')}"
    language-id="language-switcher"
    logo-alt="European Commission"
    logo-size="${args.logo_size}"
    logo-title="European commission"
    language-aria-label="Choose language"
    site-name="${args.siteName}"
    banner-top="Aid, Development cooperation, Fundamental rights"
    bannerTopLink="${randomizedLink('/example.html')}"
  > 
  ${languageItems()}
  ${args.menu === 'menu' ? menu(args) : megaMenu(args)}
  </ecl-site-header>`;

const TemplateHarmonised = (args) => 
  `<ecl-site-header
    login-block
    language-block
    search-block
    search-text="search"
    search-placeholder="Placeholder text"
    language="EN"
    lang-code="en"
    login-text="Log in"
    logged="${args.logged}"
    logged-in-text="Logged in"
    eu-label="Official EU languages:"
    non-eu-label="Other languages:"
    language-title="Choose your language"
    login-link="${randomizedLink('/example.html')}"
    logout-link="${randomizedLink('/example.html')}"
    logout-text="Log out"
    language-id="language-switcher"
    logo-alt="European Commission"
    logo-size="${args.logo_size}"
    logo-title="European commission"
    language-aria-label="Choose language"
    site-name="${args.siteName}"
  >
    ${languageItems()}
    ${args.menu === 'menu' ? menu(args) : megaMenu(args)}
    <span slot="ecl-site-header-login-description">'Logged in as "last name" "first name"'</span>
  </ecl-site-header>`;

export const SiteHeader = Template.bind({});
SiteHeader.storyName = 'core';

export const SiteHeaderStandardised = TemplateStandardised.bind({});
SiteHeaderStandardised.storyName = 'standardised';
SiteHeaderStandardised.args = {
  siteName: 'News, policies, information and services',
  className: 'Aid, Development cooperation, Fundamental rights'
};
SiteHeaderStandardised.argTypes = {
  siteName: {
    name: 'site-name',
    type: { name: 'string' },
  },
  className: {
    name: 'banner-top',
    type: { name: 'string' },
  },
};

export const SiteHeaderHarmonised = TemplateHarmonised.bind({});
SiteHeaderHarmonised.storyName = 'harmonised'
SiteHeaderHarmonised.args = {
  siteName: 'News, policies, information and services',
  logged: false,
};
SiteHeaderHarmonised.argTypes = {
  siteName: {
    name: 'site-name',
    type: { name: 'string' },
  },
  logged: {
    name: 'logged in',
    control: { type: 'boolean' },
  },
};