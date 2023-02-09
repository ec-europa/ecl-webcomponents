export default {
  title: 'Components/news ticker',
};

const Template = (args) => 
`<ecl-news-ticker
  items-length="6"
  theme="${args.theme}"
  ecl-script
  counter-label="of"
  sr-next="Next item"
  sr-prev="Prev item"
  sr-pause="Pause news ticker"
>
  <ecl-news-ticker-item
    theme="${args.theme}"
    path="/example.html"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  </ecl-news-ticker-item>
  <ecl-news-ticker-item
    theme="${args.theme}"
    path="/example.html"
  >
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </ecl-news-ticker-item>
  <ecl-news-ticker-item
    theme="${args.theme}"
    path="/example.html"
  >
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
  </ecl-news-ticker-item>
  <ecl-news-ticker-item
    theme="${args.theme}"
    path="/example.html"
  >
    Excepteur sint occaecat cupidatat officia deserunt mollit anim id est laborum
  </ecl-news-ticker-item>
  <ecl-news-ticker-item
    theme="${args.theme}"
    path="/example.html"
  >
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
  </ecl-news-ticker-item>
  <ecl-news-ticker-item
    theme="${args.theme}"
    path="/example.html"
  >
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores
  </ecl-news-ticker-item>
</ecl-news-ticker>`;

export const NewsTicker = Template.bind({});
NewsTicker.storyName = 'default';
