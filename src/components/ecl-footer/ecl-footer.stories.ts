import { randomizedLink } from "../../utils/randomizedLink"; 

export default {
  title: 'Components/Site-wide/footer',
};

const Template = () =>
  `<ecl-footer
    theme="ec"
    logo-alt="European Commission"
    logo-title="European Commission"
    logo-lang-code="en"
    variant="core"
    site-name="European Commission website"
    logo-link="${randomizedLink('/example.html')}"
  >
    <ecl-text tag="p" slot="description">
      This site is managed by: [name of the manager of the site]
    </ecl-text>
    <ecl-footer-item
      theme="ec"
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-main"
    >
      Strategy
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      About the European Commission
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      Business, Economy, Euro
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      Live, work, travel in the EU
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      Law
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      Funding, Tenders
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      Research and innovation
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      Energy, Climate change, Environment
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      Education
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      Aid, Development cooperation, Fundamental rights
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      Food, Farming, Fisheries
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      EU regional and urban development
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      Jobs at the European Commission
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      Statistics
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      News
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      Events
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main"
    >
      Publications
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-left"
    >
      About the European Commission's web presence
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-left"
    >
      Contact the European Commission
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-left"
    >
      Accessibility
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-left"
    >
      Follow the European Commission on social media
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-left"
    >
      Resources for partners
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-right"
    >
      Languages on our websites
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-right"
    >
      Cookies
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-right"
    >
      Privacy policy
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-right"
    >
      Legal notice
    </ecl-footer-item>
  </ecl-footer>`;

export const FooterEc = Template.bind({});
FooterEc.storyName = 'ec - core';

const TemplateEu = () =>
  `<ecl-footer
    theme="eu"
    logo-alt="European Commission"
    logo-title="European commission"
    logo-lang-code="en"
    variant="core"
    logo-link="${randomizedLink('/example.html')}"
  >
    <ecl-text tag="p" slot="description">
      This site is managed by: [name of the manager of the site]
    </ecl-text>
    <ecl-text
      level="1"
      slot="ecl-footer-list-main"
      tag="h2"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
    >
      Contact the EU
    </ecl-text>
    <ecl-footer-item
      theme="eu"
      link="tel:0080067891011"
      slot="ecl-footer-list-main"
    >
      <span slot="ecl-footer-item-desc">Call us</span>
      00 800 6 7 8 9 10 11
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/contact-eu/call-us_en"
      theme="eu"
      slot="ecl-footer-list-main"
    >
    <span slot="ecl-footer-item-desc">Use other</span>
      telephone options
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/contact-eu/write-us_en"
      theme="eu"
      slot="ecl-footer-list-main"
    >
      <span slot="ecl-footer-item-desc">Write us via</span>
      contact form
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/contact-eu/meet-us_en"
      theme="eu"
      slot="ecl-footer-list-main"
    >
      <span slot="ecl-footer-item-desc">Meet us at one of the</span>
      EU centres
    </ecl-footer-item>
    <ecl-text
      level="1"
      tag="h2"
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
      <span slot="ecl-footer-item-desc">Meet us at one of the</span>
      EU social media channels
    </ecl-footer-item>
    <ecl-text
      tag="h2"
      level="1"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
      slot="ecl-footer-list-bottom-right"
    >
      Legal
    </ecl-text>
    <ecl-footer-item
      link="https://european-union.europa.eu/languages-our-websites_en"
      theme="eu"
      slot="ecl-footer-list-bottom-right"
    >
      Languages on our websites
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/privacy-policy_en"
      theme="eu"
      slot="ecl-footer-list-bottom-right"
    >
      Privacy policy
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/privacy-policy_en"
      theme="eu"
      slot="ecl-footer-list-bottom-right"
    >
      Legal notice
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/cookies_en"
      theme="eu"
      slot="ecl-footer-list-bottom-right"
    >
      Cookies
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/web-accessibility-policy_en"
      theme="eu"
      slot="ecl-footer-list-bottom-right"
    >
      Accessibility
    </ecl-footer-item>
    <ecl-text
      tag="h2"
      level="1"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
      slot="ecl-footer-list-right"
    >
      EU institutions
    </ecl-text>
    <ecl-footer-item
      link="http://www.europarl.europa.eu/portal/"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Parliament
    </ecl-footer-item>
    <ecl-footer-item
      link="http://www.consilium.europa.eu/en/european-council/"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Council
    </ecl-footer-item>
    <ecl-footer-item
      link="http://www.consilium.europa.eu/en/home/"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      Council of the European Union
    </ecl-footer-item>
    <ecl-footer-item
      link="https://ec.europa.eu/commission/index_en"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Commission
    </ecl-footer-item>
    <ecl-footer-item
      link="http://curia.europa.eu/jcms/jcms/j_6/en/"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      Court of Justice of the European Union (CJEU)
    </ecl-footer-item>
    <ecl-footer-item
      link="European Central Bank (ECB)"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Central Bank (ECB)
    </ecl-footer-item>
    <ecl-footer-item
      link="http://www.eca.europa.eu/en"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Court of Auditors (ECA)
    </ecl-footer-item>
    <ecl-footer-item
      link="http://www.eca.europa.eu/en"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Court of Auditors (ECA)
    </ecl-footer-item>
    <ecl-footer-item
      link="https://eeas.europa.eu/headquarters/headquarters-homepage_en"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European External Action Service (EEAS)
    </ecl-footer-item>
    <ecl-footer-item
      link="http://www.eesc.europa.eu/?i=portal.en.home"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Economic and Social Committee (EESC)
    </ecl-footer-item>
    <ecl-footer-item
      link="http://cor.europa.eu/en/"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Committee of the Regions (CoR)
    </ecl-footer-item>
    <ecl-footer-item
      link="https://www.eib.org/en/index.htm"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Investment Bank (EIB)
    </ecl-footer-item>
    <ecl-footer-item
      link="https://www.ombudsman.europa.eu/en/home"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Ombudsman
    </ecl-footer-item>
    <ecl-footer-item
      link="https://secure.edps.europa.eu/EDPSWEB/edps/EDPS?lang=ene"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Data Protection Supervisor (EDPS)
    </ecl-footer-item>
    <ecl-footer-item
      link="https://edpb.europa.eu/edpb_en"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      The European Data Protection Board
    </ecl-footer-item>
    <ecl-footer-item
      link="https://epso.europa.eu/en"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Personnel Selection Office
    </ecl-footer-item>
    <ecl-footer-item
      link="https://op.europa.eu/en/home"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      Publications Office of the European Union
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies/institutions-and-bodies-profiles_en?f%5B0%5D=oe_organisation_eu_type%3Ahttp%3A//publications.europa.eu/resource/authority/corporate-body-classification/AGENCY_DEC&f%5B1%5D=oe_organisation_eu_type%3Ahttp%3A//publications.europa.eu/resource/authority/corporate-body-classification/AGENCY_EXEC&f%5B2%5D=oe_organisation_eu_type%3Ahttp%3A//publications.europa.eu/resource/authority/corporate-body-classification/EU_JU"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      Agencies
    </ecl-footer-item>
  </ecl-footer>`;

