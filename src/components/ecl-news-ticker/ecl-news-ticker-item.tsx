import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'ecl-news-ticker-item',
  shadow: false,
  scoped: false,
})
export class EclNewsTickerItem {
  @Prop() icon: string;
  @Prop() image: string;
  @Prop() altAttr: string;
  @Prop() titleAttr: string;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() path: string;

  getClass(): string {
    return [
      `ecl-news-ticker__slide`,
      `sc-ecl-news-ticker-${this.theme}`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    this.theme =
      document.documentElement.getAttribute('data-ecl-theme') ??
      (this.theme || 'ec');
  }

  render() {
    return (
      <Host
        class={this.getClass()}
        role="listitem"
      >
      { this.image &&
        <img
          src={this.image}
          class={`ecl-news-ticker__icon sc-ecl-news-ticker-${this.theme}`}
          {...(this.altAttr && { 'alt': this.altAttr })}
          {...(this.titleAttr && {'title': this.titleAttr })}
        /> 
      }
      { this.icon &&
        <ecl-icon
          size="l"
          icon={this.icon}
          styleClass={`ecl-news-ticker__icon sc-ecl-news-ticker-${this.theme}`}
        ></ecl-icon>
      }
      { this.path ?
        <ecl-link
          theme={this.theme}
          path={this.path}
          styleClass={`ecl-news-ticker__slide-text sc-ecl-news-ticker-${this.theme}`}
        >
          <slot></slot>
        </ecl-link> : <slot></slot>
      }
      </Host>
    );
  }
}
