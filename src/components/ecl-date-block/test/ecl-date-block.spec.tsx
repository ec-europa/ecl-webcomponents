import { newSpecPage } from '@stencil/core/testing';
import { EclDateBlock } from '../ecl-date-block';

describe('ecl-date-block', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclDateBlock],
      html: `<ecl-date-block
              variant="ongoing"
              theme="ec"
              day="24"
              month="Sep"
              month-full="September"
              year="2022"
              date-time="2022-09-24" 
            >
            </ecl-date-block>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