export const FooterEu = TemplateEu.bind({});
FooterEu.storyName = 'eu - core';


const TemplateEuHarmonised = () =>
  `<ecl-footer
    theme="eu"
    logo-alt="European Union"
    logo-title="European Union"
    logo-lang-code="en"
    site-name="Site name"
    description="This site is managed by the Directorate-General for Communication"
    variant="harmonised"
    logo-link="${randomizedLink('/example.html')}"
  >
    <ecl-footer-item
      theme="eu"
      slot="description"
      link="${randomizedLink('/example.html')}"
    >
      <span slot="ecl-footer-item-desc">Discover more on</span>
      europa.eu
    </ecl-footer-item>
    <ecl-text
      level="1"
      tag="h2"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
      slot="ecl-footer-list-top-middle"
    >
      Contact site name
    </ecl-text>
    <ecl-footer-item
      theme="eu"
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-top-middle"
    >
      Link
    </ecl-footer-item>
    <ecl-text
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
      slot="ecl-footer-list-top-middle-bottom"
      level="1"
      tag="h2"
    >
      Follow us
    </ecl-text>
    <ecl-footer-item
      theme="eu"
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-top-middle-bottom"
    >
      Social 1
    </ecl-footer-item>
    <ecl-footer-item
      theme="eu"
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-top-middle-bottom"
    >
      Social 2
    </ecl-footer-item>
    <ecl-footer-item
      theme="eu"
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-top-middle-bottom"
    >
      Social 3
    </ecl-footer-item>
    <ecl-text
      level="1"
      tag="h2"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
      slot="ecl-footer-list-top-right"
    >
      Optional links
    </ecl-text>
    <ecl-footer-item
      theme="eu"
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-top-right"
    >
      Link 1
    </ecl-footer-item>
    <ecl-footer-item
      theme="eu"
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-top-right"
    >
      Link 2
    </ecl-footer-item>
    <ecl-footer-item
      theme="eu"
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-top-right"
    >
      Link 3
    </ecl-footer-item>
    <ecl-text
      tag="h2"
      level="1"
      slot="ecl-footer-list-main"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
    >
      Contact the EU
    </ecl-text>
    <ecl-footer-item
      theme="eu"
      link="tel:0080067891011"
      slot="ecl-footer-list-main"
    >
      <span slot="ecl-footer-item-desc">Call us</span>
      00 800 6 7 8 9 10 11
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/contact-eu/call-us_en"
      theme="eu"
      slot="ecl-footer-list-main"
    >
    <span slot="ecl-footer-item-desc">Use other</span>
      telephone options
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/contact-eu/write-us_en"
      theme="eu"
      slot="ecl-footer-list-main"
    >
      <span slot="ecl-footer-item-desc">Write us via</span>
      contact form
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/contact-eu/meet-us_en"
      theme="eu"
      slot="ecl-footer-list-main"
    >
      <span slot="ecl-footer-item-desc">Meet us at one of the</span>
      EU centres
    </ecl-footer-item>
    <ecl-text
      tag="h2"
      level="1"
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
      <span slot="ecl-footer-item-desc">Search for</span>
      EU social media channels
    </ecl-footer-item>
    <ecl-text
      level="1"
      tag="h2"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
      slot="ecl-footer-list-main-bottom"
    >
      Legal
    </ecl-text>
    <ecl-footer-item
      link="https://european-union.europa.eu/languages-our-websites_en"
      theme="eu"
      slot="ecl-footer-list-main-bottom"
    >
      Languages on our websites
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/privacy-policy_en"
      theme="eu"
      slot="ecl-footer-list-main-bottom"
    >
      Privacy policy
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/privacy-policy_en"
      theme="eu"
      slot="ecl-footer-list-main-bottom"
    >
      Legal notice
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/cookies_en"
      theme="eu"
      slot="ecl-footer-list-main-bottom"
    >
      Cookies
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="eu"
      slot="ecl-footer-list-info"
    >
      Accessibility
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/web-accessibility-policy_en"
      theme="eu"
      slot="ecl-footer-list-main-bottom"
    >
      Accessibility
    </ecl-footer-item>
    <ecl-text
      level="1"
      tag="h2"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
      slot="ecl-footer-list-right"
    >
      EU institutions
    </ecl-text>
    <ecl-footer-item
      link="http://www.europarl.europa.eu/portal/"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Parliament
    </ecl-footer-item>
    <ecl-footer-item
      link="http://www.consilium.europa.eu/en/european-council/"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Council
    </ecl-footer-item>
    <ecl-footer-item
      link="http://www.consilium.europa.eu/en/home/"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      Council of the European Union
    </ecl-footer-item>
    <ecl-footer-item
      link="https://ec.europa.eu/commission/index_en"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Commission
    </ecl-footer-item>
    <ecl-footer-item
      link="http://curia.europa.eu/jcms/jcms/j_6/en/"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      Court of Justice of the European Union (CJEU)
    </ecl-footer-item>
    <ecl-footer-item
      link="European Central Bank (ECB)"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Central Bank (ECB)
    </ecl-footer-item>
    <ecl-footer-item
      link="http://www.eca.europa.eu/en"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Court of Auditors (ECA)
    </ecl-footer-item>
    <ecl-footer-item
      link="http://www.eca.europa.eu/en"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Court of Auditors (ECA)
    </ecl-footer-item>
    <ecl-footer-item
      link="https://eeas.europa.eu/headquarters/headquarters-homepage_en"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European External Action Service (EEAS)
    </ecl-footer-item>
    <ecl-footer-item
      link="http://www.eesc.europa.eu/?i=portal.en.home"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Economic and Social Committee (EESC)
    </ecl-footer-item>
    <ecl-footer-item
      link="http://cor.europa.eu/en/"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Committee of the Regions (CoR)
    </ecl-footer-item>
    <ecl-footer-item
      link="https://www.eib.org/en/index.htm"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Investment Bank (EIB)
    </ecl-footer-item>
    <ecl-footer-item
      link="https://www.ombudsman.europa.eu/en/home"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Ombudsman
    </ecl-footer-item>
    <ecl-footer-item
      link="https://secure.edps.europa.eu/EDPSWEB/edps/EDPS?lang=ene"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Data Protection Supervisor (EDPS)
    </ecl-footer-item>
    <ecl-footer-item
      link="https://edpb.europa.eu/edpb_en"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      The European Data Protection Board
    </ecl-footer-item>
    <ecl-footer-item
      link="https://epso.europa.eu/en"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      European Personnel Selection Office
    </ecl-footer-item>
    <ecl-footer-item
      link="https://op.europa.eu/en/home"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      Publications Office of the European Union
    </ecl-footer-item>
    <ecl-footer-item
      link="https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies/institutions-and-bodies-profiles_en?f%5B0%5D=oe_organisation_eu_type%3Ahttp%3A//publications.europa.eu/resource/authority/corporate-body-classification/AGENCY_DEC&f%5B1%5D=oe_organisation_eu_type%3Ahttp%3A//publications.europa.eu/resource/authority/corporate-body-classification/AGENCY_EXEC&f%5B2%5D=oe_organisation_eu_type%3Ahttp%3A//publications.europa.eu/resource/authority/corporate-body-classification/EU_JU"
      theme="eu"
      slot="ecl-footer-list-right"
    >
      Agencies
    </ecl-footer-item>
  </ecl-footer>`;

