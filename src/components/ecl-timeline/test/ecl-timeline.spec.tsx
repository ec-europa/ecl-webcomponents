import { newSpecPage } from '@stencil/core/testing';
import { EclTimeline } from '../ecl-timeline';
import { EclTimelineItem } from '../ecl-timeline-item';

describe('ecl-timeline', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclTimeline, EclTimelineItem],
      html: `ecl-timeline
        theme="ec"
        ecl-script
       >
        <ecl-timeline-item
          label="13 September 2017"
          item-title="Item title"
          itemId="0"
        >
          <a href="/example.html" class="ecl-link">President Juncker's State of the Union speech</a>
        </ecl-timeline-item>
        <ecl-timeline-item
          item-id="1"
          label="28-29 September 2017"
        >
          <a href="/example.html" class="ecl-link">Informal Digital Summit, Tallinn</a>
        </ecl-timeline-item>
        <ecl-timeline-item
          item-id="2"
          label="14 November 2017"
        >
          <a href="/example.html" class="ecl-link">Strengthening European identity through education and culture: European Commission's contribution to the Leaders' meeting, Gothenburg, Sweden</a>
        </ecl-timeline-item>
        <ecl-timeline-item
          item-id="3"
          label="17 November 2017"
        >
          <a href="/example.html" class="ecl-link">Social Summit in Gothenburg, Sweden</a>
        </ecl-timeline-item>
        <ecl-timeline-item
          item-id="4"
          label="6 December 2017"
        >
          <a href="/example.html" class="ecl-link">Economic and Monetary Union package of proposals</a>
        </ecl-timeline-item>
        <ecl-timeline-item type="toggle">
          Show/Hide hidden items
        </ecl-timeline-item>
        <ecl-timeline-item
          item-id="5"
          label="14-15 December 2017"
          style-class="ecl-timeline__item--collapsed"
        >
          <a href="/example.html" class="ecl-link">EU Leaders' meeting on migration, Brussels</a>
        </ecl-timeline-item>
        <ecl-timeline-item
          item-id="6"
          label="15 December 2017"
          style-class="ecl-timeline__item--collapsed"
        >
          <a href="/example.html" class="ecl-link">Euro Summit</a>
        </ecl-timeline-item>
        <ecl-timeline-item
          item-id="7"
          label="6 February 2018"
          style-class="ecl-timeline__item--collapsed"
        >
          <a href="/example.html" class="ecl-link">EU-Western Balkans Strategy</a>
        </ecl-timeline-item>
        <ecl-timeline-item
          item-id="8"
          label="14 February 2018"
          style-class="ecl-timeline__item--collapsed"
        >
          <a href="/example.html" class="ecl-link">Multiannual Financial Framework</a> and <a href="/example.html" class="ecl-link">institutional issues</a> - enhancing efficiency at the helm of the European Union
        </ecl-timeline-item>
        <ecl-timeline-item
          item-id="9"
          label="23 February 2018"
          style-class="ecl-timeline__item--collapsed"
        >
          <a href="/example.html" class="ecl-link">Informal European Council</a>
        </ecl-timeline-item>
        <ecl-timeline-item
          item-id="10"
          label="22-23 March 2018"
          style-class="ecl-timeline__item--collapsed"
        >
          <a href="/example.html" class="ecl-link">European Council</a>
        </ecl-timeline-item>
        <ecl-timeline-item
          item-id="11"
          label="2 May 2018"
          style-class="ecl-timeline__item--collapsed"
        >
          <a href="/example.html" class="ecl-link">Commission proposal: Long-term budget post-2020</a>
        </ecl-timeline-item>
        <ecl-timeline-item
          item-id="12"
          label="15 May 2018"
          style-class="ecl-timeline__item--collapsed"
        >
          <a href="/example.html" class="ecl-link">European Commission’s contribution to the Informal Leaders' meeting</a>, Sofia, Bulgaria (16 May 2018)
        </ecl-timeline-item>
        <ecl-timeline-item
          item-id="13"
          label="17 May 2018"
          style-class="ecl-timeline__item--collapsed"
        >
          <a href="/component-library/example" class="ecl-link">EU-Western Balkans Summit</a> (Sofia, Bulgaria)
        </ecl-timeline-item>
      </ecl-timeline>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
