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
  @Prop() sources: string = '';
  @Prop() sourcesLabel: string = '';

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

  render() {
    const sourcesArray = this.sources ? JSON.parse(this.sources) : '';

    return (
      <div class={this.getClass()}>
        <div class="ecl-fact-figures__items">
          <slot></slot>
        </div>
      { this.sources &&
        <div class="ecl-fact-figures__sources">
        { this.sourcesLabel &&
          <span class="ecl-fact-figures__sources-label">
            {this.sourcesLabel}
          </span>
        }
          <ul class="ecl-fact-figures__sources-list">
          {sourcesArray.map((source) => (
            <li class="ecl-fact-figures__sources-item">
            { source.path ? (
              <ecl-link
                path={source.path}
                style-class={`ecl-fact-figures__source sc-ecl-fact-figures-${this.theme}`}
              >
                {source.label}
              </ecl-link>
              ) : (
              <span class="ecl-fact-figures__source">
                {source.label}
              </span>
              )
            }
            </li>
          ))}
          </ul>
        </div>
      }
      { this.viewAllLinkPath && this.viewAllLinkLabel ? 
        <div class="ecl-fact-figures__view-all">
          <ecl-link
            variant="standalone"
            styleClass={`ecl-fact-figures__view-all-link sc-ecl-fact-figures-${this.theme}`}
            path={this.viewAllLinkPath}
          >
            <ecl-icon
              icon="arrow-left"
              size="xs"
              flip="horizontal"
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
