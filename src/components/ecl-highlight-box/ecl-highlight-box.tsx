import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-highlight-box',
  styleUrls: {
    ec: './build/styles/ecl-highlight-box-ec.css',
    eu: './build/styles/ecl-highlight-box-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclHighlightBox {
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string = '';
  @Prop() itemTitle: string = '';
  @Prop() itemId: string = `ecl-highlight-box-${Math.random().toString(36).substr(2, 9)}`;
  @Prop() hasDescription: boolean = true;
  @Prop() linkLabel: string = '';
  @Prop() linkPath: string = '';
  @Prop() linkIcon: string = '';
  @Prop() titleIcon: string = '';
  @Prop() colorMode: string = '';

  getClass(): string {
    const styleClasses = [
      'ecl-highlight-box',
      this.styleClass,
    ];

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    return styleClasses.filter(Boolean).join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <article
        class={this.getClass()}
        id={this.itemId}
        aria-labelledby={`${this.itemId}-title`}
      >
      {(this.itemTitle || this.titleIcon) &&
        <header class="ecl-highlight-box__header">
        { this.titleIcon &&
          <div class="ecl-highlight-box__icon-wrapper">
            <ecl-icon
              icon={this.titleIcon}
              family="phosphor"
              style-class={`ecl-highlight-box__icon sc-ecl-highlight-box-${this.theme}`}
            >
            </ecl-icon>
          </div>
        }
        { this.itemTitle &&
          <div
            class="ecl-highlight-box__title"
            id={`${this.itemId}-title`}
          >
            {this.itemTitle}
          </div>
        }
        </header>
      }
      { (this.hasDescription || (this.linkLabel && this.linkPath)) &&
        <div class="ecl-highlight-box__body">
        { this.hasDescription &&
          <div class="ecl-highlight-box__description">
            <slot></slot>
          </div>
        }
        { (this.linkLabel && this.linkPath) &&
          <ecl-link
            path={this.linkPath}
            style-class={`ecl-highlight-box__link sc-ecl-highlight-box-${this.theme}`}
            variant="secondary-neutral"
          >
            {this.linkLabel}
          { this.linkIcon &&
            <ecl-icon
              icon={this.linkIcon}
              family="phosphor"
              slot="icon-after"
            ></ecl-icon>
          }
          </ecl-link>
        }
        </div>
      }
      </article>
    );
  }
}
