import { newSpecPage } from '@stencil/core/testing';
import { EclCard } from '../ecl-card';
import { EclContentBlock } from '../../ecl-content-block/ecl-content-block';
import { EclLabel } from '../../ecl-label/ecl-label';

describe('ecl-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclCard, EclLabel, EclContentBlock],
      html: `<ecl-card
      theme="ec"
      image-alt="Image alternative"
      image="https://inno-ecl.s3.amazonaws.com/media/examples/example.html-image.jpg"
    >
    <ecl-content-block
      theme="ec"
      meta-primary='["META1", "Meta2"]'
      meta-secondary='[{"label": "2018/10/22", "icon": "calendar"}, {"label": "Luxembourg", "icon": "location"}]'
      has-title
      has-description
      has-labels
    >
      <ecl-label
        slot="labels"
        variant="highlight"
        theme="ec"
      >
        Highlighted
      </ecl-label>
      <ecl-label
        slot="labels"
        variant="high"
        theme="ec"
      >
        Call status: Upcoming
      </ecl-label>
      <p slot="description">Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.</p>
    </ecl-content-block>
  </ecl-card>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
