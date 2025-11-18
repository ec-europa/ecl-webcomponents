import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-spotlight',
  styleUrls: {
    ec: './build/styles/ecl-spotlight-ec.css',
    eu: './build/styles/ecl-spotlight-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclSpotlight {
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() hasAnchor: boolean = true;
  @Prop() colorMode: string = '';
  @Prop() path: string;
  @Prop() credit: string;
  @Prop() image: string;
  @Prop() imageAlt: string;
  @Prop() fullWidth: boolean = false;
  @Prop() header: string;
  @Prop() fontSize: string = 'm';

  getClass(): string {
    const styleClasses = [
      `ecl-spotlight`,
      this.styleClass
    ];

    if (this.fontSize !== 'm') {
      styleClasses.push(`ecl-spotlight--font-${this.fontSize}`);
    }
    if (this.fullWidth) {
      styleClasses.push('ecl-spotlight--full-width');
    }
    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <section class={this.getClass()}>
      { this.header &&
        <div class="ecl-spotlight__header">
          <div class="ecl-container">
            <slot name="header"></slot>
          </div>
        </div>
      }
        <a href={this.path} class="ecl-spotlight__link">
        { this.image &&
          <figure class="ecl-spotlight__picture-container">
            <ecl-picture
              styleClass={`ecl-spotlight__picture sc-ecl-spotlight-${this.theme}`}
              image={this.image}
              imageAlt={this.imageAlt}
              imgClass={`ecl-spotlight__image sc-ecl-spotlight-${this.theme}`}
              data-ecl-spotlight-image
            >
              <slot name="sources"></slot>
            </ecl-picture>
          </figure>
        }
          <div
            class="ecl-spotlight__container"
            data-ecl-spotlight-container
          >
            <div class="ecl-container">
              <div class="ecl-spotlight__title">
                <slot></slot>
              </div>
            { this.hasAnchor &&
              <div class="ecl-spotlight__anchor" aria-hidden="true"></div>
            }
            {this.credit && 
              <footer class="ecl-spotlight__credit">
                { this.credit }
              </footer>
            }
            </div>
          </div>
        </a>
      </section>
    )
  }
}
