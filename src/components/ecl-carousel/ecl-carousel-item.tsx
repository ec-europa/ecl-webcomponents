import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'ecl-carousel-item',
  shadow: false,
})
export class EclCarouselItem {
  @Prop() styleClass: string = '';
  @Prop() bannerTitle: string = '';
  @Prop() credit: string;
  @Prop() image: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() srSlideRole: string = 'slide';
  @Prop() ctaLink: string;
  @Prop() ctaLabel: string;
  @Prop() size: string = 'm';
  @Prop() ariaLabel: string;
  @Prop() centered: boolean;

  getClass(): string {
    return [
      `ecl-carousel__slide`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <Host
        class={this.getClass()}
        role="tabpanel"
        aria-label={this.ariaLabel}
        aria-roledescription={this.srSlideRole}
      >
        <ecl-banner
          banner-title={this.bannerTitle}
          image={this.image}
          theme={this.theme}
          cta-link={this.ctaLink}
          cta-label={this.ctaLabel}
          size={this.size}
          credit={this.credit}
        >
          <slot></slot>
        </ecl-banner>
      </Host>
    );
  }
}
  