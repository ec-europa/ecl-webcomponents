import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-icon',
  styleUrls: {
    ec: './build/styles/ecl-icon-ec.css',
    eu: './build/styles/ecl-icon-eu.css',
  },
  shadow: false,
  scoped: true,
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
  @Prop() rotate: string;
  @Prop() sprite: string;

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  getClass(): string {
    const baseClass = this.sprite 
      ? 'ecl-icon' 
      : `wt-icon${this.family ? `-${this.family}` : ''}--${this.icon}`;
    const pref = this.sprite ? 'ecl' : 'wt';

    const styleClasses = [
      baseClass,
      ...(this.sprite ? [] : ['ecl-icon']),
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
        `ecl-icon--rotate-${this.rotate}`
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
        <use xlinkHref={`${this.sprite}#${this.icon}`}></use>
      </svg> ) : ( <span class={this.getClass()}></span> )
      }
    )
  }
}