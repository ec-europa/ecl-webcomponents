import { Component, h, Prop, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const ECL: any;

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
  @Prop() theme: string = 'ec';
  @Prop() variant: string = 'default';
  @Prop() styleClass: string;
  @Prop() withBody: boolean = false;
  @Prop() withHeader: boolean = false;
  @Prop() eclScript: boolean = false;
  @Prop() withFooter: boolean = false;
  @Prop() toggleId: string;
  @Prop() closeLabel: string;
  @Prop() itemId: string;

  getClass(): string {
    return [
      `ecl-modal`,
      `ecl-modal--${this.variant}`,
      this.styleClass
    ].join(' ');
  }

  componentDidRender() {
    if (this.eclScript) {
      const src = getAssetPath('./build/scripts/ecl-modal-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const modal = new ECL.Modal(this.el.firstElementChild);
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
          <div class="ecl-modal__content ecl-col-12 ecl-col-m-8 ecl-offset-m-2 ecl-col-l-6 ecl-offset-l-3">
            <header class="ecl-modal__header">
            { this.withHeader ?
              <div class="ecl-modal__header-content">
                <slot name="header"></slot>
              </div> : ''
            }
            <ecl-button
              type="button"
              variant="ghost"
              styleClass={`ecl-modal__close sc-ecl-modal-${this.theme}`}
              data-ecl-modal-close
            >
              {this.closeLabel}
              <ecl-icon
                icon="close-filled"
                size="s"
              ></ecl-icon>
              </ecl-button>
            </header>
          { this.withBody ?
            <div class="ecl-modal__body">
              <slot name="body"></slot>
            </div> : ''
          }
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
