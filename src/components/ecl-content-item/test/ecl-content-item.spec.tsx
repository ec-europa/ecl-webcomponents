import { newSpecPage } from '@stencil/core/testing';
import { EclContentBlock } from '../../ecl-content-block/ecl-content-block';
import { EclContentItem } from '../ecl-content-item';
import { EclLabel } from '../../ecl-label/ecl-label';
import { EclPicture } from '../../ecl-picture/ecl-picture';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';
import { EclDescriptionList } from '../../ecl-description-list/ecl-description-list';
import { EclDescriptionListTerm } from '../../ecl-description-list/ecl-description-list-term';
import { EclDescriptionListDefinition } from '../../ecl-description-list/ecl-description-list-definition';

describe('ecl-content-item', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });
  
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclContentItem, EclPicture, EclContentBlock, EclLink, EclIcon, EclDescriptionList, EclLabel, EclDescriptionListDefinition, EclDescriptionListTerm],
      html: `<ecl-content-item
        image-position="left"
        image-alt="Alternative text"
        image-size="large"
        image-zoom
      >
      <ecl-picture
        slot="picture"
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
      >
        <source
          media="(min-width: 480px)"
          type="image/jpg"
          srcset="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
        >
      </ecl-picture>
      <ecl-content-block
        slot="content-block"
        meta-primary='["PRIMARY META", "DD Month Year"]'
        meta-secondary='[{"label": "2018/10/22", "icon": "calendar"}, {"label": "Luxembourg", "icon": "location"}]'
        has-title
        has-description
        has-lists
        has-labels
        has-links
        has-secondary-links
      >
        <ecl-label
          slot="labels"
          variant="highlight"
        >
          Highlight
        </ecl-label>
        <ecl-label
          slot="labels"
          variant="high"
        >
          High importance
        </ecl-label>
        <p slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus,
          quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus
        </p>
        <ecl-link
          slot="title"
          path="/example.html"
          variant="standalone"
        >
          Title
        </ecl-link>
        <ecl-link
          slot="links"
          variant="standalone"
          path="/example.html"
        >
          Primary Link 1
        </ecl-link>
        <ecl-link
          slot="links"
          variant="standalone"
          path="/example.html"
        >
          Primary Link 2
        </ecl-link>
        <ecl-link
          slot="links"
          variant="standalone"
          path="/example.html"
        >
          Primary Link 3
        </ecl-link>
        <ecl-link
          slot="links"
          variant="standalone"
          path="/example.html"
        >
          Primary Link 4
        </ecl-link>
        <ecl-link
          slot="links-secondary"
          variant="standalone"
          path="/example.html"
        >
          Secondary Link 1
        </ecl-link>
        <ecl-link
          slot="links-secondary"
          variant="standalone"
          path="/example.html"
        >
          Secondary Link 2
        </ecl-link>
        <ecl-description-list
          slot="lists"
        >
          <ecl-description-list-term
          >
            Standard text
          </ecl-description-list-term>
          <ecl-description-list-definition
            type="text"
          >
            Lorem ipsum dolor sit amet, <a href="/component-library/example.html" class="ecl-link">consectetur adipiscing elit</a>. Suspendisse ut sapien condimentum, aliquet turpis sit amet, finibus purus. Donec porttitor iaculis felis ut dapibus. Sed blandit, massa ac suscipit facilisis
          </ecl-description-list-definition>
          <ecl-description-list-term
          >
            Standalone links
          </ecl-description-list-term>
          <ecl-description-list-definition
            type="link"
            items='[{"label": "Lorem ipsum dolor sit amet", "path": "/example.html", "icon": "copy"},{"label": "Lorem ipsum dolor sit amet", "path": "/example.html", "icon": "download"}]'
          >
          </ecl-description-list-definition>
          <ecl-description-list-term
          >
            Links inline
          </ecl-description-list-term>
          <ecl-description-list-definition
            type="inline"
            items='[{"label": "Lorem ipsum dolor sit amet", "path": "/example.html"},{"label": "Lorem ipsum dolor sit amet", "path": "/example.html"}]'
          >
          </ecl-description-list-definition>
          <ecl-description-list-term
          >
            Taxonomy list
          </ecl-description-list-term>
          <ecl-description-list-definition
            type="taxonomy"
            items='["Taxonomy item 1",{"label": "Taxonomy item 2", "path": "/example.html"},"Taxonomy item 3"]'
          ></ecl-description-list-definition>
        </ecl-description-list>
      </ecl-content-block>
    </ecl-content-item>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
