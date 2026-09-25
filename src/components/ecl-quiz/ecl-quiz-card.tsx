import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'ecl-quiz-card',
  shadow: false,
  scoped: false,
})

export class EclQuizCard {
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() flipText: string;
  @Prop() backText: string;
  @Prop() question: string;
  @Prop() quizName: string;
  @Prop() image: string;
  @Prop() imageAlt: string;
  @Prop() imageDisplay: string;
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
          { (this.imageDisplay === 'always' && this.image) &&
            <ecl-picture
              styleClass={`ecl-quiz-card__picture sc-ecl-picture-${this.theme}`}
              imgClass={`ecl-quiz-card__image sc-ecl-quiz-${this.theme}`}
              image={this.image}
              imageAlt={this.imageAlt}
            ></ecl-picture>
          }
          { (this.imageDisplay === 'reveal' && this.variant === 'poll') &&
            <div class={`ecl-quiz-card__illustration-container  sc-ecl-quiz-${this.theme}`}>
              <svg
                viewBox="0 0 500 140"
                preserveAspectRatio="none"
                aria-hidden="true"
                class={`ecl-quiz-card__illustration sc-ecl-quiz-${this.theme}`}
              >
                <defs>
                  <g id="question-mark">
                    <path d="M0 0c0 4.343-3.728 7.939-8.531 8.464V9.75a1.22 1.22 0 0 1-2.438 0V7.313a1.22 1.22 0 0 1 1.219-1.22c4.033 0 7.312-2.732 7.312-6.093s-3.279-6.094-7.312-6.094-7.312 2.733-7.312 6.094a1.22 1.22 0 0 1-2.438 0c0-4.704 4.374-8.531 9.75-8.531S0-4.704 0 0Zm-9.75 14.625a2.438 2.438 0 1 0 0 4.875 2.438 2.438 0 0 0 0-4.875Z"/>
                  </g>
                </defs>

                <use href="#question-mark" class={`qm qm-1 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-2 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-3 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-4 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-5 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-6 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-7 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-8 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-9 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-10 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-11 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-12 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-13 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-14 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-15 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-16 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-17 sc-ecl-quiz-${this.theme}`}/>
                <use href="#question-mark" class={`qm qm-18 sc-ecl-quiz-${this.theme}`}/>
              </svg>
            </div>
          }
            <div class={`ecl-quiz-card__padded sc-ecl-quiz-${this.theme}`}>
              <div class={`ecl-quiz-card__header sc-ecl-quiz-${this.theme}`}>
                <div class={`ecl-quiz-card__icon sc-ecl-quiz-${this.theme}`}>
                { (this.mainIcon && !(this.variant === 'poll' && this.imageDisplay === 'reveal')) &&
                  <ecl-icon
                    icon={this.mainIcon}
                    size="l"
                    family="phosphor"
                    style-class={`sc-ecl-quiz-${this.theme}`}
                  >
                  </ecl-icon>
                }
                </div>
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
          </div>
          <div
            class={`ecl-quiz-card__back sc-ecl-quiz-${this.theme}`}
            hidden
            inert
          >
          { this.image &&
            <ecl-picture
              styleClass={`ecl-quiz-card__picture sc-ecl-picture-${this.theme}`}
              imgClass={`ecl-quiz-card__image sc-ecl-quiz-${this.theme}`}
              image={this.image}
              imageAlt={this.imageAlt}
            ></ecl-picture>
          }
            <div class={`ecl-quiz-card__padded sc-ecl-quiz-${this.theme}`}>
              <div class={`ecl-quiz-card__header sc-ecl-quiz-${this.theme}`}>
                <div class={`ecl-quiz-card__icon sc-ecl-quiz-${this.theme}`}>
                { isReveal &&
                  <ecl-icon
                    icon={this.mainIcon}
                    family="phosphor"
                    size="l"
                    style-class={`sc-ecl-quiz-${this.theme}`}
                  ></ecl-icon>
                }
                { !isReveal &&
                  <ecl-icon
                    icon="check-circle"
                    family="phosphor"
                    size="xl"
                    style-class={`ecl-quiz-card__icon--success sc-ecl-quiz-${this.theme}`}
                  ></ecl-icon>
                }
                { !isReveal &&
                  <ecl-icon
                    icon="x-circle"
                    family="phosphor"
                    size="xl"
                    style-class={`ecl-quiz-card__icon--error sc-ecl-quiz-${this.theme}`}
                  ></ecl-icon>
                }
                </div>
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
          </div>
        </article>
      </Host>
    )
  }
}