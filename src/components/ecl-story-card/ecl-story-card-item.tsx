import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ecl-story-card-item',
  shadow: false,
  scoped: false,
})

export class EclStoryCardItem {
  @Prop() styleClass: string = '';
  @Prop() articleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() variant: string = 'story';
  @Prop() elTitle: string = '';
  @Prop() author: string = '';
  @Prop() elRole: string = '';
  @Prop() source: string = '';
  @Prop() linkHref: string = '';
  @Prop() linkLabel: string = '';
  @Prop() linkIcon: string = '';
  @Prop() picture: string = '';
  @Prop() pictureAlt: string = '';
  @Prop() slotName: string = '';
  @Prop() order: number = 0;

  getClass(): string {
    const styleClasses = [
      `sc-ecl-story-card-${this.theme}`,
      this.styleClass
    ];

    if (this.slotName === 'story-card-grid-details') {
      styleClasses.push('ecl-story-card__grid-details');
    } else {
      styleClasses.push('ecl-story-card__carousel-slide');
    }

    return styleClasses.join(' ');
  }

  getArticleClass(): string {
    const articleClasses = [
      `sc-ecl-story-card-${this.theme}`,
      this.articleClass,
    ];

    if (this.slotName === 'story-card-grid-details') {
      articleClasses.push('ecl-story-card__grid-details-content');
    } else {
      articleClasses.push('ecl-story-card__card');
    }

    return articleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    return (
      <Host
        role="listitem"
        class={this.getClass()}
        {...(!this.slotName && { 'data-ecl-story-card-slide': `true` })}
        {...(this.slotName === 'story-card-grid-details' && { 'data-ecl-story-card-grid-details': `true`})}
        {...((this.order !== 0 && this.slotName === 'story-card-grid-details') && { 'hidden': 'true' })}        
      >
        <article 
          class={this.getArticleClass()}
        >
        { this.picture &&
          <div class={`ecl-story-card__image-wrapper sc-ecl-story-card-${this.theme}`}>
            <ecl-picture 
              image={this.picture}
              image-alt={this.pictureAlt}
              style-class={`ecl-story-card__picture sc-ecl-story-card-${this.theme}`}
              img-class={`sc-ecl-story-card-${this.theme}`}
            >
            </ecl-picture>
          </div>
        }
          <div class={`ecl-story-card__content sc-ecl-story-card-${this.theme}`}>
          {this.variant === 'testimonial' &&
            <div class={`ecl-story-card__content-icon sc-ecl-story-card-${this.theme}`}>
              <svg class={`sc-ecl-story-card-${this.theme}`} xmlns="http://www.w3.org/2000/svg" width="22" height="45" viewBox="0 0 22 45" fill="none">
                <path d="M0 0H22V23.3143L0 44.5714V0Z" fill="currentColor"/>
              </svg>
              <svg class={`sc-ecl-story-card-${this.theme}`} xmlns="http://www.w3.org/2000/svg" width="22" height="45" viewBox="0 0 22 45" fill="none">
                <path d="M0 0H22V23.3143L0 44.5714V0Z" fill="currentColor"/>
              </svg>
            </div>
          }
          {this.elTitle &&
            <div class={`ecl-story-card__card-title sc-ecl-story-card-${this.theme}`}>
              {this.elTitle}
            </div>
          }
          {(this.author || this.elRole || this.source) &&
            <div class={`ecl-story-card__testimonial sc-ecl-story-card-${this.theme}`}>
              {this.author &&
                <span class={`ecl-story-card__author sc-ecl-story-card-${this.theme}`}>
                  {this.author}
                </span>
              }
    
              {this.elRole &&
                <span class={`ecl-story-card__role sc-ecl-story-card-${this.theme}`}>
                  {this.elRole}
                </span>
              }
    
              {this.source &&
                <cite class={`ecl-story-card__source sc-ecl-story-card-${this.theme}`}>
                  {this.source}
                </cite>
              }
            </div>
          }
            <div class={`ecl-story-card__card-description sc-ecl-story-card-${this.theme}`}>
              <slot></slot>
            </div>
          { (this.linkHref && this.linkLabel) &&
            <div class={`ecl-story-card__link sc-ecl-story-card-${this.theme}`}>
              <ecl-link
                path={this.linkHref}
                variant="standalone"
                style-class={`ecl-story-card__link sc-ecl-story-card-${this.theme}`}
              >
                {this.linkLabel}
              { this.linkIcon &&
                <ecl-icon
                  icon={this.linkIcon}
                  size="xs"
                  slot="icon-after"
                  style-class={`sc-ecl-link-${this.theme}`}
                ></ecl-icon>
              }
              </ecl-link>
            </div>
          }
          </div>
        </article>
      </Host>
    );
  }
}