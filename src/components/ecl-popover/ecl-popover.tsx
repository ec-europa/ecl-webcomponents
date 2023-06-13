import { Component, h, Prop, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const ECL: any;

@Component({
  tag: 'ecl-popover',
  styleUrls: {
    ec: './build/styles/ecl-popover-ec.css',
    eu: './build/styles/ecl-popover-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})
export class EclPopover {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() eclScript: boolean = false;
  @Prop() itemId: string;
  @Prop() toggleLabel: string;
  @Prop() list: boolean = false;
  @Prop() icon: string;
  @Prop() iconSize: string = 'fluid';
  @Prop() iconSprite: string = '';

  getClass(): string {
    const styleClasses = [
      `ecl-popover`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  getAttrs() {
    return {
      'aria-controls': this.itemId,
      'data-ecl-popover-toggle': 'data-ecl-popover-toggle',
      'aria-expanded': 'false',
    };
  }

  componentDidLoad() {
    if (this.el.querySelector('.ecl-popover__list')) {
      // Clean the html so that the script finds what it expects.
      const items = this.el.querySelectorAll('.ecl-popover__item');
      this.el.querySelector('.ecl-popover__list').innerHTML = '';
      this.el.querySelector('.ecl-popover__list').append(...items);
    }
    if (this.eclScript) {
      // Load the ECL vanilla js if not already present.
      const src = getAssetPath('./build/scripts/ecl-popover-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const popover = new ECL.Popover(this.el.firstElementChild);
        popover.init();
      };

      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <div 
        class={this.getClass()}
      >
        <a
          class={`ecl-link sc-ecl-link-${this.theme} ecl-link--standalone ecl-popover__toggle`}
          {...this.getAttrs()}
        >
        { this.icon ?
          <ecl-icon
            theme={this.theme}
            icon={this.icon}
            size={this.iconSize}
            style-class="ecl-link__icon--before"
            sprite={this.iconSprite}
          ></ecl-icon> : ''
        }
          {this.toggleLabel}
        </a>
        <div
          class="ecl-popover__container"
          id={this.itemId}
          hidden
        >
          <div class="ecl-popover__content">
          { this.list ?
            <ul class="ecl-popover__list">
              <slot></slot>
            </ul> : ''
          }
          { !this.list ?
            <slot></slot> : ''
          }
          </div>
        </div>
      </div>
    );
  }
}