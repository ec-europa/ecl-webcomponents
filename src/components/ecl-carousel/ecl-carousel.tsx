import { Component, h, Prop, Element, State } from '@stencil/core';
import Carousel from "@ecl/carousel";
declare var ECL: any;

@Component({
  tag: 'ecl-carousel',
  styleUrls: {
    ec: './build/styles/ecl-carousel-ec.css',
    eu: './build/styles/ecl-carousel-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclCarousel {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() noScript: boolean = false;
  @Prop() colorMode: string;
  @Prop() fullWidth: boolean = false;
  @Prop() srDescription: string = '';
  @Prop() counterLabel: string = 'of';
  @Prop() srPrevious: string = 'Prev slides';
  @Prop() srNext: string = 'Next slides';
  @Prop() srPause: string = 'Pause carousel';
  @Prop() srPlay: string = 'Play carousel';
  @Prop() srRole: string = 'carousel';
  @State() teasers: string[] = [];

  getClass(): string {
    const styleClasses = [
      `ecl-carousel`,
      this.styleClass
    ];

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    if (this.fullWidth) {
      styleClasses.push('ecl-carousel--full-width');
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    const slides = this.el.querySelectorAll<HTMLElement>('.ecl-carousel__slide');
  
    this.teasers = Array.from(slides).map((slide, i) => {
      const title = slide.querySelector('.ecl-banner__title-text');
      const desc = slide.querySelector('.ecl-banner__description-text');
  
      slide.classList.add(`sc-ecl-carousel-${this.theme}`);

      slide.inert = i !== 0;
  
      return title?.textContent || desc?.textContent || '';
    });
    
    if (!this.noScript) {
      setTimeout(() => {
        ;(window as any).ECL = (window as any).ECL || {};
        ECL.Carousel = Carousel;
        const carousel = new Carousel(this.el.firstElementChild);
        carousel.init();
      }, 100);
    }
  }

  render() {
    return (
      <section
        class={this.getClass()}
        data-ecl-carosuel
        aria-roledescription={this.srRole}
        data-ecl-carousel-counter-label={this.counterLabel}
        {...this.srDescription && { 'aria-label': [this.srDescription] }}
      >
        <div class="ecl-carousel__controls">
          <div class="ecl-container">
            <div class="ecl-carousel__navigation">
              <div class="ecl-carousel__pager-container">
                <ecl-slider-pager
                  styleClass={`ecl-carousel__pager sc-ecl-carousel-${this.theme}`}
                  prevExtraClasses={`ecl-carousel__prev sc-ecl-carousel-${this.theme}`}
                  nextExtraClasses={`ecl-carousel__next sc-ecl-carousel-${this.theme}`}
                  playExtraClasses={`ecl-carousel__play sc-ecl-carousel-${this.theme}`}
                  pauseExtraClasses={`ecl-carousel__pause sc-ecl-carousel-${this.theme}`}
                  dotsExtraClasses={`ecl-carousel__dots sc-ecl-carousel-${this.theme}`}
                  dotExtraClasses={`ecl-carousel__dot sc-ecl-carousel-${this.theme}`}
                  srPrev={this.srPrevious}
                  srNext={this.srNext}
                  srPlay={this.srPlay}
                  srPause={this.srPause}
                  size="m"
                  hideLabel
                  playPause
                  templateDataAttribute="data-ecl-carousel-dot-template"
                ></ecl-slider-pager>
                <div class="ecl-carousel__counter" dir="ltr"></div>
              </div>
              <div
                class="ecl-carousel__teasers"
                role="tablist"
              >
              { this.teasers.map((teaser, i) => (
                <button
                  class="ecl-carousel__teaser-button"
                  type="button"
                  data-ecl-carousel-teaser-button
                  data-ecl-carousel-slide-index={ i }
                  role="tab"
                  tabindex="-1"
                >
                  <span class="ecl-carousel__teaser-loading-bar" aria-hidden="true">
                    <span class="ecl-carousel__teaser-loading-bar-completion"></span>
                  </span>
                  <span class="ecl-carousel__teaser-content">
                    <span class="ecl-carousel__teaser-title">{teaser}</span>
                  </span>
                </button>
                )
              )}
              </div>
            </div>
          </div>
        </div>
        <div class="ecl-carousel__viewport">
          <div
            class="ecl-carousel__slides"
          >
            <slot></slot>
          </div>
        </div>
      </section>
    );
  }
}
