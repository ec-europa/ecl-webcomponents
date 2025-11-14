import { randomizedLink } from "../../utils/randomizedLink"; 

export default {
  title: 'Components/news ticker',
};

const Template = () => 
`<ecl-news-ticker
  ecl-script
  counter-label="of"
  sr-next="Next item"
  sr-prev="Prev item"
  sr-pause="Pause news ticker"
  sr-play="Play news ticker"
>
  <ecl-news-ticker-item
    icon="information"
    path="${randomizedLink('/example.html')}"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  </ecl-news-ticker-item>
  <ecl-news-ticker-item
    icon="euro"
    path="${randomizedLink('/example.html')}"
  >
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </ecl-news-ticker-item>
  <ecl-news-ticker-item
    icon="global"
    path="${randomizedLink('/example.html')}"
  >
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
  </ecl-news-ticker-item>
  <ecl-news-ticker-item
    image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
    alt-attr="Alternative text for the image"
    title-attr="title of the image"
    path="${randomizedLink('/example.html')}"
  >
    Excepteur sint occaecat cupidatat officia deserunt mollit anim id est laborum
  </ecl-news-ticker-item>
  <ecl-news-ticker-item
    icon="livestreaming"
    path="${randomizedLink('/example.html')}"
  >
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  </ecl-news-ticker-item>
  <ecl-news-ticker-item
    icon="global"
    path="${randomizedLink('/example.html')}"
  >
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores
  </ecl-news-ticker-item>
</ecl-news-ticker>`;

export const NewsTicker = Template.bind({});
NewsTicker.storyName = 'default';
NewsTicker.argTypes = {
  color_mode: {
    table: { disable: true },
  }
}
