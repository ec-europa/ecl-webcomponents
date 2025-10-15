import { Component, h, Prop, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const MODAL: any;

@Component({
  tag: 'ecl-modal',
  styleUrls: {
    ec: './build/styles/ecl-modal-ec.css',
    eu: './build/styles/ecl-modal-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})
export class EclModal {
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) theme: string;
  @Prop() variant: string = 'default';
  @Prop() styleClass: string;
  @Prop() withBody: boolean = false;
  @Prop() withBodyFixed: boolean = false;
  @Prop() withHeader: boolean = false;
  @Prop() eclScript: boolean = false;
  @Prop() withFooter: boolean = false;
  @Prop() toggleId: string;
  @Prop() size: string = 'l';
  @Prop() closeLabel: string;
  @Prop() itemId: string;

  getClass(): string {
    return [
      `ecl-modal`,
      `ecl-modal--${this.variant}`,
      `ecl-modal--${this.size}`,
      this.styleClass
    ].join(' ');
  }

  getContentClasses() {
    return this.size === 's' ? 'ecl-modal__content ecl-col-12' : 'ecl-modal__content ecl-col-m-10 ecl-col-l-8';
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  componentDidLoad() {
    if (this.eclScript) {
      const src = getAssetPath('./build/scripts/ecl-modal-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        ;(window as any).ECL = (window as any).ECL || {};
        const modal = new MODAL.Modal(this.el.firstElementChild);
        modal.init();
      };
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <dialog
        class={this.getClass()}
        data-ecl-modal-toggle={this.toggleId}
        id={this.itemId}
      >
        <div class="ecl-modal__container ecl-container">
          <div class={this.getContentClasses()}>
            <header class="ecl-modal__header">
            {this.withHeader && this.variant !== 'default' ? (
              <ecl-icon
                icon={this.variant}
                size="m"
                styleClass={`ecl-modal__icon sc-ecl-modal-${this.theme}`}
              ></ecl-icon>
            ) : ''}
            {this.withHeader ? (
              <div class="ecl-modal__header-content">
                <slot name="header"></slot>
              </div>
            ) : ''}
            <ecl-button
              theme={this.theme}
              type="button"
              variant="tertiary"
              hide-label
              styleClass={`ecl-modal__close sc-ecl-modal-${this.theme}`}
              data-ecl-modal-close
            >
              {this.closeLabel}
              <ecl-icon
                icon="close"
                size="s"
                slot="icon-after"
                style-class={`sc-ecl-modal-${this.theme}`}
              ></ecl-icon>
              </ecl-button>
            </header>
            <div class="ecl-modal__body">
            { this.withBody ?
              <div 
                class="ecl-modal__body-scroll"
                data-ecl-modal-scroll
              >
                <slot name="body"></slot>
              </div> : '' 
            }
            { this.withBody ?
              <div class="ecl-modal__body-overflow" aria-hidden="true"></div> : ''
            }
            { this.withBodyFixed ?
              <div class="ecl-modal__body-fixed">
                <slot name="body-fixed"></slot>
              </div> : '' 
            }
            </div>
          { this.withFooter ?
            <footer class="ecl-modal__footer">
              <div class="ecl-modal__footer-content">
                <slot name="footer"></slot>
              </div>
            </footer> : ''
          }
          </div>
        </div>
      </dialog>
    );
  }
}
