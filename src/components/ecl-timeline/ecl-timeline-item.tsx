import { Component, h, Prop, Element} from '@stencil/core';

@Component({
  tag: 'ecl-timeline-item',
  shadow: false,
  scoped: false,
})
export class EclTimelineItem {
  @Element() el: HTMLElement;
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() label: string;
  @Prop() type: string;
  @Prop() itemTitle: string;

  getClass(): string {
    const styleClasses = [
      `ecl-timeline__item`,
      `sc-ecl-timeline-${this.theme}`,
      this.styleClass
    ];

    if (this.type === 'toggle') {
      styleClasses.push(`ecl-timeline__item--toggle`);
    }

    return styleClasses.join(' ');
  }

  componentDidRender() {
    const element = this.el;

    let previousSibling = element.previousElementSibling;
    while (previousSibling) {
      if (previousSibling instanceof HTMLElement && previousSibling.getAttribute('type') === 'toggle') {
        this.el.firstElementChild.classList.add('ecl-timeline__item--collapsed');
        break;
      }
      previousSibling = previousSibling.previousElementSibling;
    }
  }

  render() {
    return (
      <li class={this.getClass()}>
      { this.type !== 'toggle' ?
        <div class={`ecl-timeline__tooltip sc-ecl-timeline-${this.theme}`}>
          <div class={`ecl-timeline__tooltip-arrow sc-ecl-timeline-${this.theme}`}></div>
        { this.label ?
          <div class={`ecl-timeline__label sc-ecl-timeline-${this.theme}`}>
            {this.label}
          </div> : ''
        }
        { this.itemTitle ?   
          <div class={`ecl-timeline__title sc-ecl-timeline-${this.theme}`}>
            {this.itemTitle}
          </div> : ''
        }
          <div class={`ecl-timeline__content sc-ecl-timeline-${this.theme}`}>
            <slot></slot>
          </div>
        </div> : '' 
      }
      { this.type === 'toggle' ?
        <ecl-button
          theme={this.theme}
          variant="secondary"
          data-ecl-timeline-button
          styleClass={`sc-ecl-timeline-${this.theme}`}
        >
          <ecl-icon
            styleClass={`ecl-button__icon--after sc-ecl-timeline-${this.theme}`}
            icon="corner-arrow"
            size="xs"
            transform="rotate-180"
            slot="icon-after"
            theme={this.theme}
          ></ecl-icon>
          <slot></slot>
        </ecl-button> : ''
      }
      </li>
    );
  }
}