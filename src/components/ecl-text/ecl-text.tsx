import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-text',
  styleUrls: {
    ec: './build/styles/ecl-text-ec.css',
    eu: './build/styles/ecl-text-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclText {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() tag: 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | undefined;
  @Prop() theme: string = 'ec';
  @Prop() isBold: boolean = false;
  @Prop() level: 1 | 2 | 3 | 4 | 5 | undefined;
  @Prop() size: 'l' | 'm' | 's' | 'xs' | undefined;
  @Prop() itemId: string;

  getClass(): string {
    let styleClasses = [this.styleClass];

    if (this.level && !(this.size && this.tag === 'p')) {
      switch(this.level) {
        case 1:
          styleClasses.push('ecl-u-type-3xl');
          break;
    
        case 2:
          styleClasses.push('ecl-u-type-2xl');
          break;

        case 3:
          styleClasses.push('ecl-u-type-xl');
          break;

        case 4:
          styleClasses.push('ecl-u-type-prolonged-l');
          break;

        case 5:
          styleClasses.push('ecl-u-type-prolonged-m');
          break;

         default:
      }
    }

    if (this.size && this.tag === 'p') {
      styleClasses.push(`ecl-u-type-prolonged-${this.size}`);
    }

    if (styleClasses.length === 0) {
      styleClasses.push('ecl-u-type-prolonged-m');
    }

    if (this.isBold) {
      styleClasses.push('ecl-u-type-bold');
    }

    return styleClasses.join(' ');
  }

  render() {
    const Tag = this.tag;
    return (
      <Tag class={this.getClass()} id={this.itemId ? this.itemId : null}>
        <slot></slot>
      </Tag>
    )
  }
}

