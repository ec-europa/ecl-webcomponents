import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-grid',
  styleUrls: {
    ec: './build/styles/ecl-grid-ec.css',
    eu: './build/styles/ecl-grid-eu.css',
  },
  shadow: false,
  scoped: false,
})

export class EclGrid {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() columns: number = 12;
  @Prop() breakpoint: string;
  @Prop() row: boolean = false;
  @Prop() container: boolean = false;

  getClass(): string {
    let styleClasses = [];

    if (this.row || this.container) {
      if (this.row) {
        styleClasses = [
          `ecl-row`,
          this.styleClass,
        ];
      } else {
         styleClasses = [
          `ecl-container`,
          this.styleClass,
        ];
      }
    } else {
      if (!this.breakpoint) {
        styleClasses = [
          `ecl-col-${this.columns}`,
          this.styleClass,
        ];
      } else {
        styleClasses = [
          `ecl-col-${this.breakpoint}-${this.columns}`,
          this.styleClass,
        ];
      }
    }
    
    return styleClasses.join(' ');
  }

  componentDidRender() {
    const parent = this.el.parentNode;
    while (this.el.firstChild) parent.insertBefore(this.el.firstChild, this.el);
    parent.removeChild(this.el);
  }

  render() {
    return (
      <div class={this.getClass()}>
        <slot></slot>
      </div>
    )
  }
}
