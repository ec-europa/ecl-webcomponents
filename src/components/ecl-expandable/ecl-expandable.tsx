import { Component, h, Prop, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const ECL: any;

@Component({
  tag: 'ecl-expandable',
  styleUrls: {
    ec: './build/styles/ecl-expandable-ec.css',
    eu: './build/styles/ecl-expandable-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})

export class EclExpandable {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() eclScript: boolean = false;
  @Prop() isExpanded: boolean = false;
  @Prop() labelCollapsed: string = '';
  @Prop() labelExpanded: string = '';
  @Prop() theme: string = 'ec';

  componentDidRender() {
    const p = this.el.querySelectorAll('p');

    if (p[0]) {
      p.forEach((paragraph) => {
        paragraph.classList.add(`sc-ecl-expandable-${this.theme}`);
      });
    }

    const src = getAssetPath('./build/scripts/ecl-expandable-vanilla.js');
    if (document.querySelector(`script[src="${src}"]`)) {
      document.querySelector(`script[src="${src}"]`).remove();
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      const expandable = new ECL.Expandable(this.el);
      expandable.init();
    };
    document.body.appendChild(script);
  }

  getClass(): string {
    return [
      `ecl-expandable`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <div
        class={this.getClass()}
      > 
        <ecl-button
          theme={this.theme}
          variant="secondary"
          style-class={`ecl-expandable__toggle sc-ecl-expandable-${this.theme}`}
          type="button"
          ariaControls={`${this.el.id}-content`}
          data-ecl-expandable-toggle
          data-ecl-label-expanded={this.labelExpanded}
          data-ecl-label-collapsed={this.labelCollapsed} 
        >

          <span
            class="ecl-button__label"
            data-ecl-label
          >
            {this.labelCollapsed}
          </span>
          <ecl-icon
            slot="icon-after"
            icon="corner-arrow"
            size="fluid"
            theme={this.theme}
            transform="rotate-180"
            style-class={`ecl-button__icon ecl-button__icon--after sc-ecl-button-${this.theme} sc-ecl-expandable-${this.theme}`}
          ></ecl-icon>
        </ecl-button>
        <div
          class="ecl-expandable__content"
          id={`${this.el.id}-content`}
          hidden
        >
          <slot></slot>
        </div>
      </div>
    )
  }
}