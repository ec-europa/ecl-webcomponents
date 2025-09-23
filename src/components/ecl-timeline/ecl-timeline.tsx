import { Component, h, Prop, Element, State } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const ECL: any;

@Component({
  tag: 'ecl-timeline',
  styleUrls: {
    ec: './build/styles/ecl-timeline-ec.css',
    eu: './build/styles/ecl-timeline-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})
export class EclTimeline {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() eclScript: boolean = false;
  @Prop() colorMode: string;
  @State() toBeToggled: boolean = false;

  getClass(): string {
    const styleClasses = [
      `ecl-timeline`,
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
    if (this.eclScript) {
      // Load the ECL vanilla js if not already present.
      const src = getAssetPath('./build/scripts/ecl-timeline-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const timeline = new ECL.Timeline(this.el.firstElementChild);
        timeline.init();
      };

      document.body.appendChild(script);
    }

    const toggle = this.el.querySelector('.ecl-timeline__item--toggle');

    if (toggle) {
      toggle.addEventListener('click', () => {
        this.toBeToggled = true;
      });
    }
  }

  componentDidRender() {
    const items = this.el.querySelectorAll('.ecl-timeline__item');
    this.el.querySelector('.ecl-timeline').innerHTML = '';
    this.el.querySelector('.ecl-timeline').append(...items);
  }

  render() {
    return (
      <ol 
        class={this.getClass()}
        data-ecl-timeline
      >
        <slot></slot>
      </ol>
    );
  }
}