import { newSpecPage } from '@stencil/core/testing';
import { EclStoryCard } from '../ecl-story-card';
import { EclStoryCardItem } from '../ecl-story-card-item';
import { EclStoryCardTab } from '../ecl-story-card-tab';
import { EclPicture } from '../../ecl-picture/ecl-picture';
import { EclButton } from '../../ecl-button/ecl-button';
import { EclLink } from '../../ecl-link/ecl-link';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-story-card', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [EclStoryCard, EclStoryCardItem, EclStoryCardTab, EclPicture, EclButton, EclLink, EclIcon],
      html: `<ecl-story-card
        el-id="story-card-test"
        el-title="Story card"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
        color-mode="default"
        prev-label="Previous"
        next-label="Next"
        play-label="Play"
        pause-label="Pause"
        no-script
      >
        <ecl-story-card-item
          picture="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
          el-title="The European flag is one of the most recognised symbols in Europe."
          link-href="/example"
          link-label="Read more"
          link-icon="arrow-right"
          teaser-label="why twelve?"
        >
          It appears on official documents, euro banknotes, EU-funded projects and public buildings, helping citizens identify initiatives supported by the European Union.
        </ecl-story-card-item>
        <ecl-story-card-item
          picture="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
          el-title="You can do the same by producing your own electricity and sharing it local."
          link-href="/example"
          link-label="Read more"
          link-icon="arrow-right"
          teaser-label="for everyone"
        >
          It appears on official documents, euro banknotes, EU-funded projects and public buildings, helping citizens identify initiatives supported by the European Union.
        </ecl-story-card-item>
        <ecl-story-card-item
          picture="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
          el-title="You can do the same by producing your own electricity and sharing it local."
          link-href="/example"
          link-label="Read more"
          link-icon="arrow-right"
          teaser-label="the design"
        >
          It appears on official documents, euro banknotes, EU-funded projects and public buildings, helping citizens identify initiatives supported by the European Union.
        </ecl-story-card-item>
        <ecl-story-card-item
          picture="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
          el-title="You can do the same by producing your own electricity and sharing it local."
          link-href="/example"
          link-label="Read more"
          link-icon="arrow-right"
          teaser-label="across europe"
        >
          Programs designed to improve quality of life across Europe. From healthcare initiatives to social support systems, see how the EU is investing in its citizens.
        </ecl-story-card-item>
      </ecl-story-card>`,
    });

   expect(page.root).toMatchSnapshot();
  });
});
