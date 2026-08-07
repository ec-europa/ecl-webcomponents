import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-highlighted-search',
  styleUrls: {
    ec: './build/styles/ecl-highlighted-search-ec.css',
    eu: './build/styles/ecl-highlighted-search-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclHighlightedSearch {
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string = '';
  @Prop() colorMode: string = '';
  @Prop() elId: string = `ecl-highlighted-search-${Math.random().toString(36).substring(2, 9)}`;
  @Prop() elTitle: string = '';
  @Prop() helperText: string = '';
  @Prop() submitLabel: string = '';
  @Prop() suggestionLabel: string = '';
  @Prop() hasDescription: boolean = false;
  @Prop() inputId: string = `${this.elId}-input`;
  @Prop() inputLabel: string = '';

  getClass(): string {
    const styleClasses = [
      'ecl-highlighted-search',
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
      <div
        class={this.getClass()}
        id={this.elId}
      >
        <div class="ecl-highlighted-search__content">
        {this.elTitle &&
          <div
            class="ecl-highlighted-search__title"
            id={`${this.elId}-title`}
          >
            {this.elTitle}
          </div>
        }
        { this.hasDescription &&
          <div class="ecl-highlighted-search__description ecl-content-color">
            <slot></slot>
          </div>
        }
          <form
            class="ecl-highlighted-search__form"
            role="search"
          >
            <div class="ecl-highlighted-search__form-content">
              <ecl-icon
                icon="magnifying-glass"
                family="phosphor"
                size="m"
                style-class={`ecl-highlighted-search__form-icon sc-ecl-highlighted-search-${this.theme}`}
              ></ecl-icon>
              <ecl-form-group
                label={this.inputLabel}
                hide-label
                style-class={`ecl-highlighted-search__form-group sc-ecl-highlighted-search-${this.theme}`}
              >
                <ecl-input
                  type="search"
                  width="l"
                  input-id={this.inputId}
                  input-class={`ecl-highlighted-search__form-input sc-ecl-highlighted-search-${this.theme}`}
                ></ecl-input>
                <ecl-button
                  variant="primary"
                  button-style="highlight"
                  type="submit"
                  size="m"
                  style-class={`ecl-highlighted-search__form-button sc-ecl-highlighted-search-${this.theme}`}
                >
                  {this.submitLabel}
                </ecl-button>
              </ecl-form-group>
            </div>
            <div class="ecl-highlighted-search__form-helper">
              {this.helperText}
            </div>
          </form>
          <div class="ecl-highlighted-search__suggestion">
            <span class="ecl-highlighted-search__suggestion-label">
              {this.suggestionLabel}
            </span>
            <ecl-tag-set>
              <slot name="tags"></slot>
            </ecl-tag-set>
          </div>
        </div>
      </div>
    );
  }
}
