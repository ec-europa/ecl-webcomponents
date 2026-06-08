import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-grid',
  styleUrls: {
    ec: './build/styles/ecl-grid-ec.css',
    eu: './build/styles/ecl-grid-eu.css',
  },
  shadow: false,
  scoped: false,
})
export class EclGrid {
  @Element() el: HTMLElement;

  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';

  /**
   * Supported formats:
   *
   * columns="6"
   *
   * columns='{
   *   "s": 12,
   *   "m": 6,
   *   "l": 4
   * }'
   */
  @Prop() columns: number | string = 12;
  @Prop() breakpoint: string;
  @Prop() row: boolean = false;
  @Prop() container: boolean = false;

  private getColumnClasses(): string[] {
    // Legacy API
    if (this.breakpoint) {
      return [`ecl-col-${this.breakpoint}-${this.columns}`];
    }

    // Numeric API
    if (typeof this.columns === 'number') {
      return [`ecl-col-${this.columns}`];
    }

    const value = String(this.columns).trim();

    // Numeric string API
    if (/^\d+$/.test(value)) {
      return [`ecl-col-${value}`];
    }

    // Responsive JSON API
    try {
      const parsed = JSON.parse(value);

      if (
        parsed &&
        typeof parsed === 'object' &&
        !Array.isArray(parsed)
      ) {
        return Object.entries(parsed)
          .filter(([breakpoint, columns]) =>
            breakpoint && Number(columns) > 0
          )
          .map(
            ([breakpoint, columns]) =>
              `ecl-col-${breakpoint}-${columns}`
          );
      }
    } catch {
      // Invalid JSON, fall through
    }

    console.warn(
      '[ecl-grid] Invalid columns value:',
      this.columns
    );

    return ['ecl-col-12'];
  }

  getClass(): string {
    let styleClasses: string[] = [];

    if (this.row) {
      styleClasses = [
        'ecl-row',
        this.styleClass,
      ];
    } else if (this.container) {
      styleClasses = [
        'ecl-container',
        this.styleClass,
      ];
    } else {
      styleClasses = [
        ...this.getColumnClasses(),
        this.styleClass,
      ];
    }

    return styleClasses.filter(Boolean).join(' ');
  }

  componentDidRender() {
    const parent = this.el.parentNode;

    if (!parent) {
      return;
    }

    while (this.el.firstChild) {
      parent.insertBefore(this.el.firstChild, this.el);
    }

    parent.removeChild(this.el);
  }

  render() {
    return (
      <div class={this.getClass()}>
        <slot></slot>
      </div>
    );
  }
}