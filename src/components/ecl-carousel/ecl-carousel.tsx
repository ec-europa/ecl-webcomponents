import { Component, h, Prop, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare var ECL: any;
declare const CAROUSEL: any;
declare const BANNER: any;

@Component({
  tag: 'ecl-carousel',
  styleUrls: {
    ec: './build/styles/ecl-carousel-ec.css',
    eu: './build/styles/ecl-carousel-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})

export class EclCarousel {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() eclScript: boolean = false;
  @Prop() carouselId: string;
  @Prop() colorMode: string;
  @Prop() slidesNumber: number;
  @Prop() fullWidth: boolean = false;
  @Prop() counterLabel: string = 'of';
  @Prop() srNavigation: string = 'Go to slide %d';
  @Prop() srPrevious: string = 'Prev slides';
  @Prop() srNext: string = 'Next slides';
  @Prop() srPause: string = 'Pause carousel';
  @Prop() srPlay: string = 'Play carousel';

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

  componentDidRender() {
    const slides = this.el.querySelectorAll('.ecl-carousel__slide');
    slides.forEach((slide) => {
      slide.classList.add(`sc-ecl-carousel-${this.theme}`);
    });
    if (this.eclScript) {
      const src = getAssetPath('./build/scripts/ecl-carousel-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;

      const bannerSrc = getAssetPath('./build/scripts/ecl-banner-vanilla.js');
      if (document.querySelector(`script[src="${bannerSrc}"]`)) {
        document.querySelector(`script[src="${bannerSrc}"]`).remove();
      }
      const bannerScript = document.createElement('script');
      bannerScript.src = bannerSrc;
      document.body.appendChild(bannerScript);
      bannerScript.onload = () => {
        ;(window as any).ECL = (window as any).ECL || {};
        ECL.Banner = BANNER.Banner;
      };

      script.onload = () => {
        ;(window as any).ECL = (window as any).ECL || {};
        const carousel = new CAROUSEL.Carousel(this.el.firstElementChild);
        carousel.init();
      };

      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <div
        class={this.getClass()}
        data-ecl-carosuel
      >
        <div class="ecl-carousel__controls">
          <div class="ecl-container">
            <div class="ecl-carousel__autoplay">
              <ecl-button
                type="button"
                variant="tertiary"
                styleClass={`ecl-carousel__play sc-ecl-carousel-${this.theme}`}
                hideLabel
              >
                <ecl-icon
                  icon="play-outline"
                  size="m"
                  slot="icon-after"
                  style-class={`ecl-carousel__icon-default sc-ecl-carousel-${this.theme}`}
                ></ecl-icon>
                {this.srPlay}
              </ecl-button>
              <ecl-button 
                type="button" 
                styleClass={`ecl-carousel__pause sc-ecl-carousel-${this.theme}`}
                hideLabel
                variant="tertiary"
              >
                <ecl-icon
                  icon="pause-outline"
                  size="m"
                  slot="icon-after"
                  style-class={`ecl-carousel__icon-default sc-ecl-carousel-${this.theme}`}
                ></ecl-icon>
                {this.srPause}
              </ecl-button>
            </div>
            <div class="ecl-carousel__navigation" role="tablist">
            { [...Array(this.slidesNumber)].map((_, i) =>
              <ecl-button
                type="button"
                variant="tertiary"
                styleClass={`ecl-carousel__navigation-item sc-ecl-carousel-${this.theme}`}
              >
                {i + 1}
              </ecl-button>
            ) } 
            </div>
          </div>
        </div>
        <div class="ecl-carousel__container">
          <div
            class="ecl-carousel__slides"
            id={this.carouselId}
          >
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
