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
  @Prop() fontStyle: 'italic' | 'lowercase' | 'uppercase' | 'capitalize' | 'overline' | 'underline' | 'strike' | undefined
  @Prop({ mutable: true }) theme: string;
  @Prop() alignment: 'left' | 'right' | 'center' | undefined;
  @Prop() color: 'primary' | 'secondary' | 'white' |' success' | 'error' | undefined;
  @Prop() level: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  @Prop() weight: 'thin' | 'extra-light' | 'light' | 'regular' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold' | 'black' | undefined; 
  @Prop() type: 'display' | 'heading' | 'paragraph' | 'microcopy' | undefined;
  @Prop({ mutable: true }) size: '10xl' | '9xl' | '8xl' |'7xl' | '6xl' | '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'l' | 'm' | 's' | 'xs' | undefined; 
  @Prop() highlighted: boolean = false;
  @Prop() enhance: boolean = false;
  @Prop() enhanceType: 'enhance' | 'strong' | 'light' = 'enhance';
  @Prop() colorMode: string = '';
  @Prop() colorModeTypography: string = '';
  @Prop() itemId: string;

  getClass(): string {
    let styleClasses = [this.styleClass];
    let effectiveSize = this.size; // make a copy so we don't mutate the prop

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    if (this.colorModeTypography) {
      styleClasses.push(`ecl-u-type-color-${this.colorModeTypography}`);
      this.color = undefined; // ⚠️ ideally avoid mutating this too
    }

    if (this.type) {
      if (this.type === 'paragraph') {
        styleClasses.push(`ecl-u-type-paragraph-${effectiveSize}`);
      } else if (this.type === 'heading' && this.level) {
        styleClasses.push(`ecl-u-type-${this.type}-${this.level}`);
      } else if (this.type === 'microcopy') {
        styleClasses.push(`ecl-u-type-microcopy-${effectiveSize}`);
      } else {
        styleClasses.push(`ecl-u-type-${this.type}`);
      }

      effectiveSize = undefined; // update only the local variable
    }

    if (effectiveSize) {
      styleClasses.push(`ecl-u-type-${effectiveSize}`);
    }

    if (this.weight) {
      styleClasses.push(`ecl-u-type-weight-${this.weight}`);
    }

    if (this.alignment) {
      styleClasses.push(`ecl-u-type-align-${this.alignment}`);
    }

    if (this.fontStyle) {
      styleClasses.push(`ecl-u-type-${this.fontStyle}`);
    }

    if (this.color) {
      styleClasses.push(`ecl-u-type-color-${this.color}`);
    }

    if (this.highlighted) {
      styleClasses.push(`ecl-u-type-highlight`);
    }

    if (this.enhance) {
      if (this.enhanceType === 'enhance') {
        styleClasses.push(`ecl-u-type-enhance`);
      } else {
        styleClasses.push(`ecl-u-type-enhance-${this.enhanceType}`);
      }
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
    this.size = this.size || 'm';
  }

  render() {
    const Tag = this.tag || 'div';
    return (
      <Tag class={this.getClass()} id={this.itemId ? this.itemId : null}>
        <slot></slot>
      </Tag>
    )
  }
}

