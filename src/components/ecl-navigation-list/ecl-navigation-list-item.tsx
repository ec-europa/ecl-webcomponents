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