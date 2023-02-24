export default {
  title: 'Components/Site-wide/site header',
};

const Template = (args) => 
  `<ecl-site-header
    ecl-script
    theme="${args.theme}"
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
  </ecl-site-header>`;

export const SiteHeader = Template.bind({});
SiteHeader.storyName = 'core';