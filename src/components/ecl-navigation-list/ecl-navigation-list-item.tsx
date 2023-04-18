import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'ecl-navigation-list-item',
  shadow: false,
  scoped: true,
})

export class EclNavigationListItem {
  @Prop() theme: string = 'ec';
  @Prop() itemTitle: string;
  @Prop() image: string;
  @Prop() imageAlt: string;
  @Prop() styleClass: string;
  @Prop() border: boolean = true;


  getClass(): string {
    const styleClasses = [
      `sc-ecl-navigation-list-${this.theme}`,
      `ecl-navigation-list__item`,
      this.styleClass
    ];

    if (!this.border) {
      styleClasses.push('ecl-navigation-list__item--no-border');
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

  getImgAttr() {
    const attrs = {
      role: 'img',
    }

    if (this.imageAlt) {
      attrs['aria-label'] = this.imageAlt;
    }

    return attrs;
  }

  render() {
    return (
      <div class={this.getClass()}>
      { this.image ?
        <div
          class={this.getImgClass()}
          style={{ backgroundImage: "url(" + this.image + ")"}}
          {...this.getImgAttr()}
        ></div> : ''
      }
        <slot></slot>
      </div>
    );
  }
}