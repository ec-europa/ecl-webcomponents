import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ecl-menu-item',
  scoped: false,
})

export class EclMenuItem {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() external: boolean = false;
  @Prop() current: boolean = false;
  @Prop() hasChildren: boolean = false;
  @Prop() child: boolean = false;
  @Prop() link: string;
  @Prop() triggerAriaLabel: string;

  getClass(): string {
    let styleClasses = [
      'ecl-menu__item',
      `sc-ecl-menu-${this.theme}`,
      this.styleClass
    ];

    if (this.current) {
      styleClasses.push('ecl-menu__item--current');
    }

    if (this.child) {
      styleClasses = [
        'ecl-menu__subitem',
        `sc-ecl-menu-${this.theme}`,
        this.styleClass
      ];
      if (this.current) {
        styleClasses.push('ecl-menu__subitem--current');
      }
    }

    return styleClasses.join(' ');
  }

  getAttrs() {
    let attrs = {
      'data-ecl-menu-item': true,
      'aria-expanded': "false",
    };

    if (this.hasChildren) {
      attrs['data-ecl-has-children'] = true;
    }

    if (this.child) {
      delete attrs['data-ecl-menu-item'];
      attrs['data-ecl-menu-subitem'] = true;
    }

    return attrs;
  }

  getLinkClass(): string {
    let linkClasses = [
      'ecl-menu__link',
      `sc-ecl-menu-${this.theme}`,
    ];

    if (this.child) {
      linkClasses = [
        'ecl-menu__sublink',
        `sc-ecl-menu-${this.theme}`,
      ];

      if (this.current) {
        linkClasses.push('ecl-menu__sublink--current');
      }

      if (this.external) {
        linkClasses.push('ecl-link--icon-after');
      }
    }

    return linkClasses.join(' ');
  }

  render() {
    const buttonAttrs = this.hasChildren ? { 'data-ecl-menu-caret': true } : {};
    return (
      <li
        class={this.getClass()}
        {...this.getAttrs()}
      >
        <a
          href={this.link}
          class={this.getLinkClass()}
          data-ecl-menu-link
        >
          <slot></slot>
          { this.external ? 
            <ecl-icon
              icon="external"
              size="xs"
              theme={this.theme}
              styleClass={`sc-ecl-icon-${this.theme} sc-ecl-menu-${this.theme} ecl-menu__link-icon--external ${this.child ? 'ecl-menu__sublink-icon' : 'ecl-menu__link-icon'}`}
            ></ecl-icon> : ''
          }
        </a>
      { this.hasChildren ?
        <ecl-button 
          styleClass={`ecl-menu__button-caret sc-ecl-menu-${this.theme}`}
          type="button"
          theme={this.theme}
          variant="ghost"
          {...buttonAttrs}
        > 
          <ecl-icon
            icon="corner-arrow"
            size="xs"
            transform="rotate-180"
            slot="icon-after"
            theme={this.theme}
            styleClass={`sc-ecl-icon-${this.theme} sc-ecl-menu-${this.theme}`}
          >
          </ecl-icon>
        </ecl-button> : ''
      }
      { this.hasChildren ?
        <div
          class={`ecl-menu__mega sc-ecl-menu-${this.theme}`}
          data-ecl-menu-mega
        >
          <ul class={`ecl-menu__sublist sc-ecl-menu-${this.theme}`}>
            <slot name="sublist"></slot>
          </ul>
        </div> : ''
      }
      </li>
    )
  }
}