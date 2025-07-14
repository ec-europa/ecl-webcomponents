import { Component, Prop, h } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";

@Component({
  tag: 'ecl-icon',
  styleUrls: {
    ec: './build/styles/ecl-icon-ec.css',
    eu: './build/styles/ecl-icon-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})

export class EclIcon {
  @Prop() styleClass: string = '';
  @Prop() icon: string = '';
  @Prop() size: string = 'xs';
  @Prop() color: string = '';
  @Prop() titleTag: string = '';
  @Prop({ mutable: true }) path: string;
  @Prop() transform: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() sprite: string = '';

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
    
    if (!this.sprite) {
      this.path = getAssetPath(`./build/images/${this.theme}/icons.svg`);
    } else {
      this.path = getAssetPath(`./build/images/${this.theme}/${this.sprite}.svg`);
    }
  }

  getClass(): string {
    const styleClasses = [
      `ecl-icon`,
      `ecl-icon--${this.size}`,
      this.styleClass,
    ];
    if (this.color) {
      styleClasses.push(
        `ecl-icon--${this.color}`
      );
    }
    if (this.transform) {
      styleClasses.push(
        `ecl-icon--${this.transform}`
      );
    }

    return styleClasses.join(' ');
  }

  render() {
    return (
      <svg class={this.getClass()}>
      { this.titleTag ? <title>{this.titleTag}</title> : '' } 
        <use xlinkHref={`${this.path}#${this.icon}`}></use>
      </svg>
    )
  }
}