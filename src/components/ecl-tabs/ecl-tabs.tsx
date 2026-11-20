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
  @Prop() noScript: boolean = false;
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
    if (!this.noScript) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.Tabs = Tabs;

      const tabs = new Tabs(this.el.firstElementChild);
      tabs.init();
    }

    const clones = this.el.querySelectorAll('.ecl-tabs__dropdown-list .ecl-tabs__item');
    Array.from(clones).forEach((clone) => {;
      clone.classList.add(`sc-ecl-tabs-${this.theme}`);
    });
    const dropdown = this.el.querySelector('.ecl-tabs__dropdown');
    dropdown?.classList.add(`sc-ecl-tabs-${this.theme}`);
    const dropdownList = this.el.querySelector('.ecl-tabs__dropdown-list');
    dropdownList?.classList.add(`sc-ecl-tabs-${this.theme}`);
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
              rotate="180"
            ></ecl-icon>
          </ecl-button>
        </div>
        <ecl-slider-pager
          styleClass={`ecl-tabs__controls sc-ecl-tabs-${this.theme}`}
          prevExtraClasses={`ecl-tabs__prev sc-ecl-tabs-${this.theme}`}
          nextExtraClasses={`ecl-tabs__next sc-ecl-tabs-${this.theme}`}
          srPrev={this.prevLabel}
          srNext={this.nextLabel}
          size="m"
          hideLabel
        ></ecl-slider-pager>
      </div>
    )
  }
}
