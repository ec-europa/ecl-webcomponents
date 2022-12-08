import { Component, Host, h, Prop} from '@stencil/core';

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

  componentWillLoad() {
    const patchStyle = document.createElement('style');
    patchStyle.innerHTML = `.ecl-link .ecl-icon { vertical-align: middle; }
                            .ecl-link__icon--after { margin-inline-start: 0.5rem !important; }
                            .ecl-link__icon--before { margin-inline-end: 0.5rem !important; }`;
    document.body.appendChild(patchStyle);
  }

  getExternal() {
    return (
      <ecl-icon 
        icon="external"
        style-class="ecl-link__icon ecl-link__icon--after"
        size = "2xs"
      >
      </ecl-icon>
    )  
  }

  render() {
    return (
      <Host>
        <a
          class={this.getClass()}
          href={this.path}
          title={this.titleAttr}
        >
          <slot name="icon-before"></slot>
          <slot></slot>
          <slot name="icon-after">{ this.external ? this.getExternal() : '' }</slot>
        </a>
      </Host>
    );
  }
}
