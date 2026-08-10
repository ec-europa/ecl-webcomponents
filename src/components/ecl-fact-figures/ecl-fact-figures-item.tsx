import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'ecl-fact-figures-item',
  shadow: false,
  styleUrls: {
    ec: './build/styles/ecl-fact-figures-item-ec.css',
    eu: './build/styles/ecl-fact-figures-item-eu.css',
  },
  scoped: false,
})

export class EclFactFiguresItem {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() icon: string;
  @Prop() value: string;
  @Prop() itemTitle: string;
  @Prop() iconTransform: string;
  @Prop() sources: string = '';
  @Prop() sourcesLabel: string = '';

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
    const sourcesArray = this.sources ? JSON.parse(this.sources) : '';

    return (
      <div class={this.getClass()}>
        <ecl-icon
          icon={this.icon}
          size={this.iconSize || 'l'}
          rotate={this.iconTransform}
          style-class={`ecl-fact-figures__icon sc-ecl-fact-figures-${this.theme}`}
        ></ecl-icon>
      { this.value && (
        <div class={`ecl-fact-figures__value sc-ecl-fact-figures-${this.theme}`}>{this.value}
        { this.itemTitle && (
          <span class={`ecl-fact-figures__title sc-ecl-fact-figures-${this.theme}`}>{this.itemTitle}</span>
        )}
        </div>
      )}
      { (!this.value && this.itemTitle) &&
        <div class={`ecl-fact-figures__title sc-ecl-fact-figures-${this.theme}`}>{this.itemTitle}</div>
      }
        <div class={`ecl-fact-figures__description sc-ecl-fact-figures-${this.theme}`}>
          <slot></slot>
        </div>
        { this.sources &&
        <div class={`ecl-fact-figures__sources sc-ecl-fact-figures-${this.theme}`}>
        { this.sourcesLabel &&
          <span class={`ecl-fact-figures__sources-label sc-ecl-fact-figures-${this.theme}`}>
            {this.sourcesLabel}
          </span>
        }
          <ul class={`ecl-fact-figures__sources-list sc-ecl-fact-figures-${this.theme}`}>
          {sourcesArray.map((source) => (
            <li class={`ecl-fact-figures__sources-item sc-ecl-fact-figures-${this.theme}`}>
            { source.path ? (
              <ecl-link
                path={source.path}
                style-class={`ecl-fact-figures__source sc-ecl-fact-figures-${this.theme}`}
              >
                {source.label}
              </ecl-link>
              ) : (
              <span class={`ecl-fact-figures__source sc-ecl-fact-figures-${this.theme}`}>
                {source.label}
              </span>
              )
            }
            </li>
          ))}
          </ul>
        </div>
      }
      </div>
    );
  }
}
