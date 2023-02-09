import { Component, h, Prop} from '@stencil/core';

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
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() icon: string;
  @Prop() value: string;
  @Prop() itemTitle: string;
  @Prop() iconTransform: string;

  getClass(): string {
    return [
      `ecl-fact-figures__item`,
      `sc-ecl-fact-figures-${this.theme}`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <div class={this.getClass()}>
        <ecl-icon
          icon={this.icon}
          size={this.theme === 'ec' ? 'm' : 'l'}
          transform={this.iconTransform}
          style-class={`ecl-fact-figures__icon sc-ecl-fact-figures-item-${this.theme}`}
        ></ecl-icon>
        <div class="ecl-fact-figures__value">{this.value}</div>
        <div class="ecl-fact-figures__title">{this.itemTitle}</div>
        <div class="ecl-fact-figures__description">
          <slot name="description"></slot>
        </div>
      </div>
    );
  }
}