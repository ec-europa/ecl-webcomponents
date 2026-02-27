 import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ecl-footer-item',
  shadow: false,
})

export class EclFooterItem{
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() link: string;
  @Prop() ariaLabel: string;
  @Prop() isFirst: boolean = false;
  @Prop() isLast: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-site-footer__list-item`,
      `sc-ecl-footer-${this.theme}-${this.theme}`,
      this.styleClass
    ];

    if (this.isLast) {
      styleClasses.push('is-last');
    }

    if (this.isFirst) {
      styleClasses.push('is-first');
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() { 
    return (
      <Host
        class={this.getClass()}
      >
        <ecl-link
          path={this.link}
          variant="standalone"
          styleClass={`ecl-site-footer__link sc-ecl-footer-${this.theme}-${this.theme}`}
          theme={this.theme}
          ariaLabel={this.ariaLabel}
          {...(this.theme === 'ec' ? {inverted: true} : {})}
        >
          <slot name="icon-before"></slot>
          <slot></slot>  
        </ecl-link>
      </Host>
    );
  }
}
