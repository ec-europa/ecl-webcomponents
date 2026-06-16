import { Component, Prop, h, Element, State } from '@stencil/core';
import Accordion from "@ecl/accordion";
declare const ECL: any;

@Component({
  tag: 'ecl-accordion',
  styleUrls: {
    ec: './build/styles/ecl-accordion-ec.css',
    eu: './build/styles/ecl-accordion-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclAccordion {
  @Element() el: HTMLElement;
  @Prop() noScript: boolean = false;
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() sidebar: boolean = false;
  @Prop() colorMode: string = '';
  @State() openItemId: string;

  handleToggle = (itemId: string) => {
    this.openItemId = this.openItemId === itemId ? null : itemId;
  };

  getClass(): string {
    const styleClasses = [
      `ecl-accordion`,
      this.styleClass
    ];

    if (this.sidebar) {
      styleClasses.push(`ecl-accordion--sidebar`);
    }

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    const items = this.el.querySelectorAll('ecl-accordion-item');

    items.forEach((item: any, index: number) => { 
      const container = item.querySelector('.ecl-accordion__item');
      if (container) {
        container.classList.toggle('is-first', index === 0);
        container.classList.toggle('is-last', index === items.length - 1);
      }
    });

    if (!this.noScript && this.sidebar) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.Accordion = Accordion;
      const accordion = new Accordion(this.el.firstElementChild);
      accordion.init();
    }
  }

  render() {
    return (
      <div
        class={this.getClass()}
      >
        <slot></slot> 
      </div>
    )
  }
}
