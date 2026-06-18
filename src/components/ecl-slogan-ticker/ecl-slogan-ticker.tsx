import { Component, Prop, h, Element } from '@stencil/core';
import SloganTicker from "@ecl/slogan-ticker";
declare var ECL: any;

@Component({
  tag: 'ecl-slogan-ticker',
  styleUrls: {
    ec: './build/styles/ecl-slogan-ticker-ec.css',
    eu: './build/styles/ecl-slogan-ticker-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclSloganTicker {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string = '';
  @Prop() srPlay: string = '';
  @Prop() srPause: string = '';
  @Prop() noScript: boolean = false;
  @Prop() colorMode: string = '';
  @Prop() items: string = '[]'; // JSON array of strings or objects

  getClass(): string {
    const styleClasses = [
      `ecl-slogan-ticker`,
      this.styleClass
    ];


    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    if (!this.noScript) {
    ;(window as any).ECL = (window as any).ECL || {};
    ECL.SloganTicker = SloganTicker;

    const sloganTicker = new SloganTicker(this.el.firstElementChild);
    sloganTicker.init();
  }
}

  private parseItems() {
    try {
      const parsed = JSON.parse(String(this.items));
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      // fallthrough
    }
    return [];
  }

  renderItems() {
    const items = this.parseItems();

    return items.map((it) => {
      const text = typeof it === 'string' ? it : it.text || '';
      return <li class="ecl-slogan-ticker__slide">{text}</li>;
    });
  }

  render() {
    return (
      <div class={this.getClass()}>
        <div class="ecl-slogan-ticker__viewport" data-ecl-slogan-ticker-slider>
          <ul class="ecl-slogan-ticker__track">
            {this.renderItems()}
          </ul>
        </div>
        <div class="ecl-slogan-ticker__controls"> 
          <ecl-button
            variant="tertiary"
            type="button"
            hide-label
            data-ecl-slogan-ticker-play
            style-class={`ecl-slogan-ticker__play ecl-slogan-ticker__button sc-ecl-slogan-ticker-${this.theme}`}
          >
            {this.srPlay}
            <ecl-icon
              icon="play-filled"
              size="l"
              family="phosphor"
              slot="icon-after"
            ></ecl-icon>
          </ecl-button>

          <ecl-button
            variant="tertiary"
            type="button"
            hide-label
            data-ecl-slogan-ticker-pause
            style-class={`ecl-slogan-ticker__pause ecl-slogan-ticker__button sc-ecl-slogan-ticker-${this.theme}`}          
          >
            {this.srPause}
            <ecl-icon
              icon="pause-filled"
              size="l"
              family="phosphor"
              slot="icon-after"
            ></ecl-icon>
          </ecl-button>
        </div>
      </div>
    );
  }
}
