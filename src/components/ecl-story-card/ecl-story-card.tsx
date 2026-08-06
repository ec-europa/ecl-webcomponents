import { Component, Prop, h, Element } from '@stencil/core';
import StoryCard from "@ecl/story-card";
declare var ECL: any

@Component({
  tag: 'ecl-story-card',
  styleUrls: {
    ec: './build/styles/ecl-story-card-ec.css',
    eu: './build/styles/ecl-story-card-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclStoryCard {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() noScript: boolean = false;
  @Prop() elId: string = `ecl-story-card-${Math.random().toString(36).substring(2, 9)}`;
  @Prop() elTitle: string = '';
  @Prop() description: string = '';
  @Prop() prevLabel: string ='';
  @Prop() nextLabel: string = '';
  @Prop() playLabel: string = '';
  @Prop() pauseLabel: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() variant: string = 'story';
  @Prop() colorMode: string = '';

  getClass(): string {
    const styleClasses = [
      `ecl-story-card`,
      this.styleClass
    ];

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    if (this.variant !== 'story') {
      styleClasses.push(`ecl-story-card--${this.variant}`);
    }

    if (this.description) {
      styleClasses.push('ecl-story-card--has-description');
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    if (!this.noScript) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.StoryCard = StoryCard;

      const storyCard = new StoryCard(this.el.firstElementChild);
      storyCard.init();
    }
  }

  render() {
    return (
      <section
        class={this.getClass()}
        id={this.elId}
      >
      {this.elTitle || this.description ? (
        <div class="ecl-story-card__header">
        { this.elTitle && 
          <div
            class="ecl-story-card__title"
          >
            {this.elTitle}
          </div>
        }
        { this.description && 
          <div class="ecl-story-card__description">
            {this.description}
          </div>
        }
        </div>
        ) : null
      }
        <div
          class="ecl-story-card__carousel"
        >
          <div
            class="ecl-story-card__carousel-viewport"
            data-ecl-story-card-viewport
          >
            <div
              class="ecl-story-card__carousel-container"
              data-ecl-story-card-container
              role="list"
            >
              <slot></slot>
            </div>
          </div>
          <div class="ecl-story-card__pager">
            <button
              class="ecl-story-card__prev"
              data-ecl-story-card-prev
            >
              <span class="ecl-story-card__prev-label"></span>
              <ecl-icon
                icon="caret-left"
                slot="icon-after"
                family="phosphor"
                size="s"
              ></ecl-icon>
            </button>
            <div class="ecl-story-card__dots"></div>
            <button
              class="ecl-story-card__next"
              data-ecl-story-card-next
            >
              <span class="ecl-story-card__next-label"></span>
              <ecl-icon
                icon="caret-right"
                slot="icon-after"
                family="phosphor"
                size="s"
              ></ecl-icon>
            </button>
            <script
              type="text/template"
              data-ecl-story-card-dot-template
            >
              <button class="ecl-story-card__dot"></button>
            </script>
          </div>
        </div>
        <div class="ecl-story-card__grid">
          <div
            class="ecl-story-card__grid-container"
            role="tablist"
          >
            <slot name="story-card-tabs"></slot>
          </div>
          <slot name="story-card-grid-details"></slot>
          <div class="ecl-story-card__grid-controls">
            <ecl-button
              type="button"
              variant="tertiary"
              button-style="neutral"
              hide-label
              style-class={`ecl-story-card__grid-prev sc-ecl-story-card-${this.theme}`}
              data-ecl-story-card-grid-prev
            >
              {this.prevLabel}
              <ecl-icon
                icon="caret-left"
                slot="icon-after"
                family="phosphor"
                size="l"
              ></ecl-icon>
            </ecl-button>
            <ecl-button
              type="button"
              variant="secondary"
              button-style="neutral"
              hide-label
              style-class={`ecl-story-card__grid-pause sc-ecl-story-card-${this.theme}`}
              data-ecl-story-card-grid-pause
            >
              {this.pauseLabel}
              <ecl-icon
                icon="pause-filled"
                slot="icon-after"
                family="phosphor"
                size="l"
              ></ecl-icon>
            </ecl-button>
            <ecl-button
              type="button"
              variant="secondary"
              button-style="neutral"
              hide-label
              style-class={`ecl-story-card__grid-play sc-ecl-story-card-${this.theme}`}
              data-ecl-story-card-grid-play
            >
              {this.playLabel}
              <ecl-icon
                icon="play-filled"
                slot="icon-after"
                family="phosphor"
                size="l"
              ></ecl-icon>
            </ecl-button>
            <ecl-button
              type="button"
              variant="tertiary"
              button-style="neutral"
              hide-label
              style-class={`ecl-story-card__grid-next sc-ecl-story-card-${this.theme}`}
              data-ecl-story-card-grid-next
            >
              <ecl-icon
                icon="caret-right"
                slot="icon-after"
                family="phosphor"
                size="l"
              ></ecl-icon>
              {this.nextLabel}
            </ecl-button>
          </div>
       </div>
      </section>
    )
  }
}
