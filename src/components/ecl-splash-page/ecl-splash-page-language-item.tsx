import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-splash-page-language-item',
  shadow: false,
  scoped: false,
})

export class EclSplashPageLanguageItem {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() path: string;
  @Prop() langCode: string;
  @Prop() language: string;
  @Prop() active: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-splash-page__language-item`,
      `sc-ecl-splash-page-${this.theme}`,
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
        <a
          href={this.path}
          class={`ecl-link ecl-link--standalone ecl-splash-page__language-link sc-ecl-splash-page-${this.theme} ${this.active ? 'ecl-splash-page__language-link--active' : ''}`}
        >
          <span class={`ecl-splash-page__language-link-code sc-ecl-splash-page-${this.theme}`}>
            {this.langCode}
          </span>
          <span class={`ecl-splash-page__language-link-label sc-ecl-splash-page-${this.theme}`}>
            {this.language}
          </span>
        </a>
      </li>
    );
  }
}
