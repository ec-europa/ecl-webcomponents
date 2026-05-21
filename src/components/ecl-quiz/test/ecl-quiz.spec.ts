import { newSpecPage } from '@stencil/core/testing';
import { EclQuiz } from '../ecl-quiz';
import { EclQuizCard } from '../ecl-quiz-card';
import { EclIcon } from '../../ecl-icon/ecl-icon';

describe('ecl-quiz', () => {
  beforeEach(() => {
    (global as any).ECL = {};
  });
  
  it('reveal renders correctly', async () => {
    const page = await newSpecPage({
      components: [EclQuiz, EclQuizCard, EclIcon],
      html: `<ecl-quiz
        quiz-title="Ut enim ad minim veniam"
        description="Nulla est ad excepteur sint officia fugiat aute commodo ullamco amet culpa eiusmod labore.
                  Esse nostrud aliqua pariatur pariatur officia non laboris cillum velit dolore in sit laboris fugiat."
        item-id="quiz-example"
        variant="reveal"
        prev-label="Previous"
        no-script
        next-label="Next"
      >
        <ecl-quiz-card
          variant="reveal"
          main-icon="sparkle"
          question="When you travel in the EU, what happens to your roaming charges?"
          answer="You usually pay the same at home, no extra roaming fees."
          flip-text="Reveal answer"
          back-text="Flip back"
        >
        </ecl-quiz-card>
        <ecl-quiz-card
          variant="reveal"
          main-icon="sparkle"
          question="What document allows EU citizens to travel freely between most EU countries?"
          answer="A valid ID card or passport is usually enough."
          flip-text="Reveal answer"
          back-text="Flip back"
        >
        </ecl-quiz-card>
        <ecl-quiz-card
          variant="reveal"
          main-icon="sparkle"
          question="What currency is used in many EU countries?"
          answer="The euro (€) is used in many EU member states.."
          flip-text="Reveal answer"
          back-text="Flip back"
        >
        </ecl-quiz-card>
        <ecl-quiz-card
          variant="reveal"
          main-icon="sparkle"
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          answer="Duis id mattis libero. Quisque accumsan nisi in nisl ultrices dictum"
          flip-text="Reveal answer"
          back-text="Flip back"
        >
        </ecl-quiz-card>
        <ecl-quiz-card
          variant="reveal"
          main-icon="sparkle"
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          answer="Duis id mattis libero. Quisque accumsan nisi in nisl ultrices dictum"
          flip-text="Reveal answer"
          back-text="Flip back"
        >
        </ecl-quiz-card>
      </ecl-quiz>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('poll renders correctly', async () => {
    const page = await newSpecPage({
      components: [EclQuiz, EclQuizCard, EclIcon],
      html: `<ecl-quiz
        quiz-title="Ut enim ad minim veniam"
        description="Nulla est ad excepteur sint officia fugiat aute commodo ullamco amet culpa eiusmod labore.
                  Esse nostrud aliqua pariatur pariatur officia non laboris cillum velit dolore in sit laboris fugiat"
        item-id="quiz-example"
        variant="poll"
        with-background
        prev-label="Previous"
        next-label="Next"
        no-script
      >
        <ecl-quiz-card
          category="Quiz"
          variant="poll"
          main-icon="question"
          success-category="Correct"
          error-category="Incorrect"
          question="Which institution proposes new EU laws?"
          answer-title="The correct answer is A."
          answer="The European Commission has the exclusive right to propose new EU laws"
          options='[
            { "label": "European commission", "correct": "true" },
            { "label": "European parliament" }, { "label": "European Central Bank" },
            { "label": "Court of Justice of the European Union" }
          ]'
        >
        </ecl-quiz-card>
        <ecl-quiz-card
          variant="poll"
          main-icon="question"
          category="Quiz"
          success-category="Correct"
          error-category="Incorrect"
          question="What document allows EU citizens to travel freely between most EU countries?"
          answer-title="The correct answer is B."
          answer="A valid ID card or passport is usually enough to travel freely between most EU countries."
          options='[
            { "label": "A valid ID card." },
            { "label": "A valid ID card or passport", "correct": "true" },
            { "label": "A valid passport." }, { "label": "None of these" }
          ]'
        >
        </ecl-quiz-card>
        <ecl-quiz-card
          category="Quiz"
          variant="poll"
          main-icon="question"
          success-category="Correct"
          error-category="Incorrect"
          question="What currency is used in many EU countries?"
          answer-title="The correct answer is C."
          answer="The Euro is the official currency used by many EU conutries"
          options='[
            { "label": "The pound is the most used currency in the EU" },
            { "label": "The Leu is by far the most used currency in the European Union" },
            { "label": "The euro (€) is used in many EU member states.", "correct": "true" }
          ]'
        >
        </ecl-quiz-card>
        <ecl-quiz-card
          category="Quiz"
          variant="poll"
          main-icon="question"
          success-category="Correct"
          error-category="Incorrect"
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
          answer-title="The correct answer is B."
          answer="Duis id mattis libero. Quisque accumsan nisi"
          options='[
            { "label": "Duis id mattis libero. Quisque accumsan nisi in nisl ultrices dictum" },
            { "label": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "correct": "true" },
            { "label": "Ivamus auctor blandit auctor." }
          ]'
        >
        </ecl-quiz-card>
      </ecl-quiz>`,
    });

    expect(page.root).toMatchSnapshot();
  });
});
