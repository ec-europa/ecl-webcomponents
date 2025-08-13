import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-video',
  styleUrls: {
    ec: './build/styles/ecl-video-ec.css',
    eu: './build/styles/ecl-video-eu.css',
  },
  shadow: false,
})

export class EclVideo {
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() videoTitle: string;
  @Prop() srVideoPlayer: string;
  @Prop() srVideoLabel: string;
  @Prop() poster: string;
  @Prop() controls: boolean = true;
  @Prop() autoplay: boolean = false;
  @Prop() loop: boolean = false;
  @Prop() muted: boolean = false;
  @Prop() zoom: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-video`,
      this.styleClass
    ];

    if (this.zoom) {
      styleClasses.push('ecl-video--zoom');
    }

    return styleClasses.join(' ');
  }

  getAttr() {
    const attrs: { [key: string]: any } = {
      playsInline: true, // note: `playsinline` must be camelCase in JSX
    };

    if (this.muted) attrs.muted = true;
    if (this.loop) attrs.loop = true;
    if (this.autoplay) attrs.autoplay = true;
    if (this.controls) attrs.controls = true;
    if (this.poster) {
      attrs['poster'] = this.poster;
    }

    if (this.videoTitle && this.srVideoLabel) {
      attrs['aria-label'] = `${this.videoTitle} ${this.srVideoLabel}`;
    } else if (this.videoTitle && this.srVideoPlayer) {
      attrs['aria-label'] = `${this.videoTitle} ${this.srVideoPlayer}`;
    }

    return attrs;
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <video
        class={this.getClass()}
        {...this.getAttr()}
      >
        <slot></slot>
      </video>
    )
  };
}

