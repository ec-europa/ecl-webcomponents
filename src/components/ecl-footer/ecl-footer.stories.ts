import { randomizedLink } from "../../utils/randomizedLink"; 

export default {
  title: 'Components/Site-wide/footer',
  argTypes: {
    theme: {
      table: { disable: true },
    },
    color_mode: {
      table: { disable: true },
    },
  },
};

const Template = (args) =>
  `<ecl-footer-ec
    logo-alt="European Commission"
    logo-title="European Commission"
    logo-lang-code="en"
    variant="core"
    description="This site is managed by:"
    description-name="[name of the manager of the site]"
    site-name="European Commission website"
    logo-link="${randomizedLink('/example.html')}"
    co-owner-title="This page is managed by:"
    co-owner-links='[{"label": "Directorate-General for [DG role]", "path": "${randomizedLink('/example.html')}"},{"label": "Directorate-General for [DG role]", "path": "${randomizedLink('/example.html')}"}]'
  >
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-core"
    >
      About us
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-core"
    >
      Contact us
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-core"
    >
      Priorities
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-core"
    >
      Topics
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-core"
    >
      Funding and tenders
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-core"
    >
      Jobs
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-core"
    >
      Press corner
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-core"
    >
      Events
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
    >
      Report an IT vulnerability
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-bottom-left"
    >
      Languages on our websites
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-bottom-left"
    >
      Cookies
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-bottom-left"
    >
      Privacy policy
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-bottom-left"
    >
      Legal notice
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-bottom-left"
    >
      Accessibility
    </ecl-footer-item>
    <ecl-social-media-follow
      variant="horizontal"
      description="Follow us"
      position="left"
      style-class="${`ecl-site-footer__social-media sc-ecl-footer-${args.theme}-${args.theme}`}"
      inline-title="Follow us"
      slot="ecl-footer-social-follow"
    >
      <ecl-social-media-follow-item
        icon="x"
        color="inverted"
        hide-label
        share-path="http://example.html"
      >
        X
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="instagram"
        color="inverted"
        hide-label
        share-path="http://instagram.com"
      >
        Instagram
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="linkedin"
        color="inverted"
        hide-label
        share-path="http://linkedin.com"
      >
        Linkedin
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="telegram"
        color="inverted"
        hide-label
        share-path="http://telegram.com"
      >
        Telegram
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="chain"
        color="inverted"
        hide-label
        share-path="http://example.html"
      >
        Other
      </ecl-social-media-follow-item>
    </ecl-social-media-follow>
  </ecl-footer-ec>`;

export const FooterEc = Template.bind({});
FooterEc.storyName = 'EC - core';

const TemplateStandardised = (args) => `
  <ecl-footer-ec
    logo-alt="European Commission"
    logo-title="European Commission"
    logo-lang-code="en"
    site-name="Site name"
    variant="standardised"
    description="This site is managed by:"
    description-name="[name of the manager of the site]"
    logo-link="${randomizedLink('/example.html')}"
    co-owner-title="This page is managed by:"
    co-owner-links='[{"label": "Directorate-General for [DG role]", "path": "${randomizedLink('/example.html')}"},{"label": "Directorate-General for [DG role]", "path": "${randomizedLink('/example.html')}"}]'
  >
    <ecl-social-media-follow
      variant="horizontal"
      position="left"
      style-class="${`ecl-site-footer__social-media sc-ecl-footer-${args.theme}-${args.theme}`}""
      slot="ecl-footer-social-follow-info"
    >
      <ecl-social-media-follow-item
        icon="x"
        color="inverted"
        hide-label
        share-path="http://example.html"
      >
        X
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="instagram"
        color="inverted"
        hide-label
        share-path="http://instagram.com"
      >
        Instagram
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="linkedin"
        color="inverted"
        hide-label
        share-path="http://linkedin.com"
      >
        Linkedin
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="telegram"
        color="inverted"
        hide-label
        share-path="http://telegram.com"
      >
        Telegram
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="chain"
        color="inverted"
        hide-label
        share-path="http://example.html"
      >
        Other
      </ecl-social-media-follow-item>
    </ecl-social-media-follow>
    <ecl-text
      size="m"
      weight="bold"
      tag="div"
      slot="ecl-footer-list-contact"
      style-class="ecl-site-footer__title"
    >
      Contact us
    </ecl-text>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-contact"
    >
      Contact information of the DG
    </ecl-footer-item>
    <ecl-text
      size="m"
      weight="bold"
      tag="div"
      slot="ecl-footer-list-about"
      style-class="ecl-site-footer__title"
    >
      About us
    </ecl-text>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-about"
    >
      Information about the DG
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-about"
    >
      Information about the DG
    </ecl-footer-item>
    <ecl-text
      size="m"
      weight="bold"
      tag="div"
      slot="ecl-footer-list-more"
      style-class="ecl-site-footer__title"
    >
      More information on
    </ecl-text>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-more"
    >
      Class name 1
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-more"
    >
      Class name 2
    </ecl-footer-item>
    <ecl-text
      size="m"
      weight="bold"
      tag="div"
      slot="ecl-footer-list-related"
      style-class="ecl-site-footer__title"
    >
      Related links
    </ecl-text>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-related"
    >
      Related link 1
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-related"
    >
      Related link 2
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-related"
    >
      Related link 3
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-related"
    >
      Related link 4
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-related"
    >
      Related link 5
    </ecl-footer-item>
    <ecl-social-media-follow
      variant="horizontal"
      description="Follow the European Commission"
      position="left"
      style-class="${`ecl-site-footer__social-media sc-ecl-footer-${args.theme}-${args.theme}`}"
      inline-title="Follow us"
      slot="ecl-footer-social-follow"
    >
      <ecl-social-media-follow-item
        icon="x"
        color="inverted"
        hide-label
        share-path="http://example.html"
      >
        X
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="instagram"
        color="inverted"
        hide-label
        share-path="http://instagram.com"
      >
        Instagram
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="linkedin"
        color="inverted"
        hide-label
        share-path="http://linkedin.com"
      >
        Linkedin
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="telegram"
        color="inverted"
        hide-label
        share-path="http://telegram.com"
      >
        Telegram
      </ecl-social-media-follow-item>
      <ecl-social-media-follow-item
        icon="chain"
        color="inverted"
        hide-label
        share-path="http://example.html"
      >
        Other
      </ecl-social-media-follow-item>
    </ecl-social-media-follow>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-bottom-left"
    >
      Languages on our websites
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-bottom-left"
    >
      Cookies
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-bottom-left"
    >
      Privacy policy
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-bottom-left"
    >
      Legal notice
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-bottom-left"
    >
      Accessibility
    </ecl-footer-item>
  </ecl-footer-ec>`;

