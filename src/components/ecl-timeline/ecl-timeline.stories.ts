import { randomizedLink } from "../../utils/randomizedLink";

export default {
  title: 'Components/timeline',
};

const Template = (args) => 
  `<ecl-timeline
    theme="${args.theme}"
    ecl-script
   >
    <ecl-timeline-item
      label="13 September 2017"
      item-title="Item title"
      itemId="0"
      theme="${args.theme}"
    >
      <ecl-link theme="${args.theme}" path="${randomizedLink('/example.html')}">President Juncker's State of the Union speech</ecl-link>
    </ecl-timeline-item>
    <ecl-timeline-item
      item-id="1"
      label="28-29 September 2017"
      theme="${args.theme}"
    >
      <ecl-link theme="${args.theme}" path="${randomizedLink('/example.html')}">Informal Digital Summit, Tallinn</ecl-link>
    </ecl-timeline-item>
    <ecl-timeline-item
      item-id="2"
      label="14 November 2017"
      theme="${args.theme}"
    >
      <ecl-link path="${randomizedLink('/example.html')}">Strengthening European identity through education and culture: European Commission's contribution to the Leaders' meeting, Gothenburg, Sweden</ecl-link>
    </ecl-timeline-item>
    <ecl-timeline-item
      item-id="3"
      label="17 November 2017"
      theme="${args.theme}"
    >
      <ecl-link theme="${args.theme}" path="${randomizedLink('/example.html')}">Social Summit in Gothenburg, Sweden</ecl-link>
    </ecl-timeline-item>
    <ecl-timeline-item
      item-id="4"
      label="6 December 2017"
      theme="${args.theme}"
    >
      <ecl-link theme="${args.theme}" path="${randomizedLink('/example.html')}">Economic and Monetary Union package of proposals</ecl-link>
    </ecl-timeline-item>
    <ecl-timeline-item 
      type="toggle"
      theme="${args.theme}"
    >
      View all
    </ecl-timeline-item>
    <ecl-timeline-item
      item-id="5"
      label="14-15 December 2017"
      style-class="ecl-timeline__item--collapsed"
      theme="${args.theme}"
    >
      <ecl-link path="${randomizedLink('/example.html')}">EU Leaders' meeting on migration, Brussels</ecl-link>
    </ecl-timeline-item>
    <ecl-timeline-item
      item-id="6"
      label="15 December 2017"
      theme="${args.theme}"
    >
      <ecl-link theme="${args.theme}" path="${randomizedLink('/example.html')}">Euro Summit</ecl-link>
    </ecl-timeline-item>
    <ecl-timeline-item
      item-id="7"
      label="6 February 2018"
      theme="${args.theme}"
    >
      <ecl-link theme="${args.theme}" path="${randomizedLink('/example.html')}">EU-Western Balkans Strategy</ecl-link>
    </ecl-timeline-item>
    <ecl-timeline-item
      item-id="8"
      label="14 February 2018"
      theme="${args.theme}"
    >
      <ecl-link path="${randomizedLink('/example.html')}">Multiannual Financial Framework</ecl-link> and <ecl-link path="${randomizedLink('/example.html')}">institutional issues</ecl-link> - enhancing efficiency at the helm of the European Union
    </ecl-timeline-item>
    <ecl-timeline-item
      item-id="9"
      label="23 February 2018"
      theme="${args.theme}"
    >
      <ecl-link path="${randomizedLink('/example.html')}">Informal European Council</ecl-link>
    </ecl-timeline-item>
    <ecl-timeline-item
      item-id="10"
      label="22-23 March 2018"
      theme="${args.theme}"
    >
      <ecl-link path="${randomizedLink('/example.html')}">European Council</ecl-link>
    </ecl-timeline-item>
    <ecl-timeline-item
      item-id="11"
      label="2 May 2018"
      theme="${args.theme}"
    >
      <ecl-link path="${randomizedLink('/example.html')}">Commission proposal: Long-term budget post-2020</ecl-link>
    </ecl-timeline-item>
    <ecl-timeline-item
      item-id="12"
      label="15 May 2018"
      theme="${args.theme}"
    >
      <ecl-link path="${randomizedLink('/example.html')}">European Commission’s contribution to the Informal Leaders' meeting</ecl-link>, Sofia, Bulgaria (16 May 2018)
    </ecl-timeline-item>
    <ecl-timeline-item
      item-id="13"
      label="17 May 2018"
      theme="${args.theme}"
    >
      <ecl-link theme="${args.theme}" path="${randomizedLink('/example.html')}">EU-Western Balkans Summit</ecl-link> (Sofia, Bulgaria)
    </ecl-timeline-item>
  </ecl-timeline>`;

export const Timeline = Template.bind({});
Timeline.storyName = 'default';