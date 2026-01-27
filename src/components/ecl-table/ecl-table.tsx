import { Component, Prop, h, Element, State, JSX } from '@stencil/core';
import Table from '@ecl/table';
declare const ECL: any;

export interface TableHeaderCell {
  label: string | JSX.Element;
  colspan?: string;
  rowspan?: string;
  headers?: string;
}

export interface TableRowCell {
  label: string | JSX.Element;
  group?: boolean;
  headers?: string;
  'data-ecl-table-header'?: string;
  'data-ecl-table-header-group'?: string;
}

export interface TableRow {
  extraClasses?: string;
  extraAttributes?: { name: string; value?: string }[];
  data: TableRowCell[];
}

@Component({
  tag: 'ecl-table',
  styleUrls: {
    ec: './build/styles/ecl-table-ec.css',
    eu: './build/styles/ecl-table-eu.css',
  },
  scoped: true,
})
export class EclTable {
  @Element() el: HTMLElement;

  @Prop() elId: string = `ecl-table-${Math.random().toString(36).slice(2)}`;
  @Prop({ mutable: true }) theme: string;
  @Prop() noScript = false;
  @Prop() colorMode: string;
  @Prop() headers?: string;
  @Prop() rows?: string;
  @Prop() styleClass: string;
  @Prop() caption?: string;
  @Prop() simple = false;
  @Prop() zebra = false;
  @Prop() sortable = false;
  @Prop() labelSortAscending?: string;
  @Prop() labelSortDescending?: string;
  @Prop() labelSortDefault?: string;
  @State() parsedHeaders: TableHeaderCell[][] = [];
  @State() parsedRows: TableRow[] = [];

  componentWillLoad() {
    this.theme =
      document.documentElement.getAttribute('data-ecl-theme') ??
      this.theme ??
      'ec';

    if (this.headers) {
      try {
        this.parsedHeaders = JSON.parse(this.headers);
      } catch (e) {
        console.error('[ecl-table] Invalid headers JSON', e);
      }
    }

    if (this.rows) {
      try {
        this.parsedRows = JSON.parse(this.rows);
      } catch (e) {
        console.error('[ecl-table] Invalid rows JSON', e);
      }
    }
  }

  componentDidRender() {
    if (!this.noScript && this.sortable) {
      (window as any).ECL = (window as any).ECL || {};
      ECL.Table = Table;

      const table = new Table(this.el.querySelector('.ecl-table'));
      table.init();

      const arrows = this.el.querySelectorAll('.ecl-table__arrow');
      if (arrows.length > 0) {
        arrows.forEach((arrow) => {
          arrow.classList.add(`sc-ecl-table-${this.theme}`);
          Array.from(arrow.children).forEach(child => {
            child.classList.add(`sc-ecl-table-${this.theme}`);
          });
        });
      }
    }
  }

  getClass() {
    const styleClasses = [
      'ecl-table',
      this.styleClass,
    ];

    if (this.simple) {
      styleClasses.push('ecl-table--simple');
    }

    if (this.zebra) {
      styleClasses.push('ecl-table--zebra');
    }

    if (this.colorMode) {
      styleClasses.push(`ecl-color-mode--${this.colorMode}`);
    }

    return styleClasses.join(' ');
  }

  renderHead() {
    if (!this.parsedHeaders.length) return null;

    let index = 1;

    return (
      <thead class="ecl-table__head">
        {this.parsedHeaders.map(row => (
          <tr class="ecl-table__row">
            {row.map(cell => {
              const id = `${this.elId}-header-${index++}`;
              const colSpan = cell.colspan ? Number(cell.colspan) : undefined;
              const rowSpan = cell.rowspan ? Number(cell.rowspan) : undefined;
              const hasColspan = !!colSpan;

              return (
                <th
                  id={id}
                  class="ecl-table__header"
                  scope={hasColspan ? 'colgroup' : 'col'}
                  rowSpan={rowSpan}
                  colSpan={colSpan}
                  headers={cell.headers}
                  {...(
                    this.sortable && !hasColspan
                      ? { 'data-ecl-table-sort-toggle': '' }
                      : {}
                  )}
                >
                  {cell.label}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
    );
  }

  renderBody() {
    return (
      <tbody class="ecl-table__body">
        {this.parsedRows.map(row => (
          <tr class={`ecl-table__row ${row.extraClasses ?? ''}`}>
            {row.data.map(cell => (
              <td
                class={{
                  'ecl-table__cell': true,
                  'ecl-table__cell--group': !!cell.group,
                }}
                data-ecl-table-header={cell['data-ecl-table-header']}
                data-ecl-table-header-group={
                  cell['data-ecl-table-header-group']
                }
                headers={cell.headers}
              >
                {cell.label}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    return (
      <div class="ecl-table-responsive">
        <table
          id={this.elId}
          class={this.getClass()}
          {...(this.sortable && {
            'data-ecl-table': '',
            'data-ecl-table-sort-label-asc': this.labelSortAscending,
            'data-ecl-table-sort-label-desc': this.labelSortDescending,
            'data-ecl-table-sort-label-default': this.labelSortDefault,
          })}
        >
          {this.caption && (
            <caption class="ecl-table__caption">{this.caption}</caption>
          )}

          {this.renderHead()}
          {this.renderBody()}
        </table>
      </div>
    );
  }
}
