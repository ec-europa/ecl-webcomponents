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
  @Prop({ mutable: true }) theme: string;
  @Prop() variant: string = 'image';
  @Prop() zebra: boolean = false;
  @Prop() column: number = 1;
  @Prop() styleClass: string;
  @Prop() colorMode: string;
  @Prop() fontSize: string = 'l';
  @Prop() centered: boolean = false;
  @Prop() iconInline: boolean = false;
  @Prop() iconList: boolean = false;
  @Prop() numberList: boolean = false;
  @Prop() counterReset: boolean = true;
  @Prop() counterStart: number = 0;

  getClass(): string {
    const styleClasses = [
      `ecl-list-illustration`,
      `ecl-list-illustration--font-${this.fontSize}`,
      `ecl-list-illustration--col-${this.column}`,
      this.styleClass
    ];

    if (this.zebra) {
      styleClasses.push('ecl-list-illustration--zebra');
    }

    if (this.centered) {
      styleClasses.push('ecl-list-illustration--centered');
    }

    if (this.iconInline) {
      styleClasses.push('ecl-list-illustration--icon-inline');
    }

    if (this.iconList) {
      styleClasses.push('ecl-list-illustration--icon-list');
    }

    if (this.numberList) {
      styleClasses.push('ecl-list-illustration--number-list');
    }

    if (this.numberList && this.counterReset) {
      styleClasses.push('ecl-list-illustration--number-list-reset');
    }

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

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
        {...(
          this.numberList && this.counterReset
            ? { style: { '--ecl-list-illustration-counter-start': `${this.counterStart}` } }
            : {}
        )} 
      >
        <slot></slot>
      </div>
    );
  }
}
