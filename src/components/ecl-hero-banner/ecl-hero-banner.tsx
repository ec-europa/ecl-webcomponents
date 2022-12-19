import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-hero-banner',
  styleUrls: {
    ec: './build/styles/ecl-hero-banner-ec.css',
    eu: './build/styles/ecl-hero-banner-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclHeroBanner {
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() external: boolean = false;
  @Prop() variant: string = 'display';
  @Prop() fullWidth: boolean = false;
  @Prop() bannerTitle: string;
  @Prop() image: string;
  @Prop() ctaLabel: string;
  @Prop() ctaLink: string;
  @Prop() centered: boolean = true;
  @Prop() credit: string;

  getClass(): string {
    const styleClasses = [
      `ecl-hero-banner`,
      `ecl-hero-banner--${this.variant}`,
      this.styleClass
    ];

    if (this.centered) {
      styleClasses.push('ecl-hero-banner--centered');
    }
    if (this.fullWidth) {
      styleClasses.push('ecl-hero-banner--full-width');
    }

    return styleClasses.join(' ');
  }

  render() {
    const imageBanners = [
      'image',
      'image-gradient',
      'image-shade',
    ];
    return (
      <section class={this.getClass()}>
      { imageBanners.includes(this.variant) && this.image ?
        <div
          class="ecl-hero-banner__image"
          style={{ backgroundImage: "url(" + this.image + ")"}}
        >
        </div>
        : '' }
        <div class="ecl-container">
          <div class="ecl-hero-banner__container">
            <div class="ecl-hero-banner__content">
              <div class="ecl-hero-banner__title">{this.bannerTitle}</div>
              <p class="ecl-hero-banner__description">
                <span class="ecl-hero-banner__description-text">
                  <slot></slot>
                </span>
              </p>
            { this.ctaLabel && this.ctaLink ?
              <div class="ecl-hero-banner__cta">
                <ecl-link
                  variant="cta"
                  path={this.ctaLink}
                  styleClass="ecl-hero-banner__link-cta sc-ecl-hero-banner-ec"
                >
                  {this.ctaLabel}
                  <ecl-icon
                    icon="corner-arrow"
                    slot="icon-after"
                    transform="rotate-90"
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
