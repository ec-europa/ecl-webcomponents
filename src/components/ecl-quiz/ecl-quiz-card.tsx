import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'ecl-quiz-card',
  shadow: false,
  scoped: false,
})

export class EclQuizCard {
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() category: string;
  @Prop() successCategory: string;
  @Prop() errorCategory: string;
  @Prop() flipText: string;
  @Prop() backText: string;
  @Prop() question: string;
  @Prop() quizName: string;
  @Prop() mainIcon: string;
  @Prop() answer: string;
  @Prop() answerTitle: string;
  @Prop() itemId: string = `ecl-quiz-item-${Math.random().toString(36).substr(2, 9)}`;
  @Prop() options: string;
  @Prop() skipText: string;
  @Prop() variant: string = 'reveal';
  @Prop() correctLabel: string = '';
  @Prop() incorrectLabel: string = '';
  @Prop() correctChosenLabel: string = '';
  @Prop() incorrectChosenLabel: string = '';

  getClass(): string {
    const styleClasses = [
      `ecl-quiz-card`,
      `sc-ecl-quiz-${this.theme}`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    const optionsArray = this.options ? JSON.parse(this.options) : '';
    const isReveal = this.variant === 'reveal';

    return (
      <Host
        role="listitem"
        class={this.getClass()}
        id={this.itemId}
        data-ecl-quiz-card-flip={isReveal || undefined}
        tabindex={isReveal ? 0 : undefined}
        data-ecl-quiz-chosen-option-correct={this.correctChosenLabel || undefined}
        data-ecl-quiz-chosen-option-incorrect={this.incorrectChosenLabel || undefined}
      >
        <article class={`ecl-quiz-card__content sc-ecl-quiz-${this.theme}`}>
          <div class={`ecl-quiz-card__front sc-ecl-quiz-${this.theme}`}>
            <div class={`ecl-quiz-card__header sc-ecl-quiz-${this.theme}`}>
              <div class={`ecl-quiz-card__icon sc-ecl-quiz-${this.theme}`}>
                <ecl-icon
                  icon={this.mainIcon}
                  size="2xl"
                  family="phosphor"
                  style-class={`sc-ecl-quiz-${this.theme}`}
                >
                </ecl-icon>
              </div>
            { this.category &&
              <span class={`ecl-quiz-card__category sc-ecl-quiz-${this.theme}`}>
                {this.category}
              </span>
            }
            </div>
          { isReveal &&
            <div 
              class={`ecl-quiz-card__question sc-ecl-quiz-${this.theme}`}
              id={`${this.itemId}-question`}
            >
              { this.question }
            </div>
          }
          { !isReveal &&
            <fieldset class={`sc-ecl-quiz-${this.theme}`}>
              <legend
                class={`ecl-quiz-card__question sc-ecl-quiz-${this.theme}`}
                id={`${this.itemId}-question`}
              >
                { this.question }
              </legend>
              <ol class={`ecl-quiz-card__options sc-ecl-quiz-${this.theme}`}>
              {optionsArray.map((option, index) => (
                <li
                  class={`ecl-quiz-card__option sc-ecl-quiz-${this.theme}`}
                >
                  <label class={`ecl-quiz-card__label sc-ecl-quiz-${this.theme}`}>
                    <input
                      class={`sc-ecl-quiz-${this.theme}`}
                      type="radio"
                      data-ecl-quiz-card-flip
                      data-ecl-quiz-card-input
                      name={this.quizName}
                      data-match={ option.correct ? "true" : "false" }
                    ></input>
                      {option.label}
                  </label>
                  { (index === 0 && this.skipText) &&
                  <span
                    class={`ecl-quiz__skip sc-ecl-quiz-${this.theme}`}
                    id={`quiz-${this.itemId}-skip-instructions`}
                  >
                    {this.skipText}
                  </span>
                  }
                </li>
              ))}
              </ol>
            </fieldset>
          }
          { this.flipText &&
            <div
              class={`ecl-quiz-card__flip sc-ecl-quiz-${this.theme}`}
            >
              { this.flipText }
              <ecl-icon
                icon="arrow-clockwise"
                family="phosphor"
                size="m"
                style-class={`sc-ecl-quiz-${this.theme}`}
              ></ecl-icon>
            </div>
          }
          </div>
          <div
            class={`ecl-quiz-card__back sc-ecl-quiz-${this.theme}`}
            hidden
            inert
          >
            <div class={`ecl-quiz-card__header sc-ecl-quiz-${this.theme}`}>
              <div class={`ecl-quiz-card__icon sc-ecl-quiz-${this.theme}`}>
              { isReveal &&
                <ecl-icon
                  icon={this.mainIcon}
                  family="phosphor"
                  size="2xl"
                  style-class={`sc-ecl-quiz-${this.theme}`}
                ></ecl-icon>
              }
              { !isReveal &&
                <ecl-icon
                  icon="check-circle"
                  family="phosphor"
                  size="2xl"
                  style-class={`ecl-quiz-card__icon--success sc-ecl-quiz-${this.theme}`}
                ></ecl-icon>
              }
              { !isReveal &&
                <ecl-icon
                  icon="x-circle"
                  family="phosphor"
                  size="2xl"
                  style-class={`ecl-quiz-card__icon--error sc-ecl-quiz-${this.theme}`}
                ></ecl-icon>
              }
              </div>
            { this.successCategory &&
              <span
                class={`ecl-quiz-card__category ecl-quiz-card__category--success sc-ecl-quiz-${this.theme}`}
                tabindex="0"
              >
                { this.successCategory }
              </span>
            }
            { this.errorCategory &&
              <span
                class={`ecl-quiz-card__category ecl-quiz-card__category--error sc-ecl-quiz-${this.theme}`}
                tabindex="0"
              >
                { this.errorCategory }
              </span>
            }
            { this.variant == 'poll' &&
              <span
                class={`ecl-quiz-card__sr-status sc-ecl-quiz-${this.theme}`}
                role="status"
                aria-atomic="true"
              ></span>
            }
            </div>
            <div
              class={`ecl-quiz-card__answer sc-ecl-quiz-${this.theme}`}
              id={`${this.itemId}-answer`}
            >
            { this.answerTitle &&
              <div class={`ecl-quiz-card__answer-title sc-ecl-quiz-${this.theme}`}>{ this.answerTitle }</div>
            }
              { this.answer }
            </div>
          { !isReveal &&
            <ol class={`ecl-quiz-card__options sc-ecl-quiz-${this.theme}`}>
            {optionsArray.map((option) => (
              <li
                class={`ecl-quiz-card__option sc-ecl-quiz-${this.theme}`}
                data-match={ option.correct ? "true" : "false" }
              >
                <span class={`ecl-quiz-card__option-assistive-label sc-ecl-quiz-${this.theme}`}>
                  {option.correct ? this.correctLabel : this.incorrectLabel}
                </span>
                { option.label }
                <span
                    class={`ecl-quiz-card__option-icon sc-ecl-quiz-${this.theme}`}
                  >
                { option.correct ? (
                  <ecl-icon
                    style-class={`ecl-quiz-card__option-icon--success sc-ecl-quiz-${this.theme}`}
                    size="s"
                    icon="check-circle"
                    family="phosphor"
                  ></ecl-icon> ) : (
                  <ecl-icon
                    style-class={`ecl-quiz-card__option-icon--error sc-ecl-quiz-${this.theme}`}
                    size="s"
                    icon="x-circle"
                    family="phosphor"
                  ></ecl-icon> )
                }
                </span>
              </li>
              ))}
            </ol>
          }
          { this.backText &&
            <div
              class={`ecl-quiz-card__flip sc-ecl-quiz-${this.theme}`}
            >
              { this.backText }
              <ecl-icon
                icon="arrow-clockwise"
                family="phosphor"
                size="m"
                style-class={`sc-ecl-quiz-${this.theme}`}
              ></ecl-icon>
            </div>
          }
          </div>
        </article>
      </Host>
    )
  }
}