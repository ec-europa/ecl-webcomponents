import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'ecl-timeline-item',
  shadow: false,
  scoped: false,
})
export class EclTimelineItem {
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() label: string;
  @Prop() type: string;
  @Prop() itemTitle: string;

  getClass(): string {
    const styleClasses = [
      `ecl-timeline__item`,
      this.styleClass
    ];

    if (this.type === 'toggle') {
      styleClasses.push('ecl-timeline__item--toggle');
    }

    return styleClasses.join(' ');
  }

  render() {
    return (
      <li class={this.getClass()}>
      { this.type !== 'toggle' ?
        <div class={`ecl-timeline__tooltip`}>
          <div class={`ecl-timeline__tooltip-arrow`}></div>
        { this.label ?
          <div class={`ecl-timeline__label`}>
            {this.label}
          </div> : ''
        }
        { this.itemTitle ?   
          <div class={`ecl-timeline__title`}>
            {this.itemTitle}
          </div> : ''
        }
          <div class={`ecl-timeline__content`}>
            <slot></slot>
          </div>
        </div> : '' 
      }
      { this.type === 'toggle' ?
        <ecl-button
          type="secondary"
          data-ecl-timeline-button
        >
          <ecl-icon
            styleClass="ecl-button__icon--after"
            icon="corner-arrow"
            size="xs"
            transform="rotate-180"
            slot="icon-after"
          ></ecl-icon>
          <slot></slot>
      </ecl-button> : ''
      }
      </li>
    );
  }
}