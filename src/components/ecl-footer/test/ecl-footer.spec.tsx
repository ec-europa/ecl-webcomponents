import { newSpecPage } from '@stencil/core/testing';
import { EclFooterEu } from '../ecl-footer-eu';
import { EclFooterEc } from '../ecl-footer-ec';
import { EclFooterItem } from '../ecl-footer-item';
import { EclText } from '../../ecl-text/ecl-text';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';
import { EclSocialMediaFollow } from '../../ecl-social-media-follow/ecl-social-media-follow';

describe('ecl-footer EC', () => {
  it('renders', async () => {
    const pageEc = await newSpecPage({
      components: [EclFooterEc, EclFooterItem, EclLink, EclIcon, EclSocialMediaFollow],
      html: `<ecl-footer-ec
        logo-alt="European Commission"
        logo-title="European Commission"
        logo-lang-code="en"
        variant="core"
        description="This site is managed by:"
        site-name="European Commission website"
        logo-link="/example.html"
      >
        <ecl-footer-item
          link="/example.html"
          slot="ecl-footer-list-core"
        >
          About us
        </ecl-footer-item>
        <ecl-footer-item
          link="/example.html"
          slot="ecl-footer-list-core"
        >
          Contact us
        </ecl-footer-item>
        <ecl-footer-item
          link="/example.html"
          slot="ecl-footer-list-core"
        >
          Priorities
        </ecl-footer-item>
        <ecl-footer-item
          link="/example.html"
          slot="ecl-footer-list-core"
        >
          Topics
        </ecl-footer-item>
        <ecl-footer-item
          link="/example.html"
          slot="ecl-footer-list-core"
        >
          Funding and tenders
        </ecl-footer-item>
        <ecl-footer-item
          link="/example.html"
          slot="ecl-footer-list-core"
        >
          Jobs
        </ecl-footer-item>
        <ecl-footer-item
          link="/example.html"
          slot="ecl-footer-list-core"
        >
          Press corner
        </ecl-footer-item>
        <ecl-footer-item
          link="/example.html"
          slot="ecl-footer-list-core"
        >
          Events
        </ecl-footer-item>
        <ecl-footer-item
          link="/example.html"
          theme="ec"
        >
          Report an IT vulnerability
        </ecl-footer-item>
        <ecl-footer-item
          link="/example.html"
          slot="ecl-footer-list-bottom-left"
        >
          Languages on our websites
        </ecl-footer-item>
        <ecl-footer-item
          link="/example.html"
          slot="ecl-footer-list-bottom-left"
        >
          Cookies
        </ecl-footer-item>
        <ecl-footer-item
          link="/example.html"
          slot="ecl-footer-list-bottom-left"
        >
          Privacy policy
        </ecl-footer-item>
        <ecl-footer-item
          link="/example.html"
          slot="ecl-footer-list-bottom-left"
        >
          Legal notice
        </ecl-footer-item>
        <ecl-footer-item
          link="/example.html"
          slot="ecl-footer-list-bottom-left"
        >
          Accessibility
        </ecl-footer-item>
        <ecl-social-media-follow
          variant="horizontal"
          description="Follow us"
          position="left"
          style-class="ecl-site-footer__social-media"
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
      </ecl-footer-ec>`
    });
    expect(pageEc.root).toMatchSnapshot();
  });
});

describe('ecl-footer EU', () => {
  it('renders', async () => {
    const pageEu = await newSpecPage({
      components: [EclFooterEu, EclFooterItem, EclLink, EclText, EclIcon, EclSocialMediaFollow],
      html: `<ecl-footer-eu
        logo-alt="European Union"
        logo-title="European union"
        logo-lang-code="en"
        description="This site is managed by the Directorate-General for Communication"
        variant="core"
        logo-link="/example.html"
      >
        <ecl-text tag="p" slot="description">
          This site is managed by: [name of the manager of the site]
        </ecl-text>
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
      </ecl-footer-eu>`,
    });
    expect(pageEu.root).toMatchSnapshot();
  });
});
