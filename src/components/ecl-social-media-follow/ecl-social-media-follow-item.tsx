import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ecl-social-media-follow-item',
  shadow: false,
})
export class EclSocialMediaFollowItem {
  @Prop({ mutable: true }) theme: string;
  @Prop() styleClass: string;
  @Prop() sharePath: string;
  @Prop() icon: string;
  @Prop() family: string = 'networks';
  @Prop() color: string = 'monochrome';

  getClass(): string {
    return [
      `ecl-social-media-follow__item`,
      `sc-ecl-social-media-follow-${this.theme}`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <li class={this.getClass()}>
        <ecl-link
          style-class={`ecl-link ecl-link--standalone ecl-link--icon-before ecl-social-media-follow__link sc-ecl-social-media-follow-${this.theme}`}
          path={this.sharePath}
          icon-position="before"
        >
          <ecl-icon
            slot="icon-before"
            family={this.family}
            color={this.color}
            icon={this.icon}
            size="m"
          ></ecl-icon>
          <slot></slot>
        </ecl-link>
      </li>
    );
  }
}