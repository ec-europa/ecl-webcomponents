import { newSpecPage } from '@stencil/core/testing';
import { EclAnimatedNumbers } from '../ecl-animated-numbers';
import { EclAnimatedNumbersItem } from '../ecl-animated-numbers-item';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-animated-numbers', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });

  it('renders correctly', async () => {
    const page = await newSpecPage({
      components: [EclAnimatedNumbers, EclAnimatedNumbersItem, EclLink, EclIcon],
      html: `<ecl-animated-numbers
              counter-color="false"
              no-script
              sources-label="Sources:"
              sources='[
                { "label": "Eurostat", "path": "/example.html" },
                { "label": "DG CNECT", "path": "/example.html" }
              ]' 
            >
              <ecl-animated-numbers-item
                icon="users"
                item-prefix=""
                value="213"
                item-suffix="€"
                item-suffix-label="euro"
                category="Revenue"
                description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                sources-label="Sources:"
                sources='[
                  { "label": "DG CNECT", "path": "/example.html" }
                ]'
              >
              </ecl-animated-numbers-item>
              <ecl-animated-numbers-item
                icon="currency-eur"
                item-prefix="billion"
                value="888.2"
                item-suffix="€"
                item-suffix-label="euro"
                category="Revenue"
                description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                sources-label="Sources:"
                sources='[
                  { "label": "DG CNECT", "path": "/example.html" }
                ]'
              >
              </ecl-animated-numbers-item>
              <ecl-animated-numbers-item
                icon="trend-up"
                item-prefix="million"
                value="975"
                item-suffix="<"
                item-suffix-label="less than"
                category="Revenue"
                description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                sources-label="Sources:"
                sources='[
                  { "label": "DG CNECT", "path": "/example.html" }
                ]'
              >
              </ecl-animated-numbers-item>
              <ecl-animated-numbers-item
                icon="pulse"
                item-prefix="€"
                item-prefix-label="euro"
                value="1250"
                item-suffix="billions"
                category="Revenue"
                description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
                sources-label="Sources:"
                sources='[
                  { "label": "DG CNECT", "path": "/example.html" }
                ]'
              >
              </ecl-animated-numbers-item>
              <ecl-animated-numbers-item
                icon="atom"
                item-prefix="€"
                item-prefix-label="euro"
                value="4350"
                item-suffix="millions"
                category="Revenue"
                description="Curabitur ut mauris quam. Fusce non consequat ipsum"
                sources-label="Sources:"
                sources='[
                  { "label": "DG CNECT", "path": "/example.html" }
                ]'
              >
              </ecl-animated-numbers-item>
              <ecl-animated-numbers-item
                icon="bell-simple"
                item-prefix="€"
                item-prefix-label="euro"
                value="125"
                item-suffix="billions"
                category="Revenue"
                description="Curabitur ut mauris quam. Fusce non consequat ipsum"
                sources-label="Sources:"
                sources='[
                  { "label": "DG CNECT", "path": "/example.html" }
                ]'
              >
              </ecl-animated-numbers-item>
              <ecl-animated-numbers-item
                icon="boat"
                item-prefix="€"
                item-prefix-label="euro"
                value="8765"
                item-suffix="billions"
                category="Revenue"
                description="Integer pharetra lacinia tristique"
                sources-label="Sources:"
                sources='[
                  { "label": "DG CNECT", "path": "/example.html" }
                ]'
              >
              </ecl-animated-numbers-item>
            </ecl-animated-numbers>`
    });

    expect(page.root).toMatchSnapshot();
  });
});
