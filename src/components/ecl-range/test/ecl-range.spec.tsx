import { newSpecPage } from '@stencil/core/testing';
import { EclRange } from '../ecl-range';
import { EclFormGroup } from '../../ecl-form-group/ecl-form-group';

describe('ecl-range', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclRange, EclFormGroup],
      html: `<ecl-form-group
        label="Label"
        required
        helper-text="This is the input helper text"
        theme="ec"
      >
        <ecl-range
          theme="ec"
          input-id="input-id"
          default-value="15"
          label="Range slider"
          required
          width="m"
          name="input-range"
          min=1
          max=30
          ecl-script
          step=1
          value-label="Value: "
        >
        </ecl-range>
      </ecl-form-group>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
