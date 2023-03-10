import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ecl-social-media-follow-item',
  shadow: false,
})
export class EclSocialMediaFollowItem {
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() sharePath: string;
  @Prop() icon: string;

  getClass(): string {
    return [
      `ecl-social-media-follow__item`,
      `sc-ecl-social-media-follow-${this.theme}`,
      this.styleClass
    ].join(' ');
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
            sprite="icons-social-media"
            icon={this.icon}
            size="m"
          ></ecl-icon>
          <slot></slot>
        </ecl-link>
      </li>
    );
  }
}