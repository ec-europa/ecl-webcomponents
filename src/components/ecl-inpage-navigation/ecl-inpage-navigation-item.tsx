import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ecl-inpage-navigation-item',
  shadow: false,
})

export class EclInpageNavigationItem {
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() path: string;

  getClass(): string {
    return [
      `ecl-inpage-navigation__item`,
      `sc-ecl-inpage-navigation-${this.theme}`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <li class={this.getClass()}>
        <ecl-link
          theme={this.theme}
          path={this.path}
          style-class={`ecl-inpage-navigation__link sc-ecl-inpage-navigation-${this.theme}`}
          data-ecl-inpage-navigation-link
          >
            <slot></slot>
          </ecl-link>
      </li>
    );
  }
}