import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-pagination',
  styleUrls: {
    ec: './build/styles/ecl-pagination-ec.css',
    eu: './build/styles/ecl-pagination-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclPagination {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;

  getClass(): string {
    const styleClasses = [
      `ecl-pagination`,
      this.styleClass
    ]

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <div
        class={this.getClass()}
        role="list"
      >
        <div class="ecl-pagination__list">
          <slot></slot>
        </div>
      </div>
    )
  };
}

