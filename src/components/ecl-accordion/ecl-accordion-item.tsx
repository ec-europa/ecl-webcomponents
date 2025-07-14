import { Component, Prop, Element, h, Event, EventEmitter } from '@stencil/core';

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
  @Prop() itemId: string;
  @Prop({reflect:true}) expanded: boolean;
  @Prop() theme: string;
  @Event() toggleItem: EventEmitter<string>;

  handleClick = () => {
    this.toggleItem.emit(this.itemId);
  };
  
  getClass(): string {
    return [
      `ecl-accordion__item`,
      `sc-ecl-accordion-${this.theme}`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    const titleId = `${this.itemId}-title`;
    const contentId = `${this.itemId}-content`;
    return (
      <div
        class={this.getClass()}
      >
        <div
          class={`ecl-accordion__title sc-ecl-accordion-${this.theme}`}
          id={titleId}
        >
          <button
            type="button"
            data-ecl-accordion-toggle
            onClick={this.handleClick}
            aria-controls={contentId}
            aria-expanded={this.expanded ? 'true' : 'false'}
            class={`ecl-accordion__toggle sc-ecl-accordion-${this.theme}`}
          >
            <span class={`ecl-accordion__toggle-flex sc-ecl-accordion-${this.theme}`}>
              <span class={`ecl-accordion__toggle-title sc-ecl-accordion-${this.theme}`}>
                {this.label}
              </span>
              <span class={`ecl-accordion__toggle-indicator sc-ecl-accordion-${this.theme}`}>
                <ecl-icon
                  icon={this.expanded ? "minus" : 'plus'}
                  theme={this.theme}
                  size="s"
                  style-class={`ecl-accordion__toggle-icon sc-ecl-accordion-${this.theme}`}
                  data-ecl-accordion-icon
                ></ecl-icon>
              </span>
            </span>
          </button>
        </div>
        <div 
          class={`ecl-accordion__content sc-ecl-accordion-${this.theme}`}
          role="region"
          id={contentId}
          aria-labelledby={titleId}
          hidden={this.expanded !== true}
        >
          <slot></slot>
        </div>
      </div>
    )
  }
}