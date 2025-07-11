import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-spinner',
  styleUrls: {
    ec: './build/styles/ecl-spinner-ec.css',
    eu: './build/styles/ecl-spinner-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclSpinner {
  @Prop() styleClass: string = '';
  @Prop() variant: string = 'primary';
  @Prop() theme: string = 'ec';
  @Prop() centered: boolean = false;
  @Prop() visible: boolean = false;
  @Prop() overlay: boolean = false;
  @Prop() size: string = 'm';

  getClass(): string {
    const classes = [
      `ecl-spinner`,
      `ecl-spinner--${this.variant}`,
      `ecl-spinner--${this.size}`,
      this.styleClass
    ];

    if (this.centered) {
      classes.push('ecl-spinner--centered');
    }
    if (this.visible) {
      classes.push('ecl-spinner--visible');
    }

    return classes.join(' ');
  }

  getOverlayClass(): string {
    const overlayClasses = ['ecl-spinner__overlay'];

    if (this.visible) {
      overlayClasses.push('ecl-spinner__overlay--visible');
    }

    return overlayClasses.join(' ');
  }

  render() {
    return (
    <div>
    { this.overlay ? 
      <div class={this.getOverlayClass()}></div> : '' 
    }
      <div class={this.getClass()}>
        <svg
          class="ecl-spinner__loader"
          viewBox="25 25 50 50"
        >
          <circle
            class="ecl-spinner__circle"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke-width="4px"
            stroke-miterlimit="10"
            vector-effect="non-scaling-stroke"
          />
        </svg>
        <div class="ecl-spinner__text">
          <slot></slot>
        </div>
      </div>
    </div>
    )
  }
}
