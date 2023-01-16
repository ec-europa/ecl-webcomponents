import { newSpecPage } from '@stencil/core/testing';
import { EclFormGroup } from '../ecl-form-group';

describe('ecl-form-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclFormGroup],
      html: `<ecl-form-group></ecl-form-group>`,
    });
    expect(page.root).toEqualHtml(`
      <ecl-form-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ecl-form-group>
    `);
  });
});
