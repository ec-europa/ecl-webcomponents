import { randomizedLink } from "../../utils/randomizedLink"; 

export default {
  title: 'Components/splash page',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    color_mode: { table: { disable: true } },
  },
};

const Template = () => 
  `<ecl-splash-page
    language="EN"
    lang-code="en"
    eu-label="Official EU languages:"
    non-eu-label="Other languages:"
    title="Select your language"
    language-id="language-switcher"
    logo-alt="European Commission"
    logo-title="European commission"
    language-aria-label="Choose language"
  >
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="bg"
    language="български"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="es"
    language="español"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="cs"
    language="čeština"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="da"
    language="dansk"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="de"
    language="Deutsch"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="et"
    language="eesti"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="el"
    language="ελληνικά"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="en"
    language="English"
    active
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="fr"
    language="français"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ga"
    language="Gaeilge"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="hr"
    language="hrvatski"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="it"
    language="italiano"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="lv"
    language="latviešu"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="lt"
    language="lietuvių"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="hu"
    language="magyar"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="mt"
    language="Malti"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="nl"
    language="Nederlands"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="pl"
    language="polski"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item

    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="pt"
    language="português"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ro"
    language="română'"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="sk"
    language="slovenčina"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="fi"
    language="suomi"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="sv"
    language="svenska"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ar"
    language="عَرَبِيّ"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ca"
    language="Català"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="is"
    language="Íslenska"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="lb"
    language="Lëtzebuergesch"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ja"
    language="日本語"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="nb"
    language="Norsk bokmål"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="ru"
    language="русский язык"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="tr"
    language="Türk"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="uk"
    language="українська мова"
  ></ecl-splash-page-language-item>
  <ecl-splash-page-language-item
    slot="non-eu-category"
    path="${randomizedLink('/example.html')}"
    lang-code="zh"
    language="中文"
  ></ecl-splash-page-language-item>
</ecl-splash-page>`;

export const SplashPage = Template.bind({});
SplashPage.storyName = 'default';