import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ecl-popover-item',
  shadow: false,
  scoped: false,
})
export class EclPopoverItem {
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() path: string;
  @Prop() icon: string;
  @Prop() iconSprite: string = '';
  @Prop() iconSize: string = 'fluid';

  getClass(): string {
    const styleClasses = [
      `ecl-popover__item`,
      this.styleClass,
      `sc-ecl-popover-${this.theme}`,
    ];

    return styleClasses.join(' ');
  }

  getLinkClass(): string {
    const linkClasses = [
      'ecl-popover__link',
      `sc-ecl-popover-${this.theme}`,
    ];

    if (this.icon) {
      linkClasses.push('ecl-link--icon');
    }

    return linkClasses.join(' ');
  }

  render() {
    return (
      <li 
        class={this.getClass()}
      >
        <ecl-link
          style-class={`sc-ecl-popover-${this.theme} ecl-popover__link`}
          variant="standalone"
          path={this.path}
        >
        { this.icon ?
          <ecl-icon
            style-class={`sc-ecl-popover-${this.theme} ecl-link__icon`}
            icon={this.icon}
            slot="icon-before"
            sprite={this.iconSprite || ''}
            size={this.iconSize}
          ></ecl-icon> : '' 
        }
          <slot></slot>
        </ecl-link>
      </li>
    );
  }
}