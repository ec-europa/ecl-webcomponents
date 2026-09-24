const getArgs = () => {
  return {
    quizTitle: 'Ut enim ad minim veniam',
    description: `Nulla est ad excepteur sint officia fugiat aute commodo ullamco amet culpa eiusmod labore.
                  Esse nostrud aliqua pariatur pariatur officia non laboris cillum velit dolore in sit laboris fugiat.`,
    withBackground: false,
    fullWidth: false,
    mainIcon: 'none',
    imageDisplay: 'none',
  };
};

const getArgTypes = () => {
  return {
    quizTitle: {
      name: 'quiz-title',
      type: { name: 'string' },
      description: "Title of the quiz",
    },
    description: {
      type: { name: 'string' },
      description: 'Description text for the quiz',
    },
    withBackground: {
      name: 'with-background',
      type: { name: 'boolean' },
      description: 'With a dark background',
      if: { arg: 'fullWidth', truthy: false },
    },
    fullWidth: {
      name: 'full-width',
      type: { name: 'boolean' },
      description: 'Full width of the viewport, with background',
    },
    mainIcon: {
      name: 'main-icon',
      description: 'Name of the icon (sample list)',
      type: 'select',
      options: [
        'none',
        'sparkle',
        'aperture',
        'avocado',
        'at',
        'barcode',
        'baseball',
        'bank',
        'bell',
        'question-mark',
      ],
      mapping: {
        none: 'none',
        sparkle: 'sparkle',
        aperture: 'aperture',
        avocado: 'avocado',
        at: 'at',
        barcode: 'barcode',
        baseball: 'baseball',
        bank: 'bank',
        bell: 'bell',
        'question-mark': 'question-mark',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'First card',
      },
    },
    imageDisplay: {
      name: 'image-display',
      control: {
        type: 'select',
        labels: {
          '': 'none',
          always: 'front and back',
          reveal: 'only back',
        },
      },
      options: ['none', 'always', 'reveal'],
      mapping: {
        none: '',
        'front and back': 'always',
        'only back': 'reveal',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  };
};

export default {
  title: 'Components/quiz',
};

const Template = (args) => 
  `<ecl-grid container>
    <ecl-quiz
      quiz-title="${args.quizTitle}"
      description="${args.description}"
      item-id="quiz-example"
      variant="reveal"
      with-background="${args.withBackground}"
      full-width="${args.fullWidth}"
      prev-label="Previous"
      next-label="Next"
      color-mode="${args.color_mode}"
    >
      <ecl-quiz-card
        variant="reveal"
        main-icon="${args.mainIcon}"
        question="When you travel in the EU, what happens to your roaming charges?"
        answer="You usually pay the same at home, no extra roaming fees."
        flip-text="Reveal answer"
        back-text="Flip back"
        image-display="${args.imageDisplay}"
        ${args.imageDisplay !== '' ? 'image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"' : "" }

      >
      </ecl-quiz-card>
      <ecl-quiz-card
        variant="reveal"
        main-icon="${args.mainIcon}"
        question="What document allows EU citizens to travel freely between most EU countries?"
        answer="A valid ID card or passport is usually enough."
        flip-text="Reveal answer"
        back-text="Flip back"
        image-display="${args.imageDisplay}"
        ${args.imageDisplay !== '' ? 'image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg"': "" }
      >
      </ecl-quiz-card>
      <ecl-quiz-card
        variant="reveal"
        main-icon="${args.mainIcon}"
        question="What currency is used in many EU countries?"
        answer="The euro (€) is used in many EU member states.."
        flip-text="Reveal answer"
        back-text="Flip back"
        image-display="${args.imageDisplay}"
        ${args.imageDisplay !== '' ? 'image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"': "" }
      >
      </ecl-quiz-card>
      <ecl-quiz-card
        variant="reveal"
        main-icon="${args.mainIcon}"
        question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
        answer="Duis id mattis libero. Quisque accumsan nisi in nisl ultrices dictum"
        flip-text="Reveal answer"
        back-text="Flip back"
        image-display="${args.imageDisplay}"
        ${args.imageDisplay !== '' ? 'image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"': "" }
      >
      </ecl-quiz-card>
      <ecl-quiz-card
        variant="reveal"
        main-icon="${args.mainIcon}"
        question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
        answer="Duis id mattis libero. Quisque accumsan nisi in nisl ultrices dictum"
        flip-text="Reveal answer"
        back-text="Flip back"
        image-display="${args.imageDisplay}"
        ${args.imageDisplay !== '' ? 'image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg"': "" }
      >
      </ecl-quiz-card>
    </ecl-quiz>
  </ecl-grid>`;

export const Quiz = Template.bind({});
Quiz.storyName = 'reveal';
Quiz.args = {
  ...getArgs(),
  mainIcon: 'sparkle',
};
Quiz.argTypes = getArgTypes();

const TemplatePoll = (args) => 
  `<ecl-grid container>
    <ecl-quiz
      quiz-title="${args.quizTitle}"
      description="${args.description}"
      item-id="quiz-example"
      variant="poll"
      with-background="${args.withBackground}"
      prev-label="Previous"
      next-label="Next"
      color-mode="${args.color_mode}"
    >
      <ecl-quiz-card
        variant="poll"
        main-icon="${args.mainIcon}"
        skip-text="Use ESC to skip the quiz"
        correct-label="Correct answer"
        incorrect-label="Incorrect answer"
        correct-chosen-label="Your correct answer"
        incorrect-chosen-label="Your incorrect answer"
        question="Which institution proposes new EU laws?"
        answer-title="The correct answer is A."
        answer="The European Commission has the exclusive right to propose new EU laws"
        options='[
          { "label": "European commission", "correct": "true" },
          { "label": "European parliament" }, { "label": "European Central Bank" },
          { "label": "Court of Justice of the European Union" }
        ]'
        image-display="${args.imageDisplay}"
        ${args.imageDisplay !== '' ? 'image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"': "" }
      >
      </ecl-quiz-card>
      <ecl-quiz-card
        variant="poll"
        main-icon="${args.mainIcon}"
        correct-label="Correct answer"
        incorrect-label="Incorrect answer"
        correct-chosen-label="Your correct answer"
        incorrect-chosen-label="Your incorrect answer"
        question="What document allows EU citizens to travel freely between most EU countries?"
        answer-title="The correct answer is B."
        answer="A valid ID card or passport is usually enough to travel freely between most EU countries."
        options='[
          { "label": "A valid ID card." },
          { "label": "A valid ID card or passport", "correct": "true" },
          { "label": "A valid passport." }, { "label": "None of these" }
        ]'
        image-display="${args.imageDisplay}"
        ${args.imageDisplay !== '' ? 'image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg"': "" }
      >
      </ecl-quiz-card>
      <ecl-quiz-card
        variant="poll"
        main-icon="${args.mainIcon}"
        correct-label="Correct answer"
        incorrect-label="Incorrect answer"
        correct-chosen-label="Your correct answer"
        incorrect-chosen-label="Your incorrect answer"
        question="What currency is used in many EU countries?"
        answer-title="The correct answer is C."
        answer="The Euro is the official currency used by many EU conutries"
        options='[
          { "label": "The pound is the most used currency in the EU" },
          { "label": "The Leu is by far the most used currency in the European Union" },
          { "label": "The euro (€) is used in many EU member states.", "correct": "true" }
        ]'
        image-display="${args.imageDisplay}"
        ${args.imageDisplay !== '' ? 'image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg"': "" }
      >
      </ecl-quiz-card>
      <ecl-quiz-card
        variant="poll"
        main-icon="${args.mainIcon}"
        correct-label="Correct answer"
        incorrect-label="Incorrect answer"
        correct-chosen-label="Your correct answer"
        incorrect-chosen-label="Your incorrect answer"
        question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
        answer-title="The correct answer is B."
        answer="Duis id mattis libero. Quisque accumsan nisi"
        options='[
          { "label": "Duis id mattis libero. Quisque accumsan nisi in nisl ultrices dictum" },
          { "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "correct": "true" },
          { "label": "Ivamus auctor blandit auctor." }
        ]'
        image-display="${args.imageDisplay}"
        ${args.imageDisplay !== '' ? 'image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg"': "" }
      >
      </ecl-quiz-card>
    </ecl-quiz>
  </ecl-grid>`;

export const QuizPoll = TemplatePoll.bind({});
QuizPoll.storyName = 'poll';
QuizPoll.args = {
  ...getArgs(),
  mainIcon: 'question-mark',
};
QuizPoll.argTypes = getArgTypes();