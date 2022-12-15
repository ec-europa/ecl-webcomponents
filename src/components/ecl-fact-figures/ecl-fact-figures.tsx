import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'ecl-fact-figures',
  styleUrls: {
    ec: './build/styles/ecl-fact-figures-ec.css',
    eu: './build/styles/ecl-fact-figures-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclFactFigures {
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() columns: number = 3;
  @Prop() displayIcons: boolean = true;
  @Prop() withUtils: boolean = false;

  getClass(): string {
    return [
      `ecl-fact-figures`,
      `ecl-fact-figures--col-${this.columns}`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    if (this.withUtils && !document.querySelector('#ecl-utils-styles')) {
      const style = document.createElement('style');
      style.id = 'ecl-utils-styles';
      style.innerHTML = `@import "./build/styles/ecl-utilities-${this.theme}.css"`;
      document.body.appendChild(style);
    }
  }

  render() {
    return (
      <div class={this.getClass()}>
        <div class="ecl-fact-figures__items">
          <slot></slot>
        </div>
      </div>
    );
  }
}
