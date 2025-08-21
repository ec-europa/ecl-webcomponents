import { Component, Prop, h, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const ECL: any;

@Component({
  tag: 'ecl-banner',
  styleUrls: {
    ec: './build/styles/ecl-banner-ec.css',
    eu: './build/styles/ecl-banner-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})

export class EclBanner {
  @Element() el: HTMLElement;
  @Prop() colorMode: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() external: boolean = false;
  @Prop() fullWidth: boolean = false;
  @Prop() bannerTitle: string;
  @Prop() bannerTitleLink: string;
  @Prop() image: string;
  @Prop() eclScript: boolean = false;
  @Prop() sources: string;
  @Prop() tracks: string;
  @Prop() imageAlt: string;
  @Prop() ctaLabel: string;
  @Prop() ctaLink: string;
  @Prop() boxBackground: string = 'light';
  @Prop() horizontal: string = 'left';
  @Prop() vertical: string = 'center';
  @Prop() srPlay: string;
  @Prop() srPause: string;
  @Prop() fontColor: string = 'dark';
  @Prop() fontSize: string = 'm';
  @Prop() credit: string;
  @Prop() size: string = 'm';
  @Prop() ctaClicked: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-banner`,
      `ecl-banner--${this.size}`,
      `ecl-banner--box-bg-${this.boxBackground}`,
      `ecl-banner--h-${this.horizontal}`,
      `ecl-banner--v-${this.vertical}`,
      `ecl-banner--font-${this.fontSize}`,
      this.styleClass
    ];

    if (this.fullWidth) {
      styleClasses.push('ecl-banner--full-width');
    }
    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }
    if (!this.image && !this.sources && !this.tracks) {
      styleClasses.push('ecl-banner--no-media');
    }
    if (this.image || this.sources || this.tracks) {
      styleClasses.push(`ecl-banner--color-${this.fontColor}`);
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    if (this.sources || this.tracks) {
      const video = this.el.querySelector('video');
      if (video) {
        video.setAttribute('data-ecl-banner-video', '');
      }
    }
    if (this.eclScript) {
      const src = getAssetPath('./build/scripts/ecl-banner-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const banner = new ECL.Banner(this.el.firstElementChild);
        banner.init();
      };
      document.body.appendChild(script);
    }
  }

  componentDidRender() {
    if (this.el.querySelector('.ecl-banner__cta')) {
      this.el.querySelector('.ecl-banner__cta').addEventListener('click', () => {
        this.ctaClicked = true;
      });
    }
  }

  render() {
    const sources = this.sources ? JSON.parse(this.sources) : '';
    const tracks = this.tracks ? JSON.parse(this.tracks) : '';
    const videoSources =  sources ? sources.map((source) => (
      <source type={source.type} src={ source.src } />
    )) : '';
    const videoTracks =  tracks ? tracks.map((track) => (
      <track
        kind={track.kind}
        label={track.label}
        src={track.src}
        srclang={track.src_lang}
      />
    )) : '';
    return (
      <section class={this.getClass()}>
      { this.image && !this.sources && !this.tracks &&
        <figure class="ecl-banner__picture-container">
          <ecl-picture
            styleClass={`ecl-banner__picture sc-ecl-banner-${this.theme}`}
            image={this.image}
            imageAlt={this.imageAlt}
            imgClass={`ecl-banner__image sc-ecl-banner-${this.theme}`}
          >
            <slot name="sources"></slot>
          </ecl-picture>
        { this.credit &&
          <footer class="ecl-banner__credit" data-ecl-banner-footer>
            <div class="ecl-container">{this.credit}</div>
          </footer>
        }
        </figure>
      }
      { (this.sources || this.tracks) &&
        <div class="ecl-banner__video-container">
          <ecl-video
            autoplay
            loop
            poster={this.image}
            muted
            controls={false}
            styleClass={`ecl-banner__video sc-ecl-banner-${this.theme}`}
          >
            { ...videoSources }
            { ...videoTracks } 
          </ecl-video>
        { this.credit && 
          <div class="ecl-banner__credit" data-ecl-banner-footer>
            <div class="ecl-container">{ this.credit }</div>
          </div>
        }
          <ecl-button
            styleClass={`ecl-banner__play sc-ecl-banner-${this.theme}`}
            hideLabel
            type="button"
            variant="tertiary"
            data-ecl-banner-play
            containerExtraClasses={`sc-ecl-banner-${this.theme}`}
          >
            { this.srPlay }
            <ecl-icon
              styleClass={`sc-ecl-banner-${this.theme}`}
              slot="icon-after"
              icon="play-outline"
              size="m"
            >
            </ecl-icon>
          </ecl-button>
          <ecl-button
            styleClass={`ecl-banner__pause sc-ecl-banner-${this.theme}`}
            hideLabel
            type="button"
            variant="tertiary"
            data-ecl-banner-pause
            containerExtraClasses={`sc-ecl-banner-${this.theme}`}
          >
            { this.srPause }
            <ecl-icon
              styleClass={`sc-ecl-banner-${this.theme}`}
              slot="icon-after"
              icon="pause-outline"
              size="m"
            >
            </ecl-icon>
          </ecl-button>
        </div>
      }
        <div class="ecl-container ecl-banner__info">
          <div
            class="ecl-banner__container"
            data-ecl-banner-container
          >
            <div class="ecl-banner__content">
            { this.bannerTitle &&
              <div class="ecl-banner__title">
                <span class="ecl-banner__title-text">
                { this.bannerTitleLink ?
                  <ecl-link
                    path={this.bannerTitleLink}
                    variant="standalone"
                    >
                      { this.bannerTitle }
                    </ecl-link> : this.bannerTitle
                }
                </span>
              </div>
            }
              <p class="ecl-banner__description">
                <span class="ecl-banner__description-text">
                  <slot></slot>
                </span>
              </p>
            { this.ctaLabel && this.ctaLink ?
              <div class="ecl-banner__cta">
                <ecl-link
                  theme={this.theme}
                  variant="cta"
                  path={this.ctaLink}
                  style-class={`ecl-banner__link-cta sc-ecl-banner-${this.theme}`}
                >
                  {this.ctaLabel}
                  <ecl-icon
                    icon="corner-arrow"
                    slot="icon-after"
                    rotate="90"
                  ></ecl-icon>
                </ecl-link>
              </div>
            : '' }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
