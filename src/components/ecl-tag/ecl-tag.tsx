import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-tag',
  styleUrls: {
    ec: './build/styles/ecl-tag-ec.css',
    eu: './build/styles/ecl-tag-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclTag {
  @Prop() styleClass: string;
  @Prop() external: boolean = false;
  @Prop() variant: string = 'display';

  getClass(): string {
    return [
      `ecl-tag`,
      `ecl-tag--${this.variant}`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    if (this.variant === 'link' || this.variant === 'removable') {
      const style = document.createElement('style');
      if (this.variant === 'link') {    
        style.innerHTML = `.ecl-tag a { color: #fff; }
                            .ecl-tag__icon--external {
                              margin-inline-start: 0.5rem !important;
                              position: relative;
                              top: 1px;
                            }`;
      } else {
        style.innerHTML = `.ecl-tag .ecl-icon { fill: #fff; }
                          .ecl-tag__icon-close {
                            fill: map.get(theme.$color, 'white');
                            left: 0;
                            opacity: 1;
                            position: absolute;
                            top: 0;
                          }
                          .ecl-tag__icon-close-filled {
                            fill: map.get(theme.$color, 'white');
                            left: 0;
                            opacity: 0;
                            position: absolute;
                            top: 0;
                          };`
      }

      document.body.appendChild(style);
    }
  }

  getTag(variant) {
    switch (variant) {
      case 'link':
        return 'a'

      case 'display':
        return 'span';

      case 'removable':
        return 'button';

       default:
    }
  }

  getExternal() {
    return (
      <ecl-icon 
        icon="external"
        style-class="ecl-tag__icon ecl-tag__icon--external"
        size = "2xs"
      >
      </ecl-icon>
    )  
  }

  getRemovable() {
    return (
      <span
        class="ecl-tag__icon"
      >
        <ecl-icon 
          icon="close"
          style-class="ecl-tag__icon-close"
        >
        </ecl-icon>
        <ecl-icon
          icon="close-filled"
          style-class="ecl-tag__icon-close-filled"
        ></ecl-icon>
      </span>
    )
  }

  render() {
    const Element = this.getTag(this.variant);
    return (
      <Element 
        class={this.getClass()}
      >
        <slot></slot>
        { this.variant === 'link' && this.external ? <this.getExternal /> : '' }
        { this.variant === 'removable' ? <this.getRemovable /> : '' }
      </Element>
    )
  }
}