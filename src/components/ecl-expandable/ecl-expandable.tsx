import { Component, h, Prop, Element, getAssetPath } from '@stencil/core';
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
  @Prop() withUtils: boolean = false;
  @Prop() isExpanded: boolean = false;
  @Prop() labelCollapsed: string = '';
  @Prop() labelExpanded: string = '';
  @Prop() theme: string = 'ec';

  componentWillLoad() {
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

    if (this.withUtils && !document.querySelector('#ecl-utils-styles')) {
      const style = document.createElement('style');
      style.id = 'ecl-utils-styles';
      style.innerHTML = `@import "./build/styles/ecl-utilities-${this.theme}.css"`;
      document.body.appendChild(style);
    }
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
          type="secondary"
          style-class="ecl-expandable__toggle"
          aria-controls={`${this.el.id}-content`}
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
            style-class={`ecl-button__icon ecl-button__icon--after sc-ecl-button-${this.theme}`}
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