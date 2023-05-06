import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-spacing',
  styleUrls: {
    ec: './build/styles/ecl-spacing-ec.css',
    eu: './build/styles/ecl-spacing-eu.css',
  },
  shadow: false,
  scoped: false,
})

export class EclSpacing {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() breakpoint: string;
  @Prop() outer: boolean = true;
  @Prop() inner: boolean = false;
  @Prop() vertical: boolean = false;
  @Prop() horizontal: boolean = false;
  @Prop() direction: string = 'a';
  @Prop() value: string = 'm';

  getClass(): string {
    let baseClass = 'ecl-u-'; 
    let styleClasses = [];

    if (this.outer) {
      if (!this.breakpoint) {
        styleClasses.push(`${baseClass}m${this.direction}-${this.value}`);
      } else {
        styleClasses.push(`${baseClass}m${this.direction}-${this.breakpoint}-${this.value}`);
      }
    } 
    if (this.inner) {
      if (!this.breakpoint) {
        styleClasses.push(`${baseClass}p${this.direction}-${this.value}`);
      } else {
        styleClasses.push(`${baseClass}p${this.direction}-${this.breakpoint}-${this.value}`);
      }
    }
    
    return styleClasses.join(' ');
  }

  render() {
    return (
      <div class={this.getClass()}>
        <slot></slot>
      </div>
    )
  }
}

