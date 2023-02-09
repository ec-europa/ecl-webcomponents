import { newSpecPage } from '@stencil/core/testing';
import { EclSelect } from '../ecl-select';
import { EclFormGroup } from '../../ecl-form-group/ecl-form-group';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclSelect, EclFormGroup, EclIcon],
      html: `<ecl-form-group
        helper-text="Helper text"
        helper-id="helper-id"
        label="Select input field"
        required
      >
        <ecl-select
          required
          name="ecl-select"
          width="s"
        >
          <option value=1>Belgium</option>
          <option value=2>France</option>
          <option value=3 disabled>Luxembourg</option>
          <option value=4>Germany</option>
          <option value=5 selected>Bulgaria</option>
          <option value=6>Italy</option>
          <option value=7>Romania</option>
          <option value=8>Greece</option>
          <option value=9>Hungary</option>
          <option value=10>Portugal</option>
        </ecl-select>
      </ecl-form-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
