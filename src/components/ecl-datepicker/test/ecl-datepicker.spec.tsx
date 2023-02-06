import { newSpecPage } from '@stencil/core/testing';
import { EclDatepicker } from '../ecl-datepicker';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-datepicker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclDatepicker, EclIcon],
      html: `<ecl-datepicker
              required
              input-id="ecl-datepicker"
              default-value="11-10-21"
              placeholder="DD-MM-YYYY"
            >
            </ecl-datepicker>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
