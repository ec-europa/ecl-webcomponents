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
  @Prop() size: string = 'm';
  @Prop() ariaLabel: string;
  @Prop() centered: boolean;

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
        <ecl-banner
          banner-title={this.bannerTitle}
          image={this.image}
          variant={this.bannerVariant}
          theme={this.theme}
          cta-link={this.ctaLink}
          cta-label={this.ctaLabel}
          centered={this.centered}
          size={this.size}
        >
          <slot></slot>
        </ecl-banner>
      </div>
    );
  }
}
  