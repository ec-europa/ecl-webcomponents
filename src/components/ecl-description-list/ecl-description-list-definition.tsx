import { Component, Prop, h } from '@stencil/core';
import Fragment from 'stencil-fragment'

@Component({
  tag: 'ecl-description-list-definition',
  shadow: false,
})
export class EclDescriptionListDefinition {
  @Prop() type: string = 'text';
  @Prop() styleClass: string = '';
  @Prop() theme: string = 'ec';
  @Prop() items: string;

  getClass(): string {
    return [
      `ecl-description-list__definition`,
      `sc-ecl-description-list-${this.theme}`,
      `ecl-description-list__definition--${this.type}`,
      this.styleClass
    ].join(' ');
  }

  render() {
    const itemsArray = this.items ? JSON.parse(this.items) : '';
    console.log(itemsArray);
    return (
      <dd class={this.getClass()}>
      { this.type === 'link' ?
        <Fragment>
        { itemsArray ? itemsArray.map((link) => (
          <ecl-link
            style-class={`ecl-description-list__definition-item sc-ecl-description-list-${this.theme}`}
            path={link.path}
          >
        { link.icon ? 
          <ecl-icon
            slot="icon-before"
            icon={link.icon}
          >
          </ecl-icon>
          : '' }
            {link.label}
          </ecl-link> 
          )) : <slot></slot>
        }
        </Fragment> : ''
      }

      { this.type === 'inline' ?
        <Fragment>
        { itemsArray ? itemsArray.map((inline) => (
          <ecl-link
            style-class={`ecl-description-list__definition-item sc-ecl-description-list-${this.theme}`}
            path={inline.path}
          >
            {inline.label}
          </ecl-link> 
          )) : <slot></slot>
        } 
        </Fragment> : ''
      }

      { this.type === 'taxonomy' ?
        <Fragment>
        { itemsArray ? itemsArray.map((taxonomy) => (
          <span
            class={`ecl-description-list__definition-item sc-ecl-description-list-${this.theme}`}
          >
            { taxonomy.path ? 
              <ecl-link
                path={taxonomy.path}
              >
                {taxonomy.label}
              </ecl-link> : taxonomy
            }
          </span> 
          )) : <slot></slot>
        }
        </Fragment> : ''
      }

      { this.type === 'text' ? 
        <slot></slot> : '' 
      }
      </dd>
    )
  }
}