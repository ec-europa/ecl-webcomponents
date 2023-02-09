import { newSpecPage } from '@stencil/core/testing';
import { EclTextarea } from '../ecl-textarea';
import { EclFormGroup } from '../../ecl-form-group/ecl-form-group';

describe('ecl-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclTextarea, EclFormGroup],
      html:  `<ecl-form-group
        helper-text="Helper text"
        helper-id="helper-id"
        label="Select input field"
      >
        <ecl-textarea
          required
          name="ecl-textarea"
          width="l"
        >
        </ecl-textarea>
      </ecl-form-group>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
