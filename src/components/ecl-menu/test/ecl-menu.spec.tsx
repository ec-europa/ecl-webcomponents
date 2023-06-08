import { newSpecPage } from '@stencil/core/testing';
import { EclMenu } from '../ecl-menu';
import { EclMenuItem } from '../ecl-menu-item';
import { EclIcon } from '../../ecl-icon/ecl-icon';
import { EclButton } from '../../ecl-button/ecl-button';

describe('ecl-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclMenu, EclMenuItem, EclIcon, EclButton],
      html: `<ecl-menu
        group="group1"
        theme="ec"
        close-label="Close"
        back-label="Back"
        menu-link="/example"
        ecl-script
        menu-title="Menu"
        next-label="next"
        previous-label="previous"
        max-lines=2
      >
        <ecl-menu-item
          link="/example"
          theme="ec"
        >
          Home
        </ecl-menu-item>
        <ecl-menu-item
          theme="ec"
          link="/example"
          has-children
          trigger-aria-label="Access item's children"
          current
        >
          Item 2 label
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 2.1
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 2.2
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            current
            slot="sublist"
          >
            Item 2.3
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
            external
          >
            Item 2.4
          </ecl-menu-item>
        </ecl-menu-item>
        <ecl-menu-item
          theme="ec"
          has-children
          trigger-aria-label="Access item's children"
          link="/example"
        >
          Item 3 with a very long label
          <ecl-menu-item
            theme="ec"
            child
            link="/example"
            slot="sublist"
          >
            Item 3.1
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            child
            link="/example"
            slot="sublist"
          >
            Item 3.2
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            child
            link="/example"
            slot="sublist"
          >
            Item 3.3
          </ecl-menu-item>
        </ecl-menu-item>
        <ecl-menu-item
          theme="ec"
          link="/example"
        >
          Item 4 label
        </ecl-menu-item>
        <ecl-menu-item
          theme="ec"
          link="/example"
          has-children
          trigger-aria-label="Access item's children"
        >
          Item 5 label
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 5.1
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 5.2
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 5.3
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 5.4
          </ecl-menu-item>
        </ecl-menu-item>
        <ecl-menu-item
          theme="ec"
          link="/example"
          has-children
          trigger-aria-label="Access item's children"
        >
          Item 6
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.1
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.2
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.3
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.4
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.5
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.6
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.7
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.8
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.9 with a very long label
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.10
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.11
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.12
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.13
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.14
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.15
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.16
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.17
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 6.18
          </ecl-menu-item>
        </ecl-menu-item>
        <ecl-menu-item
          theme="ec"
          has-children
          link="/example"
          trigger-aria-label="Access item's children"
        >
          Item 7 label
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 7.1
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 7.2
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 7.3
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 7.4
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 7.5
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 7.6
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 7.7
          </ecl-menu-item>
          <ecl-menu-item
            theme="ec"
            link="/example"
            child
            slot="sublist"
          >
            Item 7.8
          </ecl-menu-item>
        </ecl-menu-item>
      </ecl-menu>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
