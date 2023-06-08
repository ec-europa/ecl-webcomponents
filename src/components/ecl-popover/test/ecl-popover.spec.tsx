import { newSpecPage } from '@stencil/core/testing';
import { EclPopover } from '../ecl-popover';
import { EclPopoverItem } from '../ecl-popover-item';

describe('ecl-popover', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclPopover, EclPopoverItem],
      html:   `<ecl-popover
        ecl-script
        theme="ec"
        toggle-label="Popover"
        list
        icon="share"
        item-id="popover-example"
      >
        <ecl-popover-item
          path="/example"
          icon="global"
        >
          Item 1
        </ecl-popover-item>
        <ecl-popover-item
          path="/example"
          icon="global"
        >
          Item 2
        </ecl-popover-item>
        <ecl-popover-item
          path="/example"
          icon="global"
        >
          Item 3
        </ecl-popover-item>
        <ecl-popover-item
          path="/example"
          icon="global"
        >
          Item 4
        </ecl-popover-item>
          <ecl-popover-item
          path="/example"
          icon="global"
        >
          Item 5
        </ecl-popover-item>
        <ecl-popover-item
          path="/example"
          icon="global"
        >
          Item 6
        </ecl-popover-item>
        <ecl-popover-item
          path="/example"
          icon="global"
        >
          Item 7
        </ecl-popover-item>
        <ecl-popover-item
          path="/example"
          icon="global"
        >
          Item 8
        </ecl-popover-item>
      </ecl-popover>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
