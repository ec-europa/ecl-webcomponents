import { randomizedLink } from "../../utils/randomizedLink";

export default {
  title: 'Components/timeline',
};

const Template = (args) => 
  `<ecl-timeline
    color-mode="${args.color_mode}"
   >
    <ecl-timeline-item
      type="headline"
      label="2025"
      item-title="Headline title"
    >
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu metus risus.
    </ecl-timeline-item>
    <ecl-timeline-item
      label="Item 1 label"
      item-title="Item 1 title"
    >
      Nulla vel mattis justo
    </ecl-timeline-item>
    <ecl-timeline-item
      item-title="Item 2 title"
      label="Item 2 label"
    >
      Etiam tempus augue mi, in tincidunt dolor tincidunt id
    </ecl-timeline-item>
    <ecl-timeline-item
      item-title="Item 3 title"
      label="Item 3 label"
    >
      Suspendisse venenatis condimentum turpis, in lobortis ante finibus nec. Morbi consequat purus in nulla facilisis lacinia.
    </ecl-timeline-item>
    <ecl-timeline-item
      item-title="Item 4 title"
      label="Item 4 label"
    >
      <ecl-link path="${randomizedLink('/example.html')}">Nulla finibus eleifend felis</ecl-link>
    </ecl-timeline-item>
    <ecl-timeline-item
      item-title="Item 5 title"
      label="Item 5 label"
    >
      Suspendisse varius neque at nunc auctor, vel dictum purus pellentesque. Etiam ac ex mi. Fusce sed posuere ligula, sed malesuada nisl. Nulla elementum condimentum nunc at bibendum
    </ecl-timeline-item>
    <ecl-timeline-item 
      type="toggle"
      toggle-label-collapsed="Show 10 more items"
      toggle-label-expanded="Hide 10 items"
    >
    </ecl-timeline-item>
    <ecl-timeline-item
      label="Item 6 label"
      style-class="ecl-timeline__item--collapsed"
    >
      <ecl-link path="${randomizedLink('/example.html')}">EU Leaders' meeting on migration, Brussels</ecl-link>
    </ecl-timeline-item>
    <ecl-timeline-item
      item-title-"Item 7 title"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </ecl-timeline-item>
    <ecl-timeline-item
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </ecl-timeline-item>
    <ecl-timeline-item
      item-title="Item 9 title"
      label="Item 9 label"
    >
      <ecl-link path="${randomizedLink('/example.html')}">Multiannual Financial Framework</ecl-link> and <ecl-link path="${randomizedLink('/example.html')}">institutional issues</ecl-link> - enhancing efficiency at the helm of the European Union
    </ecl-timeline-item>
    <ecl-timeline-item
      item-title="Item 10 title"
      label="Item 10 label"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </ecl-timeline-item>
    <ecl-timeline-item
      item-title="Item 11 title"
      label="Item 11 label"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </ecl-timeline-item>
    <ecl-timeline-item
      item-title="Item 12 title"
      label="Item 12 label"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </ecl-timeline-item>
    <ecl-timeline-item
      item-title="Item 13 title"
      label="Item 13 label"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </ecl-timeline-item>
    <ecl-timeline-item
      item-title="Item 14 title"
      label="Item 14 label"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </ecl-timeline-item>
  </ecl-timeline>`;

export const Timeline = Template.bind({});
Timeline.storyName = 'default';