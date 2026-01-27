import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-page-header-meta-item',
  shadow: false,
})

export class EclPageHeaderMetaItem {
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() icon: string = '';

  getClass(): string {
    const styleClasses = [
      'ecl-page-header__meta-item',
      `sc-ecl-page-header-${this.theme}`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <li class={this.getClass()}>
        { this.icon &&
          <ecl-icon
            icon={this.icon}
            size="2xs"
            styleClass="ecl-page-header__meta-icon"
          ></ecl-icon>
        }
        <slot></slot>
      </li>
    );
  }
}