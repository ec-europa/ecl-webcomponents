import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-language-item',
  shadow: false,
  scoped: false,
})

export class EclLanguageItem {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() path: string;
  @Prop() langCode: string;
  @Prop() language: string;
  @Prop() active: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-site-header__language-item`,
      `sc-ecl-site-header-${this.theme}`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  render() {
    return (
      <li class={this.getClass()}>
        <a
          href={this.path}
          class={`ecl-link ecl-link--standalone ecl-site-header__language-link sc-ecl-site-header-${this.theme} ${this.active ? 'ecl-site-header__language-link--active' : ''}`}
        >
          <span class={`ecl-site-header__language-link-code sc-ecl-site-header-${this.theme}`}>
            {this.langCode}
          </span>
          <span class={`ecl-site-header__language-link-label sc-ecl-site-header-${this.theme}`}>
            {this.language}
          </span>
        </a>
      </li>
    );
  }
}
