import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-description-list-definition',
  shadow: false,
  scoped: false,
})
export class EclDescriptionListDefinition {
  @Prop() type: string = 'text';
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
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
      return itemsArray.map((link) => (
        <ecl-link
          theme={this.theme}
          styleClass={`ecl-description-list__definition-item sc-ecl-description-list-${this.theme}`}
          path={link.path}
        >
        { link.icon ? 
          <ecl-icon
            theme={this.theme}
            slot="icon-before"
            icon={link.icon}
          >
          </ecl-icon>
          : '' }
          {link.label}
        </ecl-link> 
        ));
    } else if (this.type === 'link' && !itemsArray) {
        return <slot></slot>;
    }

    if (this.type === 'inline' && itemsArray) {
      return itemsArray.map((inline) => (
        <ecl-link
          styleClass={`ecl-description-list__definition-item sc-ecl-description-list-${this.theme}`}
          path={inline.path}
          theme={this.theme}
        >
          {inline.label}
        </ecl-link> 
        ));
    } else if (this.type === 'inline' && !itemsArray) {
      return <slot></slot>;
    }
    
    if (this.type === 'taxonomy' && itemsArray) {
      return itemsArray.map((taxonomy) => (
        <span
          class={`ecl-description-list__definition-item sc-ecl-description-list-${this.theme}`}
        >
        { taxonomy.path ? 
          <ecl-link
            theme={this.theme}
            path={taxonomy.path}
          >
            {taxonomy.label}
          </ecl-link> : taxonomy
        }
        </span> 
      ))
    } else if (this.type === 'taxonomy' && !itemsArray) {
      return <slot></slot>;
    }
    
    if (this.type === 'text') {
      return <slot></slot>
    }
  }

  render() {
    const itemsArray = this.items ? JSON.parse(this.items) : false;

    return (
      <dd
        class={this.getClass()}
        {...(this.collapsible ? {'data-ecl-description-list-collapsible': true} : {})}
      >
        {this.getMarkup(itemsArray)}
      </dd>
    )
  }
}