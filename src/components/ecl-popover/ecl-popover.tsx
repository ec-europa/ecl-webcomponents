import { Component, h, Prop, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const POPOVER: any;

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
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() eclScript: boolean = false;
  @Prop() itemId: string;
  @Prop() toggleLabel: string;
  @Prop() close: boolean = false;
  @Prop() icon: string;
  @Prop() indicator: boolean = false;
  @Prop() indicatorValue: number;

  getClass(): string {
    const styleClasses = [
      `ecl-popover`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  getAttrs() {
    const attrs = {
      'aria-controls': this.itemId,
      'data-ecl-popover-toggle': 'data-ecl-popover-toggle',
      'aria-expanded': 'false',
    };

    if (this.indicator) {
      attrs['indicator'] = true;
    }

    if (this.indicatorValue) {
      attrs['hide-label'] = true;
      attrs["indicator-value"] = this.indicatorValue;
    }

    return attrs;
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    if (this.eclScript) {
      // Load the ECL vanilla js if not already present.
      const src = getAssetPath('./build/scripts/ecl-popover-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        ;(window as any).ECL = (window as any).ECL || {};
        const popover = new POPOVER.Popover(this.el.firstElementChild);
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
        <ecl-link
          style-class={`sc-ecl-link-${this.theme} sc-ecl-popover-${this.theme} ecl-popover__toggle`}
          variant="standalone"
          {...this.getAttrs()}
        >
        { this.icon &&
          <ecl-icon
            icon={this.icon}
            size="fluid"
            style-class="ecl-link__icon--before"
            slot="icon-after"
          ></ecl-icon>
        }
          {this.toggleLabel}
        </ecl-link>
        <div
          class="ecl-popover__container"
          id={this.itemId}
          hidden
        >
          <div class="ecl-popover__scrollable">
          { this.close &&
            <ecl-button
              variant="tertiary"
              type="button"
              style-class={`sc-ecl-popover-${this.theme} ecl-popover__close`}
              hide-label
              data-ecl-popover-close
            >
              Close
              <ecl-icon
                icon="close"
                slot="icon-after"
                style-class={`sc-ecl-popover-${this.theme}`}
              ></ecl-icon>
            </ecl-button>
          }
            <div class="ecl-popover__content">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    );
  }
}