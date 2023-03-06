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
  @Prop() theme: string = 'ec';

  getClass(): string {
    const styleClasses = [
      `ecl-pagination`,
      this.styleClass
    ]

    return styleClasses.join(' ');
  }

  componentDidRender() {
    const items = this.el.querySelectorAll('.ecl-pagination__item');
    if (items) {
      this.el.querySelector('.ecl-pagination__list').innerHTML = '';
      this.el.querySelector('.ecl-pagination__list').append(...items);
    }
  };

  render() {
    return (
      <div class={this.getClass()}>
        <ul class="ecl-pagination__list">
          <slot></slot>
        </ul>
      </div>
    )
  };
}

