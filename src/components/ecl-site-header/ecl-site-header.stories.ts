import { randomizedLink } from "../../utils/randomizedLink"; 

export default {
  title: 'Components/Site-wide/site header',
};

const Template = (args) => 
  `<ecl-site-header
    ecl-script
    theme="${args.theme}"
    login-block
    language-block
    search-text="search"
    search-placeholder="Placeholder text"
    language="English"
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
  >
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="bg"
    language="български"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="es"
    language="español"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="cs"
    language="čeština"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="da"
    language="dansk"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="de"
    language="Deutsch"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="et"
    language="eesti"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="el"
    language="ελληνικά"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="en"
    language="English"
    active
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="fr"
    language="français"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ga"
    language="Gaeilge"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="hr"
    language="hrvatski"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="it"
    language="italiano"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="lv"
    language="latviešu"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="lt"
    language="lietuvių"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="hu"
    language="magyar"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="mt"
    language="Malti"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="nl"
    language="Nederlands"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="pl"
    language="polski"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="pt"
    language="português"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ro"
    language="română'"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="sk"
    language="slovenčina"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="fi"
    language="suomi"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="sv"
    language="svenska"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ar"
    language="عَرَبِيّ"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ca"
    language="Català"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="is"
    language="Íslenska"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="lb"
    language="Lëtzebuergesch"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ja"
    language="日本語"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="nb"
    language="Norsk bokmål"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ru"
    language="русский язык"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="tr"
    language="Türk"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="uk"
    language="українська мова"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="zh"
    language="中文"
  ></ecl-language-item>
  <div slot="search" class="ecl-site-header__search-container sc-ecl-search-form-ec">
    <ecl-search-form
        theme="${args.theme}"
        input-id="ecl-search-form"
        width="m"
        placeholder="Placeholder text"
        button-label="Cerca"
        button-aria-label="Search"
      >
    </ecl-search-form>
  </div>
  </ecl-site-header>`;

const TemplateHarmonised = (args) => 
  `<ecl-site-header
    ecl-script
    theme="${args.theme}"
    login-block
    language-block
    search-block
    search-text="search"
    search-placeholder="Placeholder text"
    language="English"
    lang-code="en"
    login-text="Log in"
    eu-label="Official EU languages:"
    non-eu-label="Other languages:"
    language-title="Choose your language"
    login-link="${randomizedLink('/example.html')}"
    language-id="language-switcher"
    logo-alt="European Commission"
    logo-title="European commission"
    language-aria-label="Choose language"
    site-name="${args.siteName}"
  > 
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="bg"
    language="български"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="es"
    language="español"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="cs"
    language="čeština"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="da"
    language="dansk"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="de"
    language="Deutsch"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="et"
    language="eesti"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="el"
    language="ελληνικά"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="en"
    language="English"
    active
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="fr"
    language="français"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ga"
    language="Gaeilge"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="hr"
    language="hrvatski"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="it"
    language="italiano"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="lv"
    language="latviešu"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="lt"
    language="lietuvių"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="hu"
    language="magyar"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="mt"
    language="Malti"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="nl"
    language="Nederlands"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="pl"
    language="polski"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="pt"
    language="português"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ro"
    language="română'"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="sk"
    language="slovenčina"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="fi"
    language="suomi"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="sv"
    language="svenska"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ar"
    language="عَرَبِيّ"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ca"
    language="Català"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="is"
    language="Íslenska"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="lb"
    language="Lëtzebuergesch"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ja"
    language="日本語"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="nb"
    language="Norsk bokmål"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ru"
    language="русский язык"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="tr"
    language="Türk"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="uk"
    language="українська мова"
  ></ecl-language-item>
  <ecl-language-item
    theme="${args.theme}"
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}
    lang-code="zh"
    language="中文"
  ></ecl-language-item>
  <ecl-menu
    slot="menu"
    theme="${args.theme}"
    close-label="Close"
    back-label="Back"
    menu-link="${randomizedLink('/example.html')}"
    ecl-script
    menu-title="Menu"
  >
    <ecl-menu-item
      link="${randomizedLink('/example.html')}"
      theme="${args.theme}"
    >
      Home
    </ecl-menu-item>
    <ecl-menu-item
      theme="${args.theme}"
      link="${randomizedLink('/example.html')}"
      has-children
      trigger-aria-label="Access item's children"
      current
    >
      Item 2 label
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 2.1
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 2.2
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        current
        slot="sublist"
      >
        Item 2.3
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
        external
      >
        Item 2.4
      </ecl-menu-item>
    </ecl-menu-item>
    <ecl-menu-item
      theme="${args.theme}"
      has-children
      trigger-aria-label="Access item's children"
      link="${randomizedLink('/example.html')}"
    >
      Item 3 with a very long label
      <ecl-menu-item
        theme="${args.theme}"
        child
        link="${randomizedLink('/example.html')}"
        slot="sublist"
      >
        Item 3.1
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        child
        link="${randomizedLink('/example.html')}"
        slot="sublist"
      >
        Item 3.2
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        child
        link="${randomizedLink('/example.html')}"
        slot="sublist"
      >
        Item 3.3
      </ecl-menu-item>
    </ecl-menu-item>
    <ecl-menu-item
      theme="${args.theme}"
      link="${randomizedLink('/example.html')}"
    >
      Item 4 label
    </ecl-menu-item>
    <ecl-menu-item
      theme="${args.theme}"
      link="${randomizedLink('/example.html')}"
      has-children
      trigger-aria-label="Access item's children"
    >
      Item 5 label
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 5.1
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 5.2
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 5.3
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 5.4
      </ecl-menu-item>
    </ecl-menu-item>
    <ecl-menu-item
      theme="${args.theme}"
      link="${randomizedLink('/example.html')}"
      has-children
      trigger-aria-label="Access item's children"
    >
      Item 6
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.1
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.2
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.3
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.4
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.5
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.6
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.7
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.8
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.9 with a very long label
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.10
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.11
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.12
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}""
        child
        slot="sublist"
      >
        Item 6.13
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.14
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.15
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}""
        child
        slot="sublist"
      >
        Item 6.16
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.17
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 6.18
      </ecl-menu-item>
    </ecl-menu-item>
    <ecl-menu-item
      theme="${args.theme}"
      has-children
      link="${randomizedLink('/example.html')}"
      trigger-aria-label="Access item's children"
    >
      Item 7 label
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.1
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.2
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.3
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.4
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.5
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.6
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.7
      </ecl-menu-item>
      <ecl-menu-item
        theme="${args.theme}"
        link="${randomizedLink('/example.html')}"
        child
        slot="sublist"
      >
        Item 7.8
      </ecl-menu-item>
    </ecl-menu-item>
  </ecl-menu>
  </ecl-site-header>`;

export const SiteHeader = Template.bind({});
SiteHeader.storyName = 'core';

export const SiteHeaderHarmonised = TemplateHarmonised.bind({});
SiteHeaderHarmonised.storyName = 'harmonised'
SiteHeaderHarmonised.args = {
  siteName: 'Site name',
};
SiteHeaderHarmonised.argTypes = {
  siteName: {
    name: 'site name',
    type: { name: 'string' },
  },
};