import { Component, h, Prop, Element } from '@stencil/core';
import Notification from "@ecl/notification";
declare const ECL: any;

@Component({
  tag: 'ecl-notification',
  styleUrls: {
    ec: './build/styles/ecl-notification-ec.css',
    eu: './build/styles/ecl-notification-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})

export class EclNotification {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() variant: string = 'info';
  @Prop() styleClass: string;
  @Prop() notificationTitle: string;
  @Prop() closeLabel: string;
  @Prop() noScript: boolean = false;
  @Prop() withClose: boolean = true;

  getClass(): string {
    return [
      `ecl-notification`,
      `ecl-notification--${this.getVariant()}`,
      this.styleClass
    ].join(' ');
  }

  getVariant() : string {
    return this.variant === 'information' ? 'info' : this.variant;
  }

  getIcon() : string {
    return `${this.variant}-outline`;
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    const links = document.querySelectorAll('[slot="notification-link"]');
    if (links.length > 0) {
      links.forEach((link) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('ecl-notification__link', `sc-ecl-notification-${this.theme}`);
        link.firstElementChild.classList.add(`ecl-notification__link-item`, `sc-ecl-notification-${this.theme}`);

        link.parentNode.insertBefore(wrapper, link);
        wrapper.appendChild(link);
      });
    }

    if (!this.noScript) {
      ;(window as any).ECL = (window as any).ECL || {};
      ECL.Notification = Notification;
  
      const notification = new Notification(this.el.firstElementChild);
      notification.init();
    }
  }

  render() {
    return (
      <div
        class={this.getClass()}
        data-ecl-notification role="alert"
      >
        <ecl-icon 
          icon={this.getIcon()}
          size="l"
          style-class={`ecl-notification__icon sc-ecl-notification-${this.theme}`}
        >
        </ecl-icon>
        <div class="ecl-notification__content">
        { this.withClose ?
          <ecl-button
            variant="tertiary"
            type="button"
            size="m"
            style-class={`ecl-notification__close sc-ecl-notification-${this.theme}`}
            data-ecl-notification-close
            hideLabel
          >
            {this.closeLabel}
            <ecl-icon
              slot="icon-after"
              icon="close"
              style-class="ecl-button__icon" 
            ></ecl-icon>
          </ecl-button> : ''
        }
        { this.notificationTitle ?
          <div class="ecl-notification__title">{this.notificationTitle}</div>
         : '' }
          <div class="ecl-notification__description">
            <slot></slot>
          </div>
          <slot name="notification-link"></slot>
        </div>
      </div>
    );
  }
}
