import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ecl-news-ticker-item',
  shadow: false,
  scoped: false,
})
export class EclNewsTickerItem {
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() path: string;

  getClass(): string {
    return [
      `ecl-news-ticker__slide`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <li 
        class={this.getClass()}
      >
      { this.path ?
        <ecl-link
          theme={this.theme}
          path={this.path}
          styleClass={`ecl-news-ticker__slide-text sc-ecl-news-ticker-${this.theme}`}
        >
          <slot></slot>
        </ecl-link> : <slot></slot>
      }
      </li>
    );
  }
}