export const FooterStandardised = TemplateStandardised.bind({});
FooterStandardised.storyName = 'EC - standardised';

export const FooterHarmonised= TemplateStandardised.bind({});
FooterHarmonised.storyName = 'EC - harmonised';

const TemplateEu = () =>
  `<ecl-footer-eu
    logo-alt="European Union"
    logo-title="European union"
    logo-lang-code="en"
    description="This site is managed by the Directorate-General for Communication"
    variant="core"
    logo-link="${randomizedLink('/example.html')}"
    co-owner-title="This page is managed by:"
    co-owner-links='[{"label": "Directorate-General for [DG role]", "path": "${randomizedLink('/example.html')}"},{"label": "Directorate-General for [DG role]", "path": "${randomizedLink('/example.html')}"}]'
  >
    <ecl-text
      size="m"
      slot="ecl-footer-list-main"
      tag="div"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
    >
      Contact the EU
    </ecl-text>
    <ecl-footer-item
      link="tel:0080067891011"
      slot="ecl-footer-list-main"
    >
      Call us 00 800 6 7 8 9 10 11
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/contact-eu/call-us_en"
      slot="ecl-footer-list-main"
    >
      Use other telephone options
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/contact-eu/write-us_en"
      slot="ecl-footer-list-main"
    >
      Write us via our contact form
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/contact-eu/meet-us_en"
      slot="ecl-footer-list-main"
    >
      Meet us at one of the EU centres
    </ecl-footer-item>
    <ecl-text
      size="m"
      tag="div"
      slot="ecl-footer-list-bottom-left"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
    >
      Social Media
    </ecl-text>
    <ecl-footer-item
      link="https://european-union.europa.eu/contact-eu/social-media-channels_en"
      theme="eu"
      slot="ecl-footer-list-bottom-left"
    >
      Search for EU social media channels
    </ecl-footer-item>
    <ecl-text
      tag="div"
      size="m"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
      slot="ecl-footer-list-right-top"
    >
      Legal
    </ecl-text>
    <ecl-footer-item
      link="https://european-union.europa.eu/languages-our-websites_en"
      slot="ecl-footer-list-right-top"
    >
      Languages on our websites
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/privacy-policy_en"
      slot="ecl-footer-list-right-top"
    >
      Privacy policy
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/legal-notice_en"
      slot="ecl-footer-list-right-top"
    >
      Legal notice
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/cookies_en"
      slot="ecl-footer-list-right-top"
    >
      Cookies
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/web-accessibility-policy_en"
      slot="ecl-footer-list-right-top"
    >
      Accessibility
    </ecl-footer-item>
    <ecl-text
      tag="div"
      size="m"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
      slot="ecl-footer-list-right"
    >
      EU institutions
    </ecl-text>
    <ecl-footer-item
      link="http://www.europarl.europa.eu/portal/"
      slot="ecl-footer-list-right"
    >
      Search all EU institutions and bodies
    </ecl-footer-item>
  </ecl-footer-eu>`;

