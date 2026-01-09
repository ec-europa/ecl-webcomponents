import { newSpecPage } from '@stencil/core/testing';
import { EclNewsTicker } from '../ecl-news-ticker';
import { EclNewsTickerItem } from '../ecl-news-ticker-item';
import { EclIcon } from '../../ecl-icon/ecl-icon';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclButton } from '../../ecl-button/ecl-button';

describe('ecl-news-ticker', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclNewsTicker, EclNewsTickerItem, EclIcon, EclLink, EclButton],
      html: `<ecl-news-ticker
        items-length="6"
        counter-label="of"
        sr-next="Next item"
        sr-prev="Prev item"
        sr-pause="Pause news ticker"
      >
        <ecl-news-ticker-item
          icon="global"
          path="/example.html"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        </ecl-news-ticker-item>
        <ecl-news-ticker-item
          icon="information"
          path="/example.html"
        >
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </ecl-news-ticker-item>
        <ecl-news-ticker-item
          img="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
          alt-attr="Alternative text"
          title-attr="title attribute"
          path="/example.html"
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
        </ecl-news-ticker-item>
        <ecl-news-ticker-item
          path="/example.html"
          icon="livestreaming"
        >
          Excepteur sint occaecat cupidatat officia deserunt mollit anim id est laborum
        </ecl-news-ticker-item>
        <ecl-news-ticker-item
          icon="global"
          path="/example.html"
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        </ecl-news-ticker-item>
        <ecl-news-ticker-item
          path="/example.html"
        >
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores
        </ecl-news-ticker-item>
      </ecl-news-ticker>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
