import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'ecl-navigation-list-item',
  shadow: false,
  scoped: true,
})

export class EclNavigationListItem {
  @Prop() theme: string = 'ec';
  @Prop() image: string;
  @Prop() imageAlt: string;
  @Prop() styleClass: string;
  @Prop() border: boolean = true;
  @Prop() colorMode: string;
  @Prop() variant: string;

  getClass(): string {
    const styleClasses = [
      `sc-ecl-navigation-list-${this.theme}`,
      `ecl-navigation-list__item`,
      this.styleClass
    ];

    if (!this.border) {
      styleClasses.push('ecl-navigation-list__item--no-border');
    }

    if (this.variant) {
      styleClasses.push(`ecl-navigation-list__item--${this.variant}`);
    }

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    return styleClasses.join(' ');
  }

  getImgClass(): string {
    const imgClasses = [
      `sc-ecl-navigation-list-${this.theme}`,
      `ecl-navigation-list__image`,
    ];

    return imgClasses.join(' ');
  }

  render() {
    return (
      <div class={this.getClass()}>
      { this.image ?
        <ecl-picture
          styleClass={`ecl-navigation-list__picture sc-ecl-navigation-list-${this.theme}`}
          image={this.image}
          imgClass={this.getImgClass()}
          imageAlt={this.imageAlt}
        >
          <slot name="sources"></slot>
        </ecl-picture> : ''
      }
        <slot></slot>
      </div>
    );
  }
}