import { newSpecPage } from '@stencil/core/testing';
import { EclSelect } from '../ecl-select';

describe('ecl-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclSelect],
      html: `<ecl-select></ecl-select>`,
    });
    expect(page.root).toEqualHtml(`
      <ecl-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ecl-select>
    `);
  });
});
