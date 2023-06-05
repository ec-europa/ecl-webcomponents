import { newSpecPage } from '@stencil/core/testing';
import { EclText } from '../ecl-text';

describe('ecl-text', () => {
  it('renders correctly as an h2 with h3 font size', async () => {
    const page = await newSpecPage({
      components: [EclText],
      html: `<ecl-text tag="h2" level=3>The quick brown fox jumps over the lazy dog</ecl-text>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly as a paragraph with with bold font style', async () => {
    const page = await newSpecPage({
      components: [EclText],
      html: `<ecl-text tag="p" is-bold>The quick brown fox jumps over the lazy dog</ecl-text>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});