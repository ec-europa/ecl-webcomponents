import { newSpecPage } from '@stencil/core/testing';
import { EclButton } from '../ecl-button';
import { EclIcon } from '@ecl/web-components-icon/ecl-icon';
import { EclIndicator } from '../../ecl-indicator/ecl-indicator';

describe('ecl-button', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclButton, EclIcon],
      html: `<ecl-button
              variant="primary"
            >
              Button label
            </ecl-button>`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it('renders correctly with small size', async () => {
    const page = await newSpecPage({
      components: [EclButton, EclIcon],
      html: `<ecl-button
              variant="primary"
              size: 's',
            >
              Button label
            </ecl-button>`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it('renders correctly with an icon after', async () => {
    const page = await newSpecPage({
      components: [EclButton, EclIcon],
      html: `<ecl-button
              variant="primary"
            >
              Button label
              <ecl-icon slot="icon-after" icon="check"> 
            </ecl-button>`,
      });

    expect(page.root).toMatchSnapshot();
  });
  it('renders correctly with an icon before', async () => {
    const page = await newSpecPage({
      components: [EclButton, EclIcon],
      html: `<ecl-button
              variant="tertiary"
            >
              Button label
              <ecl-icon slot="icon-before" icon="check"> 
            </ecl-button>`,
      });

    expect(page.root).toMatchSnapshot();
  });
  it('renders correctly with an indicator', async () => {
    const page = await newSpecPage({
      components: [EclButton, EclIcon, EclIndicator],
      html: `<ecl-button
              variant="secondary"
              indicator=true
              indicator-value="5"
              indicator-label="label for screen readers"
            >
              Button label
              <ecl-icon slot="icon-after" icon="check"> 
            </ecl-button>`,
      });

    expect(page.root).toMatchSnapshot();
  });
});
