import { Component, Prop, h, Element, Fragment } from '@stencil/core';
import SliderPager from "@ecl/slider";
declare var ECL: any;

@Component({
  tag: 'ecl-slider-pager',
  styleUrls: {
    ec: './build/styles/ecl-slider-pager-ec.css',
    eu: './build/styles/ecl-slider-pager-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclSliderPager {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string = '';
  @Prop() srPrev: string = '';
  @Prop() srNext: string = '';
  @Prop() srPlay: string = '';
  @Prop() srPause: string = '';
  @Prop() dots: boolean = true;
  @Prop() playPause: boolean = false;
  @Prop() playIcon: string = 'play-filled';
  @Prop() pauseIcon: string = 'pause-filled';
  @Prop() size: string = 's';
  @Prop() playExtraClasses: string  = '';
  @Prop() pauseExtraClasses: string  = '';
  @Prop() dotExtraClasses: string  = '';
  @Prop() dotsExtraClasses: string  = '';
  @Prop() prevExtraClasses: string  = '';
  @Prop() prevExtraAttributes: string  = '';
  @Prop() nextExtraClasses: string  = '';
  @Prop() nextExtraAttributes: string  = '';
  @Prop() templateDataAttribute: string  = '';
  @Prop() hideLabel: boolean = false;
  @Prop() noScript: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-slider-pager`,
      this.styleClass
    ];

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    if (!this.noScript) {
    ;(window as any).ECL = (window as any).ECL || {};
    ECL.SliderPager = SliderPager;

    const sliderPager = new SliderPager(this.el.firstElementChild);
    sliderPager.init();
  }
}

  render() {
    return (
      <div class={this.getClass()}>
      { this.playPause &&
      <Fragment>
        <ecl-button
          variant="secondary"
          type="button"
          button-style="neutral"
          size={this.size}
          data-ecl-slogan-ticker-play
          style-class={`ecl-slider-pager__play sc-ecl-slider-pager-${this.theme}${this.playExtraClasses ? ' ' + this.playExtraClasses : ''}`}
          hideLabel
         >
          {this.srPlay}
          <ecl-icon
            icon={this.playIcon}
            size=""
            family="phosphor"
            slot="icon-after"
          ></ecl-icon>
        </ecl-button>
        <ecl-button
          variant="secondary"
          type="button"
          hide-label
          button-style="neutral"
          size={this.size}
          style-class={`ecl-slider-pager__pause sc-ecl-slider-pager-${this.theme}${this.pauseExtraClasses ? ' ' + this.pauseExtraClasses : ''}`}          
        >
          {this.srPause}
          <ecl-icon
            icon={this.pauseIcon}
            family="phosphor"
            slot="icon-after"
          ></ecl-icon>
        </ecl-button>
      </Fragment>
      }
        <ecl-button
          variant="tertiary"
          type="button"
          size={this.size}
          button-style="neutral"
          style-class={`ecl-slider-pager__prev sc-ecl-slider-pager-${this.theme}${this.prevExtraClasses ? ' ' + this.prevExtraClasses : ''}`}
          {...(this.hideLabel && { 'hide-label': '' })}
          {...(this.prevExtraAttributes && { [this.prevExtraAttributes] : '' })}
         >
          {this.srPrev}
          <ecl-icon
            icon="caret-left"
            family="phosphor"
            color="monochrome"
            slot="icon-after"
          ></ecl-icon>
        </ecl-button>

      { this.dots &&
        <div class={`ecl-slider-pager__dots${this.dotsExtraClasses ? ' ' + this.dotsExtraClasses : ''}`}></div>
      }

        <ecl-button
          variant="tertiary"
          type="button"
          button-style="neutral"
          size={this.size}
          style-class={`ecl-slider-pager__next sc-ecl-slider-pager-${this.theme}${this.nextExtraClasses ? ' ' + this.nextExtraClasses : ''}`}
          {...(this.hideLabel && { 'hide-label': '' })}
          {...(this.nextExtraAttributes && { [this.nextExtraAttributes] : '' })}
         >
          {this.srNext}
          <ecl-icon
            icon="caret-right"
            family="phosphor"
            color="monochrome"
            slot="icon-after"
          ></ecl-icon>
        </ecl-button>
      { this.dots &&
       <script
        type="text/template"
        data-ecl-slider-dot-template
        {...(this.templateDataAttribute && { [this.templateDataAttribute] : '' })}
      >
        <button class={`ecl-slider-pager__dot${this.dotExtraClasses ? ' ' + this.dotExtraClasses : ''}`}></button>
      </script>
      }
      </div>
    );
  }
}
