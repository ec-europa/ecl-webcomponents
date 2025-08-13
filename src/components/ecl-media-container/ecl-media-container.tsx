import { Component, h, Prop, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const ECL: any;

@Component({
  tag: 'ecl-media-container',
  styleUrls: {
    ec: './build/styles/ecl-media-container-ec.css',
    eu: './build/styles/ecl-media-container-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})
export class EclMediaContainer {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() imageAlt: string;
  @Prop() image: string;
  @Prop() fullWidth: boolean = false;
  @Prop() sources: string;
  @Prop() tracks: string;
  @Prop() autoplay: boolean = false;
  @Prop() hasCaption: boolean = false;
  @Prop() ratio: string = '';
  @Prop() srPlay: string;
  @Prop() srPause: string;
  @Prop() srVideoPlayer: string;
  @Prop() srVideoAudio: string;
  @Prop() eclScript: boolean = false;
  @Prop() embeddedMedia: boolean = false;

  getClass(): string {
    const styleClass = [
      `ecl-media-container`,
      this.styleClass
    ];

    return styleClass.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    if (this.eclScript && (this.embeddedMedia || (this.sources || this.tracks))) {
      this.el.firstElementChild.setAttribute('data-ecl-media-container', "");
      if (this.sources || this.tracks) {
        const video = this.el.querySelector('video');
        if (video) {
          video.setAttribute('data-ecl-media-container-video', '');
        }
      }
      const src = getAssetPath('./build/scripts/ecl-media-container-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const mediaContainer = new ECL.MediaContainer(this.el.firstElementChild);
        mediaContainer.init();
      };
      document.body.appendChild(script);
    }

    const iframe = this.el.querySelector('iframe');
    if (iframe) {
      const iframeWrap = document.createElement('div');
      iframeWrap.classList.add('ecl-media-container__media', `sc-ecl-media-container-${this.theme}`);
      iframe.classList.add(`sc-ecl-media-container-${this.theme}`);
      iframe.insertAdjacentElement('beforebegin', iframeWrap);
      iframeWrap.appendChild(iframe);
      if (this.ratio) {
        iframeWrap.classList.add(`ecl-media-container__media--ratio-${this.ratio}`);
      }
    }

    const expandable = this.el.querySelector('.ecl-expandable');
    if (expandable) {
      expandable.classList.add('ecl-media-container__expandable', `sc-ecl-media-container-${this.theme}`);
      const expandableContent = expandable.querySelector('.ecl-expandable__content');
      if (expandableContent) {
        expandableContent.classList.add(`sc-ecl-media-container-${this.theme}`);
        this.el.firstElementChild.setAttribute('aria-describedby', `${expandableContent.id}`);
      }
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
      <div class={this.getClass()}>
        <figure
          class={`ecl-media-container__figure${this.fullWidth ? ' ecl-media-container--full-width' : ''}`}
        >
        { this.image &&
          <ecl-picture
            styleClass={`ecl-media-container__picture sc-ecl-media-container-${this.theme}`}
            imgClass={`ecl-media-container__media sc-ecl-media-container-${this.theme}`}
            image={this.image}
            imageAlt={this.imageAlt}
          >
            <slot name="sources"></slot>
          </ecl-picture>
        }
        { sources && tracks &&
          <div class="ecl-media-container__video-wrapper">
            <ecl-video
              style-class={`ecl-media-container__media sc-ecl-media-container-${this.theme}`}
              poster={this.image}
              autoplay={this.autoplay}
              loop={this.autoplay}
              muted={this.autoplay}
              controls={!this.autoplay}
              sr-video-player={this.srVideoPlayer}
              sr-video-audio={this.srVideoAudio}
            >
              { ...videoSources }
              { ...videoTracks }
            </ecl-video>
          { this.autoplay &&
            <ecl-button
              hide-label
              type="button"
              variant="tertiary"
              container-extra-classes={`sc-ecl-media-container-${this.theme}`}
              style-class={`ecl-media-container__play sc-ecl-media-container-${this.theme}`}
              data-ecl-media-container-play
            >
              {this.srPlay}
              <ecl-icon
                slot="icon-after"
                icon="play-outline"
                size="m"
                style-class={`sc-ecl-media-container-${this.theme}`}
              ></ecl-icon>
            </ecl-button>
          }
          { this.autoplay &&
            <ecl-button
              hide-label
              type="button"
              variant="tertiary"
              container-extra-classes={`sc-ecl-media-container-${this.theme}`}
              style-class={`ecl-media-container__pause sc-ecl-media-container-${this.theme}`}
              data-ecl-media-container-pause
            >
              {this.srPause}
              <ecl-icon
                slot="icon-after"
                icon="pause-outline"
                size="m"
                style-class={`sc-ecl-media-container-${this.theme}`}
              ></ecl-icon>
            </ecl-button>
          }
          </div>
        }

          <slot name="embedded-media"></slot>
        { this.hasCaption ?
          <figcaption class="ecl-media-container__caption">
            <slot></slot>
          </figcaption> : ''
        }
        </figure>
        <slot name="expandable"></slot>
      </div>
    );
  }
}
