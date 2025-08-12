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
  @Prop({ mutable: true }) theme: string;
  @Prop() icon: string = '';
  @Prop() size: string = 'xs';
  @Prop() color: string;
  @Prop() family: string = '';
  @Prop() flip: string;
  @Prop() titleTag: string = '';
  @Prop({ mutable: true }) path: string;
  @Prop() rotate: string;
  @Prop() sprite: string;

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
    if (!this.sprite) {
      this.path = getAssetPath(`./build/images/${this.theme}/icons.svg`);
    } else {
      this.path = getAssetPath(`./build/images/${this.theme}/${this.sprite}.svg`);
    }
  }

  getClass(): string {
    const baseClass = this.sprite 
      ? 'ecl-icon' 
      : `wt-icon${this.family ? `-${this.family}` : ''}--${this.icon}`;
    const pref = this.sprite ? 'ecl' : 'wt';

    const styleClasses = [
      baseClass,
      `ecl-icon`,
      `${pref}-icon--${this.size}`,
      this.styleClass,
    ];
    if (this.color) {
      styleClasses.push(
        `${pref}-icon--${this.color}`
      );
    }
    if (this.flip) {
      styleClasses.push(
      `${pref}-icon--flip-${this.flip}`);
    }
    if (this.rotate) {
      styleClasses.push(
        `${pref}-icon--rotate-${this.rotate}`
      );
    }
    if (pref === 'wt') {
      styleClasses.push(`wt-icon--placeholder`);
    }

    return styleClasses.join(' ');
  }

  render() {
    return (
      {...this.sprite ? (
      <svg class={this.getClass()}>
      { this.titleTag ? <title>{this.titleTag}</title> : '' } 
        <use xlinkHref={`${this.path}#${this.icon}`}></use>
      </svg> ) : ( <span class={this.getClass()}></span> )
      }
    )
  }
}