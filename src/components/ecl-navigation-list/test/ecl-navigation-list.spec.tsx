import { newSpecPage } from '@stencil/core/testing';
import { EclNavigationList } from '../ecl-navigation-list';
import { EclNavigationListItem } from '../ecl-navigation-list-item';
import { EclContentBlock } from '../../ecl-content-block/ecl-content-block';
import { EclLink } from '../../ecl-link/ecl-link';

describe('ecl-navigation-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclNavigationList, EclNavigationListItem, EclContentBlock, EclLink],
      html: `<ecl-navigation-list
        theme="ec"
        column="2"
      >
        <ecl-navigation-list-item
          theme="ec"
          image="https://inno-ecl.s3.amazonaws.com/media/example.htmls/example.html-image.jpg"
          image-alt="Alt text of the image"
          border
        >
          <ecl-content-block
            theme="ec"
            has-title
            has-description
            has-links
            has-secondary-links
          >
            <ecl-link
              theme="ec"
              slot="title"
              path="/example.html"
              variant="standalone"
            >
              Title 1
            </ecl-link>
            <p slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra.
    Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus</p>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 1
            </ecl-link>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 2
            </ecl-link>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 3
            </ecl-link>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 4
            </ecl-link>
            <ecl-link
              slot="links-secondary"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Secondary Link 1
            </ecl-link>
            <ecl-link
              slot="links-secondary"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Secondary Link 2
            </ecl-link>
          </ecl-content-block>
        </ecl-navigation-list-item>
        <ecl-navigation-list-item
          theme="ec"
          image="https://inno-ecl.s3.amazonaws.com/media/example.htmls/example.html-image.jpg"
          border
          image-alt="Alt text of the image"
        >
          <ecl-content-block
            theme="ec"
            has-title
            has-description
            has-links
            has-secondary-links
          >
            <ecl-link
              theme="ec"
              slot="title"
              path="/example.html"
              variant="standalone"
            >
              Title 2
            </ecl-link>
            <p slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra.
    Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus</p>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 1
            </ecl-link>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 2
            </ecl-link>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 3
            </ecl-link>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 4
            </ecl-link>
            <ecl-link
              slot="links-secondary"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Secondary Link 1
            </ecl-link>
            <ecl-link
              slot="links-secondary"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Secondary Link 2
            </ecl-link>
          </ecl-content-block>
        </ecl-navigation-list-item>
        <ecl-navigation-list-item
          theme="ec"
          image="https://inno-ecl.s3.amazonaws.com/media/example.htmls/example.html-image.jpg"
          border
          image-alt="Alt text of the image"
        >
          <ecl-content-block
            theme="ec"
            has-title
            has-description
            has-links
            has-secondary-links
          >
            <ecl-link
              theme="ec"
              slot="title"
              path="/example.html"
              variant="standalone"
            >
              Title 3
            </ecl-link>
            <p slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra.
    Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus</p>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 1
            </ecl-link>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 2
            </ecl-link>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 3
            </ecl-link>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 4
            </ecl-link>
            <ecl-link
              slot="links-secondary"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Secondary Link 1
            </ecl-link>
            <ecl-link
              slot="links-secondary"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Secondary Link 2
            </ecl-link>
          </ecl-content-block>
        </ecl-navigation-list-item>
        <ecl-navigation-list-item
          theme="ec"
          image="https://inno-ecl.s3.amazonaws.com/media/example.htmls/example.html-image.jpg"
          border
          image-alt="Alt text of the image"
        >
          <ecl-content-block
            theme="ec"
            has-title
            has-description
            has-links
            has-secondary-links
          >
            <ecl-link
              theme="ec"
              slot="title"
              path="/example.html"
              variant="standalone"
            >
              Title 4
            </ecl-link>
            <p slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra.
    Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus</p>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 1
            </ecl-link>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 2
            </ecl-link>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 3
            </ecl-link>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 4
            </ecl-link>
            <ecl-link
              slot="links-secondary"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Secondary Link 1
            </ecl-link>
            <ecl-link
              slot="links-secondary"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Secondary Link 2
            </ecl-link>
          </ecl-content-block>
        </ecl-navigation-list-item>
        <ecl-navigation-list-item
          theme="ec"
          image="https://inno-ecl.s3.amazonaws.com/media/example.htmls/example.html-image.jpg"
          border
          image-alt="Alt text of the image"
        >
          <ecl-content-block
            theme="ec"
            has-title
            has-description
            has-links
            has-secondary-links
          >
            <ecl-link
              theme="ec"
              slot="title"
              path="/example.html"
              variant="standalone"
            >
              Title 5
            </ecl-link>
            <p slot="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra.
    Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus</p>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 1
            </ecl-link>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 2
            </ecl-link>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 3
            </ecl-link>
            <ecl-link
              slot="links"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Primary Link 4
            </ecl-link>
            <ecl-link
              slot="links-secondary"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Secondary Link 1
            </ecl-link>
            <ecl-link
              slot="links-secondary"
              theme="ec"
              variant="standalone"
              path="/example.html"
            >
              Secondary Link 2
            </ecl-link>
          </ecl-content-block>
        </ecl-navigation-list-item>
      </ecl-navigation-list>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
