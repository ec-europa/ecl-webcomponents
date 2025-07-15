import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ecl-fact-figures-item',
  shadow: false,
  styleUrls: {
    ec: './build/styles/ecl-fact-figures-item-ec.css',
    eu: './build/styles/ecl-fact-figures-item-eu.css',
  },
  scoped: true,
})

export class EclFactFiguresItem {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() icon: string;
  @Prop() value: string;
  @Prop() itemTitle: string;
  @Prop() iconTransform: string;

  getClass(): string {
   const styleClasses = [
      `ecl-fact-figures__item`,
      `sc-ecl-fact-figures-${this.theme}`,
      this.styleClass
    ];

    if (this.fontSize === 'm') {
      styleClasses.push('ecl-fact-figures__item--font-m');
    }

    return styleClasses.join(' ');
  }

  private get iconSize(): string {
    return this.el.closest('ecl-fact-figures').getAttribute('icon-size');
  }

  private get fontSize(): string {
    return this.el.closest('ecl-fact-figures').getAttribute('font-size');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <div class={this.getClass()}>
        <ecl-icon
          icon={this.icon}
          size={this.iconSize || 'l'}
          transform={this.iconTransform}
          style-class={`ecl-fact-figures__icon sc-ecl-fact-figures-item-${this.theme}`}
        ></ecl-icon>
      { this.value && (
        <div class="ecl-fact-figures__value">{this.value}</div>
      )}
      { this.itemTitle && (
        <div class="ecl-fact-figures__title">{this.itemTitle}</div>
      )}
        <div class="ecl-fact-figures__description">
          <slot></slot>
        </div>
      </div>
    );
  }
}