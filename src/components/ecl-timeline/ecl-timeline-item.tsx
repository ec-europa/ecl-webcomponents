import { Component, h, Prop, Element} from '@stencil/core';

@Component({
  tag: 'ecl-timeline-item',
  shadow: false,
  scoped: false,
})
export class EclTimelineItem {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() label: string;
  @Prop() type: string;
  @Prop() elId: string = `ecl-timeline-item-${Date.now().toString(16) + Math.random().toString(16).slice(2,10)}`;
  @Prop() itemTitle: string;
  @Prop() toggleLabelCollapsed: string;
  @Prop() toggleLabelExpanded: string;

  getClass(): string {
    const styleClasses = [
      `ecl-timeline__item`,
      `sc-ecl-timeline-${this.theme}`,
      this.styleClass
    ];

    if (this.type === 'toggle') {
      styleClasses.push(`ecl-timeline__item--toggle`);
    }

    if (this.type === 'headline') {
      styleClasses.push(`ecl-timeline__item--headline`);
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidRender() {
    const element = this.el;
    if (element.querySelector('ecl-timeline__item--headline')) {
      element.parentElement.classList.add('ecl-timeline--has-headline');
    }
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
      <li
        class={this.getClass()}
        id={this.elId}
      >
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
          styleClass={`ecl-timeline__toggle sc-ecl-timeline-${this.theme}`}
          data-ecl-label-expanded={this.toggleLabelExpanded}
          data-ecl-label-collapsed={this.toggleLabelCollapsed}
        >
          <ecl-icon
            styleClass={`ecl-button__icon--after sc-ecl-timeline-${this.theme}`}
            icon="corner-arrow"
            size="xs"
            rotate="180"
            slot="icon-after"
          ></ecl-icon>
          {this.toggleLabelCollapsed}
        </ecl-button> : ''
      }
      </li>
    );
  }
}