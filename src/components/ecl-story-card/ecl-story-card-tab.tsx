import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ecl-story-card-tab',
  shadow: false,
  scoped: false,
})

export class EclStoryCardTab {
  @Prop() styleClass: string = '';
  @Prop() picture: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() teaserLabel: string = '';
  @Prop() order: string = '0';

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  getClass(): string {
    const styleClasses = [
      'ecl-story-card__grid-item',
      `sc-ecl-story-card-${this.theme}`,
      this.styleClass
    ];

    if (this.order === '0') {
      styleClasses.push('ecl-story-card__grid-item--expanded');
    }

    return styleClasses.join(' ');
  }

  render() {
    return (
      <Host
        class={this.getClass()}
        role="listitem"
        data-ecl-story-card-grid-item={this.order}
      >
        <button
          class={`ecl-story-card__grid-card sc-ecl-story-card-${this.theme}`}
          data-ecl-story-card-grid-button={this.order}
          type="button"
          id="tab"
          role="tab"
          aria-selected={this.order === '0' ? "true" : "false"}
        >
        { this.picture &&
          <div class={`ecl-story-card__grid-image sc-ecl-story-card-${this.theme}`}>
            <ecl-picture
              image={this.picture}
              style-class={`ecl-story-card__picture sc-ecl-story-card-${this.theme}`}
              img-class={`sc-ecl-story-card-${this.theme}`}
            >
            </ecl-picture>
            <div class={`ecl-story-card__grid-loading-bar sc-ecl-story-card-${this.theme}`}>
              <div class={`ecl-story-card__grid-loading-bar-completion sc-ecl-story-card-${this.theme}`}></div>
            </div>
          </div>
        }
        { this.teaserLabel &&
          <div class={`ecl-story-card__grid-title-wrapper sc-ecl-story-card-${this.theme}`}>
            <div class={`ecl-story-card__grid-title sc-ecl-story-card-${this.theme}`}>
              {this.teaserLabel}
            </div>
          </div>
        }
        </button>
      </Host>
    )
  }
}