import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-blockquote',
  styleUrls: {
    ec: './build/styles/ecl-blockquote-ec.css',
    eu: './build/styles/ecl-blockquote-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclBlockquote {
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() image: string;
  @Prop() author: string;
  @Prop() imageAlt: string;
  @Prop() colorMode: string;
  @Prop() language: string = 'en';

  getClass(): string {
    const styleClasses = [
      `ecl-blockquote`,
      this.styleClass
    ];

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`)
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <figure class={this.getClass()}>
      { this.image ?
        <ecl-picture
          styleClass={`ecl-blockquote__picture sc-ecl-picture-${this.theme}`}
          imgClass={`ecl-blockquote__image sc-ecl-blockquote-${this.theme}`}
          image={this.image}
          imageAlt={this.imageAlt}
        >
          <slot name="sources"></slot>
        </ecl-picture>
      : ''}
        <div class="ecl-blockquote__body">
          <blockquote class="ecl-blockquote__quote">
            <p class="ecl-blockquote__citation" lang={this.language}>
              <slot></slot>
            </p>
          </blockquote>
          { this.author ?
          <footer class="ecl-blockquote__attribution">
            <cite class="ecl-blockquote__author">{this.author}</cite>
          </footer> : '' }
        </div>
      </figure>
    );
  }
}
