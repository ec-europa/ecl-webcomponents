import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-picture',
  styleUrls: {
    ec: './build/styles/ecl-picture-ec.css',
    eu: './build/styles/ecl-picture-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclPicture {
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() image: string;
  @Prop() imgClass: string;
  @Prop() imageAlt: string;
  @Prop() lazy: boolean = false;
  @Prop() zoom: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-picture`,
      this.styleClass
    ]

    if (this.zoom) {
      styleClasses.push('ecl-picture--zoom');      
    }

    return styleClasses.join(' ');
  }

  getImgAttr() {
    const attrs = {
      src: this.image,
    }

    if (this.imgClass) {
      attrs['class'] = this.imgClass;
    }

    if (this.imageAlt) {
      attrs['alt'] = this.imageAlt;
    }

    if (this.lazy) {
      attrs['loading'] = 'lazy';
    }

    return attrs;
  }

  render() {
    return (
      <picture class={this.getClass()}>
        <slot></slot>
        <img {...this.getImgAttr()} />
      </picture>
    )
  };
}