export const FooterEuHarmonised = TemplateEuHarmonised.bind({});
FooterEuHarmonised.storyName = 'eu - harmonised';

const TemplateStandardised = () => `
  <ecl-footer
    theme="ec"
    logo-alt="European Commission"
    logo-title="European Commission"
    logo-lang-code="en"
    site-name="European Commission website"
    variant="standardised"
    logo-link="${randomizedLink('/example.html')}"
  >
    <ecl-text tag="p"
      theme="eu"
      slot="description"
    >
      This site is managed by: [name of the manager of the site]
    </ecl-text>
    <ecl-text
      level="5"
      is-bold
      tag="h2"
      slot="ecl-footer-list-main"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
    >
      Contact us
    </ecl-text>
    <ecl-footer-item
      theme="ec"
      link="${randomizedLink('/example.html')}"
      slot="ecl-footer-list-main"
    >
      Contact information of the DG
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-info"
    >
      Accessibility
    </ecl-footer-item>
    <ecl-text
      level="5"
      is-bold
      tag="h2"
      slot="ecl-footer-list-main-bottom"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
    >
      Follow us on
    </ecl-text>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main-bottom"
    >
      Facebook
      <ecl-icon
        icon="facebook-negative"
        slot="icon-before"
        sprite="icons-social-media"
        size="xs"
      ></ecl-icon>
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main-bottom"
    >
      Twitter
      <ecl-icon
        icon="twitter-negative"
        slot="icon-before"
        sprite="icons-social-media"
        size="xs"
      ></ecl-icon>
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main-bottom"
    >
      Linkedin
      <ecl-icon
        icon="linkedin-negative"
        slot="icon-before"
        sprite="icons-social-media"
        size="xs"
      ></ecl-icon>
    </ecl-footer-item>
    <ecl-text
      level="5"
      tag="h2"
      is-bold
      slot="ecl-footer-list-main-right"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
    >
      About us
    </ecl-text>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main-right"
    >
      Information about the DG
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main-right"
    >
      Information about the DG
    </ecl-footer-item>
    <ecl-text
      level="5"
      tag="h2"
      is-bold
      slot="ecl-footer-list-main-right-bottom"
      style-class="ecl-site-footer__title ecl-site-footer__title--separator"
    >
      Related site
    </ecl-text>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main-right-bottom"
    >
      Related link 1
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-main-right-bottom"
    >
      Relatd link 2
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-middle"
    >
      Class name 1
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-middle"
    >
      Class name 2
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-center"
    >
      Contact the European Commission
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-center"
    >
      Follow the European Commission on social media
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-center"
    >
      Resources for partners
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-right"
    >
      Languages on our websites
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-right"
    >
      Cookies
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-right"
    >
      Privacy policy
    </ecl-footer-item>
    <ecl-footer-item
      link="${randomizedLink('/example.html')}"
      theme="ec"
      slot="ecl-footer-list-bottom-right"
    >
      Legal notice
    </ecl-footer-item>
  </ecl-footer>`;

export const FooterStandardised = TemplateStandardised.bind({});
FooterStandardised.storyName = 'ec - standardised';

export const FooterHarmonised= TemplateStandardised.bind({});
FooterHarmonised.storyName = 'ec - harmonised';