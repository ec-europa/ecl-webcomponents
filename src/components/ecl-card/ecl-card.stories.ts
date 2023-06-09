export default {
  title: 'Components/card',
};

const Template = (args) => 
  `<ecl-card
    theme="${args.theme}"
    image-alt="Image alternative"
    image="https://inno-ecl.s3.amazonaws.com/media/example.htmls/example.html-image.jpg"
  >
    <ecl-content-block
      theme="${args.theme}"
      meta-primary='["META1", "Meta2"]'
      meta-secondary='[{"label": "2018/10/22", "icon": "calendar"}, {"label": "Luxembourg", "icon": "location"}]'
      has-title
      has-description
      has-labels
    >
      <ecl-label
        slot="labels"
        variant="highlight"
        theme="${args.theme}"
      >
        Highlighted
      </ecl-label>
      <ecl-label
        slot="labels"
        variant="high"
        theme="${args.theme}"
      >
        Call status: Upcoming
      </ecl-label>
      <p slot="description">Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.</p>
    </ecl-content-block>
  </ecl-card>`;

export const Card = Template.bind({});
Card.storyName = 'default';
