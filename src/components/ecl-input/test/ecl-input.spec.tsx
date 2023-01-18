import { newSpecPage } from '@stencil/core/testing';
import { EclInput } from '../ecl-input';
import { EclFormGroup } from '../../ecl-form-group/ecl-form-group';
describe('ecl-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclInput, EclFormGroup],
      html: `<ecl-form-group
        label="Label"
        required=true
        optional-text="(optional)"
        helper-text="This is the form group helper text."
        theme="ec"
      >
        <ecl-input
          type="text"
          theme="ec"
          input-id="input-id"
          required=true
          width="l"
          placeholder="placeholder"
        >
        </ecl-input>
      </ecl-form-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
