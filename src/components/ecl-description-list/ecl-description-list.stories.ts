import { randomizedLink } from "../../utils/randomizedLink";

export default {
  title: 'Components/List/description-list',
};

const Template = (args) =>
  `<ecl-description-list
    variant="${args.variant}"
    visible-items="${args.visibleItems}"
    more-label="See all items"
    ecl-script
  >
    <ecl-description-list-term>
      Standard text
    </ecl-description-list-term>
    <ecl-description-list-definition
      type="text"
    >
      Lorem ipsum dolor sit amet, <ecl-link path="${randomizedLink('/example.html')}" title="title">consectetur adipiscing elit</ecl-link>. Suspendisse ut sapien condimentum, aliquet turpis sit amet, finibus purus. Donec porttitor iaculis felis ut dapibus. Sed blandit, massa ac suscipit facilisis
    </ecl-description-list-definition>
    <ecl-description-list-term
    >
      Standalone links
    </ecl-description-list-term>
    <ecl-description-list-definition
      type="link"
      items='[{"label": "Lorem ipsum dolor sit amet", "path": "${randomizedLink('/example.html')}"},{"label": "Lorem ipsum dolor sit amet", "path": "${randomizedLink('/example.html')}"}]'
    >
    </ecl-description-list-definition>
    <ecl-description-list-term>
      Links inline
    </ecl-description-list-term>
    <ecl-description-list-definition
      type="inline"
      items='[{"label": "Lorem ipsum dolor sit amet", "path": "${randomizedLink('/example.html')}"},{"label": "Lorem ipsum dolor sit amet", "path": "${randomizedLink('/example.html')}"}]'
    >
    </ecl-description-list-definition>
    <ecl-description-list-term>
      Tag list
    </ecl-description-list-term>
    <ecl-description-list-definition
      type="tag"
      items='[{"label": "Link tag", "url": "${randomizedLink('/example.html')}"},{"label": "Long link tag", "url": "${randomizedLink('/example.html')}"}]'
    >
    </ecl-description-list-definition>
    <ecl-description-list-term>
      Taxonomy list
    </ecl-description-list-term>
    <ecl-description-list-definition
      type="taxonomy"
      collapsible
      items='["Taxonomy item 1", {"label": "Taxonomy item 2", "path": "${randomizedLink('/example.html')}"}, "Taxonomy item 3"]'
    >
    </ecl-description-list-definition>
  </ecl-description-list>`;

export const DescriptionList = Template.bind({});
DescriptionList.storyName = 'default';
DescriptionList.args = {
  variant: 'vertical',
  visibleItems: 2,
};
DescriptionList.argTypes = {
  variant: {
    type: { name: 'select'},
    options: [
      'vertical',
      'horizontal',
    ],
    description: 'Choose variant',
  },
  visibleItems: {
    type: { name: 'number' },
    name: 'visible-items',
  },
};