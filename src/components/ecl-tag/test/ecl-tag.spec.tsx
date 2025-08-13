import { newSpecPage } from '@stencil/core/testing';
import { EclTag } from '../ecl-tag';
import { EclTagSet } from '../ecl-tag-set'; 
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-tag', () => {
  it('renders correctly in the link variant', async () => {
    const page = await newSpecPage({
      components: [EclTag],
      html: `<ecl-tag
              variant="link"
              url="/example.html"
            >
              A link ECL tag
            </ecl-tag>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly with external', async () => {
    const page = await newSpecPage({
      components: [EclTag, EclIcon],
      html: `<ecl-tag
              variant="link"
              url="/example.html"
              external
            >
              An external link ECL tag
            </ecl-tag>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly with a custom color mode', async () => {
    const page = await newSpecPage({
      components: [EclTag, EclIcon],
      html: `<ecl-tag
              variant="removable"
              color-mode="blue-navy"
            >
              A removable ECL tag
            </ecl-tag>`,
    });

    expect(page.root).toMatchSnapshot();
  });


  it('renders correctly in the removable variant', async () => {
    const page = await newSpecPage({
      components: [EclTag, EclIcon],
      html: `<ecl-tag
              variant="removable"
            >
              A removable ECL tag
            </ecl-tag>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly with no-wrap', async () => {
    const page = await newSpecPage({
      components: [EclTag, EclIcon],
      html: `<ecl-tag
              variant="removable"
              no-wrap
            >
              A no wrap ECL tag
            </ecl-tag>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly as a tag set', async () => {
    const page = await newSpecPage({
      components: [EclTag, EclTagSet, EclIcon],
      html: `<ecl-tag-set>
              <ecl-tag
                 variant="link"
                 url="/example.html"
              >
                A link ECL tag
              </ecl-tag>
              <ecl-tag
                 variant="removable"
              >
                A removable ECL tag
              </ecl-tag>
            </ecl-tag-set>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
