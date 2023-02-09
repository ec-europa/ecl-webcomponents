import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-date-block',
  styleUrls: {
    ec: './build/styles/ecl-date-block-ec.css',
    eu: './build/styles/ecl-date-block-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclDateBlock {
  @Prop() styleClass: string = '';
  @Prop() variant: string = 'default';
  @Prop() theme: string = 'ec';
  @Prop() day: string;
  @Prop() month: string;
  @Prop() year: string;
  @Prop() monthFull: string;
  @Prop() dateTime: string;

  getClass(): string {
    return [
      `ecl-date-block`,
      `ecl-date-block--${this.variant}`,
      this.styleClass
    ].join(' ');
  }

  render() {
    return (
      <time class={this.getClass()}>
      { this.dateTime ? 
        <span class="ecl-date-block__daytime">
          {this.dateTime}
        </span> : '' }
      { this.day ?  
        <span
          class="ecl-date-block__day"
          aria-hidden="true"
          >
            {this.day}
        </span> : '' }
      { this.month ?
        <abbr
          title={this.monthFull}
          class="ecl-date-block__month"
          aria-hidden="true"
        >
          {this.month}
        </abbr> : '' }
      { this.year ?
        <span
          class="ecl-date-block__year"
          aria-hidden="true"
        >
          {this.year}
        </span> : '' }
      </time>
    )
  }
}