export const FooterEu = TemplateEu.bind({});
FooterEu.storyName = 'EU - core';
FooterEu.args = {
  theme: 'eu',
};


const TemplateEuHarmonised = () =>
  `<ecl-footer-eu
    logo-alt="European Union"
    logo-title="European Union"
    logo-lang-code="en"
    site-name="Site name"
    site-name-link="${randomizedLink('/example.html')}"
    description="This site is managed by the:"
    description-name="[name of the manager of the site]"
    variant="harmonised"
    logo-link="${randomizedLink('/example.html')}"
    co-owner-title="This page is managed by:"
    co-owner-links='[{"label": "Directorate-General for [DG role]", "path": "${randomizedLink('/example.html')}"},{"label": "Directorate-General for [DG role]", "path": "${randomizedLink('/example.html')}"}]'
  >
    <ecl-text
      size="l"
      tag="div"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
      slot="ecl-footer-list-top-middle"
    >
      Contact site name
    </ecl-text>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-top-middle"
    >
      Link
    </ecl-footer-item>
    <ecl-text
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
      slot="ecl-footer-list-top-middle-bottom"
      size="l"
      tag="div"
    >
      Follow us
    </ecl-text>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-top-middle-bottom"
    >
      <ecl-icon family="networks" icon="facebook" slot="icon-before"></ecl-icon>
      Social 1
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-top-middle-bottom"
    >
      <ecl-icon family="networks" icon="twitter" slot="icon-before"></ecl-icon>
      Social 2
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-top-middle-bottom"
    >
      <ecl-icon family="networks" icon="mastodon" slot="icon-before"></ecl-icon>
      Social 3
    </ecl-footer-item>
    <ecl-text
      size="l"
      tag="div"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
      slot="ecl-footer-list-top-right"
    >
      Optional links
    </ecl-text>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-top-right"
    >
      Link 1
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-top-right"
    >
      Link 2
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-top-right"
    >
      Link 3
    </ecl-footer-item>
    <ecl-text
      tag="div"
      size="l"
      slot="ecl-footer-list-main"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
    >
      Contact the EU
    </ecl-text>
    <ecl-footer-item
      link="tel:0080067891011"
      slot="ecl-footer-list-main"
    >
      Call us 00 800 6 7 8 9 10 11
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/contact-eu/call-us_en"
      slot="ecl-footer-list-main"
    >
      Use other telephone options
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/contact-eu/write-us_en"
      slot="ecl-footer-list-main"
    >
      Write us via our contact form
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/contact-eu/meet-us_en"
      slot="ecl-footer-list-main"
    >
      Meet us at one of the EU centres
    </ecl-footer-item>
    <ecl-text
      tag="div"
      size="l"
      slot="ecl-footer-list-bottom-left"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
    >
      Social Media
    </ecl-text>
    <ecl-footer-item
      link="https://european-union.europa.eu/contact-eu/social-media-channels_en"
      slot="ecl-footer-list-bottom-left"
    >
      Search for EU social media channels
    </ecl-footer-item>
    <ecl-text
      size="l"
      tag="div"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
      slot="ecl-footer-list-right-top"
    >
      Legal
    </ecl-text>
    <ecl-footer-item
      link="https://european-union.europa.eu/languages-our-websites_en"
      slot="ecl-footer-list-right-top"
    >
      Languages on our websites
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/privacy-policy_en"
      slot="ecl-footer-list-right-top"
    >
      Privacy policy
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/legal-notice_en"
      slot="ecl-footer-list-right-top"
    >
      Legal notice
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/cookies_en"
      slot="ecl-footer-list-right-top"
    >
      Cookies
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-info"
    >
      Accessibility statement
    </ecl-footer-item>
      <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-logo-info"
    >
      Discover more on europa.eu
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/web-accessibility-policy_en"
      slot="ecl-footer-list-right-top"
    >
      Accessibility
    </ecl-footer-item>
    <ecl-text
      size="l"
      tag="div"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
      slot="ecl-footer-list-right"
    >
      EU institutions and bodies
    </ecl-text>
    <ecl-footer-item
      link="http://www.europarl.europa.eu/portal/"
      slot="ecl-footer-list-right"
    >
      Search all EU institutions and bodies
    </ecl-footer-item>
  </ecl-footer-eu>`;

export const FooterEuHarmonised = TemplateEuHarmonised.bind({});
FooterEuHarmonised.storyName = 'EU - harmonised';
FooterEuHarmonised.args = {
  theme: 'eu',
};