import { Component, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'ecl-accordion-item',
  styleUrl: 'build/styles/ecl-accordion-item.css',
  shadow: false,
  scoped: true,
})

export class EclAccordionItem {
  @Element() el: HTMLElement;
  @Prop() styleClass: string;
  @Prop() label: string;
  @Prop() iconPath: string;
  @Prop({reflect:true}) expanded: boolean;
  @Prop() theme: string = 'ec';

  getClass(): string {
    return [
      `ecl-accordion__item`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <Host class={this.getClass()}>
        <h3 class="ecl-accordion__title">
          <button
            data-ecl-accordion-toggle
            aria-controls={`${this.el.id}-content`}
            class="ecl-accordion__toggle"
            aria-expanded={this.expanded ? 'true' : 'false'}
          >
            <span class="ecl-accordion__toggle-flex">
              <span class="ecl-accordion__toggle-indicator">
                <ecl-icon
                  icon={this.expanded ? "minus" : 'plus'}
                  path={this.iconPath}
                  size="m"
                  style-class="ecl-accordion__toggle-icon"
                  data-ecl-accordion-icon
                ></ecl-icon>
              </span>
              <span class="ecl-accordion__toggle-title">
                {this.label}
              </span>
            </span>
          </button>
        </h3>
        <div 
          class="ecl-accordion__content"
          role="region"
          id={`${this.el.id}-content`}
          hidden={this.expanded !== true}
        >
          <slot></slot>
        </div>
      </Host>
    )
  }
}