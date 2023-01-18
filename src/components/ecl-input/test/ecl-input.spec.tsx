import { newSpecPage } from '@stencil/core/testing';
import { EclInput } from '../ecl-input';

describe('ecl-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclInput],
      html: `<ecl-input></ecl-input>`,
    });
    expect(page.root).toEqualHtml(`
      <ecl-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ecl-input>
    `);
  });
});
