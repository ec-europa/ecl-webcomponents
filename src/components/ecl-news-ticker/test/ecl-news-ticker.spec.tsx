import { newSpecPage } from '@stencil/core/testing';
import { EclNewsTicker } from '../ecl-news-ticker';

describe('ecl-news-ticker', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclNewsTicker],
      html: `<ecl-news-ticker
        items-length="6"
        theme="ec"
        ecl-script
        counter-label="of"
        sr-next="Next item"
        sr-prev="Prev item"
        sr-pause="Pause news ticker"
      >
        <ecl-news-ticker-item
          theme="ec"
          path="/example.html"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        </ecl-news-ticker-item>
        <ecl-news-ticker-item
          theme="ec"
          path="/example.html"
        >
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </ecl-news-ticker-item>
        <ecl-news-ticker-item
          theme="ec"
          path="/example.html"
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
        </ecl-news-ticker-item>
        <ecl-news-ticker-item
          theme="ec"
          path="/example.html"
        >
          Excepteur sint occaecat cupidatat officia deserunt mollit anim id est laborum
        </ecl-news-ticker-item>
        <ecl-news-ticker-item
          theme="ec"
          path="/example.html"
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        </ecl-news-ticker-item>
        <ecl-news-ticker-item
          theme="ec"
          path="/example.html"
        >
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores
        </ecl-news-ticker-item>
      </ecl-news-ticker>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
