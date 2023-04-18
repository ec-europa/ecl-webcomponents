import { Component, h, Prop, Element} from '@stencil/core';

@Component({
  tag: 'ecl-navigation-list',
  styleUrls: {
    ec: './build/styles/ecl-navigation-list-ec.css',
    eu: './build/styles/ecl-navigation-list-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclNavigationList {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() column: number = 2;
  @Prop() styleClass: string;

  getClass(): string {
    const styleClasses = [
      `ecl-navigation-list`,
      `ecl-navigation-list--col-${this.column}`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  componentDidRender() {
    // Clean the html to make the zebra work,.
    const items = this.el.querySelectorAll('.ecl-navigation-list__item');
    if (items) {
      this.el.querySelector('.ecl-navigation-list').innerHTML = '';
      this.el.querySelector('.ecl-navigation-list').append(...items);
    }
    const blocks = this.el.querySelectorAll('.ecl-content-block');
    if (blocks) {
      blocks.forEach((block) => {
        block.classList.add('ecl-navigation-list__content-block', `sc-ecl-navigation-list-${this.theme}`);
      });
    }
  }

  render() {
    return (
      <div class={this.getClass()}>
        <slot></slot>
      </div>
    );
  }
}
