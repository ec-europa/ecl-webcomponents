import { newSpecPage } from '@stencil/core/testing';
import { EclDescriptionList } from '../ecl-description-list';
import { EclDescriptionListTerm } from '../ecl-description-list-term';
import { EclDescriptionListDefinition } from '../ecl-description-list-definition';

describe('ecl-description-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclDescriptionList, EclDescriptionListDefinition, EclDescriptionListTerm],
      html: `<ecl-description-list
        theme="ec"
        variant="vertical"
      >
        <ecl-description-list-term
          theme="ec"
        >
          Standard text
        </ecl-description-list-term>
        <ecl-description-list-definition
          type="text"
          theme="ec"
        >
          Lorem ipsum dolor sit amet, <a href="/component-library/example" class="ecl-link">consectetur adipiscing elit</a>. Suspendisse ut sapien condimentum, aliquet turpis sit amet, finibus purus. Donec porttitor iaculis felis ut dapibus. Sed blandit, massa ac suscipit facilisis
        </ecl-description-list-definition>
        <ecl-description-list-term
          theme="ec"
        >
          Standalone links
        </ecl-description-list-term>
        <ecl-description-list-definition
          type="link"
          theme="ec"
          items='[{"label": "Lorem ipsum dolor sit amet", "path": "/example.html", "icon": "copy"},{"label": "Lorem ipsum dolor sit amet", "path": "/example.html", "icon": "download"}]'
        >
        </ecl-description-list-definition>
        <ecl-description-list-term
          theme="ec"
        >
          Links inline
        </ecl-description-list-term>
        <ecl-description-list-definition
          type="inline"
          theme="ec"
          items='[{"label": "Lorem ipsum dolor sit amet", "path": "/example.html"},{"label": "Lorem ipsum dolor sit amet", "path": "/example.html"}]'
        >
        </ecl-description-list-definition>
        <ecl-description-list-term
          theme="ec"
        >
          Taxonomy list
        </ecl-description-list-term>
        <ecl-description-list-definition
          type="taxonomy"
          theme="ec"
          items='["Taxonomy item 1", {"label": "Taxonomy item 2", "path": "/example.html"}, "Taxonomy item 3"]'
        >
        </ecl-description-list-definition>
      </ecl-description-list>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
