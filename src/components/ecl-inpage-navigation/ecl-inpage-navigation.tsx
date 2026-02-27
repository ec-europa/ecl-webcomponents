import { Component, h, Prop, Element } from '@stencil/core';
import InpageNavigation from "@ecl/inpage-navigation";
declare const ECL: any;

@Component({
  tag: 'ecl-inpage-navigation',
  styleUrls: {
    ec: './build/styles/ecl-inpage-navigation-ec.css',
    eu: './build/styles/ecl-inpage-navigation-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclInpageNavigation {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() colorMode: string = '';
  @Prop() noScript: boolean = false;
  @Prop() inpageTitle: string;
  @Prop() inpageId: string;
  @Prop() items: string;

  getClass(): string {
    const styleClasses = [
      `ecl-inpage-navigation`,
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
      ECL.InpageNavigation = InpageNavigation;
      const inpageNavigation = new InpageNavigation(this.el.firstElementChild);
      inpageNavigation.init();
    }
  }

  get parsedItems() {
    return this.items ? JSON.parse(this.items) : [];
  }

  render() {
    return (
      <nav
        class={this.getClass()}
        data-ecl-inpage-navigation
        aria-labelledby={this.inpageId}
      >
        <div
          class="ecl-inpage-navigation__title"
          id={this.inpageId}
        >
          {this.inpageTitle}
        </div>
        <div class="ecl-inpage-navigation__body">
          <button
            class={`ecl-inpage-navigation__trigger sc-ecl-inpage-navigation-${this.theme}`}
            id={`${this.inpageId}-trigger`}
            aria-expanded="false"
            aria-controls="ecl-inpage-navigation-list"
            data-ecl-inpage-navigation-trigger
            aria-label=""
          >
            <span
              class="ecl-inpage-navigation__trigger-current"
              data-ecl-inpage-navigation-trigger-current
            ></span>
            <ecl-icon
              icon="corner-arrow"
              size="s"
              rotate="180"
              style-class={`ecl-inpage-navigation__trigger-icon sc-ecl-inpage-navigation-${this.theme}`}
            ></ecl-icon>
          </button>
          <ul
            class="ecl-inpage-navigation__list"
            data-ecl-inpage-navigation-list
            id={`${this.inpageId}-list`}
            role="list"
          >
        {this.parsedItems.length &&
          this.parsedItems.map(item => (
            <li>
              <ecl-inpage-navigation-item path={item.path}>{item.label}</ecl-inpage-navigation-item>
            </li>
          ))
        }
          </ul>
        </div>
      </nav>
    );
  }
}
