import { newSpecPage } from '@stencil/core/testing';
import { EclSearchForm } from '../ecl-search-form';
import { EclFormGroup } from '../../ecl-form-group/ecl-form-group';
import { EclButton } from '../../ecl-button/ecl-button';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-search-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclSearchForm, EclButton, EclIcon, EclFormGroup],
      html: `<ecl-search-form
        theme="ec"
        input-id="ecl-search-form"
        width="m"
        placeholder="Placeholder text"
        button-label="Search"
        button-aria-label="Search"
      >
    </ecl-search-form>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});