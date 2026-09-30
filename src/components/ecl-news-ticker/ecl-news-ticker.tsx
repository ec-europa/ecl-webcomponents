import { Component, h, Prop, Element } from '@stencil/core';
import NewsTicker from "@ecl/news-ticker";
declare const ECL: any;

@Component({
  tag: 'ecl-news-ticker',
  styleUrls: {
    ec: './build/styles/ecl-news-ticker-ec.css',
    eu: './build/styles/ecl-news-ticker-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})
export class EclNewsTicker {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() counterLabel: string;
  @Prop() srNext: string;
  @Prop() srPrev: string;
  @Prop() srPause: string;
  @Prop() srPlay: string;
  @Prop() noScript: boolean = false;

  getClass(): string {
    return [
      `ecl-news-ticker`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    this.theme =
      document.documentElement.getAttribute('data-ecl-theme') ??
      (this.theme || 'ec');
  }

  componentDidLoad() {
    const counterMax = this.el.querySelector('.ecl-news-ticker__counter--max');
    const countMax = this.el.querySelectorAll('.ecl-news-ticker__slide').length as unknown as string;
    counterMax.innerHTML = countMax;

    ;(window as any).ECL = (window as any).ECL || {};
    ECL.NewsTicker = NewsTicker;

    const newsTicker = new NewsTicker(
      this.el.firstElementChild,
      { playSelector: '.ecl-news-ticker__play',
        pauseSelector: '.ecl-news-ticker__pause',
        prevSelector: '.ecl-news-ticker__prev',
        nextSelector: '.ecl-news-ticker__next',
      });
    newsTicker.init();
  }

  render() {
    return (
      <div
        class={this.getClass()}
      >
        <div class="ecl-news-ticker__container">
          <div class="ecl-news-ticker__content">
            <div
              class="ecl-news-ticker__slides"
              role="list"
            >
              <slot></slot>
            </div>
          </div>
        </div>
        <div class="ecl-news-ticker__controls">
          <div class="ecl-news-ticker__actions">
            <ecl-button
              theme={this.theme}
              styleClass={`ecl-news-ticker__prev sc-ecl-news-ticker-${this.theme}`}
              data-ecl-news-ticker-prev
              hideLabel
              type="button"
              variant="tertiary"
              buttonStyle="neutral"
            >
              <ecl-icon 
                styleClass={`sc-ecl-news-ticker-${this.theme}`}
                slot="icon-after"
                icon="caret-left"
                size="m"
                family="phosphor"
              >
              </ecl-icon>
                {this.srPrev}
            </ecl-button>
            <ecl-button
              theme={this.theme}
              styleClass={`ecl-news-ticker__play sc-ecl-news-ticker-${this.theme}`}
              data-ecl-news-ticker-play
              type="button"
              hideLabel
              variant="tertiary"
              buttonStyle="neutral"
            >
              <ecl-icon 
                styleClass={`ecl-news-ticker__icon-active sc-ecl-news-ticker-${this.theme}`}
                slot="icon-after"
                icon="play-circle"
                size="m"
                family="phosphor"
              >
              </ecl-icon>
                {this.srPlay}
            </ecl-button>
            <ecl-button
              variant="tertiary"
              buttonStyle="neutral"
              styleClass={`ecl-news-ticker__pause sc-ecl-news-ticker-${this.theme}`}
              data-ecl-news-ticker-pause
              hideLabel
              type="button"
            >
              <ecl-icon 
                styleClass={`ecl-news-ticker__icon-active sc-ecl-news-ticker-${this.theme}`}
                slot="icon-after"
                icon="pause-circle"
                size="m"
                family="phosphor"
              >
              </ecl-icon>
              {this.srPause}
            </ecl-button>
            <ecl-button
              styleClass={`ecl-news-ticker__next sc-ecl-news-ticker-${this.theme}`}
              data-ecl-news-ticker-next
              type="button"
              variant="tertiary"
              buttonStyle="neutral"
              hideLabel
            >
              <ecl-icon 
                styleClass={`sc-ecl-news-ticker-${this.theme}`}
                slot="icon-after"
                icon="caret-right"
                family="phosphor"
                size="m"
              >
              </ecl-icon>
                {this.srNext}
            </ecl-button>
          </div>
          <div class="ecl-news-ticker__counter" dir="ltr">
            <span class="ecl-news-ticker__counter--current">1</span>
              {` ${this.counterLabel} `}
            <span class="ecl-news-ticker__counter--max"></span>
          </div>
        </div>
      </div>
    );
  }
}
