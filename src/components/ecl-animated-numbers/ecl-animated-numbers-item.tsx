import { Component, Prop, h, Element, Host } from '@stencil/core';

@Component({
  tag: 'ecl-animated-numbers-item',
  shadow: false,
  scoped: false,
})

export class EclAnimatedNumbersItem {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() category: string;
  @Prop() itemPrefix: string;
  @Prop() counterColor: boolean = true;
  @Prop() itemSuffix: string;
  @Prop() icon: string;
  @Prop() description: string;
  @Prop() itemPrefixLabel: string;
  @Prop() itemSuffixLabel: string;
  @Prop() value: string;

  getClass(): string {
    const styleClasses = [
      `ecl-animated-number`,
      `sc-ecl-animated-numbers-${this.theme}`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <Host
        class={this.getClass()}
        role="listitem"
      >
        <div class={`ecl-animated-number__header sc-ecl-animated-numbers-${this.theme}`}>
        { this.category &&
          <div class={`ecl-animated-number__category sc-ecl-animated-numbers-${this.theme}`}>
            {this.category}
          </div>
        }
        { this.icon &&
          <ecl-icon
            icon={this.icon}
            size="xl"
            family="phosphor"
            color={this.counterColor ? 'primary' : ''}
            style-class={`ecl-animated-number__icon sc-ecl-animated-numbers-${this.theme}`}
          >
          </ecl-icon>
        }
        </div>
        <div class={`ecl-animated-number__content sc-ecl-animated-numbers-${this.theme}`}>
          <span class={`ecl-animated-number__number sc-ecl-animated-numbers-${this.theme}`}>
          { this.itemPrefix &&
            <span class={`ecl-animated-number__prefix sc-ecl-animated-numbers-${this.theme}`}>
            { this.itemPrefixLabel &&
              <span class={`ecl-animated-number__prefix-label sc-ecl-animated-numbers-${this.theme}`}>
                {this.itemPrefixLabel}
              </span>
            }
            </span>
          }
          { this.value &&
            <span
              class={`ecl-animated-number__value sc-ecl-animated-numbers-${this.theme}`}
              data-ecl-animated-numbers-value
            >
              {this.value}
            </span>
          }
          { this.itemSuffix &&
            <span class={`ecl-animated-number__suffix sc-ecl-animated-numbers-${this.theme}`}>
            { this.itemSuffixLabel &&
              <span class={`ecl-animated-number__suffix-label sc-ecl-animated-numbers-${this.theme}`}>
                {this.itemSuffixLabel}
              </span>
            }
            </span>
          }
          </span>
        </div>
      { this.description &&
        <div class={`ecl-animated-number__description sc-ecl-animated-numbers-${this.theme}`}>
          {this.description}
        </div>
      }
      </Host>
    );
  }
}
