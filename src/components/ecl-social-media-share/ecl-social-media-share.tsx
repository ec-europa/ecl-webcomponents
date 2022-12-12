import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ecl-social-media-share',
  styleUrls: {
    ec: './build/styles/ecl-social-media-share-ec.css',
    eu: './build/styles/ecl-social-media-share-eu.css',
  },
  shadow: false,
  scoped: true,
  assetsDirs: ['build'],
})
export class EclSocialMediaShare {
  @Prop() theme: string = 'ec';
  @Prop() styleClass: string;
  @Prop() variant: string = 'horizontal';
  @Prop() description: string;
  @Prop() items: string;
  @Prop() others: string;

  getClass(): string {
    return [
      `ecl-social-media-share`,
      `ecl-social-media-share--${this.variant}`,
      this.styleClass
    ].join(' ');
  }

  componentWillLoad() {
    const patchStyle = document.createElement('style');
    patchStyle.innerHTML = `.ecl-social-media-share__item .ecl-icon { margin-inline-end: 0.5rem; }
                            ecl-icon { display: inline-flex; vertical-align: sub; }`;
    document.body.appendChild(patchStyle);
  }

  render() {
    const itemsArray = this.items ? JSON.parse(this.items) : '';
    const othersObject = this.others ? JSON.parse(this.others) : '';

    return (
      <div 
        class={this.getClass()}
      >
      { this.description ? 
        <p class="ecl-social-media-share__description">{this.description}</p> 
        : '' 
      }
        <ul class="ecl-social-media-share__list">
        {itemsArray.length > 0 ? itemsArray.map((item) => (
          <li class="ecl-social-media-share__item">
            <ecl-link
              style-class="ecl-link ecl-link--standalone ecl-link--icon-before ecl-social-media-share__link"
              path={item.url}
              icon-position="before"
            >
            <ecl-icon
              slot="ecl-icon-before"
              sprite="icons-social-media"
              icon={item.name + `-color`}
              size="m"
            ></ecl-icon>
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </ecl-link>
          </li>
        )) : ''}
        { othersObject ? 
          <li class="ecl-social-media-share__item ecl-social-media-share__others">
            <ecl-link
              style-class="ecl-link ecl-link--standalone ecl-link--icon-before ecl-social-media-share__link"
              path={othersObject.url}
              icon-position="before"
            >
            <ecl-icon
              slot="ecl-icon-before"
              icon="share"
              size="m"
            ></ecl-icon>
              {othersObject.name}
            </ecl-link>
          </li> : '' }
        </ul>
      </div>
    );
  }
}
