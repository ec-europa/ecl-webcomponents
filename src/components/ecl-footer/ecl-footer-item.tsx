 import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-footer-item',
  shadow: false,
})

export class EclFooterItem{
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() link: string;
  @Prop() ariaLabel: string;

  getClass(): string {
    const styleClasses = [
      `ecl-site-footer__list-item`,
      `sc-ecl-footer-${this.theme}`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  render() { 
    return (
      <li
        class={this.getClass()}
      >
      <slot name="ecl-footer-item-desc"></slot>
        <ecl-link
          path={this.link}
          variant="standalone"
          styleClass={`ecl-site-footer__link sc-ecl-footer-${this.theme}`}
          theme={this.theme}
          ariaLabel={this.ariaLabel}
        >
          <slot></slot>  
        </ecl-link>
      </li>
    );
  }
}
