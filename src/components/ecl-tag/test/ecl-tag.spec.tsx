import { newSpecPage } from '@stencil/core/testing';
import { EclTag } from '../ecl-tag';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-tag', () => {
  it('renders correctly in the display variant in EC', async () => {
    const page = await newSpecPage({
      components: [EclTag],
      html: `<ecl-tag
              type="display"
              data-ecl-button-icon
              theme="ec"
            >
              An ECL tag
            </ecl-tag>`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it('renders correctly in the display variant in EU', async () => {
    const page = await newSpecPage({
      components: [EclTag],
      html: `<ecl-tag
              type="display"
              data-ecl-button-icon
              theme="ec"
            >
              An ECL tag
            </ecl-tag>`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it('renders correctly in the link variant in EC', async () => {
    const page = await newSpecPage({
      components: [EclTag],
      html: `<ecl-tag
              type="link"
              url="/example"
              theme="ec"
            >
              An ECL tag
            </ecl-tag>`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it('renders correctly in the link variant in EU', async () => {
    const page = await newSpecPage({
      components: [EclTag],
      html: `<ecl-tag
              type="link"
              url="/example"
              theme="eu"
            >
              An ECL tag
            </ecl-tag>`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it('renders correctly in the removable variant in EC', async () => {
    const page = await newSpecPage({
      components: [EclTag, EclIcon],
      html: `<ecl-tag
              type="removable"
              theme="ec"
            >
              An ECL tag
            </ecl-tag>`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it('renders correctly in the removable variant in EU', async () => {
    const page = await newSpecPage({
      components: [EclTag, EclIcon],
      html: `<ecl-tag
              type="removable"
              theme="eu"
            >
              An ECL tag
            </ecl-tag>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
