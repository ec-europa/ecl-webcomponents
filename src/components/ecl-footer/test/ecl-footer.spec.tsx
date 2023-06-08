import { newSpecPage } from '@stencil/core/testing';
import { EclFooter } from '../ecl-footer';
import { EclFooterItem } from '../ecl-footer-item';
import { EclLink } from '../../ecl-link/ecl-link';

describe('ecl-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclFooter, EclFooterItem, EclLink],
      html: `<ecl-footer
        theme="ec"
        logo-alt="European Union"
        logo-title="European union"
        logo-lang-code="en"
        description="This site is managed by the Directorate-General for Communication"
        site-name="European Commission website"
      >
        <ecl-footer-item
          theme="ec"
          link="/example"
          slot="ecl-footer-list-main"
        >
          Strategy
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          About the European Commission
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          Business, Economy, Euro
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          Live, work, travel in the EU
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          Law
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          Funding, Tenders
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          Research and innovation
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          Energy, Climate change, Environment
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          Education
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          Aid, Development cooperation, Fundamental rights
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          Food, Farming, Fisheries
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          EU regional and urban development
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          Jobs at the European Commission
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          Statistics
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          News
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          Events
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-main"
        >
          Publications
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-bottom-left"
        >
          About the European Commission's web presence
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-bottom-left"
        >
          Contact the European Commission
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-bottom-left"
        >
          Follow the European Commission on social media
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-bottom-left"
        >
          Resources for partners
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-bottom-right"
        >
          Languages on our websites
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-bottom-right"
        >
          Cookies
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-bottom-right"
        >
          Privacy policy
        </ecl-footer-item>
        <ecl-footer-item
          link="/example"
          theme="ec"
          slot="ecl-footer-list-bottom-right"
        >
          Legal notice
        </ecl-footer-item>
      </ecl-footer>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
