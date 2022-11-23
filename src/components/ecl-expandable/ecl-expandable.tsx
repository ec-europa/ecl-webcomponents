import { Component, h, Prop, Host, Element, getAssetPath } from '@stencil/core';
declare const ECL: any;

@Component({
  tag: 'ecl-expandable',
  styleUrls: {
    ec: 'build/styles/ecl-expandable-ec.css',
    eu: 'build/styles/ecl-expandable-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build/scripts'],
})

export class EclExpandable {
  @Element() el: HTMLElement;
  @Prop() styleClass: string;
  @Prop() eclScript: boolean;
  @Prop() isExpanded: boolean;
  @Prop() iconPath: string;
  @Prop() labelCollapsed: string;
  @Prop() labelExpanded: string;
  @Prop() theme: string = 'ec';

  componentWillLoad() {
    const src = getAssetPath('./scripts/ecl-expandable-vanilla.js');
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
      <Host
        type="primary"
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
            path={this.iconPath}
            icon="corner-arrow"
            size="fluid"
            transform="rotate-180"
            style-class="ecl-button__icon ecl-button__icon--after"
          ></ecl-icon>
        </ecl-button>
        <div
          class="ecl-expandable__content"
          id="expandable-example-content"
          hidden
        >
          <slot></slot>
        </div>
      </Host>
    )
  }
}