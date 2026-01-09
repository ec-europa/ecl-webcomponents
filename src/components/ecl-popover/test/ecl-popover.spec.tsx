import { newSpecPage } from '@stencil/core/testing';
import { EclPopover } from '../ecl-popover';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-popover', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });
  
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclPopover, EclLink, EclIcon],
      html:   `<ecl-popover
        toggle-label="Popover"
        icon="share"
        item-id="popover-example"
        close
      >
        Nulla est ad excepteur sint officia fugiat aute commodo ullamco amet culpa eiusmod labore.
        Esse nostrud aliqua pariatur pariatur officia non laboris cillum velit dolore in sit laboris fugiat.
      </ecl-popover>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
