import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-page-banner',
  styleUrls: {
    ec: './build/styles/ecl-page-banner-ec.css',
    eu: './build/styles/ecl-page-banner-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclPageBanner {
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
      `ecl-page-banner`,
      `ecl-page-banner--${this.variant}`,
      this.styleClass
    ];

    if (this.centered) {
      styleClasses.push('ecl-page-banner--centered');
    }
    if (this.fullWidth) {
      styleClasses.push('ecl-page-banner--full-width');
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
          class="ecl-page-banner__image"
          style={{ backgroundImage: "url(" + this.image + ")"}}
        >
        </div>
        : '' }
        { this.credit && imageBanners.includes(this.variant) ?
        <div class="ecl-page-banner__credit">{this.credit}</div> : '' }
        <div class="ecl-container">
          <div class="ecl-page-banner__container">
            <div class="ecl-page-banner__content">
              <div class="ecl-page-banner__title">{this.bannerTitle}</div>
              <p class="ecl-page-banner__description">
                <span class="ecl-page-banner__description-text">
                  <slot></slot>
                </span>
              </p>
            { this.ctaLabel && this.ctaLink ?
              <div class="ecl-page-banner__cta">
                <ecl-link
                  variant="cta"
                  path={this.ctaLink}
                  styleClass="ecl-page-banner__link-cta sc-ecl-page-banner-ec"
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
