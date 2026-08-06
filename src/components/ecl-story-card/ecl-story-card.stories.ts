const getArgs = () => ({
    elTitle: 'Stories',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
  });
  
  const getArgTypes = () => ({
    elTitle: {
      name: 'title',
      type: { name: 'string' },
      description: 'Title of the story card',
    },
    description: {
      type: { name: 'string' },
      description: 'Description of the story card',
    },
  });
  
  export default {
    title: 'Components/story-card',
  };
  
  const Template = args =>
    `<ecl-story-card
      el-title="${args.elTitle}"
      description="${args.description}"
      color-mode="${args.color_mode}"
      prev-label="Previous"
      next-label="Next"
      play-label="Play"
      pause-label="Pause"
    >
      <ecl-story-card-item
        picture="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
        el-title="The European flag is one of the most recognised symbols in Europe."
        link-href="/example"
        link-label="Read more"
      >
        It appears on official documents, euro banknotes, EU-funded projects and public buildings, helping citizens identify initiatives supported by the European Union.
      </ecl-story-card-item>
      <ecl-story-card-item
        picture="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
        el-title="You can do the same by producing your own electricity and sharing it local."
        link-href="/example"
        link-label="Read more"
      >
        It appears on official documents, euro banknotes, EU-funded projects and public buildings, helping citizens identify initiatives supported by the European Union.
      </ecl-story-card-item>
      <ecl-story-card-item
        picture="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
        el-title="You can do the same by producing your own electricity and sharing it local."
        link-href="/example"
        link-label="Read more"
      >
        It appears on official documents, euro banknotes, EU-funded projects and public buildings, helping citizens identify initiatives supported by the European Union.
      </ecl-story-card-item>
      <ecl-story-card-item
        picture="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
        el-title="You can do the same by producing your own electricity and sharing it local."
        link-href="/example"
        link-label="Read more"
      >
        Programs designed to improve quality of life across Europe. From healthcare initiatives to social support systems, see how the EU is investing in its citizens.
      </ecl-story-card-item>
      <ecl-story-card-item
        el-title="The European flag is one of the most recognised symbols in Europe."
        link-href="/example"
        link-label="Read more"
        order="0"
        slot="story-card-grid-details"
        slot-name="story-card-grid-details"
      >
        It appears on official documents, euro banknotes, EU-funded projects and public buildings, helping citizens identify initiatives supported by the European Union..
      </ecl-story-card-item>
      <ecl-story-card-item
        el-title="You can do the same by producing your own electricity and sharing it local."
        link-href="/example"
        link-label="Read more"
        order="1"
        slot="story-card-grid-details"
        slot-name="story-card-grid-details"
      >
        It appears on official documents, euro banknotes, EU-funded projects and public buildings, helping citizens identify initiatives supported by the European Union..
      </ecl-story-card-item>
      <ecl-story-card-item
        el-title="You can do the same by producing your own electricity and sharing it local."
        link-href="/example"
        link-label="Read more"
        order="2"
        slot="story-card-grid-details"
        slot-name="story-card-grid-details"
      >
        It appears on official documents, euro banknotes, EU-funded projects and public buildings, helping citizens identify initiatives supported by the European Union..
      </ecl-story-card-item>
      <ecl-story-card-item
        el-title="You can do the same by producing your own electricity and sharing it local."
        link-href="/example"
        link-label="Read more"
        order="3"
        slot="story-card-grid-details"
        slot-name="story-card-grid-details"
      >
        Programs designed to improve quality of life across Europe. From healthcare initiatives to social support systems, see how the EU is investing in its citizens.    </ecl-story-card-item>
      <ecl-story-card-tab
        slot="story-card-tabs"
        order="0"
        picture="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
        teaser-label="why twelve?"
      >
      </ecl-story-card-tab>
      <ecl-story-card-tab
        slot="story-card-tabs"
        order="1"
        picture="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"
        teaser-label="for everyone"
      >
      </ecl-story-card-tab>
      <ecl-story-card-tab
        slot="story-card-tabs"
        order="2"
        picture="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"
        teaser-label="the design"
      >
      </ecl-story-card-tab>
      <ecl-story-card-tab
        slot="story-card-tabs"
        order="3"
        picture="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"
        teaser-label="across europe"
      >
      </ecl-story-card-tab>
    </ecl-story-card>`;
  
  export const StoryCard = Template.bind({});
  StoryCard.storyName = 'stories';
  StoryCard.args = getArgs();
  StoryCard.argTypes = getArgTypes();

  const TemplateTestimonial = args =>
    `<ecl-story-card
      el-title="${args.elTitle}"
      description="${args.description}"
      color-mode="${args.color_mode}"
      prev-label="Previous story"
      next-label="Next story"
      play-label="Play story cards"
      pause-label="Pause story cards"
    >
      <ecl-story-card-item
        picture="https://i.pravatar.cc/800?img=18"
        el-title="You can do the same by producing your own electricity and sharing it local"
        link-href="/example"
        link-label="Read more"
        link-icon="arrow-right
        el-role="Lawyer"
        author="Richard Felix"
        source="Published on The Observer"
      >
      </ecl-story-card-item>
      <ecl-story-card-item
        picture="https://i.pravatar.cc/800?img=17"
        el-title="You can do the same by producing your own electricity and sharing it local."
        link-href="/example"
        link-label="Read more"
        link-icon="arrow-right
        author="Marcus Lennard"
        el-role="Commissioner"
        source="Published on The Guardian"
      >
      </ecl-story-card-item>
      <ecl-story-card-item
        picture="https://i.pravatar.cc/800?img=32"
        el-title="You can do the same by producing your own electricity and sharing it local."
        link-href="/example"
        link-label="Read more"
        link-icon="arrow-right
        el-role="Commissioner"
        author="Renata Beer"
        source="Published on The Guardian"
      >
      </ecl-story-card-item>
      <ecl-story-card-item
        picture="https://i.pravatar.cc/800?img=47n"
        el-title="You can do the same by producing your own electricity and sharing it local."
        link-href="/example"
        link-label="Read more"
        link-icon="arrow-right
        author="Derby Stark"
        source="Published on The Times"
        role="Consultant"
      >
      </ecl-story-card-item>
      <ecl-story-card-item
        variant="testimonial"
        el-title="The European flag is one of the most recognised symbols in Europe."
        link-href="/example"
        link-label="Read more"
        link-icon="arrow-right
        order="0"
        slot="story-card-grid-details"
        slot-name="story-card-grid-details"
        el-role="Lawyer"
        author="Richard Felix"
        source="Published on The Observer"
      >
      </ecl-story-card-item>
      <ecl-story-card-item
        variant="testimonial"
        el-title="You can do the same by producing your own electricity and sharing it local."
        link-href="/example"
        link-label="Read more"
        link-icon="arrow-right
        order="1"
        slot="story-card-grid-details"
        slot-name="story-card-grid-details"
        author="Marcus Lennard"
        el-role="Commissioner"
        source="Published on The Guardian"
      >
      </ecl-story-card-item>
      <ecl-story-card-item
        variant="testimonial"
        el-title="You can do the same by producing your own electricity and sharing it local."
        link-href="/example"
        link-label="Read more"
        link-icon="arrow-right
        order="2"
        el-role="Commissioner"
        author="Renata Beer"
        source="Published on The Guardian"
        slot="story-card-grid-details"
        slot-name="story-card-grid-details"
      >
      </ecl-story-card-item>
      <ecl-story-card-item
        variant="testimonial"
        el-title="You can do the same by producing your own electricity and sharing it local."
        link-href="/example"
        link-label="Read more"
        link-icon="arrow-right
        order="3"
        author="Derby Stark"
        source="Published on The Times"
        role="Consultant"
        slot="story-card-grid-details"
        slot-name="story-card-grid-details"
      >
      </ecl-story-card-item>

      <ecl-story-card-tab
        slot="story-card-tabs"
        order="0"
        picture="https://i.pravatar.cc/800?img=18"
        teaser-label="Richard Felix"
      >
      </ecl-story-card-tab>
      <ecl-story-card-tab
        slot="story-card-tabs"
        order="1"
        picture="https://i.pravatar.cc/800?img=17"
        teaser-label="Marcus Lennard"
      >
      </ecl-story-card-tab>
      <ecl-story-card-tab
        slot="story-card-tabs"
        order="2"
        picture="https://i.pravatar.cc/800?img=32"
        teaser-label="Renata Beer"
      >
      </ecl-story-card-tab>
      <ecl-story-card-tab
        slot="story-card-tabs"
        order="3"
        picture="https://i.pravatar.cc/800?img=47n"
        teaser-label="Derby Stark"
      >
      </ecl-story-card-tab>
    </ecl-story-card>`;

  export const TestimonialCard = TemplateTestimonial.bind({});
  TestimonialCard.storyName = 'testimonial';
  TestimonialCard.args = {
    ...getArgs(),
    elTitle: 'Testimonials',
  };
  TestimonialCard.argTypes = getArgTypes();

  