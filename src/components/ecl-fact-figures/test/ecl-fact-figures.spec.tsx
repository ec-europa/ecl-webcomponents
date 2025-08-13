import { newSpecPage } from '@stencil/core/testing';
import { EclFactFigures } from '../ecl-fact-figures';
import { EclFactFiguresItem } from '../ecl-fact-figures-item';
import { EclIcon } from '../../ecl-icon/ecl-icon';
import { EclLink } from '../../ecl-link/ecl-link';

describe('ecl-fact-figures', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclFactFigures, EclFactFiguresItem, EclIcon, EclLink],
      html: `<ecl-fact-figures
        columns="4"
        view-all-link-path="/example"
        view-all-link-label="View all"
        font-size="m"
        icon-size="2xl"
      >
        <ecl-fact-figures-item
          item-title="Lorem ipsum"
          value="00.0 million"
          icon="infographic"
        >
          Nunc condimentum sapien ut nibh finibus suscipit vitae at justo. Morbi quis odio faucibus, commodo tortor id, elementum libero.
        </ecl-fact-figures-item>

        <ecl-fact-figures-item
          item-title="Sed hendrerit"
          value="00.0 million"
          icon="spreadsheet"
          theme="ec"
        >
          Turpis varius congue venenatis, erat dui feugiat felis.
        </ecl-fact-figures-item>

        <ecl-fact-figures-item
          item-title="Donec suscipit interdum augue, ac dapibus eros finibus"
          value="00.0 million"
          icon="growth"
        >
          Cras vestibulum efficitur mi, quis porta tellus rutrum ut. Quisque at pulvinar sem.
        </ecl-fact-figures-item>

        <ecl-fact-figures-item
          item-title="Aenean dapibus"
          value="00.0 million"
          icon="digital"
        >
          Aliquam lacinia diam eu sem malesuada, in interdum ante bibendum.
        </ecl-fact-figures-item>

        <ecl-fact-figures-item
          item-title="Aliquam faucibus nulla eget eleifend",
          value="00.0 million"
          icon="regulation"
        >
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec lectus tortor.
        </ecl-fact-figures-item>

        <ecl-fact-figures-item
          item-title="Aliquam faucibus nulla eget eleifend"
          value="00.0 million"
          icon="image"
        >
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec lectus tortor.
        </ecl-fact-figures-item>
      </ecl-fact-figures>`,
    });
    
    expect(page.root).toMatchSnapshot();
  });
});
