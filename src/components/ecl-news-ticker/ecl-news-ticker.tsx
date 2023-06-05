import { Component, h, Prop, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
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
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() counterLabel: string;
  @Prop() srNext: string;
  @Prop() srPrev: string;
  @Prop() srPause: string;
  @Prop() eclScript: boolean = false;

  getClass(): string {
    return [
      `ecl-news-ticker`,
      this.styleClass
    ].join(' ');
  }

  componentDidRender() {
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
      const controls = this.el.querySelectorAll('.ecl-news-ticker__controls button');
      const counter = this.el.querySelectorAll('.ecl-news-ticker__counter');
      this.el.querySelector('.ecl-news-ticker__controls').innerHTML = '';
      this.el.querySelector('.ecl-news-ticker__controls').append(...controls);
      this.el.querySelector('.ecl-news-ticker__controls').append(...counter);
    }
  }

  componentDidLoad() {
    if (this.el.querySelector('.ecl-news-ticker__slides') && this.eclScript) {
      // Load the ECL vanilla js if not already present.
      const src = getAssetPath('./build/scripts/ecl-news-ticker-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const newsTicker = new ECL.NewsTicker(
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
          <ecl-icon 
            icon="information"
            size="m"
            style-class={`ecl-news-ticker__icon sc-ecl-news-ticker-${this.theme}`}
          >
          </ecl-icon>
          <div class="ecl-news-ticker__content">
            <ul class="ecl-news-ticker__slides">
              <slot></slot>
            </ul>
          </div>
        </div>
        <div class="ecl-news-ticker__controls">
          <ecl-button
            styleClass={`ecl-news-ticker__prev sc-ecl-news-ticker-${this.theme}`}
            data-ecl-news-ticker-prev
            type="default"
          >
            <ecl-icon 
              styleClass={`ecl-news-ticker__icon-default sc-ecl-news-ticker-${this.theme}`}
              slot="icon-after"
              icon="corner-arrow"
              size="l"
              color="inverted"
              transform="rotate-270"
              theme={this.theme}
            >
            </ecl-icon>
            <span class="ecl-u-sr-only">{this.srPrev}</span>
          </ecl-button>
          <ecl-button
            styleClass={`ecl-news-ticker__next sc-ecl-news-ticker-${this.theme}`}
            data-ecl-news-ticker-next
            type="default"
          >
            <ecl-icon 
              styleClass={`ecl-news-ticker__icon-default sc-ecl-news-ticker-${this.theme}`}
              slot="icon-after"
              icon="corner-arrow"
              size="l"
              color="inverted"
              transform="rotate-90"
              theme={this.theme}
            >
            </ecl-icon>
            <span class="ecl-u-sr-only">{this.srNext}</span>
          </ecl-button>
          <ecl-button
            styleClass={`ecl-news-ticker__play sc-ecl-news-ticker-${this.theme}`}
            data-ecl-news-ticker-play
            type="default"
          >
            <ecl-icon 
              styleClass={`ecl-news-ticker__icon-default sc-ecl-news-ticker-${this.theme}`}
              slot="icon-before"
              icon="play"
              size="l"
              color="inverted"
              theme={this.theme}
            >
            </ecl-icon>
            <ecl-icon 
              styleClass={`ecl-news-ticker__icon-active sc-ecl-news-ticker-${this.theme}`}
              slot="icon-after"
              icon="play-filled"
              size="l"
              color="inverted"
              theme={this.theme}
            >
            </ecl-icon>
          </ecl-button>
          <ecl-button
            styleClass={`ecl-news-ticker__pause sc-ecl-news-ticker-${this.theme}`}
            data-ecl-news-ticker-pause
            type="default"
          >
            <ecl-icon 
              styleClass={`ecl-news-ticker__icon-default sc-ecl-news-ticker-${this.theme}`}
              slot="icon-before"
              icon="pause"
              size="l"
              color="inverted"
              theme={this.theme}
            >
            </ecl-icon>
            <ecl-icon 
              styleClass={`ecl-news-ticker__icon-active sc-ecl-news-ticker-${this.theme}`}
              slot="icon-after"
              icon="pause-filled"
              size="l"
              color="inverted"
              theme={this.theme}
            >
            </ecl-icon>
            <span class="ecl-u-sr-only">{this.srPause}</span>
          </ecl-button>
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
