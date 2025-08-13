import { newSpecPage } from '@stencil/core/testing';
import { EclLink } from '../ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';
import { EclIndicator } from '../../ecl-indicator/ecl-indicator';

describe('ecl-link', () => {
  it('renders correctly as a default link', async () => {
    const page = await newSpecPage({
      components: [EclLink],
      html: `<ecl-link
              variant="default"
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
              path="/example.html"
            >
              A standalone link
            </ecl-link>`,
      });

    expect(page.root).toMatchSnapshot();
  });
  it('renders correctly with an icon after', async () => {
    const page = await newSpecPage({
      components: [EclLink, EclIcon],
      html: `<ecl-link
              variant="standalone"
              path="/example.html"
            >
              Link label
              <ecl-icon slot="icon-after" icon="check"> 
            </ecl-link>`,
      });

    expect(page.root).toMatchSnapshot();
  });
  it('renders correctly with an icon before', async () => {
    const page = await newSpecPage({
      components: [EclLink, EclIcon],
      html: `<ecl-link
              variant="standalone"
              theme="ec"
              path="/example.html"
            >
              Link label
              <ecl-icon slot="icon-before" icon="arrow-left"> 
            </ecl-link>`,
      });

    expect(page.root).toMatchSnapshot();
  });
  it('renders correctly when external', async () => {
    const page = await newSpecPage({
      components: [EclLink, EclIcon],
      html: `<ecl-link
              variant="standalone"
              path="/example.html"
              external
              sr-external="will move you outside of this website"
            >
              Link label
            </ecl-link>`,
      });

    expect(page.root).toMatchSnapshot();
  });
  it('renders correctly with an indicator', async () => {
    const page = await newSpecPage({
      components: [EclLink, EclIcon, EclIndicator],
      html: `<ecl-link
              variant="standalone"
              path="/example.html"
              indicator=true
              indicator-value="5"
            >
              Link label
              <ecl-icon slot="icon-after" icon="check"> 
            </ecl-link>`,
      });

    expect(page.root).toMatchSnapshot();
  });
});
