import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'ecl-tag-set',
  shadow: false,
  scoped: true,
})
export class EclTagSet {
  @Element() el: HTMLElement;
  @Prop() styleClass: string;
  @Prop({ mutable: true }) theme: string;
  @Prop() colorMode: string;

  private listEl: HTMLElement;

  getClass(): string {
    const styleClasses = [
      'ecl-tag-set',
      `sc-ecl-tag-${this.theme}`,
      this.styleClass
    ];

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme =
      document.documentElement.getAttribute('data-ecl-theme') ??
      (this.theme || 'ec');
  }

  componentDidLoad() {
    const tagElements = Array.from(this.el.querySelectorAll('ecl-tag'));

    tagElements.forEach((tag) => {
      const li = document.createElement('li');
      li.className = `ecl-tag-set__item sc-ecl-tag-${this.theme}`;
      li.appendChild(tag);
      this.listEl.appendChild(li);
    });
  }

  render() {
    return (
      <ul class={this.getClass()} ref={(el) => (this.listEl = el)}></ul>
    );
  }
}
