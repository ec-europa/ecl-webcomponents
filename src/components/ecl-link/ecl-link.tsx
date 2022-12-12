import { Component, h, Prop} from '@stencil/core';

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
  @Prop() theme: string = 'ec';
  @Prop() path: string;
  @Prop() styleClass: string;
  @Prop() variant: string = 'default';
  @Prop() titleAttr: string;
  @Prop() external: boolean = false;

  getClass(): string {
    return [
      `ecl-link`,
      `ecl-link--${this.variant}`,
      this.styleClass
    ].join(' ');
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
