import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-description-list-definition',
  shadow: false,
  scoped: false,
})
export class EclDescriptionListDefinition {
  @Prop() type: string = 'text';
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() items: string;
  @Prop() collapsible: boolean = false;

  getClass(): string {
    return [
      `ecl-description-list__definition`,
      `sc-ecl-description-list-${this.theme}`,
      `ecl-description-list__definition--${this.type}`,
      this.styleClass
    ].join(' ');
  }

  getMarkup = (itemsArray) => {
    if (this.type === 'link' && itemsArray) {
      return (
          itemsArray.map((link) => (
            <li class={`ecl-description-list__definition-item sc-ecl-description-list-${this.theme}`}>
              <ecl-link
                theme={this.theme}
                styleClass={`sc-ecl-description-list-${this.theme}`}
                path={link.path}
              >
                {link.label}
              </ecl-link>
            </li>
          ))
        );
    } else if (this.type === 'link' && !itemsArray) {
        return <slot></slot>;
    }

    if (this.type === 'inline' && itemsArray) {
      return (
        itemsArray.map((inline) => (
          <li class={`ecl-description-list__definition-item sc-ecl-description-list-${this.theme}`}>
            <ecl-link
              styleClass={`sc-ecl-description-list-${this.theme}`}
              path={inline.path}
              theme={this.theme}
            >
              {inline.label}
            </ecl-link>
          </li>
        ))
      );
    } else if (this.type === 'inline' && !itemsArray) {
      return <slot></slot>;
    }
    
    if (this.type === 'taxonomy' && itemsArray) {
      return (
        itemsArray.map((taxonomy) => (
          <li class={`ecl-description-list__definition-item sc-ecl-description-list-${this.theme}`} >
          { taxonomy.path ? 
            <ecl-link
              theme={this.theme}
              path={taxonomy.path}
            >
              {taxonomy.label}
            </ecl-link> : taxonomy
          }
          </li> 
        ))
      );
    } else if (this.type === 'taxonomy' && !itemsArray) {
      return <slot></slot>;
    }

    if (this.type === 'tag' && itemsArray) {
      return (
        itemsArray.map((tag) => (
        <li class={`ecl-description-list__definition-item sc-ecl-description-list-${this.theme}`} >
          <ecl-tag 
            variant="link"
            url={tag.url}
            > {tag.label}
          </ecl-tag>
        </li> 
        ))
      );
    } else if (this.type === 'tag' && !itemsArray) {
      return <slot></slot>;
    }
    
    if (this.type === 'text') {
      return <slot></slot>
    }
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    const itemsArray = this.items ? JSON.parse(this.items) : false;

    return (
      <dd
        class={this.getClass()}
      >
        <ul
          class={`ecl-description-list__definition-list sc-ecl-description-list-${this.theme}`}
          {...(this.collapsible ? {'data-ecl-description-list-collapsible': true} : {})}
        >
          {this.getMarkup(itemsArray)}
        </ul>
      </dd>
    )
  }
}