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
    decorators: [
      (storyFn) => {
        return `<ecl-grid container>${storyFn()}</ecl-grid>`;
      },
    ],
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
        variant="testimonial"
        picture="https://i.pravatar.cc/800?img=18"
        el-title="You can do the same by producing your own electricity and sharing it local"
        link-href="/example"
        link-label="Read more"
        link-icon="arrow-right"
        el-role="Lawyer"
        author="Richard Felix"
        teaser-label="Richard Felix"
        source="Published on The Observer"
      >
      </ecl-story-card-item>
      <ecl-story-card-item
        variant="testimonial"
        picture="https://i.pravatar.cc/800?img=17"
        el-title="You can do the same by producing your own electricity and sharing it local."
        link-href="/example"
        link-label="Read more"
        link-icon="arrow-right"
        author="Marcus Lennard"
        teaser-label="Marcus Lennard"
        el-role="Commissioner"
        source="Published on The Guardian"
      >
      </ecl-story-card-item>
      <ecl-story-card-item
        variant="testimonial"
        picture="https://i.pravatar.cc/800?img=32"
        el-title="You can do the same by producing your own electricity and sharing it local."
        link-href="/example"
        link-label="Read more"
        link-icon="arrow-right"
        el-role="Commissioner"
        author="Renata Beer"
        teaser-label="Renata Beer"
        source="Published on The Guardian"
      >
      </ecl-story-card-item>
      <ecl-story-card-item
        variant="testimonial"
        picture="https://i.pravatar.cc/800?img=47n"
        el-title="You can do the same by producing your own electricity and sharing it local."
        link-href="/example"
        link-label="Read more"
        link-icon="arrow-right"
        author="Derby Stark"
        teaser-label="Derby Stark"
        source="Published on The Times"
        role="Consultant"
      >
      </ecl-story-card-item>
    </ecl-story-card>`;

  export const TestimonialCard = TemplateTestimonial.bind({});
  TestimonialCard.storyName = 'testimonial';
  TestimonialCard.args = {
    ...getArgs(),
    elTitle: 'Testimonials',
  };
  TestimonialCard.argTypes = getArgTypes();

  