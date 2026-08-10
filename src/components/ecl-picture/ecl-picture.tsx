import { Component, Prop, h, Element } from '@stencil/core';
import Picture from "@ecl/picture";
declare var ECL: any;

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
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() image: string;
  @Prop() imgClass: string;
  @Prop() imageAlt: string;
  @Prop() noScript: boolean = false;
  @Prop() imageAnchor: string = '';
  @Prop() debugPosition: boolean = false;
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

    if (this.imageAnchor) {
      attrs['style'] = {
        '--ecl-image-anchor': this.imageAnchor,
      };
    }

    if (this.debugPosition) {
      attrs['data-picture-debug'] = true;
    }

    return attrs;
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    if (!this.noScript && this.imageAnchor) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.Picture = Picture;

      const picture = new Picture(this.el.firstElementChild);
      picture.init();
    }

  }

  render() {
    return (
      <picture
        class={this.getClass()}
        {...(this.imageAnchor && {'data-picture-focal-point' : this.imageAnchor })}
      >
        <slot></slot>
        <img {...this.getImgAttr()} />
      </picture>
    )
  };
}

