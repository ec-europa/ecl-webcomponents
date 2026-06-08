import { Component, Prop, h, Element } from '@stencil/core';
import AnimatedNumbers from "@ecl/animated-numbers";
declare var ECL: any;

@Component({
  tag: 'ecl-animated-numbers',
  styleUrls: {
    ec: './build/styles/ecl-animated-numbers-ec.css',
    eu: './build/styles/ecl-animated-numbers-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclAnimatedNumbers {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() border: boolean = false;
  @Prop() withBackground: boolean = false;
  @Prop() fullWidth: boolean = false;
  @Prop() noScript: boolean = false;
  @Prop({ mutable: true }) counterColor: boolean = true;
  @Prop() sources: string = '';
  @Prop() sourcesLabel: string = '';

  getClass(): string {
    const styleClasses = [
      `ecl-animated-numbers`,
      this.styleClass
    ];

    if (this.border) {
      styleClasses.push('ecl-animated-numbers--border');
    }

    if (this.withBackground || this.fullWidth) {
      styleClasses.push('ecl-animated-numbers--with-background');
      this.counterColor = false;
    }

    if (this.counterColor) {
      styleClasses.push('ecl-animated-numbers--counter-color');
    }

    if (this.fullWidth) {
      styleClasses.push('ecl-animated-numbers--full-width');
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    if (!this.noScript) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.AnimatedNumbers = AnimatedNumbers;

      const animatedNumbers = new AnimatedNumbers(this.el.firstElementChild);
      animatedNumbers.init();
    }
  }

  render() {
    const sourcesArray = this.sources ? JSON.parse(this.sources) : '';

    const content = (
      <article class="ecl-animated-numbers__wrapper">
        <div 
          class="ecl-animated-numbers__items"
          role="list"
        >
          <slot></slot>
        </div>
      </article>
    );

    return (
      <div class={this.getClass()}>
      {this.fullWidth ? (
        <ecl-grid container>
          {content}
        </ecl-grid>
      ) : (
        content
      )}
      { this.sources &&
        <footer class="ecl-animated-numbers__sources">
        { this.sourcesLabel &&
          <span class="ecl-animated-numbers__sources-label">
            {this.sourcesLabel}
          </span>
        }
          <ul class="ecl-animated-numbers__sources-list">
          {sourcesArray.map((source) => (
            <li class="ecl-animated-numbers__sources-item">
            { source.path ? (
              <ecl-link
                path={source.path}
                style-classes='ecl-animated-numbers__source'
              >
                {source.label}
              </ecl-link>
              ) : (
              <span class="ecl-animated-numbers__source">
                {source.label}
              </span>
              )
            }
            </li>
          ))}
          </ul>
        </footer>
      }
      </div>
    );
  }
}
