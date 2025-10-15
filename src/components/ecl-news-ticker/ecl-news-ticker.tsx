import { Component, h, Prop, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const NEWSTICKER: any;

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
  @Prop() eclScript: boolean = false;

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

    if (this.el.querySelector('.ecl-news-ticker__slides')) {
      // Clean the html so that the script finds what it expects.
      const slides = this.el.querySelectorAll('.ecl-news-ticker__slide');
      this.el.querySelector('.ecl-news-ticker__slides').innerHTML = '';
      this.el.querySelector('.ecl-news-ticker__slides').append(...slides);
    }
    if (this.el.querySelector('.ecl-news-ticker__controls')) {
      const controls = this.el.querySelectorAll('.ecl-news-ticker__actions button');
      const counter = this.el.querySelectorAll('.ecl-news-ticker__counter');
      this.el.querySelector('.ecl-news-ticker__actions').innerHTML = '';
      this.el.querySelector('.ecl-news-ticker__actions').append(...controls);
      this.el.querySelector('.ecl-news-ticker__controls').append(...counter);
    }
  }

  componentDidRender() {
    if (this.el.querySelector('.ecl-news-ticker__slides') && this.eclScript) {
      // Load the ECL vanilla js if not already present.
      const src = getAssetPath('./build/scripts/ecl-news-ticker-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        ;(window as any).ECL = (window as any).ECL || {};
        const newsTicker = new NEWSTICKER.NewsTicker(
          this.el.firstElementChild,
          { playSelector: '.ecl-news-ticker__play',
            pauseSelector: '.ecl-news-ticker__pause',
            prevSelector: '.ecl-news-ticker__prev',
            nextSelector: '.ecl-news-ticker__next',
          });
        newsTicker.init();
      };

      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <div
        class={this.getClass()}
      >
        <div class="ecl-news-ticker__container">
          <div class="ecl-news-ticker__content">
            <ul class="ecl-news-ticker__slides">
              <slot></slot>
            </ul>
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
            >
              <ecl-icon 
                styleClass={`sc-ecl-news-ticker-${this.theme}`}
                slot="icon-after"
                icon="corner-arrow"
                size="l"
                rotate="270"
                theme={this.theme}
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
            >
              <ecl-icon 
                styleClass={`ecl-news-ticker__icon-active sc-ecl-news-ticker-${this.theme}`}
                slot="icon-after"
                icon="play-outline"
                size="l"
                theme={this.theme}
              >
              </ecl-icon>
                {this.srPlay}
            </ecl-button>
            <ecl-button
              variant="tertiary"
              theme={this.theme}
              styleClass={`ecl-news-ticker__pause sc-ecl-news-ticker-${this.theme}`}
              data-ecl-news-ticker-pause
              hideLabel
              type="button"
            >
              <ecl-icon 
                styleClass={`ecl-news-ticker__icon-active sc-ecl-news-ticker-${this.theme}`}
                slot="icon-after"
                icon="pause-outline"
                size="l"
                theme={this.theme}
              >
              </ecl-icon>
              {this.srPause}
            </ecl-button>
            <ecl-button
              theme={this.theme}
              styleClass={`ecl-news-ticker__next sc-ecl-news-ticker-${this.theme}`}
              data-ecl-news-ticker-next
              type="button"
              variant="tertiary"
              hideLabel
            >
              <ecl-icon 
                styleClass={`sc-ecl-news-ticker-${this.theme}`}
                slot="icon-after"
                icon="corner-arrow"
                size="l"
                rotate="90"
                theme={this.theme}
              >
              </ecl-icon>
                {this.srNext}
            </ecl-button>
          </div>
          <div class="ecl-news-ticker__counter">
            <span class="ecl-news-ticker__counter--current">1</span>
              {` ${this.counterLabel} `}
            <span class="ecl-news-ticker__counter--max"></span>
          </div>
        </div>
      </div>
    );
  }
}
