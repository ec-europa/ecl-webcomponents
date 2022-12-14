import { Component, h, Prop, getAssetPath, Element } from '@stencil/core';
declare const ECL: any;

@Component({
  tag: 'ecl-media-container',
  styleUrls: {
    ec: './build/styles/ecl-media-container-ec.css',
    eu: './build/styles/ecl-media-container-eu.css',
  },
  shadow: false,
  scoped: false,
  assetsDirs: ['build'],
})
export class EclMediaContainer {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() alt: string;
  @Prop() description: string;
  @Prop() image: string;
  @Prop() fullWidth: boolean = false;
  @Prop() sources: string;
  @Prop() tracks: string;
  @Prop() ratio: string = '16-9';
  @Prop() eclScript: boolean = false;
  @Prop() withUtils: boolean = false;
  @Prop() embeddedMedia: boolean = false;

  getClass(): string {
    return [
      `ecl-media-container`,
      `ecl-media-container--${this.ratio}`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    if (this.withUtils && !document.querySelector('#ecl-utils-styles')) {
      const style = document.createElement('style');
      style.id = 'ecl-utils-styles';
      style.innerHTML = `@import "./build/styles/ecl-utilities-${this.theme}.css"`;
      document.body.appendChild(style);
    }
    if (this.eclScript) {
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
  }

  render() {
    const sources = this.sources ? JSON.parse(this.sources) : '';
    const tracks = this.tracks ? JSON.parse(this.tracks) : '';
    const alt = this.alt ? { alt: this.alt } : '';
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
      <figure
        class={this.getClass()}
      >
      { this.image ?
        <img
          class="ecl-media-container__media"
          src={this.image}
          { ...alt }
        />
        : '' }

      { sources && tracks ?
        <video 
          class="ecl-media-container__media"
          poster={this.image}
          controls
        >
          { ...videoSources }
          { ...videoTracks }
        </video> : '' }

        <slot name="embedded-media"></slot>

      { this.description ?
        <figcaption class="ecl-media-container__caption">{this.description}</figcaption>
        : '' }
      </figure> 
    );
  }
}
