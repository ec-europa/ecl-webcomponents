import { Component, Prop, Element, h } from '@stencil/core';

@Component({
  tag: 'ecl-accordion-item',
  styleUrl: 'build/styles/ecl-accordion-item.css',
  shadow: false,
  scoped: false,
})

export class EclAccordionItem {
  @Element() el: HTMLElement;
  @Prop() styleClass: string;
  @Prop() label: string;
  @Prop() sidebar: boolean = false;
  @Prop() iconCollapsed: string = 'plus';
  @Prop() iconExpanded: string = 'minus';
  @Prop({reflect:true}) expanded: boolean;
  @Prop({ mutable: true }) theme: string;
  
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
    return (
      <details
        class={this.getClass()}
        {...(this.sidebar ? { "data-desktop-open": true } : {})}
      >
        <summary
          class={`ecl-accordion__toggle sc-ecl-accordion-${this.theme}`}
        >
          {this.label}
          <ecl-icon
            icon={this.iconCollapsed}
            size="s"
            family="phosphor"
            style-class={`ecl-accordion__toggle-icon ecl-accordion__toggle-icon--plus sc-ecl-accordion-${this.theme}`}
          ></ecl-icon>
          <ecl-icon
            icon={this.iconExpanded}
            size="s"
            family="phosphor"
            style-class={`ecl-accordion__toggle-icon ecl-accordion__toggle-icon--minus sc-ecl-accordion-${this.theme}`}
          ></ecl-icon>
        </summary>
        <div 
          class={`ecl-accordion__content sc-ecl-accordion-${this.theme}`}
        >
          <slot></slot>
        </div>
      </details>
    )
  }
}