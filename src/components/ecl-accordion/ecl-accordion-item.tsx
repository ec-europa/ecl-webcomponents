import { Component, Prop, Element, h } from '@stencil/core';

@Component({
  tag: 'ecl-accordion-item',
  styleUrl: 'build/styles/ecl-accordion-item.css',
  shadow: false,
  scoped: false,
  assetsDirs: ['build'],
})

export class EclAccordionItem {
  @Element() el: HTMLElement;
  @Prop() styleClass: string;
  @Prop() label: string;
  @Prop({reflect:true}) expanded: boolean;
  @Prop() theme: string = 'ec';
  
  getClass(): string {
    return [
      `ecl-accordion__item`,
      `sc-ecl-accordion-${this.theme}`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <div class={this.getClass()}>
        <h3 class={`ecl-accordion__title sc-ecl-accordion-${this.theme}`}>
          <button
            data-ecl-accordion-toggle
            aria-controls={`${this.el.id}-content`}
            class={`ecl-accordion__toggle sc-ecl-accordion-${this.theme}`}
            aria-expanded={this.expanded ? 'true' : 'false'}
          >
            <span class={`ecl-accordion__toggle-flex sc-ecl-accordion-${this.theme}`}>
              <span class={`ecl-accordion__toggle-indicator sc-ecl-accordion-${this.theme}`}>
                <ecl-icon
                  icon={this.expanded ? "minus" : 'plus'}
                  theme={this.theme}
                  size="m"
                  style-class={`ecl-accordion__toggle-icon sc-ecl-accordion-${this.theme}`}
                  data-ecl-accordion-icon
                ></ecl-icon>
              </span>
              <span class={`ecl-accordion__toggle-title sc-ecl-accordion-${this.theme}`}>
                {this.label}
              </span>
            </span>
          </button>
        </h3>
        <div 
          class={`ecl-accordion__content sc-ecl-accordion-${this.theme}`}
          role="region"
          id={`${this.el.id}-content`}
          hidden={this.expanded !== true}
        >
          <slot></slot>
        </div>
      </div>
    )
  }
}