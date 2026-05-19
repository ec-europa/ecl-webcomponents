import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ecl-add-to-calendar',
  styleUrls: {
    ec: './build/styles/ecl-add-to-calendar-ec.css',
    eu: './build/styles/ecl-add-to-calendar-eu.css',
  },
  shadow: false,
  scoped: true,
})

export class EclAddToCalendar {
  @Prop() styleClass: string = '';
  @Prop({ mutable: true }) theme: string;
  @Prop() colorMode: string = '';
  @Prop() eventTitle: string;
  @Prop() meta: string;
  @Prop() fullWidth: boolean = false;
  @Prop() withButton: boolean = true;


  getClass(): string {
    const styleClasses = [
      `ecl-add-to-calendar`,
      this.styleClass
    ];

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    if (this.fullWidth) {
      styleClasses.push('ecl-add-to-calendar--full-width');
    }

    return styleClasses.join(' ');
  }

  componentWillLoad() {
    this.theme = document.documentElement.getAttribute('data-ecl-theme') ?? (this.theme || 'ec');
  }

  render() {
    const metaArray = this.meta ? JSON.parse(this.meta) : '';
    return (
      <div
        class={this.getClass()}
      >
        <div class="ecl-add-to-calendar__info">
          <div class="ecl-add-to-calendar__info-content">
          { this.eventTitle &&
            <div class="ecl-add-to-calendar__title">
              {this.eventTitle}
            </div>
          }
          {metaArray?.length === 1 ? (
            <div class="ecl-add-to-calendar__meta-list">
              <div class="ecl-add-to-calendar__meta-item">
              {metaArray[0].icon && (
                <ecl-icon
                  icon={metaArray[0].icon}
                  size="s"
                  style-class={`ecl-add-to-calendar__meta-icon sc-ecl-add-to-calendar-${this.theme}`}
                ></ecl-icon>
              )}
                <span class="ecl-add-to-calendar__meta-label">
                  {metaArray[0].label}
                </span>
              </div>
            </div>
          ) : metaArray?.length > 1 ? (
            <ul class="ecl-add-to-calendar__meta-list">
              {metaArray.map((meta) => (
                <li class="ecl-add-to-calendar__meta-item">
                {meta.icon && (
                  <ecl-icon
                    icon={meta.icon}
                    size="s"
                    style-class={`ecl-add-to-calendar__meta-icon sc-ecl-add-to-calendar-${this.theme}`}
                  ></ecl-icon>
                )}
                  <span class="ecl-add-to-calendar__meta-label">
                    {meta.label}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
          {this.withButton &&
            <div class="ecl-add-to-calendar__action">
              <slot></slot>
            </div>
          }
          </div>
        </div>
      </div>
    )
  }
}
