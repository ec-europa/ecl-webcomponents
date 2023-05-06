import { newSpecPage } from '@stencil/core/testing';
import { EclSpacing } from '../ecl-spacing';

describe('ecl-spacing', () => {
  it('margin vertical renders', async () => {
    const page = await newSpecPage({
      components: [EclSpacing],
      html: `<ecl-spacing
        outer
        direction="v"
        value="s"
      ></ecl-spacing>`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it('margin and padding horizontal renders', async () => {
    const page = await newSpecPage({
      components: [EclSpacing],
      html: `<ecl-spacing
        outer
        inner
        direction="h"
        value="l"
      ></ecl-spacing>`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it('margin horizontal auto renders', async () => {
    const page = await newSpecPage({
      components: [EclSpacing],
      html: `<ecl-spacing
        outer
        direction="h"
        value="auto"
      ></ecl-spacing>`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it('margin horizontal none renders', async () => {
    const page = await newSpecPage({
      components: [EclSpacing],
      html: `<ecl-spacing
        outer
        direction="a"
        value="none"
      ></ecl-spacing>`,
    });

    expect(page.root).toMatchSnapshot();
  });
  it('margin horizontal l in xl breakpoint renders', async () => {
    const page = await newSpecPage({
      components: [EclSpacing],
      html: `<ecl-spacing
        outer
        direction="a"
        value="l"
        breakpoint="xl"
      ></ecl-spacing>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
