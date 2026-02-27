import { loremIpsum } from 'lorem-ipsum';

const lorem = loremIpsum({ count: 25 });

export default {
  title: 'Components/Navigation/inpage-navigation',
};

const Template = args =>
`<ecl-grid container>
  <ecl-grid row data-ecl-inpage-navigation-container>
    <ecl-grid columns=3 breakpoint="l">
      <ecl-inpage-navigation
        inpage-title="Page contents"
        inpage-id="inpage-id"
        color-mode="${args.color_mode}"
        items='[
          { "path": "#inline-nav-1", "label": "Heading 1" },
          { "path": "#inline-nav-2", "label": "Heading 2 with a long title going on several lines" },
          { "path": "#inline-nav-3", "label": "Heading 3" },
          { "path": "#inline-nav-4", "label": "Heading 4" }
        ]'
      >
      </ecl-inpage-navigation>
    </ecl-grid>
    <ecl-grid columns=9 breakpoint="l">
      <ecl-text tag="h2" type="heading" level="2" item-id="inline-nav-1">Heading 1</ecl-text>
      <ecl-text tag="p" size="m">${lorem}</ecl-text>
      <ecl-text tag="p" size="m">${lorem}</ecl-text>
      <ecl-text tag="h2" type="heading" level="2" item-id="inline-nav-2">Heading 2</ecl-text>
      <ecl-text tag="p" size="m">${lorem}</ecl-text>
      <ecl-text tag="p" size="m">${lorem}</ecl-text>
      <ecl-text tag="h2" type="heading" level="2" item-id="inline-nav-3">Heading 3</ecl-text>
      <ecl-text tag="p" size="m">${lorem}</ecl-text>
      <ecl-text tag="h2" type="heading" level="2" item-id="inline-nav-4">Heading 4</ecl-text>
      <ecl-text tag="p" size="m">${lorem}</ecl-text>
    </ecl-grid>
  </ecl-grid>
</ecl-grid>`;

export const InpageNavigation = Template.bind({});
InpageNavigation.storyName = 'default';
InpageNavigation.parameters = {
  viewMode: 'story',
};