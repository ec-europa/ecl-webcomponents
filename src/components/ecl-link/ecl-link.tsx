import { Component, h, Prop, Element} from '@stencil/core';

@Component({
  tag: 'ecl-link',
  styleUrls: {
    ec: './build/styles/ecl-link-ec.css',
    eu: './build/styles/ecl-link-eu.css',
  },
  shadow: false,
  scoped: false,
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

  render() {
    return (
      <a
        class={this.getClass()}
        href={this.path}
        title={this.titleAttr}
      >
        <slot name="icon-before"></slot>
        <slot></slot>
        <slot name="icon-after">{ this.external ? this.getExternal() : '' }</slot>
      </a>
    );
  }
}
