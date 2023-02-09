import { newSpecPage } from '@stencil/core/testing';
import { EclFactFigures } from '../ecl-fact-figures';
import { EclFactFiguresItem } from '../ecl-fact-figures-item';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-fact-figures', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclFactFigures, EclFactFiguresItem, EclIcon],
      html: `<ecl-fact-figures
        columns="4"
        theme="ec"
      >
        <ecl-fact-figures-item
          item-title="Lorem ipsum",
          value="00.0 million"
          icon="infographic"
          theme="ec"
        >
          <span slot="description">
            Nunc condimentum sapien ut nibh finibus suscipit vitae at justo. Morbi quis odio faucibus, commodo tortor id, elementum libero.
          </span>
        </ecl-fact-figures-item>

        <ecl-fact-figures-item
          item-title="Sed hendrerit",
          value="00.0 million"
          icon="spreadsheet"
          theme="ec"
        >
          <span slot="description">
            Turpis varius congue venenatis, erat dui feugiat felis.
          </span>
        </ecl-fact-figures-item>

        <ecl-fact-figures-item
          item-title="Donec suscipit interdum augue, ac dapibus eros finibus a.",
          value="00.0 million"
          icon="growth"
          theme="ec"
        >
          <span slot="description">
            Cras vestibulum efficitur mi, quis porta tellus rutrum ut. Quisque at pulvinar sem.
          </span>
        </ecl-fact-figures-item>

        <ecl-fact-figures-item
          item-title="Aenean dapibus",
          value="00.0 million"
          icon="digital"
          theme="ec"
        >
          <span slot="description">
            Aliquam lacinia diam eu sem malesuada, in interdum ante bibendum.
          </span>
        </ecl-fact-figures-item>

        <ecl-fact-figures-item
          item-title="Aliquam faucibus nulla eget eleifend",
          value="00.0 million"
          icon="regulation"
          theme="ec"
        >
          <span slot="description">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec lectus tortor.
          </span>
        </ecl-fact-figures-item>

        <ecl-fact-figures-item
          item-title="Aliquam faucibus nulla eget eleifend",
          value="00.0 million"
          icon="image"
          theme="ec"
        >
          <span slot="description">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec lectus tortor.
          </span>
        </ecl-fact-figures-item>
      </ecl-fact-figures>`,
    });
    
    expect(page.root).toMatchSnapshot();
  });
});
