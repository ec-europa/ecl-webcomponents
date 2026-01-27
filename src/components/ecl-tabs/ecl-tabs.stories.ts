import { loremIpsum } from 'lorem-ipsum';

export default {
  title: 'Components/tabs',
};

const Template = (args) => 
  `<ecl-tabs color-mode="${args.color_mode}">
    <ecl-tabs-item path="#tab-content-1">
      Tab 1
    </ecl-tabs-item>
    <ecl-tabs-item is-current path="#tab-content-2">
      Tab 2
    </ecl-tabs-item>
    <ecl-tabs-item path="#tab-content-3">
      Tab 3
    </ecl-tabs-item>
    <ecl-tabs-item path="#tab-content-4">
      Tab 4
    </ecl-tabs-item>
  </ecl-tabs>
  <div id="tab-content-1">
    <ecl-text tag="h2" type="heading" level="2">First tab content</ecl-text>
    <img src="https://picsum.photos/300/200?${Math.random()}" alt="Random image">
    <ecl-text>${loremIpsum({ count: 3, format: 'html', units: 'paragraphs', random: Math.random })}</ecl-text>
  </div>
  <div id="tab-content-2">
    <ecl-text tag="h2"  type="heading" level="2">Second tab content</ecl-text>
    <ecl-text>${loremIpsum({ count: 1, format: 'html', units: 'paragraphs', random: Math.random })}</ecl-text>
    <img src="https://picsum.photos/300/200?${Math.random()}" alt="Random image">
  </div>
  <div id="tab-content-3">
    <ecl-text tag="h2"  type="heading" level="2">Third tab content</ecl-text>
    <img src="https://picsum.photos/300/200?${Math.random()}" alt="Random image">
    <ecl-text>${loremIpsum({ count: 4, format: 'html', units: 'paragraphs', random: Math.random })}</ecl-text>
  </div>
  <div id="tab-content-4">
    <ecl-text tag="h2" level="2" type="heading" >Fourth tab content</ecl-text>
    <ecl-grid row>
      <ecl-grid columns="3">
        <img src="https://picsum.photos/300/200?${Math.random()}" alt="Random image">
      </ecl-grid>
      <ecl-grid columns="9">
        <ecl-text>${loremIpsum({ count: 2, format: 'html', units: 'paragraphs', random: Math.random })}</ecl-text>
      </ecl-grid>
    </ecl-grid>
  </div>`;

export const Tabs = Template.bind({});
Tabs.storyName = 'default';