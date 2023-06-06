import { Component, h, Prop, Element} from '@stencil/core';

@Component({
  tag: 'ecl-list-illustration',
  styleUrls: {
    ec: './build/styles/ecl-list-illustration-ec.css',
    eu: './build/styles/ecl-list-illustration-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclListIllustration {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() variant: string = 'image';
  @Prop() zebra: boolean = false;
  @Prop() column: number = 1;
  @Prop() styleClass: string;
  @Prop() centered: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-list-illustration`,
      `ecl-list-illustration--col-${this.column}`,
      this.styleClass
    ];

    if (this.zebra) {
      styleClasses.push('ecl-list-illustration--zebra');
    }

    if (this.centered) {
      styleClasses.push('ecl-list-illustration--centered');
    }

    return styleClasses.join(' ');
  }

  componentDidRender() {
    // Clean the html to make the zebra work,.
    const items = this.el.querySelectorAll('.ecl-list-illustration__item');
    if (items) {
      this.el.querySelector('.ecl-list-illustration').innerHTML = '';
      this.el.querySelector('.ecl-list-illustration').append(...items);
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
