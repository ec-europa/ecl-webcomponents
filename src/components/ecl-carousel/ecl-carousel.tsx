import { Component, h, Prop, Element, getAssetPath } from '@stencil/core';
declare const ECL: any;

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
  @Prop() theme: string = 'ec';
  @Prop() eclScript: boolean = false;
  @Prop() carouselId: string;
  @Prop() slidesNumber: number;
  @Prop() counterLabel: string = 'of';
  @Prop() srNavigation: string = 'Go to slide %d';
  @Prop() srPrevious: string = 'Prev slides';
  @Prop() srNext: string = 'Next slides';
  @Prop() srPause: string = 'Pause carousel';
  @Prop() srPlay: string = 'Play carousel';

  getClass(): string {
    return [
      `ecl-carousel`,
      this.styleClass
    ].join(' ');
  }

  componentDidRender() {
    if (this.eclScript) {
      const src = getAssetPath('./build/scripts/ecl-carousel-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const carousel = new ECL.Carousel(this.el.firstElementChild);
        carousel.init();
      };
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <div
        class={this.getClass()}
        data-ecl-auto-init="Carousel"
      >
        <div class="ecl-carousel__container">
          <div
            class="ecl-carousel__slides"
            id={this.carouselId}
          >
            <slot></slot>
          </div>
          <button 
            class="ecl-carousel__prev"
          >
            <ecl-icon
              icon="corner-arrow"
              transform="rotate-270"
              style-class="ecl-icon--inverted ecl-carousel__icon-default sc-ecl-carousel-ec"
            ></ecl-icon>
             <span class="ecl-u-sr-only">{this.srPrevious}</span>
          </button>
          <button class="ecl-carousel__next">
            <ecl-icon
              icon="corner-arrow"
              transform="rotate-90"
              style-class="ecl-icon--inverted ecl-carousel__icon-default sc-ecl-carousel-ec"
            ></ecl-icon>
            <span class="ecl-u-sr-only">{this.srNext}</span>
          </button>
        </div>
        <div class="ecl-carousel__controls">
          <div class="ecl-container">
            <div class="ecl-carousel__autoplay">
              <button class="ecl-carousel__play">
                <ecl-icon
                  icon="play"
                  size="l"
                  color="inverted"
                  style-class={`ecl-carousel__icon-default sc-ecl-carousel-${this.theme}`}
                ></ecl-icon>
                <ecl-icon
                  icon="play-filled"
                  size="l"
                  color="inverted"
                  style-class={`ecl-carousel__icon-active sc-ecl-carousel-${this.theme}`}
                ></ecl-icon>
                <span class="ecl-u-sr-only">{this.srPlay}</span>
              </button>
              <button class="ecl-carousel__pause">
                <ecl-icon
                  icon="pause"
                  size="l"
                  style-class="ecl-icon--inverted ecl-carousel__icon-default sc-ecl-carousel-ec"
                ></ecl-icon>
                <ecl-icon
                  icon="pause-filled"
                  size="l"
                  color="inverted"
                  style-class={`ecl-carousel__icon-active sc-ecl-carousel-${this.theme}`}
                ></ecl-icon>
                <span class="ecl-u-sr-only">{this.srPause}</span>
              </button>
            </div>
            <div class="ecl-carousel__navigation">
            { [...Array(this.slidesNumber)].map((i) =>
              <button class="ecl-carousel__navigation-item">
                <span class="ecl-u-sr-only">{this.srNavigation.replace('%d', i)}</span>
              </button>
            ) } 
            </div>
            <div class="ecl-carousel__pagination">
              <span class="ecl-carousel__current"></span> {this.counterLabel} <span class="ecl-carousel__max">{this.slidesNumber}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
