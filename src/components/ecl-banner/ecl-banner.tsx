import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-banner',
  styleUrls: {
    ec: './build/styles/ecl-banner-ec.css',
    eu: './build/styles/ecl-banner-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclBanner {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() external: boolean = false;
  @Prop() variant: string = 'display';
  @Prop() fullWidth: boolean = false;
  @Prop() bannerTitle: string;
  @Prop() image: string;
  @Prop() imageAlt: string;
  @Prop() ctaLabel: string;
  @Prop() ctaLink: string;
  @Prop() centered: boolean = false;
  @Prop() credit: string;
  @Prop() size: string = 'm';
  @Prop() ctaClicked: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-banner`,
      `ecl-banner--${this.variant}`,
      `ecl-banner--${this.size}`,
      this.styleClass
    ];

    if (this.centered) {
      styleClasses.push('ecl-banner--centered');
    }
    if (this.fullWidth) {
      styleClasses.push('ecl-banner--full-width');
    }

    return styleClasses.join(' ');
  }

  componentDidRender() {
    if (this.el.querySelector('.ecl-banner__cta')) {
      this.el.querySelector('.ecl-banner__cta').addEventListener('click', () => {
        this.ctaClicked = true;
      });
    }
  }

  render() {
    const imageBanners = [
      'text-box',
      'image-overlay',
      'text-highlight',
    ];
    return (
      <section class={this.getClass()}>
      { imageBanners.includes(this.variant) && this.image ?
        <ecl-picture
          styleClass={`ecl-banner__picture sc-ecl-banner-${this.theme}`}
          image={this.image}
          imageAlt={this.imageAlt}
          imgClass={`ecl-banner__image sc-ecl-banner-${this.theme}`}
        >
          <slot name="sources"></slot>
        </ecl-picture>
        : '' }
      { this.credit && this.variant != 'plain-background' ?
        <div class="ecl-banner__credit">{this.credit}</div> : ''
      }
        <div class="ecl-container">
          <div class="ecl-banner__container">
            <div class="ecl-banner__content">
            { this.bannerTitle ?
              <div class="ecl-banner__title">
                <span class="ecl-banner__title-text">{this.bannerTitle}</span>
              </div> : ''
            }
              <p class="ecl-banner__description">
                <span class="ecl-banner__description-text">
                  <slot></slot>
                </span>
              </p>
            { this.ctaLabel && this.ctaLink ?
              <div class="ecl-banner__cta">
                <ecl-link
                  theme={this.theme}
                  variant="cta"
                  path={this.ctaLink}
                  style-class={`ecl-banner__link-cta sc-ecl-banner-${this.theme}`}
                >
                  {this.ctaLabel}
                  <ecl-icon
                    icon="corner-arrow"
                    slot="icon-after"
                    transform="rotate-90"
                    theme={this.theme}
                  ></ecl-icon>
                </ecl-link>
              </div>
            : '' }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
