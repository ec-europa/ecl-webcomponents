import { newSpecPage } from '@stencil/core/testing';
import { EclBlockquote } from '../ecl-blockquote';

describe('ecl-blockquote', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclBlockquote],
      html: `<ecl-blockquote
              author="President Juncker"
              theme="ec"
              image="https://inno-ecl.s3.amazonaws.com/media/example.htmls/example.html-image-square.jpg"
            >
              An interconnected grid will help deliver the ultimate goal of the Energy Union, 
              to make sure affordable, secure and sustainable energy, and also growth across the EU.
            </ecl-blockquote>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
