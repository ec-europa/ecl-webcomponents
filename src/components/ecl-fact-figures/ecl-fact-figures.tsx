import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ecl-fact-figures',
  styleUrls: {
    ec: './build/styles/ecl-fact-figures-ec.css',
    eu: './build/styles/ecl-fact-figures-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})
export class EclFactFigures {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() columns: number = 3;
  @Prop() displayIcons: boolean = true;
  @Prop() colorMode: string = '';
  @Prop() centered: boolean = false;
  @Prop() viewAllLinkPath: string = '';
  @Prop() viewAllLinkLabel: string = '';
  @Prop() iconSize: string = 'm';
  @Prop() fontSize: string = 'l';

  getClass(): string {
    const styleClasses = [
      `ecl-fact-figures`,
      `ecl-fact-figures--col-${this.columns}`,
      this.styleClass
    ];

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    if (this.fontSize === 'm') {
      styleClasses.push('ecl-fact-figures--font-m');
    }

    if (this.centered) {
      styleClasses.push(`ecl-fact-figures--centered`);
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    const items = this.el.querySelectorAll('.ecl-fact-figures__item');
  
    if (items.length > 0) {
      items[0].classList.add('is-first');
    }
  }

  render() {
    return (
      <div class={this.getClass()}>
        <div class="ecl-fact-figures__items">
          <slot></slot>
        </div>
      { this.viewAllLinkPath && this.viewAllLinkLabel ? 
        <div class="ecl-fact-figures__view-all">
          <ecl-link
            variant="standalone"
            style-class="ecl-fact-figures__view-all-link"
            path={this.viewAllLinkPath}
          >
            <ecl-icon
              icon="arrow-left"
              size="xs"
              transform="flip-horizontal"
              slot="icon-after"
            >
            </ecl-icon>
            { this. viewAllLinkLabel }
          </ecl-link> 
        </div> : '' }
      </div>
    );
  }
}
