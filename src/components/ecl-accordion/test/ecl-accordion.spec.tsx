import { newSpecPage } from '@stencil/core/testing';
import { EclAccordion } from '../ecl-accordion';
import { EclAccordionItem } from '../ecl-accordion-item';

describe('ecl-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclAccordion, EclAccordionItem],
      html: `<ecl-accordion theme="ec">
              <ecl-accordion-item
                id="ecl-accordion-item-id-1"
                label="Delivery of last pending proposals, a common Destiny of unity, the hour of European Democracy"
                icon-path="/icons.svg"
              >
                Accordion item label
              </ecl-accordion-item>
              <ecl-accordion-item
                id="ecl-accordion-item-id-2"
                label="Energy union and climate"
                icon-path="/icons.svg"
                expanded
              >
                Accordion item label
              </ecl-accordion-item>
              <ecl-accordion-item
                id="ecl-accordion-item-id-3"
                label="Delivery of last pending proposals, a common Destiny of unity, the hour of European Democracy"
              >
                Accordion item label
              </ecl-accordion-item>
             </ecl-accordion>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
