import { Component, h, Prop, Element, Fragment } from '@stencil/core';
import Quiz from "@ecl/quiz";
declare const ECL: any;

@Component({
  tag: 'ecl-quiz',
  styleUrls: {
    ec: './build/styles/ecl-quiz-ec.css',
    eu: './build/styles/ecl-quiz-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclQuiz {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() noScript: boolean = false;
  @Prop() itemId: string;
  @Prop() quizTitle: string;
  @Prop() description: string;
  @Prop() withBackground: boolean = false;
  @Prop() fullWidth: boolean = false;
  @Prop() variant: string = "reveal";
  @Prop() prevLabel: string;
  @Prop() nextLabel: string;
  @Prop() skipText: string;

  getClass(): string {
    const styleClasses = [
      `ecl-quiz`,
      `ecl-quiz--${this.variant}`,
      this.styleClass
    ];

    if (this.withBackground || this.fullWidth) {
      styleClasses.push('ecl-quiz--background');
    }

    if (this.fullWidth) {
      styleClasses.push('ecl-quiz--full-width');
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    if (!this.noScript) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.Quiz = Quiz;

      const quiz = new Quiz(this.el.firstElementChild);
      quiz.init();
    }
  }

  render() {
    const content = (
      <Fragment>
        <div class="ecl-quiz__header">
          {this.quizTitle && (
            <div class="ecl-quiz__title">
              {this.quizTitle}
            </div>
          )}

          {this.description && (
            <div class="ecl-quiz__description">
              {this.description}
            </div>
          )}
        </div>

        <div
          class="ecl-quiz__viewport"
          data-ecl-quiz-slider
        >
          <div 
            class="ecl-quiz__list"
            role="list"
          >
            <slot></slot>
          </div>
        </div>

        <div class="ecl-quiz__pager">
          <button class="ecl-quiz__prev">
            <ecl-icon
              icon="corner-arrow"
              rotate="270"
              color="monochrome"
              size="xs"
            ></ecl-icon>

            <span class="ecl-quiz__prev-label">
              {this.prevLabel}
            </span>
          </button>

          <div class="ecl-quiz__dots"></div>

          <button class="ecl-quiz__next">
            <ecl-icon
              icon="corner-arrow"
              rotate="90"
              color="monochrome"
              size="xs"
            ></ecl-icon>

            <span class="ecl-quiz__next-label">
              {this.nextLabel}
            </span>
          </button>

          <script
            type="text/template"
            id="ecl-quiz__dot-template"
          >
            <button class="ecl-quiz__dot"></button>
          </script>
        </div>

        <div class="ecl-quiz__counter"></div>
      </Fragment>
    );

    return (
      <section
        class={this.getClass()}
        id={this.itemId}
      >
        {this.withBackground || this.fullWidth ? (
          <ecl-grid container>
            {content}
          </ecl-grid>
        ) : (
          content
        )}
      </section>
    );
  }
}