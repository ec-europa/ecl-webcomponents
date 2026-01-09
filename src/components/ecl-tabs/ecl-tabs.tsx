import { Component, h, Prop, Element } from '@stencil/core';
import Tabs from "@ecl/tabs";
declare const ECL: any;

@Component({
  tag: 'ecl-tabs',
  styleUrls: {
    ec: './build/styles/ecl-tabs-ec.css',
    eu: './build/styles/ecl-tabs-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclTabs {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() eclScript: boolean = true;
  @Prop({ mutable: true }) theme: string;
  @Prop() colorMode: string = '';
  @Prop() prevLabel: string = 'Previous';
  @Prop() nextLabel: string = 'Next';
  @Prop() moreLabel: string = 'Show %d more items';
  @Prop() withoutContent: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-tabs`,
      this.styleClass
    ];

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    if (this.eclScript) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.Tabs = Tabs;

      const tabs = new Tabs(this.el.firstElementChild);
      tabs.init();
    }
  }

  render() {
    return (
      <div
        class={this.getClass()}
        {...(!this.withoutContent ? { 'data-ecl-tabs-with-content': '' } : {})}
      >
        <div class="ecl-tabs__container">
          <div class="ecl-tabs__list" role="tablist">
            <slot></slot>
            <div class="ecl-tabs__item ecl-tabs__item--more"></div>
          </div>
          <ecl-button
            style-class={`ecl-tabs__toggle sc-ecl-tabs-${this.theme}`}
            variant="tertiary"
            type="button"
            tabindex="-1"
          >
            {this.moreLabel}
            <ecl-icon
              slot="icon-after"
              icon="corner-arrow"
              size="fluid"
              rotate="rotate-180"
            ></ecl-icon>
          </ecl-button>
        </div>
        <div class="ecl-tabs__controls">
          <ecl-button
            variant="tertiary"
            type="button"
            hide-label
            style-class={`ecl-tabs__prev ecl-tabs__item--hidden sc-ecl-tabs-${this.theme}`}
          >
            {this.prevLabel}
            <ecl-icon
              slot="icon-after"
              icon="corner-arrow"
              size="s"
              rotate="rotate-270"
            ></ecl-icon>
          </ecl-button>
          <ecl-button
            variant="tertiary"
            type="button"
            hide-label
            style-class={`ecl-tabs__next ecl-tabs__item--hidden sc-ecl-tabs-${this.theme}`}
          >
            {this.nextLabel}
            <ecl-icon
              slot="icon-after"
              icon="corner-arrow"
              size="s"
              rotate="rotate-90"
            ></ecl-icon>
          </ecl-button>
        </div>
      </div>
    )
  }
}
