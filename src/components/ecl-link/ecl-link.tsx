import { Component, h, Prop, Element} from '@stencil/core';

@Component({
  tag: 'ecl-link',
  styleUrls: {
    ec: './build/styles/ecl-link-ec.css',
    eu: './build/styles/ecl-link-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})

export class EclLink {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() path: string;
  @Prop() styleClass: string;
  @Prop() variant: string = 'default';
  @Prop() titleAttr: string;
  @Prop() external: boolean = false;
  @Prop() ariaLabel: string;
  @Prop() name: string;
  @Prop() download: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-link`,
      `ecl-link--${this.variant}`,
      this.styleClass
    ];

    if (this.el.querySelector('ecl-icon')) {
      styleClasses.push('ecl-link--icon');
      if (this.el.querySelector('ecl-icon').getAttribute('slot') === 'icon-after') {
        styleClasses.push('ecl-link--icon-after');
      } else {
        styleClasses.push('ecl-link--icon-before');
      }
    }

    return styleClasses.join(' ');
  }

  componentDidRender() {
    const dataAttrs = Object.keys(this.el.dataset);
    if (dataAttrs) {
      dataAttrs.forEach((attr) => {
        const link = this.el.firstElementChild as HTMLElement;
        link.dataset[attr] = '';
        delete this.el.dataset[attr];
      });
    }
    if (this.el.querySelector('ecl-icon')) {
      this.el.querySelector('ecl-icon svg').classList.add('ecl-link__icon');
      if (this.el.querySelector('ecl-icon').getAttribute('slot') === 'icon-after') {
        this.el.querySelector('ecl-icon svg').classList.add('ecl-link__icon--after');
      } else {
        this.el.querySelector('ecl-icon svg').classList.add('ecl-link__icon--before');
      }
    }
  }

  getExternal() {
    return (
      <ecl-icon 
        icon="external"
        style-class={`ecl-link__icon ecl-link__icon--after sc-ecl-link-${this.theme}`}
        size = "2xs"
      >
      </ecl-icon>
    )  
  }

  getAttrs() {
    const attrs = {
      'class': this.getClass(),
      'href': this.path,
    };

    if (this.titleAttr) {
      attrs['title'] = this.titleAttr;
    }
    if (this.download) {
      attrs['download'] = true;
    }
    if (this.ariaLabel) {
      attrs['aria-label'] = this.ariaLabel;
    }

    return attrs;
  }

  render() {
    return (
      <a {...this.getAttrs()}>
        <slot name="icon-before"></slot>
        <slot></slot>
        <slot name="icon-after">{ this.external ? this.getExternal() : '' }</slot>
      </a>
    );
  }
}
