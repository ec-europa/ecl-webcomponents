import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ecl-tabs-item',
  shadow: false,
  scoped: true,
})

export class EclTabsItem {
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() path: string = '';
  @Prop() elId: string = `ecl-tabs-item-${Math.random().toString(36).substr(2, 9)}}`;
  @Prop() isCurrent: boolean = false;


  getClass(): string {
    const classes = [
      `ecl-tabs__item`,
      `sc-ecl-tabs-${this.theme}`,
      this.styleClass
    ];

    return classes.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <div class={this.getClass()}>
        <ecl-link
          style-class={`ecl-tabs__link ${this.isCurrent ? 'ecl-tabs__link--active' : ''} sc-ecl-tabs-${this.theme}`}
          el-id={this.elId}
          path={this.path}
          aria-selected={this.isCurrent}
        >
          <slot></slot>
        </ecl-link>
      </div>
    )
  }
}
