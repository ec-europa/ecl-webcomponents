import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ecl-carousel-item',
  shadow: false,
})
export class EclCarouselItem {
  @Prop() styleClass: string = '';
  @Prop() bannerTitle: string = '';
  @Prop() bannerVariant: string = '';
  @Prop() image: string = '';
  @Prop() theme: string = 'ec';
  @Prop() ctaLink: string;
  @Prop() ctaLabel: string;
  @Prop() ariaLabel: string;

  getClass(): string {
    return [
      `ecl-carousel__item`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <div
        class="ecl-carousel__slide"
        role="group"
        aria-label={this.ariaLabel}
      >
        <ecl-page-banner
          banner-title={this.bannerTitle}
          image={this.image}
          variant={this.bannerVariant}
          theme={this.theme}
          cta-link={this.ctaLink}
          cta-label={this.ctaLabel}
        >
          <slot></slot>
        </ecl-page-banner>
      </div>
    );
  }
}
  