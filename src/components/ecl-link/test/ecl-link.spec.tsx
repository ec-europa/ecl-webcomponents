import { newSpecPage } from '@stencil/core/testing';
import { EclLink } from '../ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-link', () => {
  it('renders correctly as a default link', async () => {
    const page = await newSpecPage({
      components: [EclLink],
      html: `<ecl-link
              variant="default"
              theme="ec"
              path="/example.html"
            >
              A default link
            </ecl-link>`,
      });

    expect(page.root).toMatchSnapshot();
  });
  it('renders correctly as a standalone link', async () => {
    const page = await newSpecPage({
      components: [EclLink],
      html: `<ecl-link
              variant="standalone"
              theme="ec"
              path="/example.html"
            >
              A standalone link
            </ecl-link>`,
      });

    expect(page.root).toMatchSnapshot();
  });
  it('renders correctly with an icon', async () => {
    const page = await newSpecPage({
      components: [EclLink, EclIcon],
      html: `<ecl-link
              variant="standalone"
              theme="ec"
              path="/example.html"
            >
              <ecl-icon slot="ecl-icon-after" icon="check"> 
            </ecl-link>`,
      });

    expect(page.root).toMatchSnapshot();
  });
});
