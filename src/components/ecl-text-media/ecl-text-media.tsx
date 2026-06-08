import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ecl-text-media',
  styleUrls: {
    ec: './build/styles/ecl-text-media-ec.css',
    eu: './build/styles/ecl-text-media-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclTextMedia {
  @Prop({ mutable: true }) theme: string;
  @Prop() colorMode: string;
  @Prop() elId: string = `ecl-text-media-${Date.now().toString(16) + Math.random().toString(16).slice(2,10)}`;
  @Prop() styleClass: string;
  @Prop() variant: string;
  @Prop() fullWidth: boolean = false;
  @Prop() hasMedia: boolean = true;
  @Prop() itemTitle: string;
  @Prop() microTitle: string;
  @Prop() hasDescription: boolean = true;
  @Prop() mediaPosition: string = 'right';
  @Prop() linkLabel: string;
  @Prop() linkPath: string;
  @Prop() mediaCaption: string;
  @Prop() mediaAnchor: string;
  @Prop() mediaCredit: string; 
  @Prop() image: string;
  @Prop() sources: string;
  @Prop() tracks: string;
  @Prop() videoTitle: string;
  @Prop({ mutable: true }) linkType: string  = 'secondary-inverted';

  getClass(): string {
    const styleClasses = [
      `ecl-text-media`,
      this.styleClass
    ];

    if (this.variant === 'primary') {
       styleClasses.push(`ecl-text-media--${this.variant}`);
    }

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    if (this.fullWidth) {
      styleClasses.push('ecl-text-media--full-width');
    }

    if (this.mediaPosition !== 'right') {
      styleClasses.push(`ecl-text-media--position-${this.mediaPosition}`);
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    const colorModeLight = [
      'blue',
      'orange',
      'green',
      'blue-electric',
      'blue-ocean',
      'green-lemon',
      'warm-grey',
      'yellow-gold',
      'purple-violet',
      'red-tomato'
    ];

    if (this.variant === 'primary' || colorModeLight.includes(this.colorMode)) {
      this.linkType = 'primary-neutral';
    }

    return (
      <article
        class={this.getClass()}
      >
        <div class="ecl-text-media__content">
        { this.microTitle &&
          <div class="ecl-text-media__micro-title">
            {this.microTitle}
          </div>
        }
        { this.itemTitle &&
          <div class="ecl-text-media__title" id={`${this.elId}-title`}>
            {this.itemTitle}
          </div>
        }
        { this.hasDescription &&
          <div class="ecl-text-media__description">
            <slot></slot>
          </div>
        }
        { (this.linkPath && this.linkLabel) &&
          <ecl-link
            path={this.linkPath}
            style-class={`ecl-text-media__link sc-ecl-text-media-${this.theme}`}
            aria-describedby={`${this.elId}-title`}
            variant={this.linkType}
          >
            {this.linkLabel}
          </ecl-link>
        }
      </div>
      { this.hasMedia &&
        <ecl-media-container
          caption-position="over"
          style-class={`ecl-text-media__media_container sc-ecl-text-media-${this.theme}`}
          image={this.image}
          has-caption={this.mediaCaption !== ''}
          image-anchor={this.mediaAnchor}
          credit={this.mediaCredit}
          sources={this.sources}
          tracks={this.tracks}
          video-title={this.videoTitle}
        >
          {this.mediaCaption}
        </ecl-media-container>
      }
      </article>
    );
  }
}
