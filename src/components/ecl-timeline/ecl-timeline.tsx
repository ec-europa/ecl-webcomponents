import { Component, h, Prop, Element, State } from '@stencil/core';
import Timeline from "@ecl/timeline";
declare const ECL: any;

@Component({
  tag: 'ecl-timeline',
  styleUrls: {
    ec: './build/styles/ecl-timeline-ec.css',
    eu: './build/styles/ecl-timeline-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclTimeline {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() eclScript: boolean = true;
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
    if (this.el.querySelector('.ecl-timeline__item--headline')) {
      this.el.firstElementChild.classList.add('ecl-timeline--has-headline');
    }

    if (this.eclScript) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.Timeline = Timeline;

      const timeline = new Timeline(this.el.firstElementChild);
      timeline.init();
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