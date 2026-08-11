import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ecl-page-summary',
  styleUrls: {
    ec: './build/styles/ecl-page-summary-ec.css',
    eu: './build/styles/ecl-page-summary-eu.css',
  },
  shadow: false,
  scoped: true,
})
export class EclPageSummary {
  @Prop({ mutable: true }) theme: string = 'ec';
  @Prop() elId: string = '';
  @Prop() itemTitle: string = '';
  @Prop() styleClass: string = '';
  @Prop() icon: string = '';
  @Prop() iconFamily: string = 'phosphor';
  @Prop() colorMode: string = '';
  @Prop() hasDescription: boolean = true;

  getId(): string {
    return this.elId || `ecl-page-summary-${Math.random().toString(36).substring(2, 9)}`;
  }

  getClass(): string {
    const styleClasses = [
      'ecl-page-summary',
      this.styleClass,
    ];

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }
    return styleClasses.filter(Boolean).join(' ');
  }

  componentWillLoad() {
    this.theme =
      document.documentElement.getAttribute('data-ecl-theme') ?? this.theme ?? 'ec';
  }

  render() {
    const _id = this.getId();
    const hasHeader = !!this.itemTitle || !!this.icon;

    return (
      <section
        class={this.getClass()}
        id={_id}
        aria-labelledby={`${_id}-title`}
      >
        {hasHeader && (
          <div class="ecl-page-summary__header">
            {this.icon && (
              <ecl-icon
                icon={this.icon}
                style-class="ecl-page-summary__icon"
                family={this.iconFamily}
                size="m"
              ></ecl-icon>
            )}

            {this.itemTitle && (
              <h2 class="ecl-page-summary__title" id={`${_id}-title`}>
                {this.itemTitle}
              </h2>
            )}
          </div>
        )}

        {this.hasDescription && (
          <div class="ecl-page-summary__description">
            <slot></slot>
          </div>
        )}
      </section>
    );
  }
}