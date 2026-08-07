import { newSpecPage } from '@stencil/core/testing';
import { EclHighlightedSearch } from '../ecl-highlighted-search';
import { EclButton } from '../../ecl-button/ecl-button';
import { EclFormGroup } from '../../ecl-form-group/ecl-form-group';
import { EclInput } from '../../ecl-input/ecl-input';
import { EclIcon } from '../../ecl-icon/ecl-icon';
import { EclTagSet } from '../../ecl-tag/ecl-tag-set';
import { EclTag } from '../../ecl-tag/ecl-tag';

describe('ecl-highlighted-searc', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclHighlightedSearch, EclIcon, EclButton, EclFormGroup, EclInput, EclTagSet, EclTag],
      html: `<ecl-highlighted-search
        el-title="Find your next role"
        suggestion-label="Or explore:"
        helper-text="Ecnter the job you are looking for"
        has-description
        submit-label="Search"
        color-mode="blue"
        el-id="ecl-highlighted-search-test-id"
      >
        Discover job opportunities in the EU institutions
        <ecl-tag
          slot="tags"
          variant="link"
          url="/example.html"
        >
          Trainesheep
        </ecl-tag>
        <ecl-tag
          slot="tags"
          variant="link"
          url="/example.html"
        >
          It & Digital
        </ecl-tag>
      </ecl-highlighted-search>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});