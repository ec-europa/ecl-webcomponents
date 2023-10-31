import { Component, Prop, h, Element } from '@stencil/core';
import getAssetPath from "../../utils/assetPath";
declare const ECL: any;

@Component({
  tag: 'ecl-content-block',
  styleUrls: {
    ec: './build/styles/ecl-content-block-ec.css',
    eu: './build/styles/ecl-content-block-eu.css',
  },
  assetsDirs: ['build'],
  shadow: false,
  scoped: true,
})

export class EclContentBlock {
  @Element() el: HTMLElement;
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() hasDescription: boolean;
  @Prop() eclScript: boolean = false;
  @Prop() hasTitle: boolean;
  @Prop() hasLabels: boolean;
  @Prop() hasLinks: boolean;
  @Prop() hasSecondaryLinks: boolean;
  @Prop() hasLists: boolean;
  @Prop() metaPrimary: string;
  @Prop() metaSecondary: string;

  getClass(): string {
    return [
      `ecl-content-block`,
      this.styleClass
    ].join(' ');
  }

  componentDidRender() {
    if (this.hasLabels) {
      const labelsContainer = this.el.querySelector('.ecl-content-block__label-container');
      const labels = this.el.querySelectorAll('.ecl-label');
      if (labels) {
        labelsContainer.innerHTML = '';
        labels.forEach((label) => {
          label.classList.add(`sc-ecl-content-block-${this.theme}`);
          const listEl = document.createElement('li');
          listEl.classList.add('ecl-content-block__label-item', `sc-ecl-content-block-${this.theme}`);
          listEl.appendChild(label);
          labelsContainer.appendChild(listEl);
        });
      }
    }
    if (this.hasLinks) {
      const linksContainers = this.el.querySelectorAll('.ecl-content-block__link-list');

      linksContainers.forEach((linkList) => {
        const thisLinks = linkList.querySelectorAll('.ecl-link');
        if (thisLinks) {
          linkList.innerHTML = '';
          thisLinks.forEach((link) => {
            link.classList.add(`sc-ecl-content-block-${this.theme}`);
            const listEl = document.createElement('li');
            listEl.classList.add('ecl-content-block__link-item', `sc-ecl-content-block-${this.theme}`);
            listEl.appendChild(link);
            linkList.appendChild(listEl);
          });
        }
      });
    }
    if (this.hasLists) {
      const list = this.el.querySelector('.ecl-content-block__list-container .ecl-description-list');
      if (list) {
        list.classList.add('ecl-content-block__list', `sc-ecl-content-block-${this.theme}`);
      }
    }

    if (this.eclScript) {
      // Load the ECL vanilla js if not already present.
      const src = getAssetPath('./build/scripts/ecl-content-block-vanilla.js');
      if (document.querySelector(`script[src="${src}"]`)) {
        document.querySelector(`script[src="${src}"]`).remove();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        const contentBlock = new ECL.ContentBlock(this.el);
        contentBlock.init();
      };

      document.body.appendChild(script);
    }
  }

  render() {
    const metaPrimaryArray = this.metaPrimary ? JSON.parse(this.metaPrimary) : '';
    const metaSecondaryArray = this.metaSecondary ? JSON.parse(this.metaSecondary) : '';
    return (
     <div class={this.getClass()}>
      { this.hasLabels ?
        <ul class="ecl-content-block__label-container">
          <slot name="labels"></slot>
        </ul> : ''
      }
      { metaPrimaryArray ?
        <ul class="ecl-content-block__primary-meta-container">
        { metaPrimaryArray.map((meta) => (
          <li class="ecl-content-block__primary-meta-item">
            {meta}
          </li>
          ))
        }  
        </ul> : '' 
      }
      { this.hasTitle ?
        <h1 class="ecl-content-block__title">
          <slot name="title"></slot>
        </h1> : ''
      }
      { this.hasDescription ?
        <div class="ecl-content-block__description">
          <slot name="description"></slot>
        </div> : ''
      }
      { metaSecondaryArray ?
        <ul class="ecl-content-block__secondary-meta-container">
        { metaSecondaryArray.map((meta) => (
          <li class="ecl-content-block__secondary-meta-item">
          { meta.icon ?
            <ecl-icon
              theme={this.theme}
              icon={meta.icon}
              size="s"
              style-class={`ecl-content-block__secondary-meta-icon sc-ecl-content-block-${this.theme}`}
            ></ecl-icon> : ''
          }
          { meta.label ? 
            <span class="ecl-content-block__secondary-meta-label">
              {meta.label}
            </span> : ''
          }
          </li>
          ))
        }  
        </ul> : '' 
      }
      { this.hasLinks ?
        <div class="ecl-content-block__link-container">
          <ul class="ecl-content-block__link-list">
            <slot name="links"></slot>
          </ul>
          { this.hasSecondaryLinks ?
          <ul class="ecl-content-block__link-list">
            <slot name="links-secondary"></slot>
          </ul> : ''
          }
        </div> : ''
      }
      { this.hasLists ?
        <div class="ecl-content-block__list-container">
          <slot name="lists"></slot>
        </div> : ''
      }
     </div> 
    )
  }
}
