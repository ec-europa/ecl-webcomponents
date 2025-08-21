import { newSpecPage } from '@stencil/core/testing';
import { EclIcon } from '../ecl-icon';

describe('ecl-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclIcon],
      html: `<ecl-icon
              icon="close-filled"
              color="primary"
              size="l"
             ></ecl-icon>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly with a family', async () => {
    const page = await newSpecPage({
      components: [EclIcon],
      html: `<ecl-icon
              icon="check-filled"
              color="monochrome"
              family="social"
              size="m"
             ></ecl-icon>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('renders correctly from a sprite', async () => {
    const page = await newSpecPage({
      components: [EclIcon],
      html: `<ecl-icon
              icon="calendar"
              color="primary"
              size="2xs"
              sprite="/build/images/icons.svg"
             ></ecl-icon>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
